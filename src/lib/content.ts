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

export const DEFAULT_SETTINGS: SiteSettings = {
  id: "default",
  recipient_name: "Iram",
  signature: "Your sister",
  opening_heading: "Hey Iram…",
  opening_message: "I made you a little something for your birthday.",
  opening_button_text: "Open your surprise",
  album_intro: "A few memories I wanted to keep in one place. Don't judge the amount of photos.",
  letter_title: "Read this first",
  bouquet_message: "Every birthday deserves a little extra colour. ♡",
  final_heading: "Happy Birthday, Iram ♡",
  final_message: `Another year of you being you.

I hope this year gives you a hundred little reasons to smile, lots of moments worth remembering, and everything you've been wishing for.

I'm really lucky I get to call you my sister.`,
  closing_message: "Now go enjoy your day — you've officially unlocked all your presents.",
  birthday_date: null,
  music_url: null,
  music_enabled: false,
};

export const DEFAULT_LETTER: Letter = {
  id: "default",
  heading: "A little birthday note from me",
  content: `Okay, before you open anything else…

You know I had to make you something. I couldn't just send a text like a normal person.

Thank you for every ridiculous conversation, every late night, and for putting up with me longer than anyone else has had to. I hope this year is soft and loud and everything you want it to be.

Happy birthday, you.`,
  signature: "Your sister",
  letter_date: null,
};

export const DEFAULT_BOUQUET: Bouquet = {
  id: "default",
  title: "Flowers, obviously",
  message: "Every birthday deserves a little extra colour. ♡",
  description: "Picked entirely by me. No refunds.",
  image_url: null,
  visible: true,
};

export const DEFAULT_CATEGORIES: Category[] = [
  { id: "cat-1", name: "Us", sort_order: 0 },
  { id: "cat-2", name: "Childhood", sort_order: 1 },
  { id: "cat-3", name: "Family", sort_order: 2 },
  { id: "cat-4", name: "Random Memories", sort_order: 3 },
  { id: "cat-5", name: "Best Days", sort_order: 4 },
];

export const DEFAULT_PHOTOS: Photo[] = [
  {
    id: "photo-1",
    image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    caption: "Laughing until our stomachs hurt",
    description: "One of those afternoons where nothing was funny but we couldn't stop laughing.",
    category_id: "cat-1",
    taken_on: null,
    featured: true,
    visible: true,
    sort_order: 0,
  },
  {
    id: "photo-2",
    image_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
    caption: "Best day out together",
    description: "Golden hour memories and hot drinks on a crisp cold evening.",
    category_id: "cat-5",
    taken_on: null,
    featured: false,
    visible: true,
    sort_order: 1,
  },
  {
    id: "photo-3",
    image_url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80",
    caption: "Unfiltered smiles",
    description: "No pose, just pure happiness caught on camera.",
    category_id: "cat-4",
    taken_on: null,
    featured: false,
    visible: true,
    sort_order: 2,
  },
  {
    id: "photo-4",
    image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    caption: "Shining bright",
    description: "Always bringing light wherever you go.",
    category_id: "cat-1",
    taken_on: null,
    featured: false,
    visible: true,
    sort_order: 3,
  },
];

export const DEFAULT_GIFTS: Gift[] = [
  {
    id: "gift-1",
    name: "Personalized Charm Bracelet",
    description: "A delicate silver chain engraved with our favorite sister memory.",
    personal_message: "Something sweet to match your smile. ♡",
    gift_date: null,
    image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
    visible: true,
    sort_order: 0,
  },
  {
    id: "gift-2",
    name: "A Day Together & Dessert",
    description: "Voucher for coffee, sweet treats, and whatever store you want to walk into.",
    personal_message: "My treat, no complaining allowed!",
    gift_date: null,
    image_url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop&q=80",
    visible: true,
    sort_order: 1,
  },
];

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
      try {
        const res = await getSettingsFn();
        return res || DEFAULT_SETTINGS;
      } catch (e) {
        console.warn("useSettings fallback:", e);
        return DEFAULT_SETTINGS;
      }
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: contentKeys.categories,
    queryFn: async () => {
      try {
        const res = await getCategoriesFn();
        return res && res.length > 0 ? res : DEFAULT_CATEGORIES;
      } catch (e) {
        console.warn("useCategories fallback:", e);
        return DEFAULT_CATEGORIES;
      }
    },
  });
}

export function usePhotos(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.photos, opts?.includeHidden ?? false],
    queryFn: async () => {
      try {
        const res = await getPhotosFn({ data: { includeHidden: opts?.includeHidden } });
        return res && res.length > 0 ? res : DEFAULT_PHOTOS;
      } catch (e) {
        console.warn("usePhotos fallback:", e);
        return DEFAULT_PHOTOS;
      }
    },
  });
}

export function useLetter() {
  return useQuery({
    queryKey: contentKeys.letter,
    queryFn: async () => {
      try {
        const res = await getLetterFn();
        return res || DEFAULT_LETTER;
      } catch (e) {
        console.warn("useLetter fallback:", e);
        return DEFAULT_LETTER;
      }
    },
  });
}

export function useBouquet() {
  return useQuery({
    queryKey: contentKeys.bouquet,
    queryFn: async () => {
      try {
        const res = await getBouquetFn();
        return res || DEFAULT_BOUQUET;
      } catch (e) {
        console.warn("useBouquet fallback:", e);
        return DEFAULT_BOUQUET;
      }
    },
  });
}

export function useGifts(opts?: { includeHidden?: boolean }) {
  return useQuery({
    queryKey: [...contentKeys.gifts, opts?.includeHidden ?? false],
    queryFn: async () => {
      try {
        const res = await getGiftsFn({ data: { includeHidden: opts?.includeHidden } });
        return res && res.length > 0 ? res : DEFAULT_GIFTS;
      } catch (e) {
        console.warn("useGifts fallback:", e);
        return DEFAULT_GIFTS;
      }
    },
  });
}