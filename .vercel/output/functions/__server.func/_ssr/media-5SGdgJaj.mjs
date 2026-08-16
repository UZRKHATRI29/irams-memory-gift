import { t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BIu7Eo8J2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-5SGdgJaj.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getSettingsFn = createServerFn().handler(createSsrRpc("d7426526bba76288f370f0e476b1687df29c5f0631167f326a28b7e5f39f2784"));
var getCategoriesFn = createServerFn().handler(createSsrRpc("d50394add6594a06edaf0f5a8f6903eb17b9f75c3da9693addef39eb3c2a9458"));
var getPhotosFn = createServerFn().validator((d) => d).handler(createSsrRpc("6190028aa3799d02bf7a6fefd2ca9b0dbe773a039a8484fcc8fb7c73eba53927"));
var getLetterFn = createServerFn().handler(createSsrRpc("7d945d2e8051d8bf725fdcd656bd89e6d9ae554d31c779c0896d5e24c5fc11c6"));
var getBouquetFn = createServerFn().handler(createSsrRpc("124e9598f7eb9f46f60a0bef7992e29ccce1ca438b196ea2656b0a5e8dc695a4"));
var getGiftsFn = createServerFn().validator((d) => d).handler(createSsrRpc("924e9c6634c8c9e659f8d57974adf7628aed768773478ddc31e7adc29e00045a"));
var updateSettingsFn = createServerFn().validator((d) => d).handler(createSsrRpc("712505d01431c54a9d632fb715c7cb30535d9c143376877ca7b0a4f2d47d2b70"));
var addCategoryFn = createServerFn().validator((d) => d).handler(createSsrRpc("b83c1c8e0b4466d84b6773b028923ca27b96ffd6b96883fb98280328f267c9ec"));
var deleteCategoryFn = createServerFn().validator((d) => d).handler(createSsrRpc("aabf8c6115cf0e726dc667f5829cc9efcec6fa874cd7b70d0570cc12ead2937b"));
var addPhotoFn = createServerFn().validator((d) => d).handler(createSsrRpc("fe0f9381554ee9f20fc58ddea0220ceb7d3495cec185c0830dd148d3811a360f"));
var togglePhotoVisibilityFn = createServerFn().validator((d) => d).handler(createSsrRpc("42c552a3b8faffc7bf59d009ae604647253a5bc4440973e56bf897501be8ae06"));
var deletePhotoFn = createServerFn().validator((d) => d).handler(createSsrRpc("be90a202cdd22823190f509ad432d3cbd206a9e1b1f359e4aa9c2baf6fd028e9"));
var updateLetterFn = createServerFn().validator((d) => d).handler(createSsrRpc("ef6840b4bed5621844eb802f1ca5ef785f269a947df03b9de13f5fcaaad7a5c6"));
var updateBouquetFn = createServerFn().validator((d) => d).handler(createSsrRpc("85131eca85a5ee79aed48e380edb64a3fbcaf4f58ce42d97a3efca5991e0e7ba"));
var addGiftFn = createServerFn().validator((d) => d).handler(createSsrRpc("d0fd8384f1033d6118a7a5f8e3e59e978e553930b663acc4a174e2c93fd36d62"));
var deleteGiftFn = createServerFn().validator((d) => d).handler(createSsrRpc("97260c6c951359d1a7321df09c4f54e3c3c46418f2063ac56261a2df371808cd"));
var contentKeys = {
	settings: ["site_settings"],
	categories: ["album_categories"],
	photos: ["photos"],
	letter: ["letter"],
	bouquet: ["bouquet"],
	gifts: ["gifts"]
};
function useSettings() {
	return useQuery({
		queryKey: contentKeys.settings,
		queryFn: () => getSettingsFn()
	});
}
function useCategories() {
	return useQuery({
		queryKey: contentKeys.categories,
		queryFn: () => getCategoriesFn()
	});
}
function usePhotos(opts) {
	return useQuery({
		queryKey: [...contentKeys.photos, opts?.includeHidden ?? false],
		queryFn: () => getPhotosFn({ data: { includeHidden: opts?.includeHidden } })
	});
}
function useLetter() {
	return useQuery({
		queryKey: contentKeys.letter,
		queryFn: () => getLetterFn()
	});
}
function useBouquet() {
	return useQuery({
		queryKey: contentKeys.bouquet,
		queryFn: () => getBouquetFn()
	});
}
function useGifts(opts) {
	return useQuery({
		queryKey: [...contentKeys.gifts, opts?.includeHidden ?? false],
		queryFn: () => getGiftsFn({ data: { includeHidden: opts?.includeHidden } })
	});
}
/**
* Direct image URL resolver (no bucket API calls required).
*/
function useMediaUrls(paths) {
	return (path) => {
		if (!path) return void 0;
		return path;
	};
}
/**
* Convert an uploaded image file into a compressed Base64 Data URL.
* Automatically resizes large images to max 1200px to keep payload light (~150-300KB).
*/
async function fileToBase64(file, maxDim = 1200, quality = .85) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				let width = img.width;
				let height = img.height;
				if (width > maxDim || height > maxDim) {
					if (width > height) {
						height = Math.round(height * maxDim / width);
						width = maxDim;
					} else {
						width = Math.round(width * maxDim / height);
						height = maxDim;
					}
				}
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				const ctx = canvas.getContext("2d");
				if (!ctx) {
					resolve(e.target?.result);
					return;
				}
				ctx.drawImage(img, 0, 0, width, height);
				resolve(canvas.toDataURL("image/jpeg", quality));
			};
			img.onerror = () => reject(/* @__PURE__ */ new Error("Failed to load image for compression"));
			img.src = e.target?.result;
		};
		reader.onerror = (err) => reject(err);
		reader.readAsDataURL(file);
	});
}
async function uploadMedia(file, _folder = "photos") {
	return await fileToBase64(file);
}
var ALLOWED_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif",
	"image/avif"
];
function validateImage(file) {
	if (!ALLOWED_TYPES.includes(file.type)) return `${file.name}: unsupported image type`;
	if (file.size > 10485760) return `${file.name}: larger than 10MB`;
	return null;
}
//#endregion
export { useMediaUrls as _, deleteCategoryFn as a, validateImage as b, togglePhotoVisibilityFn as c, updateSettingsFn as d, uploadMedia as f, useLetter as g, useGifts as h, contentKeys as i, updateBouquetFn as l, useCategories as m, addGiftFn as n, deleteGiftFn as o, useBouquet as p, addPhotoFn as r, deletePhotoFn as s, addCategoryFn as t, updateLetterFn as u, usePhotos as v, useSettings as y };
