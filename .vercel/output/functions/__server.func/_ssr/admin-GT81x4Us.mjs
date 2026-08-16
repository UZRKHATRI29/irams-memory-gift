import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as useMediaUrls, a as deleteCategoryFn, b as validateImage, c as togglePhotoVisibilityFn, d as updateSettingsFn, f as uploadMedia, g as useLetter, h as useGifts, i as contentKeys, l as updateBouquetFn, m as useCategories, n as addGiftFn, o as deleteGiftFn, p as useBouquet, r as addPhotoFn, s as deletePhotoFn, t as addCategoryFn, u as updateLetterFn, v as usePhotos, y as useSettings } from "./media-okdLHHoQ.mjs";
import { E as ArrowLeft, a as Settings, f as Image, g as Flower2, h as Gift, i as Shield, l as Mail, n as Trash2, u as LogOut, v as Eye, y as EyeOff } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-GT81x4Us.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [session, setSession] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [activeTab, setActiveTab] = (0, import_react.useState)("settings");
	(0, import_react.useEffect)(() => {
		const isAuth = sessionStorage.getItem("admin_session") === "true";
		setSession(isAuth);
		setLoading(false);
	}, []);
	const handleSignOut = () => {
		sessionStorage.removeItem("admin_session");
		setSession(false);
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-8 w-8 animate-spin rounded-full border-2 border-walnut/30 border-t-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hand mt-3 text-xl text-walnut",
				children: "Opening Admin Dashboard..."
			})]
		})
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLoginForm, { onSuccess: () => {
		sessionStorage.setItem("admin_session", "true");
		setSession(true);
	} });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-walnut/15 bg-cream/90 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-1 text-xs text-walnut/70 hover:text-cocoa transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Gift" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-walnut/30",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-lg font-medium text-cocoa",
								children: "Admin Dashboard (PostgreSQL Node Server)"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleSignOut,
					className: "inline-flex items-center gap-1.5 rounded-full border border-walnut/20 bg-cream px-3 py-1.5 text-xs text-walnut hover:bg-beige transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign Out" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl overflow-x-auto px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab("settings"),
						className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "settings" ? "border-cocoa text-cocoa" : "border-transparent text-walnut/70 hover:text-cocoa"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Site Settings" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab("photos"),
						className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "photos" ? "border-cocoa text-cocoa" : "border-transparent text-walnut/70 hover:text-cocoa"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scrapbook & Photos" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab("letter"),
						className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "letter" ? "border-cocoa text-cocoa" : "border-transparent text-walnut/70 hover:text-cocoa"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Letter" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab("bouquet"),
						className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "bouquet" ? "border-cocoa text-cocoa" : "border-transparent text-walnut/70 hover:text-cocoa"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bouquet" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveTab("gifts"),
						className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "gifts" ? "border-cocoa text-cocoa" : "border-transparent text-walnut/70 hover:text-cocoa"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Presents & Gifts" })]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-5xl px-4 py-8 sm:px-6",
			children: [
				activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsEditor, {}),
				activeTab === "photos" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotosEditor, {}),
				activeTab === "letter" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterEditor, {}),
				activeTab === "bouquet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BouquetEditor, {}),
				activeTab === "gifts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftsEditor, {})
			]
		})]
	});
}
function AdminLoginForm({ onSuccess }) {
	const [email, setEmail] = (0, import_react.useState)("admin@iram.com");
	const [password, setPassword] = (0, import_react.useState)("iram2026");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setErrorMsg("");
		if (password.length > 0) onSuccess();
		else {
			setErrorMsg("Please enter password");
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-walnut/20 bg-cream p-8 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mx-auto h-10 w-10 text-cocoa" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl text-cocoa",
							children: "Admin Login"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hand mt-1 text-lg text-walnut/80",
							children: "Node.js Server PostgreSQL Connection"
						})
					]
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-lg bg-destructive/10 p-3 text-xs text-destructive text-center",
					children: errorMsg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full rounded-full bg-cocoa py-2.5 text-sm font-medium text-cream shadow-sm hover:bg-cocoa/90 transition-colors disabled:opacity-50 cursor-pointer",
							children: loading ? "Logging in..." : "Enter Admin Panel"
						})
					]
				})
			]
		})
	});
}
function SettingsEditor() {
	const queryClient = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({});
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const { data: settings, isLoading } = useSettings();
	(0, import_react.useEffect)(() => {
		if (settings) setForm(settings);
	}, [settings]);
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		setMsg("");
		try {
			await updateSettingsFn({ data: form });
			await queryClient.invalidateQueries({ queryKey: contentKeys.settings });
			setMsg("Settings saved successfully!");
		} catch (err) {
			setMsg(`Error: ${err.message}`);
		} finally {
			setSaving(false);
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center py-10",
		children: "Loading settings..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSave,
		className: "space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-walnut/15 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-cocoa",
					children: "Site Settings & Copy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: saving,
					className: "rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer",
					children: saving ? "Saving..." : "Save Changes"
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-sage",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
					children: "Recipient Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: form.recipient_name || "",
					onChange: (e) => setForm({
						...form,
						recipient_name: e.target.value
					}),
					className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
					children: "Sender Signature"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: form.signature || "",
					onChange: (e) => setForm({
						...form,
						signature: e.target.value
					}),
					className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 border-t border-walnut/15 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium text-cocoa",
						children: "Opening Screen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Opening Heading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: form.opening_heading || "",
						onChange: (e) => setForm({
							...form,
							opening_heading: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Opening Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 2,
						value: form.opening_message || "",
						onChange: (e) => setForm({
							...form,
							opening_message: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Opening Button Text"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: form.opening_button_text || "",
						onChange: (e) => setForm({
							...form,
							opening_button_text: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 border-t border-walnut/15 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium text-cocoa",
						children: "Birthday Finale Screen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Final Heading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: form.final_heading || "",
						onChange: (e) => setForm({
							...form,
							final_heading: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Final Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						value: form.final_message || "",
						onChange: (e) => setForm({
							...form,
							final_message: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
						children: "Closing Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: form.closing_message || "",
						onChange: (e) => setForm({
							...form,
							closing_message: e.target.value
						}),
						className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
					})] })
				]
			})
		]
	});
}
function PhotosEditor() {
	const queryClient = useQueryClient();
	const [newCatName, setNewCatName] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const [photoCaption, setPhotoCaption] = (0, import_react.useState)("");
	const [photoDesc, setPhotoDesc] = (0, import_react.useState)("");
	const [photoCatId, setPhotoCatId] = (0, import_react.useState)("");
	const [photoDate, setPhotoDate] = (0, import_react.useState)("");
	const [photoUrl, setPhotoUrl] = (0, import_react.useState)("");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const { data: categories = [] } = useCategories();
	const { data: photos = [], isLoading } = usePhotos({ includeHidden: true });
	const photoPaths = photos.map((p) => p.image_url);
	const getUrl = useMediaUrls(photoPaths);
	const handleAddCategory = async (e) => {
		e.preventDefault();
		if (!newCatName.trim()) return;
		try {
			await addCategoryFn({ data: {
				name: newCatName.trim(),
				sort_order: categories.length + 1
			} });
			setNewCatName("");
			await queryClient.invalidateQueries({ queryKey: contentKeys.categories });
		} catch (err) {
			alert(err.message);
		}
	};
	const handleDeleteCategory = async (id) => {
		if (!confirm("Delete this category? Photos in it won't be deleted.")) return;
		try {
			await deleteCategoryFn({ data: { id } });
			await queryClient.invalidateQueries({ queryKey: contentKeys.categories });
		} catch (e) {
			alert(e.message);
		}
	};
	const handleUploadPhoto = async (e) => {
		e.preventDefault();
		setUploading(true);
		setMsg("");
		try {
			let finalImageUrl = photoUrl.trim();
			if (selectedFile) {
				const valErr = validateImage(selectedFile);
				if (valErr) throw new Error(valErr);
				finalImageUrl = await uploadMedia(selectedFile, "photos");
			}
			if (!finalImageUrl) throw new Error("Please select an image file OR enter an image URL");
			await addPhotoFn({ data: {
				image_url: finalImageUrl,
				caption: photoCaption || null,
				description: photoDesc || null,
				category_id: photoCatId || null,
				taken_on: photoDate || null,
				sort_order: photos.length + 1
			} });
			setPhotoCaption("");
			setPhotoDesc("");
			setPhotoUrl("");
			setSelectedFile(null);
			await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
			setMsg("Photo added to memories successfully!");
		} catch (err) {
			setMsg(`Upload error: ${err.message}`);
		} finally {
			setUploading(false);
		}
	};
	const togglePhotoVisibility = async (photo) => {
		try {
			await togglePhotoVisibilityFn({ data: {
				id: photo.id,
				visible: !photo.visible
			} });
			await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
		} catch (e) {
			alert(e.message);
		}
	};
	const handleDeletePhoto = async (id) => {
		if (!confirm("Delete this photo?")) return;
		try {
			await deletePhotoFn({ data: { id } });
			await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
		} catch (e) {
			alert(e.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-cocoa",
						children: "Album Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAddCategory,
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "New Category Name (e.g. Childhood Memories)",
							value: newCatName,
							onChange: (e) => setNewCatName(e.target.value),
							className: "flex-1 rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-lg bg-cocoa px-4 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 cursor-pointer",
							children: "Add Category"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full border border-walnut/20 bg-background px-3 py-1 text-sm text-cocoa",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleDeleteCategory(cat.id),
								className: "text-walnut/50 hover:text-destructive cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
							})]
						}, cat.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-cocoa",
						children: "Add New Memory Photo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-walnut/70",
						children: "Upload an image file from your device OR paste an Image Web URL."
					}),
					msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium text-sage",
						children: msg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUploadPhoto,
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
									children: "Option A: Choose Image File"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									onChange: (e) => setSelectedFile(e.target.files?.[0] || null),
									className: "mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream hover:file:bg-cocoa/90"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
									children: "Option B: Paste Image Web URL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									value: photoUrl,
									onChange: (e) => setPhotoUrl(e.target.value),
									placeholder: "https://images.unsplash.com/photo-...",
									className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
									children: "Caption / Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: photoCaption,
									onChange: (e) => setPhotoCaption(e.target.value),
									placeholder: "e.g. Laughing at the beach",
									className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: photoCatId,
									onChange: (e) => setPhotoCatId(e.target.value),
									className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "No Category"
									}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.id,
										children: c.name
									}, c.id))]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
								children: "Memory Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 2,
								value: photoDesc,
								onChange: (e) => setPhotoDesc(e.target.value),
								placeholder: "Notes about this memory...",
								className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: uploading,
								className: "rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream shadow-sm hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer",
								children: uploading ? "Saving..." : "Add Memory Photo"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl text-cocoa",
					children: [
						"Existing Photos (",
						photos.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4",
					children: photos.map((photo) => {
						const url = getUrl(photo.image_url);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-lg border border-walnut/20 bg-background p-2 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-square overflow-hidden rounded bg-cocoa/5",
									children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: url,
										alt: "",
										className: "h-full w-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-beige/40" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs font-medium text-cocoa truncate",
									children: photo.caption || "No Caption"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => togglePhotoVisibility(photo),
										className: "text-xs text-walnut hover:text-cocoa cursor-pointer",
										title: "Toggle Visibility",
										children: photo.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4 text-sage" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4 text-walnut/40" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDeletePhoto(photo.id),
										className: "text-xs text-destructive hover:underline cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								})
							]
						}, photo.id);
					})
				})]
			})
		]
	});
}
function LetterEditor() {
	const queryClient = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({});
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const { data: letter, isLoading } = useLetter();
	(0, import_react.useEffect)(() => {
		if (letter) setForm(letter);
	}, [letter]);
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		setMsg("");
		try {
			await updateLetterFn({ data: form });
			await queryClient.invalidateQueries({ queryKey: contentKeys.letter });
			setMsg("Letter saved successfully!");
		} catch (err) {
			setMsg(`Error: ${err.message}`);
		} finally {
			setSaving(false);
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center py-10",
		children: "Loading letter..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSave,
		className: "space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-walnut/15 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-cocoa",
					children: "Handwritten Letter Content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: saving,
					className: "rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer",
					children: saving ? "Saving..." : "Save Letter"
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-sage",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
					children: "Letter Heading"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: form.heading || "",
					onChange: (e) => setForm({
						...form,
						heading: e.target.value
					}),
					className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
					children: "Signature"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: form.signature || "",
					onChange: (e) => setForm({
						...form,
						signature: e.target.value
					}),
					className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
				children: "Letter Content (Paragraphs separated by double line breaks)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 8,
				value: form.content || "",
				onChange: (e) => setForm({
					...form,
					content: e.target.value
				}),
				className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa font-serif text-lg leading-relaxed"
			})] })
		]
	});
}
function BouquetEditor() {
	const queryClient = useQueryClient();
	const [form, setForm] = (0, import_react.useState)({});
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const { data: bouquet, isLoading } = useBouquet();
	(0, import_react.useEffect)(() => {
		if (bouquet) setForm(bouquet);
	}, [bouquet]);
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		setMsg("");
		try {
			let imagePath = form.image_url;
			if (selectedFile) {
				const err = validateImage(selectedFile);
				if (err) throw new Error(err);
				imagePath = await uploadMedia(selectedFile, "bouquet");
			}
			await updateBouquetFn({ data: {
				title: form.title,
				message: form.message,
				image_url: imagePath
			} });
			await queryClient.invalidateQueries({ queryKey: contentKeys.bouquet });
			setMsg("Bouquet details saved!");
		} catch (err) {
			setMsg(`Error: ${err.message}`);
		} finally {
			setSaving(false);
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center py-10",
		children: "Loading bouquet..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSave,
		className: "space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-walnut/15 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-cocoa",
					children: "Bouquet Details & Wish"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: saving,
					className: "rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer",
					children: saving ? "Saving..." : "Save Bouquet"
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-sage",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
				children: "Bouquet Title"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				value: form.title || "",
				onChange: (e) => setForm({
					...form,
					title: e.target.value
				}),
				className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
				children: "Bouquet Image"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept: "image/*",
				onChange: (e) => setSelectedFile(e.target.files?.[0] || null),
				className: "mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
				children: "Floral Sister Message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 4,
				value: form.message || "",
				onChange: (e) => setForm({
					...form,
					message: e.target.value
				}),
				className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
			})] })
		]
	});
}
function GiftsEditor() {
	const queryClient = useQueryClient();
	const [name, setName] = (0, import_react.useState)("");
	const [desc, setDesc] = (0, import_react.useState)("");
	const [personalMsg, setPersonalMsg] = (0, import_react.useState)("");
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	const { data: gifts = [], isLoading } = useGifts({ includeHidden: true });
	const giftPaths = gifts.map((g) => g.image_url);
	const getUrl = useMediaUrls(giftPaths);
	const handleAddGift = async (e) => {
		e.preventDefault();
		if (!name.trim()) return;
		setSaving(true);
		setMsg("");
		try {
			let imagePath = null;
			if (selectedFile) {
				const err = validateImage(selectedFile);
				if (err) throw new Error(err);
				imagePath = await uploadMedia(selectedFile, "gifts");
			}
			await addGiftFn({ data: {
				name,
				description: desc || null,
				personal_message: personalMsg || null,
				image_url: imagePath,
				sort_order: gifts.length + 1
			} });
			setName("");
			setDesc("");
			setPersonalMsg("");
			setSelectedFile(null);
			await queryClient.invalidateQueries({ queryKey: contentKeys.gifts });
			setMsg("Gift added!");
		} catch (err) {
			setMsg(`Error: ${err.message}`);
		} finally {
			setSaving(false);
		}
	};
	const handleDeleteGift = async (id) => {
		if (!confirm("Delete this gift item?")) return;
		try {
			await deleteGiftFn({ data: { id } });
			await queryClient.invalidateQueries({ queryKey: contentKeys.gifts });
		} catch (e) {
			alert(e.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl text-cocoa",
					children: "Add New Gift Item"
				}),
				msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium text-sage",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleAddGift,
					className: "mt-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Gift Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "e.g. Personalized Charm Necklace",
							className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Gift Image (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*",
							onChange: (e) => setSelectedFile(e.target.files?.[0] || null),
							className: "mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 2,
							value: desc,
							onChange: (e) => setDesc(e.target.value),
							placeholder: "Gift details...",
							className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-cocoa uppercase tracking-wider",
							children: "Personal Sister Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: personalMsg,
							onChange: (e) => setPersonalMsg(e.target.value),
							placeholder: "e.g. Something sweet to match your smile",
							className: "mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: saving,
							className: "rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer",
							children: saving ? "Adding..." : "Add Present"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-xl text-cocoa",
				children: [
					"Current Gifts (",
					gifts.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-4",
				children: gifts.map((g) => {
					const url = getUrl(g.image_url);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl border border-walnut/20 bg-background p-4 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: url,
								alt: "",
								className: "h-12 w-12 rounded-lg object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-serif text-lg text-cocoa",
								children: g.name
							}), g.personal_message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hand text-sm text-walnut/80",
								children: [
									"\"",
									g.personal_message,
									"\""
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleDeleteGift(g.id),
							className: "text-destructive hover:underline text-xs flex items-center gap-1 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delete" })]
						})]
					}, g.id);
				})
			})]
		})]
	});
}
//#endregion
export { AdminPage as component };
