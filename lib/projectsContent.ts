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
  summary?: string;
  details: string;
  action?: ProjectExternalLink;
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

const projectLinks = {
  baytProject: "https://abaadaliraq.github.io/mismar-hoa/",
  kishibInitiative: "https://www.kishibapp.com/",
  naimaFile: "/pdfs/projects/naima-zakirat-baghdad-ar.pdf",
  wissamRadhi: "https://www.wissamradhi.art/",
  ghadeerAlTaee: "https://www.ghadeeraltaee.art/ar",
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
        image: "/images/projects/house.jpg",
        category: "مشروع إحياء تراثي",
        title: "بيت التحفيات",
        description:
          "بيت تراثي في بغداد يتحول إلى مساحة للفن والذاكرة واللقاءات الثقافية.",
        summary:
          "أحد مشاريع مؤسسة مسمار لإحياء وإعادة توظيف بيت بغدادي تراثي. شملت أعمال الإحياء ترميم المبنى وتفاصيله المعمارية وصيانة مقتنياته وتحفياته على مدى نحو ثلاث سنوات، ليصبح اليوم مساحة للفن والفعاليات الثقافية ومقراً للمؤسسة.",
        details:
          "بيت التحفيات هو أحد مسارات مسمار في إحياء البيوت التراثية وتحويلها إلى مكان يستقبل المعارض والورش والفعاليات الثقافية، مع الحفاظ على روح المكان وتفاصيله المعمارية.",
        action: {
          label: "عرض المشروع",
          href: projectLinks.baytProject,
        },
        visit: {
          label: "عرض المشروع",
          href: projectLinks.baytProject,
        },
      },
      {
        slug: "kishib",
        image: "/images/projects/kishib.jpg",
        category: "مبادرة رقمية",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        summary:
          "مبادرة رقمية أطلقتها مسمار لتوثيق وتقييم المقتنيات والتحف القديمة رقمياً، والمساعدة في حفظ معلوماتها وقصتها. تمثل KISHIB امتداداً لرؤية المؤسسة من إحياء المكان إلى توثيق المقتنى وحفظ الذاكرة.",
        details:
          "KISHIB مبادرة رقمية من مسمار تهدف إلى بناء تجربة معاصرة تخدم الذاكرة والفن والمحتوى الثقافي بطريقة قابلة للوصول والاستخدام.",
        action: {
          label: "زيارة المبادرة",
          href: projectLinks.kishibInitiative,
        },
        visit: {
          label: "زيارة المبادرة",
          href: projectLinks.kishibInitiative,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/projects/gallery.jpg",
        category: "معرض فني وثقافي",
        title: "نعيمة وذاكرة بغداد",
        description:
          "معرض في بيت التحفيات يستعيد ملامح بغداد عبر الفن والسرد الثقافي.",
        summary:
          "معرض فني يجمع تجربتي وسام راضي وغدير الطائي في بيت التحفيات، ويستحضر ذاكرة الإنسان والمكان في بغداد. يأتي ضمن توجه مسمار لدعم الفنانين وربط الفن المعاصر بالتراث والذاكرة الثقافية.",
        details:
          "يقام معرض نعيمة وذاكرة بغداد في بيت التحفيات بوصفه تجربة فنية وثقافية تستحضر ذاكرة المدينة وتمنحها قراءة بصرية معاصرة داخل فضاء تراثي حي.",
        action: {
          label: "عرض ملف المعرض",
          href: projectLinks.naimaFile,
        },
        visit: {
          label: "عرض ملف المعرض",
          href: projectLinks.naimaFile,
        },
      },
      {
        slug: "digital-support-artists",
        image: "/images/projects/artist.jpg",
        category: "مبادرة رقمية",
        title: "دعم الفنانين رقمياً",
        description:
          "تصميم وتطوير مواقع للفنانين لعرض أعمالهم وحفظ حضورهم الرقمي.",
        summary:
          "مبادرة من مسمار لتوثيق أعمال الفنانين وتعزيز حضورهم الرقمي عبر تصميم وتطوير مواقع فنية مستقلة تحفظ سيرتهم وأعمالهم وتسهّل الوصول إليها، وبدأت بموقعي وسام راضي وغدير الطائي.",
        details:
          "تعمل مسمار على دعم الفنانين رقمياً عبر تصميم وتطوير مواقع شخصية تساعدهم على عرض الأعمال، تنظيم الأرشيف البصري، والوصول إلى جمهور أوسع.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: projectLinks.wissamRadhi,
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: projectLinks.ghadeerAlTaee,
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
        image: "/images/projects/house.jpg",
        category: "Heritage Revival Project",
        title: "Bayt Al-Tuhafiyat",
        description:
          "A Baghdad heritage house becoming a space for art, memory, and cultural gatherings.",
        summary:
          "One of MISMAR Foundation's projects to revive and adapt a traditional Baghdadi house. The work included restoring the building and its architectural details, and caring for its antiques and objects over nearly three years, so it could become a space for art, cultural events, and the foundation's home.",
        details:
          "Bayt Al-Tuhafiyat is one of MISMAR Foundation's heritage revival paths, transforming a heritage house into a living venue for exhibitions, workshops, and cultural events while preserving its architectural spirit.",
        action: {
          label: "View Project",
          href: projectLinks.baytProject,
        },
        visit: {
          label: "View Project",
          href: projectLinks.baytProject,
        },
      },
      {
        slug: "kishib",
        image: "/images/projects/kishib.jpg",
        category: "Digital Initiative",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        summary:
          "A digital initiative launched by MISMAR to document and evaluate old collectibles and antiques, helping preserve their information and stories. KISHIB extends the foundation's vision from reviving place to documenting objects and safeguarding memory.",
        details:
          "KISHIB is a MISMAR Foundation digital initiative designed to create a contemporary experience for memory, art, and cultural content in an accessible format.",
        action: {
          label: "Visit Initiative",
          href: projectLinks.kishibInitiative,
        },
        visit: {
          label: "Visit Initiative",
          href: projectLinks.kishibInitiative,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/projects/gallery.jpg",
        category: "Art & Cultural Exhibition",
        title: "Naima and Baghdad Memory",
        description:
          "An exhibition at Bayt Al-Tuhafiyat tracing Baghdad through art and cultural storytelling.",
        summary:
          "An art exhibition bringing together the practices of Wissam Radhi and Ghadeer Al Taee at Bayt Al-Tuhafiyat, evoking the memory of people and place in Baghdad. It reflects MISMAR's work to support artists and connect contemporary art with heritage and cultural memory.",
        details:
          "Naima and Baghdad Memory is hosted at Bayt Al-Tuhafiyat as an art and cultural exhibition that revisits the city through visual work and contemporary storytelling.",
        action: {
          label: "View Exhibition File",
          href: projectLinks.naimaFile,
        },
        visit: {
          label: "View Exhibition File",
          href: projectLinks.naimaFile,
        },
      },
      {
        slug: "digital-support-artists",
        image: "/images/projects/artist.jpg",
        category: "Digital Initiative",
        title: "Digital Support for Artists",
        description:
          "Designing and developing artist websites to present work and preserve digital presence.",
        summary:
          "A MISMAR initiative to document artists' work and strengthen their digital presence through independent art websites that preserve their biographies and artworks and make them easier to access, beginning with the websites of Wissam Radhi and Ghadeer Al Taee.",
        details:
          "MISMAR Foundation supports artists digitally by designing and developing personal websites that present their work, organize visual archives, and help them reach wider audiences.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: projectLinks.wissamRadhi,
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: projectLinks.ghadeerAlTaee,
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
        image: "/images/projects/house.jpg",
        category: "پڕۆژەی زیندووکردنەوەی کەلەپوور",
        title: "ماڵی التحفیات",
        description:
          "ماڵێکی کەلەپووری لە بەغدا کە دەبێتە شوێنی هونەر، یادەوەری و دیداری کولتووری.",
        summary:
          "یەکێکە لە پڕۆژەکانی دامەزراوەی مسمار بۆ زیندووکردنەوە و بەکارهێنانەوەی ماڵێکی کەلەپووری بەغدادی. کارەکان نزیکەی سێ ساڵ خایاند و ترمیمی بینا، وردەکارییە بیناسازییەکان و پاراستنی کۆکراوە و التحفەکانی گرتەوە، بۆ ئەوەی ببێتە شوێنێک بۆ هونەر، چالاکیی کولتووری و بارەگای دامەزراوە.",
        details:
          "ماڵی التحفیات یەکێکە لە ڕێڕەوەکانی مسمار بۆ زیندووکردنەوەی ماڵە کەلەپوورییەکان و گۆڕینیان بۆ شوێنی پێشانگا، وۆرکشۆپ و چالاکیی کولتووری.",
        action: {
          label: "بینینی پڕۆژە",
          href: projectLinks.baytProject,
        },
        visit: {
          label: "بینینی پڕۆژە",
          href: projectLinks.baytProject,
        },
      },
      {
        slug: "kishib",
        image: "/images/projects/kishib.jpg",
        category: "دەستپێشخەریی دیجیتاڵی",
        title: "KISHIB",
        description: "KISHIB — A MISMAR Initiative",
        summary:
          "دەستپێشخەرییەکی دیجیتاڵییە کە مسمار دەستی پێکردووە بۆ تۆمارکردن و هەڵسەنگاندنی کۆکراوە و التحفە کۆنەکان بە شێوەی دیجیتاڵی، و یارمەتیدان لە پاراستنی زانیاری و چیرۆکیان. KISHIB درێژەی دیدگای دامەزراوەیە لە زیندووکردنەوەی شوێنەوە بۆ تۆمارکردنی شت و پاراستنی یادەوەری.",
        details:
          "KISHIB دەستپێشخەرییەکی دیجیتاڵیی مسمارە بۆ دروستکردنی ئەزموونێکی نوێ بۆ یادەوەری، هونەر و ناوەڕۆکی کولتووری.",
        action: {
          label: "سەردانی دەستپێشخەری",
          href: projectLinks.kishibInitiative,
        },
        visit: {
          label: "سەردانی دەستپێشخەری",
          href: projectLinks.kishibInitiative,
        },
      },
      {
        slug: "naima-baghdad-memory",
        image: "/images/projects/gallery.jpg",
        category: "پێشانگای هونەری و کولتووری",
        title: "نەعیمە و یادەوەری بەغدا",
        description:
          "پێشانگایەک لە ماڵی التحفیات کە بەغدا لە ڕێگەی هونەر و گێڕانەوەی کولتووری دەگەڕێنێتەوە.",
        summary:
          "پێشانگایەکی هونەرییە کە ئەزموونی وەسام ڕادی و غەدیر عەلتائی لە ماڵی التحفیات کۆدەکاتەوە، و یادەوەری مرۆڤ و شوێن لە بەغدا دەهێنێتەوە. ئەمەش لە چوارچێوەی ئاراستەی مسمارە بۆ پشتگیری هونەرمەندان و بەستنەوەی هونەری هاوچەرخ بە کەلەپوور و یادەوەری کولتووری.",
        details:
          "نەعیمە و یادەوەری بەغدا پێشانگایەکی هونەری و کولتوورییە لە ماڵی التحفیات کە یادەوەری شار لە ڕێگەی کاری بینراو و گێڕانەوەی نوێ دەخوێنێتەوە.",
        action: {
          label: "بینینی فایلی پێشانگا",
          href: projectLinks.naimaFile,
        },
        visit: {
          label: "بینینی فایلی پێشانگا",
          href: projectLinks.naimaFile,
        },
      },
      {
        slug: "digital-support-artists",
        image: "/images/projects/artist.jpg",
        category: "دەستپێشخەریی دیجیتاڵی",
        title: "پشتگیری دیجیتاڵی بۆ هونەرمەندان",
        description:
          "دیزاین و گەشەپێدانی ماڵپەڕ بۆ هونەرمەندان بۆ پیشاندانی کار و پاراستنی ئامادەبوونی دیجیتاڵی.",
        summary:
          "دەستپێشخەرییەکە لە مسمار بۆ تۆمارکردنی کاری هونەرمەندان و بەهێزکردنی ئامادەبوونیان لە دیجیتاڵدا، لە ڕێگەی دیزاین و گەشەپێدانی ماڵپەڕی هونەری سەربەخۆ کە ژیاننامە و کارەکانیان دەپارێزێت و گەیشتن پێیان ئاسانتر دەکات، و بە ماڵپەڕەکانی وەسام ڕادی و غەدیر عەلتائی دەستی پێکرد.",
        details:
          "مسمار پشتگیری دیجیتاڵی بۆ هونەرمەندان دەکات بە دیزاین و گەشەپێدانی ماڵپەڕی تایبەتی بۆ پیشاندانی کار و ڕێکخستنی ئەرشیفی بینراو.",
        externalLinks: [
          {
            label: "wissamradhi.art",
            href: projectLinks.wissamRadhi,
          },
          {
            label: "ghadeeraltaee.art/ar",
            href: projectLinks.ghadeerAlTaee,
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
