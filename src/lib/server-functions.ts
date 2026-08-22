import type { SiteSettings, Category, Photo, Letter, Bouquet, Gift } from "./content";

async function runQuery<T = any>(text: string, params?: any[]): Promise<T[]> {
  try {
    const res = await fetch("/api/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, params }),
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success && Array.isArray(json.rows) ? json.rows : [];
  } catch (e) {
    console.warn("API query fetch error:", e);
    return [];
  }
}

// --- GETTERS ---
export async function getSettingsFn() {
  try {
    const rows = await runQuery<SiteSettings>("SELECT * FROM site_settings LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
}

export async function getCategoriesFn() {
  try {
    return await runQuery<Category>("SELECT * FROM album_categories ORDER BY sort_order ASC, created_at ASC");
  } catch (e) {
    return [];
  }
}

export async function getPhotosFn(opts?: { data?: { includeHidden?: boolean } }) {
  try {
    if (opts?.data?.includeHidden) {
      return await runQuery<Photo>("SELECT * FROM photos ORDER BY sort_order ASC, created_at DESC");
    }
    return await runQuery<Photo>("SELECT * FROM photos WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
  } catch (err) {
    return [];
  }
}

export async function getLetterFn() {
  try {
    const rows = await runQuery<Letter>("SELECT * FROM letter LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
}

export async function getBouquetFn() {
  try {
    const rows = await runQuery<Bouquet>("SELECT * FROM bouquet LIMIT 1");
    return rows[0] ?? null;
  } catch (e) {
    return null;
  }
}

export async function getGiftsFn(opts?: { data?: { includeHidden?: boolean } }) {
  try {
    if (opts?.data?.includeHidden) {
      return await runQuery<Gift>("SELECT * FROM gifts ORDER BY sort_order ASC, created_at DESC");
    }
    return await runQuery<Gift>("SELECT * FROM gifts WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
  } catch (err) {
    return [];
  }
}

// --- MUTATIONS ---
export async function updateSettingsFn(opts: { data: Partial<SiteSettings> }) {
  const data = opts.data;
  try {
    // Ensure new settings columns exist in database table
    try {
      await runQuery(`
        ALTER TABLE site_settings 
        ADD COLUMN IF NOT EXISTS birthday_date TEXT,
        ADD COLUMN IF NOT EXISTS enable_countdown BOOLEAN DEFAULT true;
      `);
    } catch (e) {
      // Ignore if database lacks DDL permissions
    }

    const existing = await runQuery("SELECT id FROM site_settings LIMIT 1");
    if (existing.length > 0) {
      await runQuery(
        `UPDATE site_settings SET 
          recipient_name = $1, 
          signature = $2, 
          opening_heading = $3, 
          opening_message = $4, 
          opening_button_text = $5, 
          final_heading = $6, 
          final_message = $7, 
          closing_message = $8,
          birthday_date = $9,
          enable_countdown = $10,
          updated_at = NOW() 
        WHERE id = $11`,
        [
          data.recipient_name || "Iram",
          data.signature || "Your sister",
          data.opening_heading || "",
          data.opening_message || "",
          data.opening_button_text || "",
          data.final_heading || "",
          data.final_message || "",
          data.closing_message || "",
          data.birthday_date ?? "2026-08-28T00:00:00",
          data.enable_countdown ?? true,
          existing[0].id,
        ]
      );
    } else {
      await runQuery(
        `INSERT INTO site_settings (recipient_name, signature, opening_heading, opening_message, opening_button_text, final_heading, final_message, closing_message, birthday_date, enable_countdown) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          data.recipient_name || "Iram",
          data.signature || "Your sister",
          data.opening_heading || "",
          data.opening_message || "",
          data.opening_button_text || "",
          data.final_heading || "",
          data.final_message || "",
          data.closing_message || "",
          data.birthday_date ?? "2026-08-28T00:00:00",
          data.enable_countdown ?? true,
        ]
      );
    }
  } catch (err) {
    console.warn("updateSettingsFn error:", err);
  }
  return { success: true };
}

export async function addCategoryFn(opts: { data: { name: string; sort_order: number } }) {
  const data = opts.data;
  try {
    await runQuery("INSERT INTO album_categories (name, sort_order) VALUES ($1, $2)", [data.name, data.sort_order]);
  } catch (err) {
    console.warn("addCategoryFn error:", err);
  }
  return { success: true };
}

export async function deleteCategoryFn(opts: { data: { id: string } }) {
  try {
    await runQuery("DELETE FROM album_categories WHERE id = $1", [opts.data.id]);
  } catch (err) {
    console.warn("deleteCategoryFn error:", err);
  }
  return { success: true };
}

export async function addPhotoFn(opts: {
  data: {
    image_url: string;
    caption?: string | null;
    description?: string | null;
    category_id?: string | null;
    taken_on?: string | null;
    sort_order: number;
  };
}) {
  const data = opts.data;
  try {
    await runQuery(
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
}

export async function togglePhotoVisibilityFn(opts: { data: { id: string; visible: boolean } }) {
  try {
    await runQuery("UPDATE photos SET visible = $1 WHERE id = $2", [opts.data.visible, opts.data.id]);
  } catch (err) {
    console.warn("togglePhotoVisibilityFn error:", err);
  }
  return { success: true };
}

export async function deletePhotoFn(opts: { data: { id: string } }) {
  try {
    await runQuery("DELETE FROM photos WHERE id = $1", [opts.data.id]);
  } catch (err) {
    console.warn("deletePhotoFn error:", err);
  }
  return { success: true };
}

export async function updateLetterFn(opts: { data: Partial<Letter> }) {
  const data = opts.data;
  try {
    const existing = await runQuery("SELECT id FROM letter LIMIT 1");
    if (existing.length > 0) {
      await runQuery(
        `UPDATE letter SET heading = $1, content = $2, signature = $3, updated_at = NOW() WHERE id = $4`,
        [data.heading || "", data.content || "", data.signature || "", existing[0].id]
      );
    } else {
      await runQuery(`INSERT INTO letter (heading, content, signature) VALUES ($1, $2, $3)`, [
        data.heading || "",
        data.content || "",
        data.signature || "",
      ]);
    }
  } catch (err) {
    console.warn("updateLetterFn error:", err);
  }
  return { success: true };
}

export async function updateBouquetFn(opts: { data: { title?: string; message?: string; image_url?: string | null } }) {
  const data = opts.data;
  try {
    const existing = await runQuery("SELECT id FROM bouquet LIMIT 1");
    if (existing.length > 0) {
      await runQuery(
        `UPDATE bouquet SET title = $1, message = $2, image_url = $3, updated_at = NOW() WHERE id = $4`,
        [data.title || "", data.message || "", data.image_url || null, existing[0].id]
      );
    } else {
      await runQuery(`INSERT INTO bouquet (title, message, image_url) VALUES ($1, $2, $3)`, [
        data.title || "",
        data.message || "",
        data.image_url || null,
      ]);
    }
  } catch (err) {
    console.warn("updateBouquetFn error:", err);
  }
  return { success: true };
}

export async function addGiftFn(opts: {
  data: {
    name: string;
    description?: string | null;
    personal_message?: string | null;
    image_url?: string | null;
    sort_order: number;
  };
}) {
  const data = opts.data;
  try {
    await runQuery(
      `INSERT INTO gifts (name, description, personal_message, image_url, visible, sort_order) VALUES ($1, $2, $3, $4, true, $5)`,
      [data.name, data.description || null, data.personal_message || null, data.image_url || null, data.sort_order]
    );
  } catch (err) {
    console.warn("addGiftFn error:", err);
  }
  return { success: true };
}

export async function deleteGiftFn(opts: { data: { id: string } }) {
  try {
    await runQuery("DELETE FROM gifts WHERE id = $1", [opts.data.id]);
  } catch (err) {
    console.warn("deleteGiftFn error:", err);
  }
  return { success: true };
}
