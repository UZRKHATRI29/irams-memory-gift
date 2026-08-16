import { t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BQhhcCvi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-okdLHHoQ.js
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
var DEFAULT_SETTINGS = {
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
	music_enabled: false
};
var DEFAULT_LETTER = {
	id: "default",
	heading: "A little birthday note from me",
	content: `Okay, before you open anything else…

You know I had to make you something. I couldn't just send a text like a normal person.

Thank you for every ridiculous conversation, every late night, and for putting up with me longer than anyone else has had to. I hope this year is soft and loud and everything you want it to be.

Happy birthday, you.`,
	signature: "Your sister",
	letter_date: null
};
var DEFAULT_BOUQUET = {
	id: "default",
	title: "Flowers, obviously",
	message: "Every birthday deserves a little extra colour. ♡",
	description: "Picked entirely by me. No refunds.",
	image_url: null,
	visible: true
};
var DEFAULT_CATEGORIES = [
	{
		id: "cat-1",
		name: "Us",
		sort_order: 0
	},
	{
		id: "cat-2",
		name: "Childhood",
		sort_order: 1
	},
	{
		id: "cat-3",
		name: "Family",
		sort_order: 2
	},
	{
		id: "cat-4",
		name: "Random Memories",
		sort_order: 3
	},
	{
		id: "cat-5",
		name: "Best Days",
		sort_order: 4
	}
];
var DEFAULT_PHOTOS = [
	{
		id: "photo-1",
		image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
		caption: "Laughing until our stomachs hurt",
		description: "One of those afternoons where nothing was funny but we couldn't stop laughing.",
		category_id: "cat-1",
		taken_on: null,
		featured: true,
		visible: true,
		sort_order: 0
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
		sort_order: 1
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
		sort_order: 2
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
		sort_order: 3
	}
];
var DEFAULT_GIFTS = [{
	id: "gift-1",
	name: "Personalized Charm Bracelet",
	description: "A delicate silver chain engraved with our favorite sister memory.",
	personal_message: "Something sweet to match your smile. ♡",
	gift_date: null,
	image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
	visible: true,
	sort_order: 0
}, {
	id: "gift-2",
	name: "A Day Together & Dessert",
	description: "Voucher for coffee, sweet treats, and whatever store you want to walk into.",
	personal_message: "My treat, no complaining allowed!",
	gift_date: null,
	image_url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop&q=80",
	visible: true,
	sort_order: 1
}];
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
		queryFn: async () => {
			try {
				return await getSettingsFn() || DEFAULT_SETTINGS;
			} catch (e) {
				console.warn("useSettings fallback:", e);
				return DEFAULT_SETTINGS;
			}
		}
	});
}
function useCategories() {
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
		}
	});
}
function usePhotos(opts) {
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
		}
	});
}
function useLetter() {
	return useQuery({
		queryKey: contentKeys.letter,
		queryFn: async () => {
			try {
				return await getLetterFn() || DEFAULT_LETTER;
			} catch (e) {
				console.warn("useLetter fallback:", e);
				return DEFAULT_LETTER;
			}
		}
	});
}
function useBouquet() {
	return useQuery({
		queryKey: contentKeys.bouquet,
		queryFn: async () => {
			try {
				return await getBouquetFn() || DEFAULT_BOUQUET;
			} catch (e) {
				console.warn("useBouquet fallback:", e);
				return DEFAULT_BOUQUET;
			}
		}
	});
}
function useGifts(opts) {
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
		}
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
