import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type Locale = "ar" | "en" | "ku";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    title: "ترميم بيوت التراث",
    intro:
      "تعمل منظمة مسمار للفنون والتنمية المستدامة على إعادة إحياء البيوت والوجهات التراثية المهملة، من خلال ترميمها والحفاظ على أسلوبها المعماري القديم وتحويلها إلى مساحات ثقافية وسياحية وفنية قابلة للحياة من جديد.",
    s1Title: "الترميم ليس طلاءً جديداً",
    s1Text:
      "ترى منظمة مسمار أن ترميم البيت التراثي لا يعني إزالة ملامحه القديمة أو تحويله إلى بناء حديث بلا ذاكرة، بل يعني فهم روحه المعمارية، واحترام مواده الأصلية، والحفاظ على تفاصيله من أبواب وشبابيك وأقواس وزخارف ومساحات داخلية. الهدف هو إعادة الحياة للمكان من دون قتل شخصيته.",
    s2Title: "إحياء الوجهات المهملة",
    s2Text:
      "هناك بيوت ووجهات تراثية كثيرة ما زالت مهملة أو مغلقة أو غير مؤهلة لاستقبال الزوار. تعمل مسمار على بناء نموذج يمكن تكراره في أكثر من موقع، بحيث يتم ترميم هذه الأماكن وتحويلها إلى وجهات تستقبل المعارض والورش والجولات الثقافية والزيارات المدرسية والسياحية.",
    s3Title: "أثر ثقافي وسياحي",
    s3Text:
      "عندما يتم الاهتمام ببيت تراثي واحد، لا يستفيد المبنى فقط، بل تستفيد المنطقة المحيطة به أيضاً. يمكن أن تتحول الأزقة والواجهات والمحال القريبة إلى جزء من تجربة سياحية وثقافية متكاملة، وهذا يخلق حركة اقتصادية وفرصاً للفنانين والحرفيين والمرشدين الثقافيين.",
    sliderTitle: "قبل وبعد الترميم",
    sliderText:
      "في هذا المثال، تم ترميم بيت تراثي بالكامل مع الحفاظ على أسلوبه المعماري القديم وروحه الأصلية، ليعود كمكان قابل لاستقبال الأنشطة الثقافية والفنية.",
  },
  en: {
    dir: "ltr",
    back: "Back Home",
    title: "Heritage House Restoration",
    intro:
      "Mismar works to revive neglected heritage houses and destinations by restoring their architectural identity and transforming them into living cultural, artistic, and touristic spaces.",
    s1Title: "Restoration is not repainting",
    s1Text:
      "Restoring a heritage house means understanding its architectural soul, preserving original materials, and respecting doors, windows, arches, ornaments, and interior proportions.",
    s2Title: "Reviving neglected destinations",
    s2Text:
      "Mismar aims to restore more neglected heritage places and turn them into destinations for exhibitions, workshops, school visits, and cultural tourism.",
    s3Title: "Cultural and touristic impact",
    s3Text:
      "Restoring one heritage house can reactivate its surrounding area and create value for artists, craftspeople, cultural guides, and local businesses.",
    sliderTitle: "Before and After Restoration",
    sliderText:
      "This example shows a fully restored heritage house while preserving its original architectural character.",
  },
  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",
    title: "نۆژەنکردنەوەی ماڵە کەلەپوورییەکان",
    intro:
      "مسمار کار دەکات بۆ نۆژەنکردنەوەی ماڵ و شوێنە کەلەپوورییە پشتگوێخراوەکان و گۆڕینیان بۆ شوێنی کولتووری و هونەری.",
    s1Title: "نۆژەنکردنەوە تەنها ڕەنگکردن نییە",
    s1Text:
      "نۆژەنکردنەوە واتە پاراستنی ڕۆح و وردەکارییەکانی بیناکە و ڕێزگرتن لە شێوازی تەلارسازیی کۆن.",
    s2Title: "زیندووکردنەوەی شوێنە پشتگوێخراوەکان",
    s2Text:
      "مسمار دەیەوێت شوێنە کەلەپوورییەکان بگۆڕێت بۆ پێشانگا، وۆرکشۆپ و سەردانی کولتووری.",
    s3Title: "کاریگەری کولتووری و گەشتیاری",
    s3Text:
      "نۆژەنکردنەوەی ماڵێکی کەلەپووری دەتوانێت ناوچەکەی دەوروبەر هەژێنێت و سوود بە هونەرمەندان و دەستکاران بگەیەنێت.",
    sliderTitle: "پێش و دوای نۆژەنکردنەوە",
    sliderText:
      "ئەم نموونەیە ماڵێکی کەلەپوورییە کە بە پاراستنی شێوازی تەلارسازی کۆن نۆژەن کراوەتەوە.",
  },
};

export default async function RestorationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = content[locale] ?? content.ar;
  const ArrowIcon = t.dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <main dir={t.dir} className="min-h-screen bg-[#f3ede5] text-[#2a1005]">
      <Navbar locale={locale} />

      <section className="grid min-h-[620px] items-center gap-10 border-b border-[#2a1005]/10 px-6 pb-16 pt-32 md:grid-cols-[1fr_0.9fr] md:px-16">
        <div>
          <Link
            href={`/${locale}`}
            className="mb-8 inline-flex items-center gap-3 text-sm font-light text-[#2a1005]/60 transition hover:text-[#2f9c95]"
          >
            <ArrowIcon size={16} />
            {t.back}
          </Link>

          <h1 className="text-[40px] font-light leading-[1.1] md:text-[76px]">
            {t.title}
          </h1>

          <p className="mt-7 max-w-[820px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
            {t.intro}
          </p>
        </div>

        <img
          src="/images/restoration-hero.jpg"
          alt="Heritage restoration"
          className="h-[300px] w-full object-cover md:h-[440px]"
        />
      </section>

      <section className="grid border-b border-[#2a1005]/10 md:grid-cols-3">
        {[
          { title: t.s1Title, text: t.s1Text },
          { title: t.s2Title, text: t.s2Text },
          { title: t.s3Title, text: t.s3Text },
        ].map((item) => (
          <div key={item.title} className="border-[#2a1005]/10 p-6 md:border-l md:p-10">
            <h2 className="text-[28px] font-light leading-tight md:text-[38px]">
              {item.title}
            </h2>
            <p className="mt-6 text-sm font-light leading-8 text-[#2a1005]/68">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mb-10 max-w-[900px]">
          <h2 className="text-[34px] font-light md:text-[58px]">
            {t.sliderTitle}
          </h2>
          <p className="mt-5 text-sm font-light leading-8 text-[#2a1005]/70 md:text-base">
            {t.sliderText}
          </p>
        </div>

        <BeforeAfterSlider />
      </section>
    </main>
  );
}