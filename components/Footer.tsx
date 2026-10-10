import Link from "next/link";
import { Mail, Phone, Play } from "lucide-react";

export type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    title: "مؤسسة مسمار",
    groups: [
      {
        title: "المؤسسة",
        links: [
          { label: "الرئيسية", href: "" },
          { label: "عن المؤسسة", href: "about" },
          { label: "المشاريع والمبادرات", href: "projects" },
        ],
      },
      {
        title: "الأنشطة",
        links: [
          { label: "الورش والمعارض", href: "activities" },
          { label: "الترميم", href: "restoration" },
          { label: "تواصل", href: "contact" },
        ],
      },
      {
        title: "معلومات",
        links: [
          { label: "سياسة الخصوصية", href: "privacy" },
          { label: "شروط الاستخدام", href: "terms" },
          { label: "البريد الإلكتروني", href: "mailto:info@mismar.ngo" },
          { label: "الهاتف", href: "tel:+9647779922838" },
        ],
      },
    ],
  },
  en: {
    dir: "ltr",
    title: "MISMAR Foundation",
    groups: [
      {
        title: "Foundation",
        links: [
          { label: "Home", href: "" },
          { label: "About", href: "about" },
          { label: "Projects & Initiatives", href: "projects" },
        ],
      },
      {
        title: "Activities",
        links: [
          { label: "Workshops & Exhibitions", href: "activities" },
          { label: "Restoration", href: "restoration" },
          { label: "Contact", href: "contact" },
        ],
      },
      {
        title: "Info",
        links: [
          { label: "Privacy Policy", href: "privacy" },
          { label: "Terms of Use", href: "terms" },
          { label: "Email", href: "mailto:info@mismar.ngo" },
          { label: "Phone", href: "tel:+9647779922838" },
        ],
      },
    ],
  },
  ku: {
    dir: "rtl",
    title: "دامەزراوەی مسمار",
    groups: [
      {
        title: "دامەزراوە",
        links: [
          { label: "سەرەکی", href: "" },
          { label: "دەربارە", href: "about" },
          { label: "پڕۆژە و دەستپێشخەرییەکان", href: "projects" },
        ],
      },
      {
        title: "چالاکییەکان",
        links: [
          { label: "وۆرکشۆپ و پێشانگا", href: "activities" },
          { label: "نۆژەنکردنەوە", href: "restoration" },
          { label: "پەیوەندی", href: "contact" },
        ],
      },
      {
        title: "زانیاری",
        links: [
          { label: "تایبەتمەندی", href: "privacy" },
          { label: "مەرجەکانی بەکارهێنان", href: "terms" },
          { label: "ئیمەیڵ", href: "mailto:info@mismar.ngo" },
          { label: "مۆبایل", href: "tel:+9647779922838" },
        ],
      },
    ],
  },
};

const socialLinkClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/82 backdrop-blur-sm transition duration-300 hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white";

const contact = {
  email: "info@mismar.ngo",
  phone: "+9647779922838",
  instagram: "https://www.instagram.com/mismar_ngo/?__pwa=1",
  facebook:
    "https://web.facebook.com/profile.php?id=61595166274711&rdid=cPEygDkURRKb9QGz&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F19DzPEj9Z1%2F%3F_rdc%3D1%26_rdr#",
  youtube: "https://www.youtube.com/@mismarngo",
  tiktok: "https://www.tiktok.com/@mismar.ngo?lang=en",
};

export default function Footer({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;

  const makeHref = (href: string) => {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    return href === "" ? `/${locale}` : `/${locale}/${href}`;
  };

  return (
    <footer
      dir={t.dir}
      className="relative overflow-hidden bg-[#160905] text-white"
    >
      <img
        src="/images/footer.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#100602]/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#100602]/82 via-[#100602]/35 to-[#100602]/42" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <Link
            href={`/${locale}`}
            className="group inline-flex items-center gap-4"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/10 backdrop-blur-sm transition duration-500 group-hover:border-[#2f9c95] group-hover:bg-[#2f9c95]/20">
              <img
                src="/images/mismar-logo.png"
                alt={`${t.title} logo`}
                className="h-11 w-11 object-contain transition duration-500 group-hover:rotate-6"
              />
            </span>

            <span>
              <span className="block text-2xl font-light leading-tight">
                {t.title}
              </span>
              <span className="mt-2 block text-[10px] font-light uppercase tracking-[0.3em] text-white/55">
                MISMAR FOUNDATION
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px]"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </a>

            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px]"
                fill="currentColor"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.25-1.5 1.55-1.5h1.65V4.9c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.45-4.05 4.15V11H8v3h2.75v8h2.75Z" />
              </svg>
            </a>

            <a
              href={contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="YouTube"
            >
              <Play size={17} strokeWidth={1.7} />
            </a>

            <a
              href={contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
              aria-label="TikTok"
            >
              <span className="text-[10px] font-light tracking-[0.14em]">TT</span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className={socialLinkClass}
              aria-label="Email"
            >
              <Mail size={17} strokeWidth={1.7} />
            </a>

            <a
              href={`tel:${contact.phone}`}
              className={socialLinkClass}
              aria-label="Phone"
            >
              <Phone size={17} strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-white/16 py-8 md:grid-cols-3">
          {t.groups.map((group) => (
            <nav key={group.title}>
              <p className="mb-4 text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
                {group.title}
              </p>
              <div className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <Link
                    key={`${group.title}-${link.href}`}
                    href={makeHref(link.href)}
                    className="w-fit text-sm font-light text-white/72 transition hover:text-[#2f9c95]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div
          dir="ltr"
          className="mt-6 grid items-center gap-3 text-center text-xs font-light uppercase tracking-[0.22em] text-white/54 md:grid-cols-3"
        >
          <a
            href={`mailto:${contact.email}`}
            className="transition hover:text-[#2f9c95] md:justify-self-start"
          >
            {contact.email}
          </a>

          <a
            href="https://www.abaad-aliraq.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-[10px] tracking-[0.16em] text-white/48 transition hover:text-[#2f9c95] md:justify-self-center"
          >
            <img
              src="/images/abaad-logo.png"
              alt="Abaad Al-Iraq logo"
              className="h-5 w-5 object-contain opacity-65 transition group-hover:opacity-100"
            />
            <span>Developed by Abaad Al-Iraq</span>
          </a>

          <p className="md:justify-self-end">© 2026 MISMAR FOUNDATION</p>
        </div>
      </div>
    </footer>
  );
}
