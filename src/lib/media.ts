/**
 * Direct Base64 & Web Image URL handling.
 * Eliminates storage bucket setup/400 errors by storing image URLs
 * or compressed base64 data URLs directly in the database.
 */

export function isExternal(value: string | null | undefined) {
  return (
    !!value &&
    (value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("data:"))
  );
}

/**
 * Direct image URL resolver (no bucket API calls required).
 */
export function useMediaUrls(paths: (string | null | undefined)[]) {
  return (path: string | null | undefined): string | undefined => {
    if (!path) return undefined;
    return path;
  };
}

/**
 * Convert an uploaded image file into a compressed Base64 Data URL.
 * Automatically resizes large images to max 1200px to keep payload light (~150-300KB).
 */
export async function fileToBase64(file: File, maxDim = 1200, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL("image/jpeg", quality);
        resolve(compressed);
      };
      img.onerror = () => reject(new Error("Failed to load image for compression"));
      img.src = e.target?.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export async function uploadMedia(file: File, _folder = "photos"): Promise<string> {
  return await fileToBase64(file);
}

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
export const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"];

export function validateImage(file: File) {
  if (!ALLOWED_TYPES.includes(file.type)) return `${file.name}: unsupported image type`;
  if (file.size > MAX_UPLOAD_BYTES) return `${file.name}: larger than 10MB`;
  return null;
}