import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

type Locale = "ar" | "en" | "ku";

type Props = {
  params: Promise<{ locale: Locale }>;
};

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    eyebrow: "مسمار",
    title: "شروط استخدام الموقع",
    intro:
      "تحدد هذه الشروط قواعد استخدام موقع مؤسسة مسمار للفنون والتنمية المستدامة والمواد المنشورة فيه.",
    sections: [
      {
        title: "طبيعة الموقع",
        text: "هذا الموقع منصة تعريفية وثقافية تعرض مشاريع ومبادرات مؤسسة مسمار ومحتواها الفني والتراثي والرقمي.",
      },
      {
        title: "حقوق المحتوى",
        text: "تحتفظ مؤسسة مسمار بحقوق النصوص والتصاميم والصور الخاصة بها والمنشورة عبر الموقع، ما لم يذكر خلاف ذلك.",
      },
      {
        title: "حقوق الفنانين والمصورين",
        text: "الأعمال الفنية والصور والمواد التي تعود لفنانين أو مصورين أو شركاء تبقى حقوقها لأصحابها الأصليين.",
      },
      {
        title: "الاستخدام المسموح",
        text: "يسمح بتصفح الموقع واستخدام محتواه لأغراض شخصية وغير تجارية، مع احترام حقوق المؤسسة وأصحاب الأعمال.",
      },
      {
        title: "الاستخدام المحظور",
        text: "يمنع الاستخدام التجاري أو إعادة نشر النصوص أو الصور أو التصاميم أو المواد المنشورة دون إذن مسبق من المؤسسة أو صاحب الحق.",
      },
      {
        title: "اسم وشعار مسمار",
        text: "لا يجوز استخدام اسم أو شعار مسمار بطريقة توحي بوجود شراكة أو اعتماد أو تفويض غير موجود.",
      },
      {
        title: "سلامة الموقع",
        text: "يمنع إساءة استخدام الموقع أو محاولة تعطيله أو الوصول غير المصرح به إلى أي جزء منه أو من بنيته التقنية.",
      },
      {
        title: "تحديث المعلومات",
        text: "المعلومات والمواعيد والمشاريع والمبادرات المنشورة على الموقع قابلة للتحديث أو التعديل بحسب تطور أعمال المؤسسة.",
      },
      {
        title: "الروابط الخارجية",
        text: "قد يحتوي الموقع على روابط لمواقع خارجية، ومسمار غير مسؤولة عن محتوى تلك المواقع أو سياساتها أو ممارساتها.",
      },
      {
        title: "تعديل المحتوى",
        text: "يمكن لمؤسسة مسمار تعديل أو إزالة أي محتوى من الموقع عند الحاجة، دون التزام بإشعار مسبق.",
      },
      {
        title: "القانون المعمول به",
        text: "تخضع هذه الشروط للقوانين العراقية النافذة، ويتم التعامل مع أي نزاع وفق الأطر القانونية المختصة.",
      },
    ],
  },
  en: {
    dir: "ltr",
    back: "Back Home",
    eyebrow: "Mismar",
    title: "Website Terms of Use",
    intro:
      "These terms define the rules for using the website of MISMAR Foundation for Arts and Sustainable Development and the materials published on it.",
    sections: [
      {
        title: "Website Purpose",
        text: "This website is an informational and cultural platform presenting the projects and initiatives of MISMAR Foundation and its artistic, heritage, and digital content.",
      },
      {
        title: "Content Rights",
        text: "MISMAR Foundation retains the rights to its texts, designs, and images published on the website unless otherwise stated.",
      },
      {
        title: "Artists' and Photographers' Rights",
        text: "Artworks, photographs, and materials belonging to artists, photographers, or partners remain the property of their respective owners.",
      },
      {
        title: "Permitted Use",
        text: "Visitors may browse the website and use its content for personal, non-commercial purposes while respecting the rights of the foundation and content owners.",
      },
      {
        title: "Prohibited Use",
        text: "Commercial use or republication of texts, images, designs, or other materials is not allowed without prior permission from the foundation or the rights holder.",
      },
      {
        title: "Mismar Name and Logo",
        text: "The Mismar name or logo may not be used in a way that suggests a partnership, endorsement, or authorization that does not exist.",
      },
      {
        title: "Website Integrity",
        text: "Misuse of the website, attempts to disrupt it, or unauthorized access to any part of it or its technical infrastructure are prohibited.",
      },
      {
        title: "Information Updates",
        text: "Information, dates, projects, and initiatives published on the website may be updated or changed as the foundation's work develops.",
      },
      {
        title: "External Links",
        text: "The website may include links to external websites. Mismar is not responsible for the content, policies, or practices of those websites.",
      },
      {
        title: "Content Changes",
        text: "MISMAR Foundation may modify or remove website content when needed without prior notice.",
      },
      {
        title: "Applicable Law",
        text: "These terms are governed by the laws in force in Iraq, and any dispute will be handled through the competent legal frameworks.",
      },
    ],
  },
  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",
    eyebrow: "مسمار",
    title: "مەرجەکانی بەکارهێنانی ماڵپەڕ",
    intro:
      "ئەم مەرجانە ڕێساکانی بەکارهێنانی ماڵپەڕی دامەزراوەی مسمار بۆ هونەر و گەشەپێدانی بەردەوام و ئەو ماددانە دیاری دەکەن کە تێیدا بڵاو دەکرێنەوە.",
    sections: [
      {
        title: "سروشتی ماڵپەڕ",
        text: "ئەم ماڵپەڕە سەکۆیەکی ناساندنی و کولتوورییە بۆ پێشاندانی پڕۆژە و دەستپێشخەرییەکانی دامەزراوەی مسمار و ناوەڕۆکی هونەری، کەلەپووری و دیجیتاڵی.",
      },
      {
        title: "مافی ناوەڕۆک",
        text: "دامەزراوەی مسمار مافی دەق، دیزاین و وێنە تایبەتەکانی خۆی کە لە ماڵپەڕەکەدا بڵاو دەکرێنەوە دەپارێزێت، مەگەر بە پێچەوانە ڕوون کرابێتەوە.",
      },
      {
        title: "مافی هونەرمەندان و وێنەگران",
        text: "کارە هونەرییەکان، وێنەکان و ماددەکانی تایبەت بە هونەرمەندان، وێنەگران یان هاوبەشان، مافیان بۆ خاوەنە ڕاستەقینەکانیان دەمێنێتەوە.",
      },
      {
        title: "بەکارهێنانی ڕێگەپێدراو",
        text: "ڕێگە پێدراوە ماڵپەڕەکە بۆ مەبەستی کەسی و ناتجاری ببینرێت و بەکاربهێنرێت، لەگەڵ ڕێزگرتن لە مافی دامەزراوە و خاوەنەکانی ناوەڕۆک.",
      },
      {
        title: "بەکارهێنانی قەدەغەکراو",
        text: "بەکارهێنانی بازرگانی یان دووبارە بڵاوکردنەوەی دەق، وێنە، دیزاین یان ماددەکان بەبێ مۆڵەتی پێشوەختە قەدەغەیە.",
      },
      {
        title: "ناو و لوگۆی مسمار",
        text: "نابێت ناو یان لوگۆی مسمار بە شێوەیەک بەکاربهێنرێت کە وا پیشان بدات هاوبەشی، پشتگیری یان ڕێگەپێدانێکی نییە هەیە.",
      },
      {
        title: "سەلامەتی ماڵپەڕ",
        text: "خراپ بەکارهێنانی ماڵپەڕ، هەوڵدان بۆ وەستاندنی کارکردنی یان چوونەژوورەوەی بێ مۆڵەت بۆ بەشێکی ماڵپەڕ یان بنیاتە تەکنیکییەکەی قەدەغەیە.",
      },
      {
        title: "نوێکردنەوەی زانیاری",
        text: "زانیاری، کاتەکان، پڕۆژەکان و دەستپێشخەرییەکانی بڵاوکراوە لە ماڵپەڕەکەدا دەتوانرێت بەپێی پێشکەوتنی کاری دامەزراوە نوێ یان گۆڕدرێن.",
      },
      {
        title: "بەستەرە دەرەکییەکان",
        text: "ماڵپەڕەکە لەوانەیە بەستەر بۆ ماڵپەڕی دەرەکی هەبێت. مسمار بەرپرسیار نییە لە ناوەڕۆک، سیاسەت یان کرداری ئەو ماڵپەڕانە.",
      },
      {
        title: "گۆڕینی ناوەڕۆک",
        text: "دامەزراوەی مسمار دەتوانێت کاتێک پێویست بێت ناوەڕۆکی ماڵپەڕ بگۆڕێت یان بیسڕێتەوە بەبێ ئاگادارکردنەوەی پێشوەختە.",
      },
      {
        title: "یاسای کارپێکراو",
        text: "ئەم مەرجانە بە پێی یاسا کارپێکراوەکانی عێراق بەڕێوە دەبرێن و هەر ناکۆکییەک لە ڕێگەی چوارچێوە یاساییە تایبەتمەندەکان چارەسەر دەکرێت.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "terms", "terms");
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = content[locale] ?? content.ar;
  const ArrowIcon = t.dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <main dir={t.dir} className="min-h-screen bg-[#f3ede5] text-[#2a1005]">
      <section className="border-b border-[#2a1005]/10 px-6 pb-14 pt-32 md:px-16 md:pb-16">
        <Link
          href={`/${locale}`}
          className="mb-8 inline-flex items-center gap-3 text-sm font-light text-[#2a1005]/60 transition hover:text-[#2f9c95]"
        >
          <ArrowIcon size={16} />
          {t.back}
        </Link>

        <p className="text-xs font-light uppercase tracking-[0.3em] text-[#2f9c95]">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[980px] text-[42px] font-light leading-[1.1] md:text-[78px]">
          {t.title}
        </h1>
        <p className="mt-7 max-w-[820px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
          {t.intro}
        </p>
      </section>

      <section className="px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-x-12 gap-y-8 md:grid-cols-2">
          {t.sections.map((section) => (
            <article
              key={section.title}
              className="border-t border-[#2a1005]/15 pt-6"
            >
              <h2 className="text-[26px] font-light leading-tight md:text-[34px]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm font-light leading-8 text-[#2a1005]/70 md:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
