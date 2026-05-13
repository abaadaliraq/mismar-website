import Link from "next/link";
import { Mail, Play } from "lucide-react";

export type Locale = "ar" | "en" | "ku";


type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    title: "منظمة مسمار للفنون",
    desc: "مساحة ثقافية لإحياء الفن، التراث، والبيوت التراثية في العراق.",
    links: [
      { label: "عن المنظمة", href: "about" },
      { label: "الورش والمعارض", href: "activities" },
      { label: "الترميم", href: "restoration" },
      { label: "تواصل", href: "contact" },
    ],
    legal: [
      { label: "الشروط والأحكام", href: "terms" },
      { label: "سياسة الخصوصية", href: "privacy" },
      { label: "الكوكيز", href: "cookies" },
    ],
    address: "بغداد / بيت التحفيات",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    dir: "ltr",
    title: "Mismar Organization for Arts",
    desc: "A cultural space for reviving arts, heritage, and heritage houses in Iraq.",
    links: [
      { label: "About", href: "about" },
      { label: "Activities", href: "activities" },
      { label: "Restoration", href: "restoration" },
      { label: "Contact", href: "contact" },
    ],
    legal: [
      { label: "Terms", href: "terms" },
      { label: "Privacy", href: "privacy" },
      { label: "Cookies", href: "cookies" },
    ],
    address: "Baghdad / Bayt Al-Tuhafiyat",
    rights: "All rights reserved",
  },
  ku: {
    dir: "rtl",
    title: "ڕێکخراوی مسمار بۆ هونەر",
    desc: "شوێنێکی کولتووری بۆ زیندووکردنەوەی هونەر و کەلەپوور.",
    links: [
      { label: "دەربارە", href: "about" },
      { label: "چالاکییەکان", href: "activities" },
      { label: "نۆژەنکردنەوە", href: "restoration" },
      { label: "پەیوەندی", href: "contact" },
    ],
    legal: [
      { label: "مەرجەکان", href: "terms" },
      { label: "تایبەتمەندی", href: "privacy" },
      { label: "کوکیز", href: "cookies" },
    ],
    address: "بەغدا / ماڵی التحفیات",
    rights: "هەموو مافەکان پارێزراون",
  },
};

export default function Footer({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;

  return (
    <footer
      dir={t.dir}
      className="border-t border-[#2a1005]/10 bg-[#f3ede5] text-[#2a1005]"
    >
      <div className="grid gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-16">
   <div>
  <Link
    href={`/${locale}`}
    className="group inline-flex items-center gap-4"
  >
    <img
      src="/images/mismar-logo.png"
      alt="Mismar"
      className="h-16 w-16 object-contain transition duration-500 group-hover:rotate-6"
    />

    <div>
      <h2 className="text-2xl font-light transition group-hover:text-[#2f9c95]">
        {t.title}
      </h2>

      <p className="mt-1 text-xs tracking-[0.25em] text-[#2a1005]/45">
        MISMAR ARTS
      </p>
    </div>
  </Link>

  <p className="mt-6 max-w-[420px] text-sm font-light leading-7 text-[#2a1005]/65">
    {t.desc}
  </p>

  <p className="mt-6 text-sm text-[#2a1005]/55">
    {t.address}
  </p>

  {/* SOCIALS */}
<div className="mt-7 flex items-center gap-3">

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/10 transition duration-300 hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  </a>

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/10 transition duration-300 hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.25-1.5 1.55-1.5h1.65V4.9c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.45-4.05 4.15V11H8v3h2.75v8h2.75Z" />
    </svg>
  </a>

  <a
    href="#"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/10 transition duration-300 hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white"
  >
    <Play size={18} strokeWidth={1.7} />
  </a>

  <a
    href="mailto:info@mismararts.com"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/10 transition duration-300 hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white"
  >
    <Mail size={18} strokeWidth={1.7} />
  </a>

</div>
</div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#2f9c95]">
            Navigation
          </p>

          <div className="flex flex-col gap-3">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}/${link.href}`}
                className="text-sm font-light text-[#2a1005]/70 transition hover:text-[#2f9c95]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#2f9c95]">
            Legal
          </p>

          <div className="flex flex-col gap-3">
            {t.legal.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}/${link.href}`}
                className="text-sm font-light text-[#2a1005]/70 transition hover:text-[#2f9c95]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#2a1005]/10 px-6 py-5 text-xs text-[#2a1005]/50 md:flex-row md:items-center md:justify-between md:px-16">
        <p>
          © 2026 {t.title}. {t.rights}.
        </p>

        <p className="tracking-[0.2em]">MISMAR ARTS</p>
      </div>
    </footer>
  );
}