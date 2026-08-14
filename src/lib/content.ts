import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type SiteSettings = Tables<"site_settings">;
export type Photo = Tables<"photos">;
export type Category = Tables<"album_categories">;
export type Letter = Tables<"letter">;
export type Bouquet = Tables<"bouquet">;
export type Gift = Tables<"gifts">;

export const contentKeys = {
  settings: ["site_settings"] as const,
  categories: ["album_categories"] as const,
  photos: ["photos"] as const,
  letter: ["letter"] as const,
  bouquet: ["bouquet"] as const,
  gifts: ["gifts"] as const,
};

export function useSettings() {
  return useQuery({
    queryKey: contentKeys.settings,
    queryFn: async () => {
      const { data, error } = await supabase.from("site_settings").select("*").limit(1);
      if (error) throw error;
      return (data?.[0] ?? null) as SiteSettings | null;
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: contentKeys.categories,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("album_categories")
        .select("*")
        .order("sort_order")
        .order("created_at");
      if (error) throw error;
      return data as Category[];
    },
  });
}

export function usePhotos(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.photos, opts?.includeHidden ?? false],
    queryFn: async () => {
      let q = supabase.from("photos").select("*").order("sort_order").order("created_at");
      if (!opts?.includeHidden) q = q.eq("visible", true);
      const { data, error } = await q;
      if (error) throw error;
      return data as Photo[];
    },
  });
}

export function useLetter() {
  return useQuery({
    queryKey: contentKeys.letter,
    queryFn: async () => {
      const { data, error } = await supabase.from("letter").select("*").limit(1);
      if (error) throw error;
      return (data?.[0] ?? null) as Letter | null;
    },
  });
}

export function useBouquet() {
  return useQuery({
    queryKey: contentKeys.bouquet,
    queryFn: async () => {
      const { data, error } = await supabase.from("bouquet").select("*").limit(1);
      if (error) throw error;
      return (data?.[0] ?? null) as Bouquet | null;
    },
  });
}

export function useGifts(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.gifts, opts?.includeHidden ?? false],
    queryFn: async () => {
      let q = supabase.from("gifts").select("*").order("sort_order").order("created_at");
      if (!opts?.includeHidden) q = q.eq("visible", true);
      const { data, error } = await q;
      if (error) throw error;
      return data as Gift[];
    },
  });
}