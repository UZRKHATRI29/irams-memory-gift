
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own roles readable" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.has_role(auth.uid(), 'admin'::public.app_role)
$$;

-- first ever account becomes the admin
CREATE OR REPLACE FUNCTION public.bootstrap_first_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin'::public.app_role) THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin'::public.app_role);
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created_bootstrap_admin
AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.bootstrap_first_admin();

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- CATEGORIES
CREATE TABLE public.album_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.album_categories TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.album_categories TO authenticated;
GRANT ALL ON public.album_categories TO service_role;
ALTER TABLE public.album_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "categories public read" ON public.album_categories FOR SELECT USING (true);
CREATE POLICY "categories admin write" ON public.album_categories FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_album_categories BEFORE UPDATE ON public.album_categories FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- PHOTOS
CREATE TABLE public.photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text,
  description text,
  category_id uuid REFERENCES public.album_categories(id) ON DELETE SET NULL,
  taken_on date,
  sort_order int NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.photos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.photos TO authenticated;
GRANT ALL ON public.photos TO service_role;
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "photos public read" ON public.photos FOR SELECT USING (visible = true);
CREATE POLICY "photos admin read" ON public.photos FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "photos admin write" ON public.photos FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_photos BEFORE UPDATE ON public.photos FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- LETTER (single row)
CREATE TABLE public.letter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  heading text NOT NULL DEFAULT 'A little birthday note from me',
  content text NOT NULL DEFAULT '',
  signature text NOT NULL DEFAULT 'Your sister',
  letter_date date,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.letter TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.letter TO authenticated;
GRANT ALL ON public.letter TO service_role;
ALTER TABLE public.letter ENABLE ROW LEVEL SECURITY;
CREATE POLICY "letter public read" ON public.letter FOR SELECT USING (true);
CREATE POLICY "letter admin write" ON public.letter FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_letter BEFORE UPDATE ON public.letter FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- BOUQUET (single row)
CREATE TABLE public.bouquet (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT 'Flowers, obviously',
  message text NOT NULL DEFAULT 'Every birthday deserves a little extra colour. ♡',
  description text,
  image_url text,
  visible boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.bouquet TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bouquet TO authenticated;
GRANT ALL ON public.bouquet TO service_role;
ALTER TABLE public.bouquet ENABLE ROW LEVEL SECURITY;
CREATE POLICY "bouquet public read" ON public.bouquet FOR SELECT USING (true);
CREATE POLICY "bouquet admin write" ON public.bouquet FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_bouquet BEFORE UPDATE ON public.bouquet FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- GIFTS
CREATE TABLE public.gifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  image_url text,
  description text,
  personal_message text,
  gift_date date,
  sort_order int NOT NULL DEFAULT 0,
  visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gifts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gifts TO authenticated;
GRANT ALL ON public.gifts TO service_role;
ALTER TABLE public.gifts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "gifts public read" ON public.gifts FOR SELECT USING (visible = true);
CREATE POLICY "gifts admin read" ON public.gifts FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "gifts admin write" ON public.gifts FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_gifts BEFORE UPDATE ON public.gifts FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- SITE SETTINGS (single row)
CREATE TABLE public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_name text NOT NULL DEFAULT 'Iram',
  opening_heading text NOT NULL DEFAULT 'Hey Iram…',
  opening_message text NOT NULL DEFAULT 'I made you a little something for your birthday.',
  opening_button_text text NOT NULL DEFAULT 'Open your surprise',
  album_intro text NOT NULL DEFAULT 'A few memories I wanted to keep in one place. Don''t judge the amount of photos.',
  letter_title text NOT NULL DEFAULT 'Read this first',
  bouquet_message text NOT NULL DEFAULT 'Every birthday deserves a little extra colour. ♡',
  final_heading text NOT NULL DEFAULT 'Happy Birthday, Iram ♡',
  final_message text NOT NULL DEFAULT 'Another year of you being you.

I hope this year gives you a hundred little reasons to smile, lots of moments worth remembering, and everything you''ve been wishing for.

I''m really lucky I get to call you my sister.',
  closing_message text NOT NULL DEFAULT 'Now go enjoy your day — you''ve officially unlocked all your presents.',
  signature text NOT NULL DEFAULT 'Your sister',
  birthday_date date,
  music_url text,
  music_enabled boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "settings public read" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "settings admin write" ON public.site_settings FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER t_site_settings BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- seed singletons + starter categories
INSERT INTO public.site_settings (id) VALUES (gen_random_uuid());
INSERT INTO public.letter (content) VALUES ('Okay, before you open anything else…

You know I had to make you something. I couldn''t just send a text like a normal person.

Thank you for every ridiculous conversation, every late night, and for putting up with me longer than anyone else has had to. I hope this year is soft and loud and everything you want it to be.

Happy birthday, you.');
INSERT INTO public.bouquet (description) VALUES ('Picked entirely by me. No refunds.');
INSERT INTO public.album_categories (name, sort_order) VALUES ('Us', 0), ('Childhood', 1), ('Family', 2), ('Random Memories', 3), ('Best Days', 4);
