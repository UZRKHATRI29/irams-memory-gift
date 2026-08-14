import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const BUCKET = "media";

export function isExternal(value: string | null | undefined) {
  return !!value && (value.startsWith("http://") || value.startsWith("https://"));
}

/**
 * Photos live in a private bucket, so paths are resolved to short-lived signed
 * URLs at read time. Absolute URLs are passed straight through.
 */
export function useMediaUrls(paths: (string | null | undefined)[]) {
  const storagePaths = Array.from(
    new Set(paths.filter((p): p is string => !!p && !isExternal(p))),
  ).sort();

  const { data } = useQuery({
    queryKey: ["media-urls", storagePaths],
    enabled: storagePaths.length > 0,
    staleTime: 1000 * 60 * 30,
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .createSignedUrls(storagePaths, 60 * 60 * 24);
      if (error) throw error;
      const map: Record<string, string> = {};
      data.forEach((item) => {
        if (item.path && item.signedUrl) map[item.path] = item.signedUrl;
      });
      return map;
    },
  });

  return (path: string | null | undefined): string | undefined => {
    if (!path) return undefined;
    if (isExternal(path)) return path;
    return data?.[path];
  };
}

export async function uploadMedia(file: File, folder = "photos") {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return path;
}

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
export const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

export function validateImage(file: File) {
  if (!ALLOWED_TYPES.includes(file.type)) return `${file.name}: unsupported image type`;
  if (file.size > MAX_UPLOAD_BYTES) return `${file.name}: larger than 8MB`;
  return null;
}