import { createServerFn } from "@tanstack/react-start";
import { isConnectionClosedError, prisma, rawQuery, resetDatabaseConnection } from "./db";
import type { SiteSettings, Category, Photo, Letter, Bouquet, Gift } from "./content";

async function prepareFallback(operation: string, error: unknown) {
  if (isConnectionClosedError(error)) {
    await resetDatabaseConnection();
    return;
  }
  console.warn(`Prisma ${operation} fallback:`, error);
}

// --- GETTERS ---
export const getSettingsFn = createServerFn().handler(async () => {
  try {
    const row = await prisma.siteSettings.findFirst();
    if (row) return row as unknown as SiteSettings;
  } catch (e) {
    await prepareFallback("getSettings", e);
  }
  try {
    const rows = await rawQuery<SiteSettings>("SELECT * FROM site_settings LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
});

export const getCategoriesFn = createServerFn().handler(async () => {
  try {
    const rows = await prisma.category.findMany({
      orderBy: [{ sort_order: "asc" }, { created_at: "asc" }],
    });
    if (rows && rows.length > 0) return rows as unknown as Category[];
  } catch (e) {
    await prepareFallback("getCategories", e);
  }
  try {
    return await rawQuery<Category>("SELECT * FROM album_categories ORDER BY sort_order ASC, created_at ASC");
  } catch (e) {
    return [];
  }
});

export const getPhotosFn = createServerFn()
  .validator((d: { includeHidden?: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      const rows = await prisma.photo.findMany({
        where: data?.includeHidden ? undefined : { visible: true },
        orderBy: [{ sort_order: "asc" }, { created_at: "desc" }],
      });
      return rows as unknown as Photo[];
    } catch (e) {
      await prepareFallback("getPhotos", e);
      try {
        if (data?.includeHidden) {
          return await rawQuery<Photo>("SELECT * FROM photos ORDER BY sort_order ASC, created_at DESC");
        }
        return await rawQuery<Photo>("SELECT * FROM photos WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
      } catch (err) {
        return [];
      }
    }
  });

export const getLetterFn = createServerFn().handler(async () => {
  try {
    const row = await prisma.letter.findFirst();
    if (row) return row as unknown as Letter;
  } catch (e) {
    await prepareFallback("getLetter", e);
  }
  try {
    const rows = await rawQuery<Letter>("SELECT * FROM letter LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
});

export const getBouquetFn = createServerFn().handler(async () => {
  try {
    const row = await prisma.bouquet.findFirst();
    if (row) return row as unknown as Bouquet;
  } catch (e) {
    await prepareFallback("getBouquet", e);
  }
  try {
    const rows = await rawQuery<Bouquet>("SELECT * FROM bouquet LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
});

export const getGiftsFn = createServerFn()
  .validator((d: { includeHidden?: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      const rows = await prisma.gift.findMany({
        where: data?.includeHidden ? undefined : { visible: true },
        orderBy: [{ sort_order: "asc" }, { created_at: "desc" }],
      });
      return rows as unknown as Gift[];
    } catch (e) {
      await prepareFallback("getGifts", e);
      try {
        if (data?.includeHidden) {
          return await rawQuery<Gift>("SELECT * FROM gifts ORDER BY sort_order ASC, created_at DESC");
        }
        return await rawQuery<Gift>("SELECT * FROM gifts WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
      } catch (err) {
        return [];
      }
    }
  });

// --- MUTATIONS ---
export const updateSettingsFn = createServerFn()
  .validator((d: Partial<SiteSettings>) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await prisma.siteSettings.findFirst();
      const payload = {
        recipient_name: data.recipient_name || "Iram",
        signature: data.signature || "Your sister",
        opening_heading: data.opening_heading || "",
        opening_message: data.opening_message || "",
        opening_button_text: data.opening_button_text || "",
        final_heading: data.final_heading || "",
        final_message: data.final_message || "",
        closing_message: data.closing_message || "",
        updated_at: new Date(),
      };

      if (existing) {
        await prisma.siteSettings.update({
          where: { id: existing.id },
          data: payload,
        });
      } else {
        await prisma.siteSettings.create({
          data: payload,
        });
      }
      return { success: true };
    } catch (e) {
      await prepareFallback("updateSettings", e);
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
      } catch (err) {}
      return { success: true };
    }
  });

export const addCategoryFn = createServerFn()
  .validator((d: { name: string; sort_order: number }) => d)
  .handler(async ({ data }) => {
    try {
      await prisma.category.create({
        data: {
          name: data.name,
          sort_order: data.sort_order,
        },
      });
    } catch (e) {
      await prepareFallback("addCategory", e);
      try {
        await rawQuery("INSERT INTO album_categories (name, sort_order) VALUES ($1, $2)", [data.name, data.sort_order]);
      } catch (err) {}
    }
    return { success: true };
  });

export const deleteCategoryFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await prisma.category.delete({
        where: { id: data.id },
      });
    } catch (e) {
      await prepareFallback("deleteCategory", e);
      try {
        await rawQuery("DELETE FROM album_categories WHERE id = $1", [data.id]);
      } catch (err) {}
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
      await prisma.photo.create({
        data: {
          image_url: data.image_url,
          caption: data.caption || null,
          description: data.description || null,
          category_id: data.category_id || null,
          visible: true,
          sort_order: data.sort_order,
        },
      });
    } catch (e) {
      await prepareFallback("addPhoto", e);
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
      } catch (err) {}
    }
    return { success: true };
  });

export const togglePhotoVisibilityFn = createServerFn()
  .validator((d: { id: string; visible: boolean }) => d)
  .handler(async ({ data }) => {
    try {
      await prisma.photo.update({
        where: { id: data.id },
        data: { visible: data.visible },
      });
    } catch (e) {
      await prepareFallback("togglePhotoVisibility", e);
      try {
        await rawQuery("UPDATE photos SET visible = $1 WHERE id = $2", [data.visible, data.id]);
      } catch (err) {}
    }
    return { success: true };
  });

export const deletePhotoFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await prisma.photo.delete({
        where: { id: data.id },
      });
    } catch (e) {
      await prepareFallback("deletePhoto", e);
      try {
        await rawQuery("DELETE FROM photos WHERE id = $1", [data.id]);
      } catch (err) {}
    }
    return { success: true };
  });

export const updateLetterFn = createServerFn()
  .validator((d: Partial<Letter>) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await prisma.letter.findFirst();
      const payload = {
        heading: data.heading || "",
        content: data.content || "",
        signature: data.signature || "",
        updated_at: new Date(),
      };

      if (existing) {
        await prisma.letter.update({
          where: { id: existing.id },
          data: payload,
        });
      } else {
        await prisma.letter.create({
          data: payload,
        });
      }
    } catch (e) {
      await prepareFallback("updateLetter", e);
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
      } catch (err) {}
    }
    return { success: true };
  });

export const updateBouquetFn = createServerFn()
  .validator((d: { title?: string; message?: string; image_url?: string | null }) => d)
  .handler(async ({ data }) => {
    try {
      const existing = await prisma.bouquet.findFirst();
      const payload = {
        title: data.title || "",
        message: data.message || "",
        image_url: data.image_url || null,
        updated_at: new Date(),
      };

      if (existing) {
        await prisma.bouquet.update({
          where: { id: existing.id },
          data: payload,
        });
      } else {
        await prisma.bouquet.create({
          data: payload,
        });
      }
    } catch (e) {
      await prepareFallback("updateBouquet", e);
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
      } catch (err) {}
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
      await prisma.gift.create({
        data: {
          name: data.name,
          description: data.description || null,
          personal_message: data.personal_message || null,
          image_url: data.image_url || null,
          visible: true,
          sort_order: data.sort_order,
        },
      });
    } catch (e) {
      await prepareFallback("addGift", e);
      try {
        await rawQuery(
          `INSERT INTO gifts (name, description, personal_message, image_url, visible, sort_order) VALUES ($1, $2, $3, $4, true, $5)`,
          [data.name, data.description || null, data.personal_message || null, data.image_url || null, data.sort_order]
        );
      } catch (err) {}
    }
    return { success: true };
  });

export const deleteGiftFn = createServerFn()
  .validator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    try {
      await prisma.gift.delete({
        where: { id: data.id },
      });
    } catch (e) {
      await prepareFallback("deleteGift", e);
      try {
        await rawQuery("DELETE FROM gifts WHERE id = $1", [data.id]);
      } catch (err) {}
    }
    return { success: true };
  });
