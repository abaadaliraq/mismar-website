"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    logoTitle: "منظمة مسمار للفنون",
    links: [
      { label: "الرئيسية", href: "" },
      { label: "عن المنظمة", href: "about" },
      { label: "الورش", href: "activities" },
      { label: "الترميم", href: "restoration" },
      { label: "قبل وبعد", href: "restoration#before-after" },
      { label: "تواصل", href: "#contact" },
    ],
  },
  en: {
    dir: "ltr",
    logoTitle: "Mismar Organization for Arts",
    links: [
      { label: "Home", href: "" },
      { label: "About", href: "about" },
      { label: "Activities", href: "activities" },
      { label: "Restoration", href: "restoration" },
      { label: "Before / After", href: "restoration#before-after" },
      { label: "Contact", href: "#contact" },
    ],
  },
  ku: {
    dir: "rtl",
    logoTitle: "ڕێکخراوی مسمار بۆ هونەر",
    links: [
      { label: "سەرەکی", href: "" },
      { label: "دەربارە", href: "about" },
      { label: "چالاکییەکان", href: "activities" },
      { label: "نۆژەنکردنەوە", href: "restoration" },
      { label: "پێش / دوای", href: "restoration#before-after" },
      { label: "پەیوەندی", href: "#contact" },
    ],
  },
};

export default function Navbar({ locale = "ar" }: Props) {
  const pathname = usePathname();
  const t = content[locale] ?? content.ar;

  const makeHref = (href: string) => {
    if (href === "") return `/${locale}`;
    if (href.startsWith("#")) return `/${locale}${href}`;
    return `/${locale}/${href}`;
  };

  return (
    <header
      dir={t.dir}
      className="absolute left-0 top-0 z-50 w-full"
    >
      <div className="flex h-[72px] items-center justify-between px-8 md:px-16">
        <Link href={`/${locale}`} className="group flex items-center gap-4">
          <img
            src="/images/mismar-logo.png"
            alt="Mismar"
            className="h-11 w-11 object-contain transition duration-500 group-hover:rotate-6"
          />

          <div className="hidden md:block">
            <h2 className="text-sm font-normal text-[#2a1005]/90 transition duration-300 group-hover:text-white">
              {t.logoTitle}
            </h2>
            <p className="mt-1 text-[10px] font-normal tracking-[0.24em] text-[#2a1005]/65 transition duration-300 group-hover:text-white/80">
              MISMAR ARTS
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.links.map((item) => {
            const href = makeHref(item.href);
            const isActive =
              pathname === href || (pathname === `/${locale}` && item.href === "");

            return (
              <Link
                key={item.href}
                href={href}
                className={`group relative text-[13px] font-normal transition-all duration-300 ${
                  isActive ? "text-[#8b5e3c]" : "text-[#e7d8c7]/88"
                } hover:text-white`}
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 text-xs font-normal" dir="ltr">
          <Link href="/ar" className="text-[#2a1005]/65 transition hover:text-white">
            AR
          </Link>
          <span className="text-[#2a1005]/35">/</span>
          <Link href="/en" className="text-[#2a1005]/65 transition hover:text-white">
            EN
          </Link>
          <span className="text-[#2a1005]/35">/</span>
          <Link href="/ku" className="text-[#2a1005]/65 transition hover:text-white">
            KU
          </Link>
        </div>
      </div>
    </header>
  );
}