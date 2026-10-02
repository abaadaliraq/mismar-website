import type { Metadata } from "next";

export type Locale = "ar" | "en" | "ku";
export type SeoPage =
  | "home"
  | "about"
  | "activities"
  | "restoration"
  | "projects"
  | "contact"
  | "privacy"
  | "terms";

export const BASE_URL = "https://www.mismar.ngo";
export const SUPPORTED_LOCALES: Locale[] = ["ar", "en", "ku"];
export const DEFAULT_LOCALE: Locale = "ar";

export const localeDir: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  ku: "rtl",
};

const ogLocale: Record<Locale, string> = {
  ar: "ar_IQ",
  en: "en_US",
  ku: "ku_IQ",
};

const seoContent: Record<
  SeoPage,
  Record<Locale, { title: string; description: string; image: string }>
> = {
  home: {
    ar: {
      title:
        "مؤسسة مسمار للفنون والتنمية المستدامة | إحياء التراث والفنون في بغداد",
      description:
        "مؤسسة مسمار للفنون والتنمية المستدامة تعمل على إحياء التراث في العراق، ترميم البيوت التراثية في بغداد، ودعم الفنون والمعارض والورش الثقافية.",
      image: "/images/hero-1.jpg",
    },
    en: {
      title: "MISMAR Foundation for Arts & Sustainable Development | Baghdad",
      description:
        "MISMAR Foundation for Arts and Sustainable Development supports Iraqi cultural heritage, heritage restoration in Baghdad, arts, culture, exhibitions, and creative workshops.",
      image: "/images/hero-1.jpg",
    },
    ku: {
      title: "دامەزراوەی مسمار بۆ هونەر و گەشەپێدانی بەردەوام | بەغدا",
      description:
        "دامەزراوەی مسمار کار دەکات بۆ زیندووکردنەوەی کەلەپووری عێراق، نۆژەنکردنەوەی ماڵە کەلەپوورییەکانی بەغدا و پشتگیری هونەر و کولتوور.",
      image: "/images/hero-1.jpg",
    },
  },
  about: {
    ar: {
      title: "عن مؤسسة مسمار | الفنون والتنمية المستدامة في بغداد",
      description:
        "تعرف على مؤسسة مسمار للفنون والتنمية المستدامة ورؤيتها في ربط الفنون والتراث في بغداد بإحياء البيوت التراثية والمبادرات الثقافية.",
      image: "/images/about-hero.jpg",
    },
    en: {
      title: "About MISMAR Foundation | Arts, Heritage & Sustainable Development",
      description:
        "Learn about MISMAR Foundation, its mission in Iraqi cultural heritage, and its work connecting arts, heritage houses, and sustainable development in Baghdad.",
      image: "/images/about-hero.jpg",
    },
    ku: {
      title: "دەربارەی دامەزراوەی مسمار | هونەر و کەلەپوور",
      description:
        "دەربارەی دامەزراوەی مسمار و دیدگاکەی بۆ گرێدانی هونەر، کەلەپوور و گەشەپێدانی بەردەوام لە بەغدا.",
      image: "/images/about-hero.jpg",
    },
  },
  activities: {
    ar: {
      title: "الورش والمعارض الفنية | مؤسسة مسمار بغداد",
      description:
        "ورش فنية ومعارض ثقافية في بغداد تنظمها مؤسسة مسمار داخل فضاءات تراثية لدعم الفنانين وربط الأجيال بالتراث العراقي.",
      image: "/images/workshop-cover.jpg",
    },
    en: {
      title: "Workshops & Art Exhibitions | MISMAR Foundation Baghdad",
      description:
        "Creative workshops and art exhibitions in Baghdad by MISMAR Foundation, connecting artists, students, and visitors with Iraqi cultural heritage.",
      image: "/images/workshop-cover.jpg",
    },
    ku: {
      title: "وۆرکشۆپ و پێشانگاکانی هونەر | دامەزراوەی مسمار",
      description:
        "وۆرکشۆپ و پێشانگای هونەری لە بەغدا بۆ پشتگیری هونەرمەندان و ناساندنی کەلەپووری عێراق.",
      image: "/images/workshop-cover.jpg",
    },
  },
  restoration: {
    ar: {
      title: "ترميم البيوت التراثية في بغداد | مؤسسة مسمار",
      description:
        "تعرف على عمل مؤسسة مسمار في ترميم البيوت التراثية في بغداد وإعادة تحويلها إلى مساحات للفنون والثقافة والسياحة.",
      image: "/images/restoration-hero.jpg",
    },
    en: {
      title: "Heritage Restoration in Baghdad | MISMAR Foundation",
      description:
        "MISMAR Foundation works on heritage restoration in Baghdad, reviving heritage houses in Iraq as cultural, artistic, and touristic spaces.",
      image: "/images/restoration-hero.jpg",
    },
    ku: {
      title: "نۆژەنکردنەوەی ماڵە کەلەپوورییەکان | دامەزراوەی مسمار",
      description:
        "کاری مسمار بۆ نۆژەنکردنەوەی ماڵە کەلەپوورییەکانی بەغدا و گۆڕینیان بۆ شوێنی هونەری و کولتووری.",
      image: "/images/restoration-hero.jpg",
    },
  },
  projects: {
    ar: {
      title: "مشاريع ومبادرات مؤسسة مسمار | بيت التحفيات وKISHIB",
      description:
        "استكشف مشاريع ومبادرات مؤسسة مسمار مثل بيت التحفيات، KISHIB، معارض فنية بغداد، ودعم الفنانين رقمياً.",
      image: "/images/about-ticket.jpg",
    },
    en: {
      title: "Projects & Initiatives | MISMAR Foundation",
      description:
        "Explore MISMAR Foundation projects and initiatives including Bayt Al-Tuhafiyat, KISHIB, exhibitions, and digital support for artists.",
      image: "/images/about-ticket.jpg",
    },
    ku: {
      title: "پڕۆژە و دەستپێشخەرییەکان | دامەزراوەی مسمار",
      description:
        "بینینی پڕۆژە و دەستپێشخەرییەکانی مسمار وەک ماڵی التحفیات، KISHIB و پشتگیری دیجیتاڵی بۆ هونەرمەندان.",
      image: "/images/about-ticket.jpg",
    },
  },
  contact: {
    ar: {
      title: "تواصل مع مؤسسة مسمار | بغداد",
      description:
        "تواصل مع مؤسسة مسمار للفنون والتنمية المستدامة للتعاون في مشاريع التراث، الورش الفنية، المعارض، والترميم في بغداد.",
      image: "/images/contact-side.jpg",
    },
    en: {
      title: "Contact MISMAR Foundation | Baghdad",
      description:
        "Contact MISMAR Foundation for collaboration on heritage restoration, arts and culture in Baghdad, workshops, exhibitions, and cultural initiatives.",
      image: "/images/contact-side.jpg",
    },
    ku: {
      title: "پەیوەندی بە دامەزراوەی مسمار | بەغدا",
      description:
        "پەیوەندی بە دامەزراوەی مسمار بکە بۆ هاوکاری لە پڕۆژەی کەلەپوور، وۆرکشۆپ، پێشانگا و نۆژەنکردنەوە.",
      image: "/images/contact-side.jpg",
    },
  },
  privacy: {
    ar: {
      title: "سياسة الخصوصية | مؤسسة مسمار",
      description:
        "سياسة الخصوصية الخاصة بموقع مؤسسة مسمار للفنون والتنمية المستدامة وطريقة التعامل مع بيانات التواصل الأساسية.",
      image: "/images/footer.jpg",
    },
    en: {
      title: "Privacy Policy | MISMAR Foundation",
      description:
        "Privacy Policy for MISMAR Foundation for Arts and Sustainable Development and how basic contact information is handled.",
      image: "/images/footer.jpg",
    },
    ku: {
      title: "سیاسەتی تایبەتمەندی | دامەزراوەی مسمار",
      description:
        "سیاسەتی تایبەتمەندی ماڵپەڕی دامەزراوەی مسمار و چۆنیەتی مامەڵەکردن لەگەڵ زانیارییە بنەڕەتییەکانی پەیوەندی.",
      image: "/images/footer.jpg",
    },
  },
  terms: {
    ar: {
      title: "شروط استخدام الموقع | مؤسسة مسمار",
      description:
        "شروط استخدام موقع مؤسسة مسمار للفنون والتنمية المستدامة وحقوق المحتوى والنصوص والتصاميم والصور.",
      image: "/images/footer.jpg",
    },
    en: {
      title: "Website Terms of Use | MISMAR Foundation",
      description:
        "Website Terms of Use for MISMAR Foundation, covering content rights, personal use, external links, and applicable Iraqi law.",
      image: "/images/footer.jpg",
    },
    ku: {
      title: "مەرجەکانی بەکارهێنانی ماڵپەڕ | دامەزراوەی مسمار",
      description:
        "مەرجەکانی بەکارهێنانی ماڵپەڕی دامەزراوەی مسمار و مافی ناوەڕۆک، وێنە، دیزاین و بەستەرە دەرەکییەکان.",
      image: "/images/footer.jpg",
    },
  },
};

export function normalizeLocale(locale?: string): Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE;
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
}

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

export function alternatesFor(path = "") {
  const languages = SUPPORTED_LOCALES.reduce<Record<string, string>>(
    (acc, locale) => {
      acc[locale] = absoluteUrl(localizedPath(locale, path));
      return acc;
    },
    {},
  );

  languages["x-default"] = absoluteUrl(localizedPath(DEFAULT_LOCALE, path));
  return languages;
}

export function buildMetadata(
  localeInput: string | undefined,
  page: SeoPage,
  path = "",
): Metadata {
  const locale = normalizeLocale(localeInput);
  const seo = seoContent[page][locale];
  const pageUrl = absoluteUrl(localizedPath(locale, path));
  const imageUrl = absoluteUrl(seo.image);

  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: pageUrl,
      languages: alternatesFor(path),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      siteName: "MISMAR Foundation",
      locale: ogLocale[locale],
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
  };
}

export function buildCustomMetadata({
  locale: localeInput,
  path,
  title,
  description,
  image,
}: {
  locale: string | undefined;
  path: string;
  title: string;
  description: string;
  image: string;
}): Metadata {
  const locale = normalizeLocale(localeInput);
  const pageUrl = absoluteUrl(localizedPath(locale, path));
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: alternatesFor(path),
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "MISMAR Foundation",
      locale: ogLocale[locale],
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
