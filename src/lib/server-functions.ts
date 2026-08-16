import { createServerFn } from "@tanstack/react-start";
import { rawQuery } from "./db";
import type { SiteSettings, Category, Photo, Letter, Bouquet, Gift } from "./content";

// --- GETTERS ---
export const getSettingsFn = createServerFn().handler(async () => {
  try {
    const rows = await rawQuery<SiteSettings>("SELECT * FROM site_settings LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    console.warn("getSettingsFn error:", e);
    return null;
  }
});

export const getCategoriesFn = createServerFn().handler(async () => {
  try {
    return await rawQuery<Category>("SELECT * FROM album_categories ORDER BY sort_order ASC, created_at ASC");
  } catch (e) {
    console.warn("getCategoriesFn error:", e);
    return [];
  }
});

export const getPhotosFn = createServerFn()
  .validator((d: { includeHidden?: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      if (data?.includeHidden) {
        return await rawQuery<Photo>("SELECT * FROM photos ORDER BY sort_order ASC, created_at DESC");
      }
      return await rawQuery<Photo>("SELECT * FROM photos WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
    } catch (err) {
      console.warn("getPhotosFn error:", err);
      return [];
    }
  });

export const getLetterFn = createServerFn().handler(async () => {
  try {
    const rows = await rawQuery<Letter>("SELECT * FROM letter LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    console.warn("getLetterFn error:", e);
    return null;
  }
});

export const getBouquetFn = createServerFn().handler(async () => {
  try {
    const rows = await rawQuery<Bouquet>("SELECT * FROM bouquet LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    console.warn("getBouquetFn error:", e);
    return null;
  }
});

export const getGiftsFn = createServerFn()
  .validator((d: { includeHidden?: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      if (data?.includeHidden) {
        return await rawQuery<Gift>("SELECT * FROM gifts ORDER BY sort_order ASC, created_at DESC");
      }
      return await rawQuery<Gift>("SELECT * FROM gifts WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
    } catch (err) {
      console.warn("getGiftsFn error:", err);
      return [];
    }
  });

// --- MUTATIONS ---
export const updateSettingsFn = createServerFn()
  .validator((d: Partial<SiteSettings>) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await rawQuery("SELECT id FROM site_settings LIMIT 1");
      if (existing.length > 0) {
        await rawQuery(
          `UPDATE site_settings SET recipient_name = $1, signature = $2, opening_heading = $3, opening_message = $4, opening_button_text = $5, final_heading = $6, final_message = $7, closing_message = $8, updated_at = NOW() WHERE id = $9`,
          [
            data.recipient_name || "Iram",
            data.signature || "Your sister",
            data.opening_heading || "",
            data.opening_message || "",
            data.opening_button_text || "",
            data.final_heading || "",
            data.final_message || "",
            data.closing_message || "",
            existing[0].id,
          ]
        );
      } else {
        await rawQuery(
          `INSERT INTO site_settings (recipient_name, signature, opening_heading, opening_message, opening_button_text, final_heading, final_message, closing_message) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
          [
            data.recipient_name || "Iram",
            data.signature || "Your sister",
            data.opening_heading || "",
            data.opening_message || "",
            data.opening_button_text || "",
            data.final_heading || "",
            data.final_message || "",
            data.closing_message || "",
          ]
        );
      }
    } catch (err) {
      console.warn("updateSettingsFn error:", err);
    }
    return { success: true };
  });

export const addCategoryFn = createServerFn()
  .validator((d: { name: string; sort_order: number }) => d)
  .handler(async ({ data }) => {
    try {
      await rawQuery("INSERT INTO album_categories (name, sort_order) VALUES ($1, $2)", [data.name, data.sort_order]);
    } catch (err) {
      console.warn("addCategoryFn error:", err);
    }
    return { success: true };
  });

export const deleteCategoryFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await rawQuery("DELETE FROM album_categories WHERE id = $1", [data.id]);
    } catch (err) {
      console.warn("deleteCategoryFn error:", err);
    }
    return { success: true };
  });

export const addPhotoFn = createServerFn()
  .validator(
    (d: {
      image_url: string;
      caption?: string | null;
      description?: string | null;
      category_id?: string | null;
      taken_on?: string | null;
      sort_order: number;
    }) => d
  )
  .handler(async ({ data }) => {
    try {
      await rawQuery(
        `INSERT INTO photos (image_url, caption, description, category_id, taken_on, visible, sort_order) VALUES ($1, $2, $3, $4, $5, true, $6)`,
        [
          data.image_url,
          data.caption || null,
          data.description || null,
          data.category_id || null,
          data.taken_on || null,
          data.sort_order,
        ]
      );
    } catch (err) {
      console.warn("addPhotoFn error:", err);
    }
    return { success: true };
  });

export const togglePhotoVisibilityFn = createServerFn()
  .validator((d: { id: string; visible: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      await rawQuery("UPDATE photos SET visible = $1 WHERE id = $2", [data.visible, data.id]);
    } catch (err) {
      console.warn("togglePhotoVisibilityFn error:", err);
    }
    return { success: true };
  });

export const deletePhotoFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await rawQuery("DELETE FROM photos WHERE id = $1", [data.id]);
    } catch (err) {
      console.warn("deletePhotoFn error:", err);
    }
    return { success: true };
  });

export const updateLetterFn = createServerFn()
  .validator((d: Partial<Letter>) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await rawQuery("SELECT id FROM letter LIMIT 1");
      if (existing.length > 0) {
        await rawQuery(
          `UPDATE letter SET heading = $1, content = $2, signature = $3, updated_at = NOW() WHERE id = $4`,
          [data.heading || "", data.content || "", data.signature || "", existing[0].id]
        );
      } else {
        await rawQuery(`INSERT INTO letter (heading, content, signature) VALUES ($1, $2, $3)`, [
          data.heading || "",
          data.content || "",
          data.signature || "",
        ]);
      }
    } catch (err) {
      console.warn("updateLetterFn error:", err);
    }
    return { success: true };
  });

export const updateBouquetFn = createServerFn()
  .validator((d: { title?: string; message?: string; image_url?: string | null }) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await rawQuery("SELECT id FROM bouquet LIMIT 1");
      if (existing.length > 0) {
        await rawQuery(
          `UPDATE bouquet SET title = $1, message = $2, image_url = $3, updated_at = NOW() WHERE id = $4`,
          [data.title || "", data.message || "", data.image_url || null, existing[0].id]
        );
      } else {
        await rawQuery(`INSERT INTO bouquet (title, message, image_url) VALUES ($1, $2, $3)`, [
          data.title || "",
          data.message || "",
          data.image_url || null,
        ]);
      }
    } catch (err) {
      console.warn("updateBouquetFn error:", err);
    }
    return { success: true };
  });

export const addGiftFn = createServerFn()
  .validator(
    (d: {
      name: string;
      description?: string | null;
      personal_message?: string | null;
      image_url?: string | null;
      sort_order: number;
    }) => d
  )
  .handler(async ({ data }) => {
    try {
      await rawQuery(
        `INSERT INTO gifts (name, description, personal_message, image_url, visible, sort_order) VALUES ($1, $2, $3, $4, true, $5)`,
        [data.name, data.description || null, data.personal_message || null, data.image_url || null, data.sort_order]
      );
    } catch (err) {
      console.warn("addGiftFn error:", err);
    }
    return { success: true };
  });

export const deleteGiftFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await rawQuery("DELETE FROM gifts WHERE id = $1", [data.id]);
    } catch (err) {
      console.warn("deleteGiftFn error:", err);
    }
    return { success: true };
  });
