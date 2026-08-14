import { useQuery } from "@tanstack/react-query";
import {
  getSettingsFn,
  getCategoriesFn,
  getPhotosFn,
  getLetterFn,
  getBouquetFn,
  getGiftsFn,
} from "./server-functions";

export type SiteSettings = {
  id: string;
  recipient_name: string;
  signature: string;
  opening_heading: string;
  opening_message: string;
  opening_button_text: string;
  album_intro: string;
  letter_title: string;
  bouquet_message: string;
  final_heading: string;
  final_message: string;
  closing_message: string;
  birthday_date: string | null;
  music_url: string | null;
  music_enabled: boolean;
};

export type Category = {
  id: string;
  name: string;
  sort_order: number;
};

export type Photo = {
  id: string;
  image_url: string;
  caption: string | null;
  description: string | null;
  category_id: string | null;
  taken_on: string | null;
  featured: boolean;
  visible: boolean;
  sort_order: number;
};

export type Letter = {
  id: string;
  heading: string;
  content: string;
  signature: string;
  letter_date: string | null;
};

export type Bouquet = {
  id: string;
  title: string;
  message: string;
  description: string | null;
  image_url: string | null;
  visible: boolean;
};

export type Gift = {
  id: string;
  name: string;
  description: string | null;
  personal_message: string | null;
  gift_date: string | null;
  image_url: string | null;
  visible: boolean;
  sort_order: number;
};

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
    queryFn: () => getSettingsFn(),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: contentKeys.categories,
    queryFn: () => getCategoriesFn(),
  });
}

export function usePhotos(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.photos, opts?.includeHidden ?? false],
    queryFn: () => getPhotosFn({ data: { includeHidden: opts?.includeHidden } }),
  });
}

export function useLetter() {
  return useQuery({
    queryKey: contentKeys.letter,
    queryFn: () => getLetterFn(),
  });
}

export function useBouquet() {
  return useQuery({
    queryKey: contentKeys.bouquet,
    queryFn: () => getBouquetFn(),
  });
}

export function useGifts(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.gifts, opts?.includeHidden ?? false],
    queryFn: () => getGiftsFn({ data: { includeHidden: opts?.includeHidden } }),
  });
}