import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

const content = {
  ar: {
    dir: "rtl",

    back: "العودة للرئيسية",

    heroTitle: "الورش والمعارض الفنية",

    heroText:
      "تؤمن منظمة مسمار للفنون أن الفن ليس نشاطاً منفصلاً عن المجتمع، بل أداة حقيقية لإحياء الذاكرة الثقافية، وربط الأجيال الجديدة بتاريخها، وتحويل البيوت التراثية إلى مساحات حيّة للفكر والإبداع والتعلّم.",

    section1Title: "ورش فنية بمختلف التخصصات",

    section1Text:
      "تنظم منظمة مسمار للفنون سلسلة واسعة من الورش الفنية داخل بيت التحفيات، مقر المنظمة، وتشمل ورش الرسم، النحت، الخط العربي، الأعمال اليدوية، الحرف التقليدية، التصوير الفوتوغرافي، وفنون إعادة التدوير. تسعى هذه الورش إلى توفير مساحة مفتوحة للتجربة والتعلّم والتعبير الفني، مع التركيز على تشجيع الشباب والأطفال على اكتشاف قدراتهم الإبداعية وتطويرها ضمن بيئة ثقافية مرتبطة بالتراث العراقي.",

    section2Title: "معارض للفنون والهوية البصرية",

    section2Text:
      "تقيم المنظمة معارض فنية دورية تستضيف أعمال فنانين تشكيليين، نحاتين، ومبدعين من مختلف المجالات الفنية. تهدف هذه المعارض إلى خلق مساحة حوار بين الفن والتراث والمدينة، وإعادة تقديم البيوت التراثية كمراكز ثقافية معاصرة تحتضن الفن والجمهور في آن واحد. كما تعمل المنظمة على دعم الفنانين الشباب ومنحهم فرصة عرض أعمالهم داخل فضاءات تحمل قيمة تاريخية ومعمارية.",

    section3Title: "رحلات مدرسية وتجارب ثقافية",

    section3Text:
      "تستقبل منظمة مسمار طلبة المدارس والجامعات ضمن زيارات تعليمية وثقافية داخل بيت التحفيات، الذي يحتوي على مجموعة كبيرة من الأنتيكات والقطع التراثية والتحف القديمة المرتبطة بتاريخ بغداد والعراق. يتعرف الزوار خلال هذه الجولات على تفاصيل العمارة البغدادية القديمة، وأنماط الحياة التراثية، إضافة إلى شرح القطع النادرة والمقتنيات التاريخية بطريقة تفاعلية مبسطة تناسب مختلف الأعمار.",

    section4Title: "ورش توعية بالتراث والثقافة العراقية",

    section4Text:
      "لا تقتصر أنشطة المنظمة على الفنون فقط، بل تشمل أيضاً تنظيم ورش وجلسات توعية حول تاريخ العراق، حضارته، التنوع الثقافي، وأهمية الحفاظ على البيوت التراثية والهوية البصرية للمدن القديمة. تهدف هذه البرامج إلى تعزيز ارتباط الجيل الجديد بتراثه المحلي، وخلق وعي حقيقي بأهمية الثقافة كجزء من مستقبل المدن وليس فقط ماضيها.",

    quote:
      "تسعى مسمار إلى أن تصبح البيوت التراثية فضاءات حيّة للفن والثقافة والتعليم، بدلاً من أن تبقى مباني مهملة خارج ذاكرة المدينة.",
  },

  en: {
    dir: "ltr",

    back: "Back Home",

    heroTitle: "Workshops & Art Exhibitions",

    heroText:
      "Mismar believes that art is not separated from society, but a tool to revive cultural memory and reconnect younger generations with their heritage.",

    section1Title: "Creative Workshops",

    section1Text:
      "Mismar organizes workshops in painting, sculpture, crafts, Arabic calligraphy, photography, and traditional arts inside Bayt Al-Tuhafiyat.",

    section2Title: "Art Exhibitions",

    section2Text:
      "The organization hosts exhibitions for painters, sculptors, and artists from different creative fields inside restored heritage spaces.",

    section3Title: "Educational School Visits",

    section3Text:
      "Students and visitors explore antiques, historical collections, and Baghdad’s heritage architecture through guided tours and cultural activities.",

    section4Title: "Cultural Awareness Programs",

    section4Text:
      "Mismar also organizes awareness workshops about Iraqi history, heritage, architecture, and cultural identity.",

    quote:
      "Heritage houses should become living cultural spaces, not forgotten buildings.",
  },

  ku: {
    dir: "rtl",

    back: "گەڕانەوە بۆ سەرەکی",

    heroTitle: "وۆرکشۆپ و پێشانگاکانی هونەری",

    heroText:
      "ڕێکخراوی مسمار باوەڕی وایە هونەر ئامرازێکە بۆ زیندووکردنەوەی یادەوەری کولتووری.",

    section1Title: "وۆرکشۆپی هونەری",

    section1Text:
      "مسمار وۆرکشۆپی وێنەکێشان، پەیکەرسازی، هونەرە دەستییەکان و فۆتۆگرافی ڕێکدەخات.",

    section2Title: "پێشانگاکانی هونەر",

    section2Text:
      "ڕێکخراوەکە پێشانگای هونەرمەندان و داهێنەران لە ناو شوێنە کەلەپوورییەکاندا ڕێکدەخات.",

    section3Title: "گەشتی قوتابخانەکان",

    section3Text:
      "خوێندکاران دەتوانن ئانتیك و کۆکراوە مێژووییەکان ببینن و فێری مێژووی بەغدا ببن.",

    section4Title: "بەرنامەکانی هۆشیاری کولتووری",

    section4Text:
      "مسمار چالاکییە تایبەتەکان بۆ ناساندنی مێژوو و کەلەپووری عێراق ڕێکدەخات.",

    quote:
      "ماڵە کەلەپوورییەکان دەبێت ببنە شوێنی زیندووی هونەر و فێربوون.",
  },
};

export default async function ActivitiesPage({ params }: Props) {
  const { locale } = await params;

  const t = content[locale] ?? content.ar;

  return (
    <main
      dir={t.dir}
      className="min-h-screen bg-[#f3ede5] text-[#2a1005]"
    >
      {/* HERO */}
      <section className="grid min-h-[65vh] items-center border-b border-[#2a1005]/10 px-6 py-24 md:grid-cols-2 md:px-16">
        <div>
          <Link
            href={`/${locale}`}
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#2a1005]/60 transition hover:text-[#2f9c95]"
          >
            <ArrowLeft size={16} />
            {t.back}
          </Link>

          <h1 className="max-w-[700px] text-5xl font-light leading-[1.15] md:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="mt-8 max-w-[700px] text-base leading-9 text-[#2a1005]/70 md:text-lg">
            {t.heroText}
          </p>
        </div>

        <div className="mt-12 md:mt-0">
          <img
            src="/images/hero.jpg"
            alt="Mismar Workshops"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* SECTIONS */}
      <section className="space-y-0">
        {[
          {
            title: t.section1Title,
            text: t.section1Text,
            image: "/images/workshop1.jpg",
          },
          {
            title: t.section2Title,
            text: t.section2Text,
            image: "/images/workshop2.jpg",
          },
          {
            title: t.section3Title,
            text: t.section3Text,
            image: "/images/workshop3.jpg",
          },
          {
            title: t.section4Title,
            text: t.section4Text,
            image: "/images/workshop4.jpg",
          },
        ].map((item, index) => (
          <section
            key={index}
            className={`grid border-b border-[#2a1005]/10 md:min-h-[430px] md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="flex items-center px-6 py-16 md:px-16">
              <div className="max-w-[650px]">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#2f9c95]">
                  MISMAR ARTS
                </p>

                <h2 className="text-4xl font-light leading-tight md:text-5xl">
                  {item.title}
                </h2>

                <p className="mt-8 text-base leading-9 text-[#2a1005]/70">
                  {item.text}
                </p>
              </div>
            </div>

            <div className="relative h-[320px] md:h-auto">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </section>
        ))}
      </section>

      {/* QUOTE */}
      <section className="px-6 py-24 md:px-16">
        <div className="border border-[#2a1005]/10 bg-[#f8f3eb] px-8 py-16 md:px-16">
          <p className="max-w-[1000px] text-3xl font-light leading-[1.7] md:text-5xl">
            “{t.quote}”
          </p>
        </div>
      </section>
    </main>
  );
}