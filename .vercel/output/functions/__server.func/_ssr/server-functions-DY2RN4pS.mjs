import { r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BQhhcCvi2.mjs";
import { n as esm_default, t as PrismaPgAdapterFactory } from "../_libs/@prisma/adapter-pg.mjs";
import { PrismaClient } from "@prisma/client";
//#region node_modules/.nitro/vite/services/ssr/assets/server-functions-DY2RN4pS.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var connectionString = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_1hjqg6SsFidO@ep-lucky-grass-ay99wkdm-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=verify-full";
var globalForDb = globalThis;
function createPool() {
	const nextPool = new esm_default.Pool({
		connectionString,
		ssl: { rejectUnauthorized: false },
		max: 3,
		idleTimeoutMillis: 1e4,
		connectionTimeoutMillis: 1e4,
		allowExitOnIdle: true
	});
	nextPool.on("error", (error) => {
		console.warn("Postgres pool connection error:", error.message);
	});
	return nextPool;
}
function createPrismaClient(nextPool) {
	return new PrismaClient({
		adapter: new PrismaPgAdapterFactory(nextPool),
		log: ["error"]
	});
}
var pool = globalForDb.pool ?? createPool();
var prisma = globalForDb.prisma ?? createPrismaClient(pool);
function isConnectionClosedError(error) {
	if (!error || typeof error !== "object") return false;
	const record = error;
	if (record.code === "P1017") return true;
	const message = typeof record.message === "string" ? record.message : "";
	if (/server has closed the connection|connectionclosed|connection closed/i.test(message)) return true;
	const meta = record.meta;
	const cause = record.cause ?? meta?.driverAdapterError;
	return cause ? isConnectionClosedError(cause) : false;
}
async function resetDatabaseConnection() {
	const previousPool = pool;
	const previousPrisma = prisma;
	pool = createPool();
	prisma = createPrismaClient(pool);
	await Promise.allSettled([previousPrisma.$disconnect(), previousPool.end()]);
}
async function rawQuery(text, params) {
	try {
		return (await pool.query(text, params)).rows;
	} catch (error) {
		if (!isConnectionClosedError(error)) throw error;
		await resetDatabaseConnection();
		return (await pool.query(text, params)).rows;
	}
}
async function prepareFallback(operation, error) {
	if (isConnectionClosedError(error)) {
		await resetDatabaseConnection();
		return;
	}
	console.warn(`Prisma ${operation} fallback:`, error);
}
var getSettingsFn_createServerFn_handler = createServerRpc({
	id: "d7426526bba76288f370f0e476b1687df29c5f0631167f326a28b7e5f39f2784",
	name: "getSettingsFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getSettingsFn.__executeServer(opts));
var getSettingsFn = createServerFn().handler(getSettingsFn_createServerFn_handler, async () => {
	try {
		const row = await prisma.siteSettings.findFirst();
		if (row) return row;
	} catch (e) {
		await prepareFallback("getSettings", e);
	}
	try {
		return (await rawQuery("SELECT * FROM site_settings LIMIT 1"))[0] ?? null;
	} catch (e) {
		return null;
	}
});
var getCategoriesFn_createServerFn_handler = createServerRpc({
	id: "d50394add6594a06edaf0f5a8f6903eb17b9f75c3da9693addef39eb3c2a9458",
	name: "getCategoriesFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getCategoriesFn.__executeServer(opts));
var getCategoriesFn = createServerFn().handler(getCategoriesFn_createServerFn_handler, async () => {
	try {
		const rows = await prisma.category.findMany({ orderBy: [{ sort_order: "asc" }, { created_at: "asc" }] });
		if (rows && rows.length > 0) return rows;
	} catch (e) {
		await prepareFallback("getCategories", e);
	}
	try {
		return await rawQuery("SELECT * FROM album_categories ORDER BY sort_order ASC, created_at ASC");
	} catch (e) {
		return [];
	}
});
var getPhotosFn_createServerFn_handler = createServerRpc({
	id: "6190028aa3799d02bf7a6fefd2ca9b0dbe773a039a8484fcc8fb7c73eba53927",
	name: "getPhotosFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getPhotosFn.__executeServer(opts));
var getPhotosFn = createServerFn().validator((d) => d).handler(getPhotosFn_createServerFn_handler, async ({ data }) => {
	try {
		return await prisma.photo.findMany({
			where: data?.includeHidden ? void 0 : { visible: true },
			orderBy: [{ sort_order: "asc" }, { created_at: "desc" }]
		});
	} catch (e) {
		await prepareFallback("getPhotos", e);
		try {
			if (data?.includeHidden) return await rawQuery("SELECT * FROM photos ORDER BY sort_order ASC, created_at DESC");
			return await rawQuery("SELECT * FROM photos WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
		} catch (err) {
			return [];
		}
	}
});
var getLetterFn_createServerFn_handler = createServerRpc({
	id: "7d945d2e8051d8bf725fdcd656bd89e6d9ae554d31c779c0896d5e24c5fc11c6",
	name: "getLetterFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getLetterFn.__executeServer(opts));
var getLetterFn = createServerFn().handler(getLetterFn_createServerFn_handler, async () => {
	try {
		const row = await prisma.letter.findFirst();
		if (row) return row;
	} catch (e) {
		await prepareFallback("getLetter", e);
	}
	try {
		return (await rawQuery("SELECT * FROM letter LIMIT 1"))[0] ?? null;
	} catch (e) {
		return null;
	}
});
var getBouquetFn_createServerFn_handler = createServerRpc({
	id: "124e9598f7eb9f46f60a0bef7992e29ccce1ca438b196ea2656b0a5e8dc695a4",
	name: "getBouquetFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getBouquetFn.__executeServer(opts));
var getBouquetFn = createServerFn().handler(getBouquetFn_createServerFn_handler, async () => {
	try {
		const row = await prisma.bouquet.findFirst();
		if (row) return row;
	} catch (e) {
		await prepareFallback("getBouquet", e);
	}
	try {
		return (await rawQuery("SELECT * FROM bouquet LIMIT 1"))[0] ?? null;
	} catch (e) {
		return null;
	}
});
var getGiftsFn_createServerFn_handler = createServerRpc({
	id: "924e9c6634c8c9e659f8d57974adf7628aed768773478ddc31e7adc29e00045a",
	name: "getGiftsFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => getGiftsFn.__executeServer(opts));
var getGiftsFn = createServerFn().validator((d) => d).handler(getGiftsFn_createServerFn_handler, async ({ data }) => {
	try {
		return await prisma.gift.findMany({
			where: data?.includeHidden ? void 0 : { visible: true },
			orderBy: [{ sort_order: "asc" }, { created_at: "desc" }]
		});
	} catch (e) {
		await prepareFallback("getGifts", e);
		try {
			if (data?.includeHidden) return await rawQuery("SELECT * FROM gifts ORDER BY sort_order ASC, created_at DESC");
			return await rawQuery("SELECT * FROM gifts WHERE visible = true ORDER BY sort_order ASC, created_at DESC");
		} catch (err) {
			return [];
		}
	}
});
var updateSettingsFn_createServerFn_handler = createServerRpc({
	id: "712505d01431c54a9d632fb715c7cb30535d9c143376877ca7b0a4f2d47d2b70",
	name: "updateSettingsFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => updateSettingsFn.__executeServer(opts));
var updateSettingsFn = createServerFn().validator((d) => d).handler(updateSettingsFn_createServerFn_handler, async ({ data }) => {
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
			updated_at: /* @__PURE__ */ new Date()
		};
		if (existing) await prisma.siteSettings.update({
			where: { id: existing.id },
			data: payload
		});
		else await prisma.siteSettings.create({ data: payload });
		return { success: true };
	} catch (e) {
		await prepareFallback("updateSettings", e);
		try {
			const existing = await rawQuery("SELECT id FROM site_settings LIMIT 1");
			if (existing.length > 0) await rawQuery(`UPDATE site_settings SET recipient_name = $1, signature = $2, opening_heading = $3, opening_message = $4, opening_button_text = $5, final_heading = $6, final_message = $7, closing_message = $8, updated_at = NOW() WHERE id = $9`, [
				data.recipient_name || "Iram",
				data.signature || "Your sister",
				data.opening_heading || "",
				data.opening_message || "",
				data.opening_button_text || "",
				data.final_heading || "",
				data.final_message || "",
				data.closing_message || "",
				existing[0].id
			]);
			else await rawQuery(`INSERT INTO site_settings (recipient_name, signature, opening_heading, opening_message, opening_button_text, final_heading, final_message, closing_message) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [
				data.recipient_name || "Iram",
				data.signature || "Your sister",
				data.opening_heading || "",
				data.opening_message || "",
				data.opening_button_text || "",
				data.final_heading || "",
				data.final_message || "",
				data.closing_message || ""
			]);
		} catch (err) {}
		return { success: true };
	}
});
var addCategoryFn_createServerFn_handler = createServerRpc({
	id: "b83c1c8e0b4466d84b6773b028923ca27b96ffd6b96883fb98280328f267c9ec",
	name: "addCategoryFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => addCategoryFn.__executeServer(opts));
var addCategoryFn = createServerFn().validator((d) => d).handler(addCategoryFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.category.create({ data: {
			name: data.name,
			sort_order: data.sort_order
		} });
	} catch (e) {
		await prepareFallback("addCategory", e);
		try {
			await rawQuery("INSERT INTO album_categories (name, sort_order) VALUES ($1, $2)", [data.name, data.sort_order]);
		} catch (err) {}
	}
	return { success: true };
});
var deleteCategoryFn_createServerFn_handler = createServerRpc({
	id: "aabf8c6115cf0e726dc667f5829cc9efcec6fa874cd7b70d0570cc12ead2937b",
	name: "deleteCategoryFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => deleteCategoryFn.__executeServer(opts));
var deleteCategoryFn = createServerFn().validator((d) => d).handler(deleteCategoryFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.category.delete({ where: { id: data.id } });
	} catch (e) {
		await prepareFallback("deleteCategory", e);
		try {
			await rawQuery("DELETE FROM album_categories WHERE id = $1", [data.id]);
		} catch (err) {}
	}
	return { success: true };
});
var addPhotoFn_createServerFn_handler = createServerRpc({
	id: "fe0f9381554ee9f20fc58ddea0220ceb7d3495cec185c0830dd148d3811a360f",
	name: "addPhotoFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => addPhotoFn.__executeServer(opts));
var addPhotoFn = createServerFn().validator((d) => d).handler(addPhotoFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.photo.create({ data: {
			image_url: data.image_url,
			caption: data.caption || null,
			description: data.description || null,
			category_id: data.category_id || null,
			visible: true,
			sort_order: data.sort_order
		} });
	} catch (e) {
		await prepareFallback("addPhoto", e);
		try {
			await rawQuery(`INSERT INTO photos (image_url, caption, description, category_id, taken_on, visible, sort_order) VALUES ($1, $2, $3, $4, $5, true, $6)`, [
				data.image_url,
				data.caption || null,
				data.description || null,
				data.category_id || null,
				data.taken_on || null,
				data.sort_order
			]);
		} catch (err) {}
	}
	return { success: true };
});
var togglePhotoVisibilityFn_createServerFn_handler = createServerRpc({
	id: "42c552a3b8faffc7bf59d009ae604647253a5bc4440973e56bf897501be8ae06",
	name: "togglePhotoVisibilityFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => togglePhotoVisibilityFn.__executeServer(opts));
var togglePhotoVisibilityFn = createServerFn().validator((d) => d).handler(togglePhotoVisibilityFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.photo.update({
			where: { id: data.id },
			data: { visible: data.visible }
		});
	} catch (e) {
		await prepareFallback("togglePhotoVisibility", e);
		try {
			await rawQuery("UPDATE photos SET visible = $1 WHERE id = $2", [data.visible, data.id]);
		} catch (err) {}
	}
	return { success: true };
});
var deletePhotoFn_createServerFn_handler = createServerRpc({
	id: "be90a202cdd22823190f509ad432d3cbd206a9e1b1f359e4aa9c2baf6fd028e9",
	name: "deletePhotoFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => deletePhotoFn.__executeServer(opts));
var deletePhotoFn = createServerFn().validator((d) => d).handler(deletePhotoFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.photo.delete({ where: { id: data.id } });
	} catch (e) {
		await prepareFallback("deletePhoto", e);
		try {
			await rawQuery("DELETE FROM photos WHERE id = $1", [data.id]);
		} catch (err) {}
	}
	return { success: true };
});
var updateLetterFn_createServerFn_handler = createServerRpc({
	id: "ef6840b4bed5621844eb802f1ca5ef785f269a947df03b9de13f5fcaaad7a5c6",
	name: "updateLetterFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => updateLetterFn.__executeServer(opts));
var updateLetterFn = createServerFn().validator((d) => d).handler(updateLetterFn_createServerFn_handler, async ({ data }) => {
	try {
		const existing = await prisma.letter.findFirst();
		const payload = {
			heading: data.heading || "",
			content: data.content || "",
			signature: data.signature || "",
			updated_at: /* @__PURE__ */ new Date()
		};
		if (existing) await prisma.letter.update({
			where: { id: existing.id },
			data: payload
		});
		else await prisma.letter.create({ data: payload });
	} catch (e) {
		await prepareFallback("updateLetter", e);
		try {
			const existing = await rawQuery("SELECT id FROM letter LIMIT 1");
			if (existing.length > 0) await rawQuery(`UPDATE letter SET heading = $1, content = $2, signature = $3, updated_at = NOW() WHERE id = $4`, [
				data.heading || "",
				data.content || "",
				data.signature || "",
				existing[0].id
			]);
			else await rawQuery(`INSERT INTO letter (heading, content, signature) VALUES ($1, $2, $3)`, [
				data.heading || "",
				data.content || "",
				data.signature || ""
			]);
		} catch (err) {}
	}
	return { success: true };
});
var updateBouquetFn_createServerFn_handler = createServerRpc({
	id: "85131eca85a5ee79aed48e380edb64a3fbcaf4f58ce42d97a3efca5991e0e7ba",
	name: "updateBouquetFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => updateBouquetFn.__executeServer(opts));
var updateBouquetFn = createServerFn().validator((d) => d).handler(updateBouquetFn_createServerFn_handler, async ({ data }) => {
	try {
		const existing = await prisma.bouquet.findFirst();
		const payload = {
			title: data.title || "",
			message: data.message || "",
			image_url: data.image_url || null,
			updated_at: /* @__PURE__ */ new Date()
		};
		if (existing) await prisma.bouquet.update({
			where: { id: existing.id },
			data: payload
		});
		else await prisma.bouquet.create({ data: payload });
	} catch (e) {
		await prepareFallback("updateBouquet", e);
		try {
			const existing = await rawQuery("SELECT id FROM bouquet LIMIT 1");
			if (existing.length > 0) await rawQuery(`UPDATE bouquet SET title = $1, message = $2, image_url = $3, updated_at = NOW() WHERE id = $4`, [
				data.title || "",
				data.message || "",
				data.image_url || null,
				existing[0].id
			]);
			else await rawQuery(`INSERT INTO bouquet (title, message, image_url) VALUES ($1, $2, $3)`, [
				data.title || "",
				data.message || "",
				data.image_url || null
			]);
		} catch (err) {}
	}
	return { success: true };
});
var addGiftFn_createServerFn_handler = createServerRpc({
	id: "d0fd8384f1033d6118a7a5f8e3e59e978e553930b663acc4a174e2c93fd36d62",
	name: "addGiftFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => addGiftFn.__executeServer(opts));
var addGiftFn = createServerFn().validator((d) => d).handler(addGiftFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.gift.create({ data: {
			name: data.name,
			description: data.description || null,
			personal_message: data.personal_message || null,
			image_url: data.image_url || null,
			visible: true,
			sort_order: data.sort_order
		} });
	} catch (e) {
		await prepareFallback("addGift", e);
		try {
			await rawQuery(`INSERT INTO gifts (name, description, personal_message, image_url, visible, sort_order) VALUES ($1, $2, $3, $4, true, $5)`, [
				data.name,
				data.description || null,
				data.personal_message || null,
				data.image_url || null,
				data.sort_order
			]);
		} catch (err) {}
	}
	return { success: true };
});
var deleteGiftFn_createServerFn_handler = createServerRpc({
	id: "97260c6c951359d1a7321df09c4f54e3c3c46418f2063ac56261a2df371808cd",
	name: "deleteGiftFn",
	filename: "src/lib/server-functions.ts"
}, (opts) => deleteGiftFn.__executeServer(opts));
var deleteGiftFn = createServerFn().validator((d) => d).handler(deleteGiftFn_createServerFn_handler, async ({ data }) => {
	try {
		await prisma.gift.delete({ where: { id: data.id } });
	} catch (e) {
		await prepareFallback("deleteGift", e);
		try {
			await rawQuery("DELETE FROM gifts WHERE id = $1", [data.id]);
		} catch (err) {}
	}
	return { success: true };
});
//#endregion
export { addCategoryFn_createServerFn_handler, addGiftFn_createServerFn_handler, addPhotoFn_createServerFn_handler, deleteCategoryFn_createServerFn_handler, deleteGiftFn_createServerFn_handler, deletePhotoFn_createServerFn_handler, getBouquetFn_createServerFn_handler, getCategoriesFn_createServerFn_handler, getGiftsFn_createServerFn_handler, getLetterFn_createServerFn_handler, getPhotosFn_createServerFn_handler, getSettingsFn_createServerFn_handler, togglePhotoVisibilityFn_createServerFn_handler, updateBouquetFn_createServerFn_handler, updateLetterFn_createServerFn_handler, updateSettingsFn_createServerFn_handler };
