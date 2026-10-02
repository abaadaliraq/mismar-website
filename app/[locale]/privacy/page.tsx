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
    title: "سياسة الخصوصية",
    intro:
      "توضح هذه السياسة كيف تتعامل مؤسسة مسمار للفنون والتنمية المستدامة مع البيانات التي قد يقدمها زوار الموقع عند التواصل أو استخدام الصفحات التعريفية.",
    sections: [
      {
        title: "من نحن",
        text: "مسمار مؤسسة غير حكومية ثقافية وفنية تعمل على إحياء التراث ودعم المبادرات الفنية والثقافية والرقمية.",
      },
      {
        title: "البيانات التي قد نجمعها",
        text: "قد يجمع الموقع الاسم، البريد الإلكتروني، رقم الهاتف، ومحتوى رسائل التواصل عندما يقوم المستخدم بإدخالها طوعاً عبر النماذج أو وسائل التواصل المتاحة.",
      },
      {
        title: "البيانات التقنية الأساسية",
        text: "قد تقوم خدمات الاستضافة بجمع بيانات تقنية أساسية مثل عنوان الاتصال، نوع الجهاز أو المتصفح، ووقت الزيارة لأغراض تشغيل الموقع وحمايته.",
      },
      {
        title: "استخدام البيانات",
        text: "نستخدم البيانات للرد على الاستفسارات، إدارة التواصل مع المهتمين والشركاء، وتحسين تجربة الموقع ومحتواه.",
      },
      {
        title: "عدم بيع البيانات",
        text: "لا تبيع مؤسسة مسمار البيانات الشخصية ولا تؤجرها ولا تستخدمها لأغراض تجارية مستقلة عن نشاط المؤسسة.",
      },
      {
        title: "مشاركة البيانات",
        text: "قد تتم مشاركة بيانات محدودة مع مزودي الخدمات التقنية عند الضرورة فقط، مثل خدمات الاستضافة أو البريد، وبالقدر اللازم لتشغيل الموقع والتواصل.",
      },
      {
        title: "الروابط الخارجية",
        text: "قد يحتوي الموقع على روابط لمواقع أو تطبيقات خارجية، ولكل منها سياسة خصوصية مستقلة لا تتحمل مسمار مسؤولية محتواها أو ممارساتها.",
      },
      {
        title: "حماية البيانات والاحتفاظ بها",
        text: "نسعى إلى حماية البيانات المتاحة لنا ونحتفظ بها للمدة اللازمة فقط للرد على الطلبات أو إدارة التواصل أو تلبية متطلبات تشغيلية مشروعة.",
      },
      {
        title: "حقوق المستخدم",
        text: "يمكن للمستخدم طلب تصحيح أو حذف البيانات التي قدمها للمؤسسة، وسنراجع الطلب وفق الإمكانات الفنية والمتطلبات القانونية والتنظيمية.",
      },
      {
        title: "تحديث السياسة",
        text: "قد يتم تحديث هذه السياسة عند الحاجة، ويصبح النص المنشور في هذه الصفحة هو النسخة المعتمدة عند نشره.",
      },
      {
        title: "التواصل",
        text: "للاستفسار حول الخصوصية أو طلب تعديل البيانات، يمكن التواصل مع مؤسسة مسمار عبر البريد الإلكتروني: info@mismararts.com",
      },
    ],
  },
  en: {
    dir: "ltr",
    back: "Back Home",
    eyebrow: "Mismar",
    title: "Privacy Policy",
    intro:
      "This policy explains how MISMAR Foundation for Arts and Sustainable Development handles information that visitors may provide when contacting the foundation or using this informational website.",
    sections: [
      {
        title: "Who We Are",
        text: "MISMAR is a cultural and artistic non-governmental foundation working on heritage revival and artistic, cultural, and digital initiatives.",
      },
      {
        title: "Information We May Collect",
        text: "The website may collect a name, email address, phone number, and contact messages when users voluntarily submit them through forms or available contact channels.",
      },
      {
        title: "Basic Technical Data",
        text: "Hosting services may collect basic technical data such as connection address, device or browser type, and visit time for website operation and protection.",
      },
      {
        title: "How We Use Information",
        text: "We use information to respond to inquiries, manage communication with interested visitors and partners, and improve the website experience and content.",
      },
      {
        title: "No Sale of Personal Data",
        text: "MISMAR Foundation does not sell or rent personal data and does not use it for commercial purposes separate from the foundation's work.",
      },
      {
        title: "Data Sharing",
        text: "Limited data may be shared with technical service providers only when necessary, such as hosting or email services, and only to the extent needed to operate the website and communication.",
      },
      {
        title: "External Links",
        text: "The website may include links to external websites or applications. Each has its own privacy policy, and MISMAR is not responsible for their content or practices.",
      },
      {
        title: "Protection and Retention",
        text: "We seek to protect the information available to us and retain it only for as long as needed to respond to requests, manage communication, or meet legitimate operational requirements.",
      },
      {
        title: "User Rights",
        text: "Users may request correction or deletion of information they provided to the foundation. We will review such requests according to technical possibilities and applicable legal or organizational requirements.",
      },
      {
        title: "Policy Updates",
        text: "This policy may be updated when needed. The text published on this page is the approved version once posted.",
      },
      {
        title: "Contact",
        text: "For privacy questions or data correction requests, contact MISMAR Foundation at: info@mismararts.com",
      },
    ],
  },
  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",
    eyebrow: "مسمار",
    title: "سیاسەتی تایبەتمەندی",
    intro:
      "ئەم سیاسەتە ڕوون دەکاتەوە دامەزراوەی مسمار بۆ هونەر و گەشەپێدانی بەردەوام چۆن مامەڵە لەگەڵ ئەو زانیارییانە دەکات کە سەردانکەران لە کاتی پەیوەندی یان بەکارهێنانی ماڵپەڕەکەدا پێشکەشی دەکەن.",
    sections: [
      {
        title: "ئێمە کێین",
        text: "مسمار دامەزراوەیەکی ناحکومی کولتووری و هونەرییە کە کار دەکات بۆ زیندووکردنەوەی کەلەپوور و پشتگیری دەستپێشخەرییە هونەری، کولتووری و دیجیتاڵییەکان.",
      },
      {
        title: "ئەو زانیارییانەی لەوانەیە کۆبکرێنەوە",
        text: "ماڵپەڕەکە دەتوانێت ناو، ئیمەیڵ، ژمارەی مۆبایل و ناوەڕۆکی نامەکانی پەیوەندی کۆبکاتەوە کاتێک بەکارهێنەر بە ئارەزووی خۆی ئەوانە داخڵ دەکات.",
      },
      {
        title: "زانیاری تەکنیکی بنەڕەتی",
        text: "خزمەتگوزارییەکانی خانەخوێیی لەوانەیە زانیاری تەکنیکی بنەڕەتی وەک ناونیشانی پەیوەندی، جۆری ئامێر یان وێبگەڕ و کاتی سەردان کۆبکەنەوە بۆ کارکردن و پاراستنی ماڵپەڕ.",
      },
      {
        title: "بەکارهێنانی زانیاری",
        text: "زانیاری بەکاردێنین بۆ وەڵامدانەوەی پرسیارەکان، بەڕێوەبردنی پەیوەندی لەگەڵ هاوبەشان و سەردانکەران، و باشترکردنی ئەزموون و ناوەڕۆکی ماڵپەڕ.",
      },
      {
        title: "نەفرۆشتنی زانیاری کەسی",
        text: "دامەزراوەی مسمار زانیاری کەسی نافرۆشێت، بەکرێی نادات و بۆ مەبەستی بازرگانی سەربەخۆ لە کاری دامەزراوە بەکاری ناهێنێت.",
      },
      {
        title: "هاوبەشکردنی زانیاری",
        text: "لەوانەیە زانیارییەکی سنووردار تەنها کاتێک پێویست بێت لەگەڵ دابینکەرانی خزمەتگوزاری تەکنیکی هاوبەش بکرێت، وەک خانەخوێیی یان ئیمەیڵ.",
      },
      {
        title: "بەستەرە دەرەکییەکان",
        text: "ماڵپەڕەکە لەوانەیە بەستەر بۆ ماڵپەڕ یان ئەپی دەرەکی هەبێت. هەر یەکەیان سیاسەتی تایبەتمەندی خۆی هەیە، و مسمار بەرپرسیار نییە لە ناوەڕۆک یان کرداریان.",
      },
      {
        title: "پاراستن و هەڵگرتن",
        text: "هەوڵ دەدەین زانیارییە بەردەستەکان بپارێزین و تەنها بۆ ماوەی پێویست بۆ وەڵامدانەوە، بەڕێوەبردنی پەیوەندی یان پێداویستییە ڕەواکانی کار هەڵیان بگرین.",
      },
      {
        title: "مافی بەکارهێنەر",
        text: "بەکارهێنەر دەتوانێت داوای ڕاستکردنەوە یان سڕینەوەی ئەو زانیارییانە بکات کە پێشکەشی دامەزراوەی کردووە.",
      },
      {
        title: "نوێکردنەوەی سیاسەت",
        text: "ئەم سیاسەتە لە کاتی پێویستدا نوێ دەکرێتەوە، و ئەو دەقەی لەم پەڕەیە بڵاو دەکرێتەوە وەک وەشانی پەسەندکراو هەژمار دەکرێت.",
      },
      {
        title: "پەیوەندی",
        text: "بۆ پرسیار لەبارەی تایبەتمەندی یان داوای ڕاستکردنەوەی زانیاری، پەیوەندی بە مسمارەوە بکە لە: info@mismararts.com",
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
  return buildMetadata(locale, "privacy", "privacy");
}

export default async function PrivacyPage({ params }: Props) {
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
