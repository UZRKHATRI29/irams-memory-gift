import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import {
  useSettings,
  useCategories,
  usePhotos,
  useLetter,
  useBouquet,
  useGifts,
  contentKeys,
  type SiteSettings,
  type Photo,
  type Category,
  type Letter,
  type Bouquet,
  type Gift,
} from "@/lib/content";
import {
  updateSettingsFn,
  addCategoryFn,
  deleteCategoryFn,
  addPhotoFn,
  togglePhotoVisibilityFn,
  deletePhotoFn,
  updateLetterFn,
  updateBouquetFn,
  addGiftFn,
  deleteGiftFn,
} from "@/lib/server-functions";
import { uploadMedia, validateImage, useMediaUrls } from "@/lib/media";
import {
  Shield,
  LogOut,
  Settings as SettingsIcon,
  Image as ImageIcon,
  Mail,
  Flower2,
  Gift as GiftIcon,
  Plus,
  Trash2,
  Edit2,
  Upload,
  Check,
  ArrowLeft,
  Eye,
  EyeOff,
  Sparkles,
  Smartphone,
  Monitor,
  RotateCw,
  ExternalLink,
} from "lucide-react";

type Tab = "preview" | "settings" | "photos" | "letter" | "bouquet" | "gifts";

export default function AdminPage() {
  const [session, setSession] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("preview");

  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin_session") === "true";
    setSession(isAuth);
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("admin_session");
    setSession(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background paper">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-walnut/30 border-t-cocoa" />
          <p className="hand mt-3 text-xl text-walnut">Opening Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <AdminLoginForm
        onSuccess={() => {
          sessionStorage.setItem("admin_session", "true");
          setSession(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background paper">
      {/* Admin Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-walnut/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-full border border-walnut/25 bg-cream px-3 py-1 text-xs text-cocoa font-medium shadow-xs hover:bg-beige transition-colors"
              title="Open website in current window"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Gift</span>
            </Link>
            <span className="text-walnut/30">|</span>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cocoa" />
              <h1 className="font-serif text-lg font-medium text-cocoa">Admin Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-3 py-1.5 text-xs text-cocoa font-semibold shadow-xs hover:bg-gold/30 transition-colors"
            >
              <Eye className="h-3.5 w-3.5 text-gold fill-gold/40" />
              <span>Open Live Website ↗</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 rounded-full border border-walnut/20 bg-cream px-3 py-1.5 text-xs text-walnut hover:bg-beige transition-colors cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="mx-auto flex max-w-6xl overflow-x-auto px-4 sm:px-6">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "preview"
                ? "border-cocoa text-cocoa font-semibold"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <Eye className="h-4 w-4 text-rose" />
            <span>👁️ Live Website Preview</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "settings"
                ? "border-cocoa text-cocoa"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <SettingsIcon className="h-4 w-4" />
            <span>Site Settings</span>
          </button>
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "photos"
                ? "border-cocoa text-cocoa"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            <span>Scrapbook & Photos</span>
          </button>
          <button
            onClick={() => setActiveTab("letter")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "letter"
                ? "border-cocoa text-cocoa"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <Mail className="h-4 w-4" />
            <span>Letter</span>
          </button>
          <button
            onClick={() => setActiveTab("bouquet")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "bouquet"
                ? "border-cocoa text-cocoa"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <Flower2 className="h-4 w-4" />
            <span>Bouquet</span>
          </button>
          <button
            onClick={() => setActiveTab("gifts")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "gifts"
                ? "border-cocoa text-cocoa"
                : "border-transparent text-walnut/70 hover:text-cocoa"
            }`}
          >
            <GiftIcon className="h-4 w-4" />
            <span>Presents & Gifts</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {activeTab === "preview" && <WebsitePreviewViewer />}
        {activeTab === "settings" && <SettingsEditor />}
        {activeTab === "photos" && <PhotosEditor />}
        {activeTab === "letter" && <LetterEditor />}
        {activeTab === "bouquet" && <BouquetEditor />}
        {activeTab === "gifts" && <GiftsEditor />}
      </main>
    </div>
  );
}

/* =========================================================================
 * 1. Admin Login Form Component
 * ========================================================================= */
function AdminLoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("admin@iram.com");
  const [password, setPassword] = useState("iram2026");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (password.length > 0) {
      onSuccess();
    } else {
      setErrorMsg("Please enter password");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 paper">
      <div className="w-full max-w-md rounded-2xl border border-walnut/20 bg-cream p-8 shadow-lift">
        <div className="text-center">
          <Shield className="mx-auto h-10 w-10 text-cocoa" />
          <h2 className="mt-3 text-3xl text-cocoa">Admin Login</h2>
          <p className="hand mt-1 text-lg text-walnut/80">
            Node.js Server PostgreSQL Connection
          </p>
        </div>

        {errorMsg && (
          <div className="mt-4 rounded-lg bg-destructive/10 p-3 text-xs text-destructive text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-cocoa py-2.5 text-sm font-medium text-cream shadow-sm hover:bg-cocoa/90 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Logging in..." : "Enter Admin Panel"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================================================================
 * 2. Site Settings Editor Component
 * ========================================================================= */
function SettingsEditor() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<Partial<SiteSettings>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: settings, isLoading } = useSettings();

  useEffect(() => {
    if (settings) setForm(settings);
  }, [settings]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    try {
      await updateSettingsFn({ data: form });
      await queryClient.invalidateQueries({ queryKey: contentKeys.settings });
      setMsg("Settings saved successfully!");
    } catch (err: any) {
      setMsg(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading settings...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
      <div className="flex items-center justify-between border-b border-walnut/15 pb-4">
        <h2 className="text-2xl text-cocoa">Site Settings & Copy</h2>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {msg && <p className="text-sm font-medium text-sage">{msg}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Recipient Name
          </label>
          <input
            type="text"
            value={form.recipient_name || ""}
            onChange={(e) => setForm({ ...form, recipient_name: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Sender Signature
          </label>
          <input
            type="text"
            value={form.signature || ""}
            onChange={(e) => setForm({ ...form, signature: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
      </div>

      {/* Birthday Countdown Settings */}
      <div className="space-y-4 border-t border-walnut/15 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-cocoa flex items-center gap-2">
            <span>🎂 Birthday Countdown Settings</span>
          </h3>
          <label className="flex items-center gap-2 text-xs text-cocoa cursor-pointer">
            <input
              type="checkbox"
              checked={form.enable_countdown ?? true}
              onChange={(e) => setForm({ ...form, enable_countdown: e.target.checked })}
              className="rounded border-walnut/30 text-cocoa focus:ring-cocoa"
            />
            <span className="font-medium">Enable Countdown Screen</span>
          </label>
        </div>

        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Birthday Target Date & Time
          </label>
          <input
            type="text"
            placeholder="e.g. 2026-08-28T00:00:00"
            value={form.birthday_date || "2026-08-28T00:00:00"}
            onChange={(e) => setForm({ ...form, birthday_date: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
          <p className="mt-1 text-[11px] text-walnut/60">
            Format: YYYY-MM-DDTHH:mm:ss (Defaults to August 28th)
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-walnut/15 pt-4">
        <h3 className="text-lg font-medium text-cocoa">Opening Screen</h3>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Opening Heading
          </label>
          <input
            type="text"
            value={form.opening_heading || ""}
            onChange={(e) => setForm({ ...form, opening_heading: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Opening Message
          </label>
          <textarea
            rows={2}
            value={form.opening_message || ""}
            onChange={(e) => setForm({ ...form, opening_message: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Opening Button Text
          </label>
          <input
            type="text"
            value={form.opening_button_text || ""}
            onChange={(e) => setForm({ ...form, opening_button_text: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
      </div>

      <div className="space-y-4 border-t border-walnut/15 pt-4">
        <h3 className="text-lg font-medium text-cocoa">Birthday Finale Screen</h3>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Final Heading
          </label>
          <input
            type="text"
            value={form.final_heading || ""}
            onChange={(e) => setForm({ ...form, final_heading: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Final Message
          </label>
          <textarea
            rows={3}
            value={form.final_message || ""}
            onChange={(e) => setForm({ ...form, final_message: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Closing Message
          </label>
          <input
            type="text"
            value={form.closing_message || ""}
            onChange={(e) => setForm({ ...form, closing_message: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
      </div>
    </form>
  );
}

/* =========================================================================
 * 3. Photos & Categories Editor Component
 * ========================================================================= */
function PhotosEditor() {
  const queryClient = useQueryClient();
  const [newCatName, setNewCatName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");

  const [photoCaption, setPhotoCaption] = useState("");
  const [photoDesc, setPhotoDesc] = useState("");
  const [photoCatId, setPhotoCatId] = useState<string>("");
  const [photoDate, setPhotoDate] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { data: categories = [] } = useCategories();
  const { data: photos = [], isLoading } = usePhotos({ includeHidden: true });

  const photoPaths = photos.map((p) => p.image_url);
  const getUrl = useMediaUrls(photoPaths);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    try {
      await addCategoryFn({ data: { name: newCatName.trim(), sort_order: categories.length + 1 } });
      setNewCatName("");
      await queryClient.invalidateQueries({ queryKey: contentKeys.categories });
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Delete this category? Photos in it won't be deleted.")) return;
    try {
      await deleteCategoryFn({ data: { id } });
      await queryClient.invalidateQueries({ queryKey: contentKeys.categories });
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleUploadPhoto = async (e: React.FormEvent) => {
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

      if (!finalImageUrl) {
        throw new Error("Please select an image file OR enter an image URL");
      }

      await addPhotoFn({
        data: {
          image_url: finalImageUrl,
          caption: photoCaption || null,
          description: photoDesc || null,
          category_id: photoCatId || null,
          taken_on: photoDate || null,
          sort_order: photos.length + 1,
        },
      });

      setPhotoCaption("");
      setPhotoDesc("");
      setPhotoUrl("");
      setSelectedFile(null);
      await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
      setMsg("Photo added to memories successfully!");
    } catch (err: any) {
      setMsg(`Upload error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const togglePhotoVisibility = async (photo: Photo) => {
    try {
      await togglePhotoVisibilityFn({ data: { id: photo.id, visible: !photo.visible } });
      await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleDeletePhoto = async (id: string) => {
    if (!confirm("Delete this photo?")) return;
    try {
      await deletePhotoFn({ data: { id } });
      await queryClient.invalidateQueries({ queryKey: contentKeys.photos });
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Manager */}
      <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
        <h3 className="text-xl text-cocoa">Album Categories</h3>
        <form onSubmit={handleAddCategory} className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="New Category Name (e.g. Childhood Memories)"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            className="flex-1 rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
          <button
            type="submit"
            className="rounded-lg bg-cocoa px-4 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 cursor-pointer"
          >
            Add Category
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center gap-2 rounded-full border border-walnut/20 bg-background px-3 py-1 text-sm text-cocoa"
            >
              <span>{cat.name}</span>
              <button
                onClick={() => handleDeleteCategory(cat.id)}
                className="text-walnut/50 hover:text-destructive cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Uploader */}
      <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
        <h3 className="text-xl text-cocoa">Add New Memory Photo</h3>
        <p className="mt-1 text-xs text-walnut/70">
          Upload an image file from your device OR paste an Image Web URL.
        </p>
        {msg && <p className="mt-2 text-sm font-medium text-sage">{msg}</p>}

        <form onSubmit={handleUploadPhoto} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
                Option A: Choose Image File
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream hover:file:bg-cocoa/90"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
                Option B: Paste Image Web URL
              </label>
              <input
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
                Caption / Title
              </label>
              <input
                type="text"
                value={photoCaption}
                onChange={(e) => setPhotoCaption(e.target.value)}
                placeholder="e.g. Laughing at the beach"
                className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
                Category
              </label>
              <select
                value={photoCatId}
                onChange={(e) => setPhotoCatId(e.target.value)}
                className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
              >
                <option value="">No Category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Memory Description
            </label>
            <textarea
              rows={2}
              value={photoDesc}
              onChange={(e) => setPhotoDesc(e.target.value)}
              placeholder="Notes about this memory..."
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream shadow-sm hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer"
          >
            {uploading ? "Saving..." : "Add Memory Photo"}
          </button>
        </form>
      </div>

      {/* Existing Photos Grid */}
      <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
        <h3 className="text-xl text-cocoa">Existing Photos ({photos.length})</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo) => {
            const url = getUrl(photo.image_url);
            return (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-lg border border-walnut/20 bg-background p-2 shadow-xs"
              >
                <div className="aspect-square overflow-hidden rounded bg-cocoa/5">
                  {url ? (
                    <img src={url} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-beige/40" />
                  )}
                </div>
                <p className="mt-2 text-xs font-medium text-cocoa truncate">
                  {photo.caption || "No Caption"}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <button
                    onClick={() => togglePhotoVisibility(photo)}
                    className="text-xs text-walnut hover:text-cocoa cursor-pointer"
                    title="Toggle Visibility"
                  >
                    {photo.visible ? <Eye className="h-4 w-4 text-sage" /> : <EyeOff className="h-4 w-4 text-walnut/40" />}
                  </button>
                  <button
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="text-xs text-destructive hover:underline cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
 * 4. Letter Editor Component
 * ========================================================================= */
function LetterEditor() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<Partial<Letter>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: letter, isLoading } = useLetter();

  useEffect(() => {
    if (letter) setForm(letter);
  }, [letter]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    try {
      await updateLetterFn({ data: form });
      await queryClient.invalidateQueries({ queryKey: contentKeys.letter });
      setMsg("Letter saved successfully!");
    } catch (err: any) {
      setMsg(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading letter...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
      <div className="flex items-center justify-between border-b border-walnut/15 pb-4">
        <h2 className="text-2xl text-cocoa">Handwritten Letter Content</h2>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer"
        >
          {saving ? "Saving..." : "Save Letter"}
        </button>
      </div>

      {msg && <p className="text-sm font-medium text-sage">{msg}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Letter Heading
          </label>
          <input
            type="text"
            value={form.heading || ""}
            onChange={(e) => setForm({ ...form, heading: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
            Signature
          </label>
          <input
            type="text"
            value={form.signature || ""}
            onChange={(e) => setForm({ ...form, signature: e.target.value })}
            className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
          Letter Content (Paragraphs separated by double line breaks)
        </label>
        <textarea
          rows={8}
          value={form.content || ""}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa font-serif text-lg leading-relaxed"
        />
      </div>
    </form>
  );
}

/* =========================================================================
 * 5. Bouquet Editor Component
 * ========================================================================= */
function BouquetEditor() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<Partial<Bouquet>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: bouquet, isLoading } = useBouquet();

  useEffect(() => {
    if (bouquet) setForm(bouquet);
  }, [bouquet]);

  const handleSave = async (e: React.FormEvent) => {
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

      await updateBouquetFn({
        data: {
          title: form.title ?? "",
          message: form.message ?? "",
          image_url: imagePath ?? null,
        },
      });

      await queryClient.invalidateQueries({ queryKey: contentKeys.bouquet });
      setMsg("Bouquet details saved!");
    } catch (err: any) {
      setMsg(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading bouquet...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
      <div className="flex items-center justify-between border-b border-walnut/15 pb-4">
        <h2 className="text-2xl text-cocoa">Bouquet Details & Wish</h2>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer"
        >
          {saving ? "Saving..." : "Save Bouquet"}
        </button>
      </div>

      {msg && <p className="text-sm font-medium text-sage">{msg}</p>}

      <div>
        <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
          Bouquet Title
        </label>
        <input
          type="text"
          value={form.title || ""}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
          Bouquet Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
          Floral Sister Message
        </label>
        <textarea
          rows={4}
          value={form.message || ""}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
        />
      </div>
    </form>
  );
}

/* =========================================================================
 * 6. Gifts Editor Component
 * ========================================================================= */
function GiftsEditor() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [personalMsg, setPersonalMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const { data: gifts = [], isLoading } = useGifts({ includeHidden: true });
  const giftPaths = gifts.map((g) => g.image_url);
  const getUrl = useMediaUrls(giftPaths);

  const handleAddGift = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    setMsg("");
    try {
      let imagePath: string | null = null;
      if (selectedFile) {
        const err = validateImage(selectedFile);
        if (err) throw new Error(err);
        imagePath = await uploadMedia(selectedFile, "gifts");
      }

      await addGiftFn({
        data: {
          name,
          description: desc || null,
          personal_message: personalMsg || null,
          image_url: imagePath,
          sort_order: gifts.length + 1,
        },
      });

      setName("");
      setDesc("");
      setPersonalMsg("");
      setSelectedFile(null);
      await queryClient.invalidateQueries({ queryKey: contentKeys.gifts });
      setMsg("Gift added!");
    } catch (err: any) {
      setMsg(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteGift = async (id: string) => {
    if (!confirm("Delete this gift item?")) return;
    try {
      await deleteGiftFn({ data: { id } });
      await queryClient.invalidateQueries({ queryKey: contentKeys.gifts });
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Gift Form */}
      <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
        <h3 className="text-xl text-cocoa">Add New Gift Item</h3>
        {msg && <p className="mt-2 text-sm font-medium text-sage">{msg}</p>}

        <form onSubmit={handleAddGift} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Gift Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Personalized Charm Necklace"
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Gift Image (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="mt-1 block w-full text-sm text-walnut file:mr-4 file:rounded-full file:border-0 file:bg-cocoa file:px-4 file:py-2 file:text-xs file:font-semibold file:text-cream"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Description
            </label>
            <textarea
              rows={2}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Gift details..."
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-cocoa uppercase tracking-wider">
              Personal Sister Note
            </label>
            <input
              type="text"
              value={personalMsg}
              onChange={(e) => setPersonalMsg(e.target.value)}
              placeholder="e.g. Something sweet to match your smile"
              className="mt-1 w-full rounded-lg border border-walnut/30 bg-background px-3 py-2 text-sm text-cocoa"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-cocoa px-6 py-2 text-sm font-medium text-cream hover:bg-cocoa/90 disabled:opacity-50 cursor-pointer"
          >
            {saving ? "Adding..." : "Add Present"}
          </button>
        </form>
      </div>

      {/* Gifts List */}
      <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper">
        <h3 className="text-xl text-cocoa">Current Gifts ({gifts.length})</h3>
        <div className="mt-4 space-y-4">
          {gifts.map((g) => {
            const url = getUrl(g.image_url);
            return (
              <div
                key={g.id}
                className="flex items-center justify-between rounded-xl border border-walnut/20 bg-background p-4 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  {url && (
                    <img src={url} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  )}
                  <div>
                    <h4 className="font-serif text-lg text-cocoa">{g.name}</h4>
                    {g.personal_message && (
                      <p className="hand text-sm text-walnut/80">"{g.personal_message}"</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteGift(g.id)}
                  className="text-destructive hover:underline text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
 * 7. Live Website Preview Viewer Component
 * ========================================================================= */
function WebsitePreviewViewer() {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState(0);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-walnut/20 bg-cream p-4 shadow-paper">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg text-cocoa font-medium">Live Website Preview</span>
          <span className="text-xs text-walnut/60">(interactive real-time view)</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Device Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-walnut/25 bg-background p-1 text-xs">
            <button
              onClick={() => setDeviceMode("desktop")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-cocoa transition-colors cursor-pointer ${
                deviceMode === "desktop" ? "bg-cream shadow-xs font-semibold" : "text-walnut/70 hover:text-cocoa"
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode("mobile")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-cocoa transition-colors cursor-pointer ${
                deviceMode === "mobile" ? "bg-cream shadow-xs font-semibold" : "text-walnut/70 hover:text-cocoa"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Mobile (375px)</span>
            </button>
          </div>

          {/* Refresh Frame */}
          <button
            onClick={handleReload}
            className="inline-flex items-center gap-1 rounded-full border border-walnut/20 bg-cream px-3 py-1.5 text-xs text-cocoa hover:bg-beige transition-colors cursor-pointer"
            title="Reload live preview"
          >
            <RotateCw className="h-3.5 w-3.5 text-walnut" />
            <span>Reload</span>
          </button>

          {/* Open Fullscreen */}
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-cocoa px-4 py-1.5 text-xs font-medium text-cream hover:bg-cocoa/90 transition-colors shadow-xs"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open Fullscreen</span>
          </Link>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex justify-center rounded-2xl border border-walnut/25 bg-background/50 p-2 sm:p-4 shadow-lift overflow-hidden">
        <div
          className={`relative transition-all duration-300 ${
            deviceMode === "mobile"
              ? "w-[375px] h-[720px] rounded-[36px] border-[8px] border-walnut/80 bg-cocoa shadow-2xl overflow-hidden"
              : "w-full h-[780px] rounded-xl border border-walnut/20 overflow-hidden"
          }`}
        >
          {deviceMode === "mobile" && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-3.5 w-24 rounded-full bg-walnut/80 z-20" />
          )}

          <iframe
            key={iframeKey}
            src="/"
            title="Live Gift Preview"
            className="h-full w-full border-none bg-background"
          />
        </div>
      </div>
    </div>
  );
}

