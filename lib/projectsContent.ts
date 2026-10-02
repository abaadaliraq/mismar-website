export type Locale = "ar" | "en" | "ku";

export type ProjectPdfLink = {
  label: string;
  href: string;
};

export type ProjectExternalLink = {
  label: string;
  href: string;
};

export type ProjectContentItem = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  details: string;
  pdfs?: ProjectPdfLink[];
  visit?: ProjectExternalLink;
  externalLinks?: ProjectExternalLink[];
};

export const projectSlugs = [
  "bayt-al-tuhafiyat",
  "kishib",
  "naima-baghdad-memory",
  "digital-support-artists",
] as const;

const placeholderLinks = {
  baytPdfAr: "#bayt-al-tuhafiyat-pdf-ar",
  baytPdfEn: "#bayt-al-tuhafiyat-pdf-en",
  kishibApp: "#kishib-app",
  kishibPdfAr: "#kishib-pdf-ar",
  kishibPdfEn: "#kishib-pdf-en",
};

export const projectsSectionContent: Record<
  Locale,
  {
    dir: "rtl" | "ltr";
    eyebrow: string;
    title: string;
    intro: string;
    viewProject: string;
    back: string;
    pdfTitle: string;
    visitLabel: string;
    externalTitle: string;
    items: ProjectContentItem[];
  }
> = {
  ar: {
    dir: "rtl",
    eyebrow: "مسارات العمل",
    title: "المشاريع والمبادرات",
    intro:
      "مشاريع تراثية ورقمية وثقافية تعمل من خلالها مسمار على ربط الذاكرة العراقية بالحاضر.",
    viewProject: "عرض المشروع",
    back: "العودة للمشاريع",
    pdfTitle: "ملفات المشروع",
    visitLabel: "زيارة المشروع",
    externalTitle: "روابط خارجية",
    items: [
      {
        slug: "bayt-al-tuhafiyat",
        image: "/images/about-ticket.jpg",
        category: "مشروع إحياء تراثي",
        title: "بيت التحفيات",
        description:
          "بيت تراثي في بغداد يتحول إلى مساحة للفن والذاكرة واللقاءات الثقافية.",
        details:
          "بيت التحفيات هو أحد مسارات مسمار في إحياء البيوت التراثية وتحويلها إلى مكان يستقبل المعارض والورش والفعاليات الثقافية، مع الحفاظ على روح المكان وتفاصيله المعمارية.",
        pdfs: [
          { label: "PDF عربي", href: placeholderLinks.baytPdfAr },
          { label: "English PDF", href: placeholderLinks.baytPdfEn },
        ],
      },
      {
        slug: "kishib",
        image: "/images/workshop-cover.jpg",
        category: "مبادرة رقمية",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        details:
          "KISHIB مبادرة رقمية من مسمار تهدف إلى بناء تجربة معاصرة تخدم الذاكرة والفن والمحتوى الثقافي بطريقة قابلة للوصول والاستخدام.",
        pdfs: [
          { label: "PDF عربي", href: placeholderLinks.kishibPdfAr },
          { label: "English PDF", href: placeholderLinks.kishibPdfEn },
        ],
        visit: {
          label: "زيارة التطبيق",
          href: placeholderLinks.kishibApp,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/1 (7).jpg",
        category: "معرض فني وثقافي",
        title: "نعيمة وذاكرة بغداد",
        description:
          "معرض في بيت التحفيات يستعيد ملامح بغداد عبر الفن والسرد الثقافي.",
        details:
          "يقام معرض نعيمة وذاكرة بغداد في بيت التحفيات بوصفه تجربة فنية وثقافية تستحضر ذاكرة المدينة وتمنحها قراءة بصرية معاصرة داخل فضاء تراثي حي.",
      },
      {
        slug: "digital-support-artists",
        image: "/images/contact-side.JPG",
        category: "مبادرة رقمية",
        title: "دعم الفنانين رقمياً",
        description:
          "تصميم وتطوير مواقع للفنانين لعرض أعمالهم وحفظ حضورهم الرقمي.",
        details:
          "تعمل مسمار على دعم الفنانين رقمياً عبر تصميم وتطوير مواقع شخصية تساعدهم على عرض الأعمال، تنظيم الأرشيف البصري، والوصول إلى جمهور أوسع.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: "https://www.wissamradhi.art/",
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: "https://www.ghadeeraltaee.art/ar",
          },
        ],
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "Work Streams",
    title: "Projects & Initiatives",
    intro:
      "Heritage, digital, and cultural workstreams through which Mismar connects Iraqi memory with the present.",
    viewProject: "View Project",
    back: "Back to Projects",
    pdfTitle: "Project Files",
    visitLabel: "Visit Project",
    externalTitle: "External Links",
    items: [
      {
        slug: "bayt-al-tuhafiyat",
        image: "/images/about-ticket.jpg",
        category: "Heritage Revival Project",
        title: "Bayt Al-Tuhafiyat",
        description:
          "A Baghdad heritage house becoming a space for art, memory, and cultural gatherings.",
        details:
          "Bayt Al-Tuhafiyat is one of MISMAR Foundation's heritage revival paths, transforming a heritage house into a living venue for exhibitions, workshops, and cultural events while preserving its architectural spirit.",
        pdfs: [
          { label: "Arabic PDF", href: placeholderLinks.baytPdfAr },
          { label: "English PDF", href: placeholderLinks.baytPdfEn },
        ],
      },
      {
        slug: "kishib",
        image: "/images/workshop-cover.jpg",
        category: "Digital Initiative",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        details:
          "KISHIB is a MISMAR Foundation digital initiative designed to create a contemporary experience for memory, art, and cultural content in an accessible format.",
        pdfs: [
          { label: "Arabic PDF", href: placeholderLinks.kishibPdfAr },
          { label: "English PDF", href: placeholderLinks.kishibPdfEn },
        ],
        visit: {
          label: "Visit App",
          href: placeholderLinks.kishibApp,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/1 (7).jpg",
        category: "Art & Cultural Exhibition",
        title: "Naima and Baghdad Memory",
        description:
          "An exhibition at Bayt Al-Tuhafiyat tracing Baghdad through art and cultural storytelling.",
        details:
          "Naima and Baghdad Memory is hosted at Bayt Al-Tuhafiyat as an art and cultural exhibition that revisits the city through visual work and contemporary storytelling.",
      },
      {
        slug: "digital-support-artists",
        image: "/images/contact-side.JPG",
        category: "Digital Initiative",
        title: "Digital Support for Artists",
        description:
          "Designing and developing artist websites to present work and preserve digital presence.",
        details:
          "MISMAR Foundation supports artists digitally by designing and developing personal websites that present their work, organize visual archives, and help them reach wider audiences.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: "https://www.wissamradhi.art/",
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: "https://www.ghadeeraltaee.art/ar",
          },
        ],
      },
    ],
  },
  ku: {
    dir: "rtl",
    eyebrow: "ڕێڕەوی کار",
    title: "پڕۆژە و دەستپێشخەرییەکان",
    intro:
      "پڕۆژەی کەلەپووری، دیجیتاڵی و کولتووری کە مسمار لە ڕێگەیانەوە یادەوەری عێراق بە ئێستاوە دەبەستێتەوە.",
    viewProject: "بینینی پڕۆژە",
    back: "گەڕانەوە بۆ پڕۆژەکان",
    pdfTitle: "فایلەکانی پڕۆژە",
    visitLabel: "سەردانی پڕۆژە",
    externalTitle: "بەستەرە دەرەکییەکان",
    items: [
      {
        slug: "bayt-al-tuhafiyat",
        image: "/images/about-ticket.jpg",
        category: "پڕۆژەی زیندووکردنەوەی کەلەپوور",
        title: "ماڵی التحفیات",
        description:
          "ماڵێکی کەلەپووری لە بەغدا کە دەبێتە شوێنی هونەر، یادەوەری و دیداری کولتووری.",
        details:
          "ماڵی التحفیات یەکێکە لە ڕێڕەوەکانی مسمار بۆ زیندووکردنەوەی ماڵە کەلەپوورییەکان و گۆڕینیان بۆ شوێنی پێشانگا، وۆرکشۆپ و چالاکیی کولتووری.",
        pdfs: [
          { label: "PDF عەرەبی", href: placeholderLinks.baytPdfAr },
          { label: "English PDF", href: placeholderLinks.baytPdfEn },
        ],
      },
      {
        slug: "kishib",
        image: "/images/workshop-cover.jpg",
        category: "دەستپێشخەریی دیجیتاڵی",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        details:
          "KISHIB دەستپێشخەرییەکی دیجیتاڵیی مسمارە بۆ دروستکردنی ئەزموونێکی نوێ بۆ یادەوەری، هونەر و ناوەڕۆکی کولتووری.",
        pdfs: [
          { label: "PDF عەرەبی", href: placeholderLinks.kishibPdfAr },
          { label: "English PDF", href: placeholderLinks.kishibPdfEn },
        ],
        visit: {
          label: "سەردانی ئەپ",
          href: placeholderLinks.kishibApp,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/1 (7).jpg",
        category: "پێشانگای هونەری و کولتووری",
        title: "نەعیمە و یادەوەری بەغدا",
        description:
          "پێشانگایەک لە ماڵی التحفیات کە بەغدا لە ڕێگەی هونەر و گێڕانەوەی کولتووری دەگەڕێنێتەوە.",
        details:
          "نەعیمە و یادەوەری بەغدا پێشانگایەکی هونەری و کولتوورییە لە ماڵی التحفیات کە یادەوەری شار لە ڕێگەی کاری بینراو و گێڕانەوەی نوێ دەخوێنێتەوە.",
      },
      {
        slug: "digital-support-artists",
        image: "/images/contact-side.JPG",
        category: "دەستپێشخەریی دیجیتاڵی",
        title: "پشتگیری دیجیتاڵی بۆ هونەرمەندان",
        description:
          "دیزاین و گەشەپێدانی ماڵپەڕ بۆ هونەرمەندان بۆ پیشاندانی کار و پاراستنی ئامادەبوونی دیجیتاڵی.",
        details:
          "مسمار پشتگیری دیجیتاڵی بۆ هونەرمەندان دەکات بە دیزاین و گەشەپێدانی ماڵپەڕی تایبەتی بۆ پیشاندانی کار و ڕێکخستنی ئەرشیفی بینراو.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: "https://www.wissamradhi.art/",
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: "https://www.ghadeeraltaee.art/ar",
          },
        ],
      },
    ],
  },
};

export function getProjectsContent(locale: Locale) {
  return projectsSectionContent[locale] ?? projectsSectionContent.ar;
}

export function getProject(locale: Locale, slug: string) {
  return getProjectsContent(locale).items.find((project) => project.slug === slug);
}
