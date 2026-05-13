import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",

    title: "عن منظمة مسمار للفنون",

    intro:
      "منظمة مسمار للفنون والتنمية المستدامة هي مساحة ثقافية تعمل على إعادة إحياء العلاقة بين الفن والتراث والمجتمع. جاءت تسمية «مسمار» من أول مسمار استُخدم في ترميم بيت تراثي، ليصبح الاسم رمزاً لفكرة صغيرة تبدأ من تفصيل بسيط، لكنها قادرة على إعادة الحياة إلى مكان كامل. تؤمن المنظمة أن بيوت التراث ليست جدراناً قديمة أو مباني مهملة، بل ذاكرة مدينة، وحكايات عائلات، وهوية بصرية وثقافية يمكن أن تتحول إلى وجهات فنية وسياحية وتعليمية إذا أُعيد الاهتمام بها بالشكل الصحيح.",

    missionTitle: "رسالتنا",

    mission:
      "رسالة منظمة مسمار هي تحويل بيوت التراث من أماكن منسية إلى فضاءات حيّة للفن والثقافة والسياحة. تعمل المنظمة على دعم ترميم البيوت التراثية وإعادة استخدامها كمراكز للمعارض والورش الفنية والفعاليات الثقافية والبرامج التثقيفية، بحيث تصبح هذه البيوت قادرة على استقبال الفنانين، والطلبة، والزوار، والسياح، والجيل الجديد الذي يحتاج إلى رؤية تراث بلده بشكل حيّ وليس فقط من خلال الصور أو الكتب. لا تنظر مسمار إلى الترميم بوصفه عملاً عمرانياً فقط، بل بوصفه مشروعاً ثقافياً يعيد للمدينة جزءاً من شخصيتها.",

    visionTitle: "رؤيتنا",

    vision:
      "تطمح مسمار إلى أن تكون نموذجاً عراقياً رائداً في ربط التراث بالفن والتنمية المستدامة، وأن تساهم في تحويل بيوت بغداد التراثية إلى نقاط جذب ثقافي وسياحي. ففي بغداد وحدها تشير الإحصاءات المتداولة إلى وجود أكثر من 2400 دار تراثية، كثير منها يعاني الإهمال أو ضعف الصيانة أو غياب الاستثمار الثقافي الصحيح. المشكلة لا تتوقف عند البيت نفسه؛ أحياناً تكون الأزقة المؤدية لهذه البيوت مهملة، والواجهات غير مؤهلة، والخدمات المحيطة لا تساعد على استقبال الزوار. لذلك ترى مسمار أن إحياء البيت التراثي يجب أن يشمل المكان وما حوله، حتى يتحول إلى تجربة متكاملة قادرة على جذب الزائر وخدمة الاقتصاد المحلي.",

    goalsTitle: "أهدافنا",

    goals: [
      "إحياء بيوت التراث وتحويلها إلى وجهات ثقافية وسياحية وفنية قادرة على استقبال الجمهور والفعاليات.",
      "ترميم البيوت التراثية بأسلوب يحافظ على روح المكان وتفاصيله المعمارية الأصلية، لا أن يحوله إلى مبنى جديد بلا ذاكرة.",
      "إقامة معارض فنية وورش للفنانين داخل البيوت التراثية، حتى يصبح التراث منصة للإبداع المعاصر وليس مجرد ماضٍ محفوظ.",
      "تثقيف الجيل الجديد بتراث بغداد والعراق عبر برامج تعليمية، جولات تعريفية، ورش تاريخية، ومحتوى ثقافي مبسط.",
      "إعادة تنشيط المناطق المحيطة ببيوت التراث، لأن الطريق المؤدي إلى المكان جزء من تجربة الزائر وليس تفصيلاً ثانوياً.",
      "دعم الفنانين والحرفيين وأصحاب المبادرات الثقافية من خلال توفير فضاءات حقيقية للعرض والتدريب والتواصل مع الجمهور.",
      "إنتاج محتوى توثيقي وبصري يحفظ ذاكرة البيوت التراثية قبل اندثارها، ويعرض قصصها بطريقة حديثة قابلة للوصول للجمهور المحلي والدولي.",
      "المساهمة في بناء نموذج سياحي ثقافي يمكن أن يعود بفائدة اقتصادية على المدينة من خلال تشغيل المرشدين، الفنانين، الحرفيين، المقاهي الثقافية، والأسواق الصغيرة المحيطة.",
    ],
  },

  en: {
    dir: "ltr",
    back: "Back Home",

    title: "About Mismar Organization for Arts",

    intro:
      "Mismar Organization for Arts and Sustainable Development is a cultural space that reconnects art, heritage, and society. The name “Mismar” comes from the first nail used in restoring a heritage house — a small detail that became a symbol of how one precise act can bring an entire place back to life. Mismar believes heritage houses are not simply old walls or abandoned buildings; they are urban memory, family stories, visual identity, and cultural value that can become artistic, touristic, and educational destinations when properly revived.",

    missionTitle: "Our Mission",

    mission:
      "Mismar’s mission is to transform forgotten heritage houses into living spaces for art, culture, and tourism. The organization works to support restoration and adaptive reuse, turning heritage houses into venues for exhibitions, art workshops, cultural events, and educational programs. These houses should welcome artists, students, visitors, tourists, and younger generations who need to experience their country’s heritage as a living environment, not only as images or historical text.",

    visionTitle: "Our Vision",

    vision:
      "Mismar aims to become an Iraqi model for connecting heritage with art and sustainable development. Baghdad alone is reported to have more than 2,400 heritage houses, many of which suffer from neglect, weak maintenance, and the absence of proper cultural investment. The issue is not only the house itself; the alleys, access routes, façades, and surrounding services are often neglected as well. Mismar believes heritage revival must include the building and its surroundings so the visitor experience becomes complete and capable of attracting cultural tourism.",

    goalsTitle: "Our Goals",

    goals: [
      "Revive heritage houses and transform them into cultural, artistic, and touristic destinations.",
      "Restore heritage houses in a way that preserves their original architectural spirit and memory.",
      "Host exhibitions and art workshops inside heritage houses, making heritage a platform for contemporary creativity.",
      "Educate younger generations about Baghdad and Iraq’s heritage through programs, guided visits, workshops, and accessible cultural content.",
      "Reactivate the areas surrounding heritage houses, because the route to the place is part of the visitor experience.",
      "Support artists, craftspeople, and cultural initiatives by providing real spaces for display, training, and public engagement.",
      "Produce visual and documentary content that preserves the memory of heritage houses before they disappear.",
      "Build a cultural tourism model that benefits the city through guides, artists, craftspeople, cultural cafés, and nearby local businesses.",
    ],
  },

  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",

    title: "دەربارەی ڕێکخراوی مسمار بۆ هونەر",

    intro:
      "ڕێکخراوی مسمار بۆ هونەر و گەشەپێدانی بەردەوام شوێنێکی کولتوورییە بۆ گرێدانی هونەر، کەلەپوور و کۆمەڵگا. ناوی «مسمار» لە یەکەم مسمارەوە هاتووە کە لە نۆژەنکردنەوەی ماڵێکی کەلەپووری بەکارهات؛ وردەکارییەکی بچووک کە بووە هێمای دەستپێکردنی ژیانەوەی شوێنێکی تەواو. مسمار باوەڕی وایە ماڵە کەلەپوورییەکان تەنها دیوار و بینای کۆن نین، بەڵکو یادەوەری شار، چیرۆکی خێزانەکان و ناسنامەی بینراو و کولتوورین.",

    missionTitle: "ئەرکمان",

    mission:
      "ئەرکی مسمار ئەوەیە ماڵە کەلەپوورییە پشتگوێخراوەکان بگۆڕێت بۆ شوێنی زیندووی هونەر، کولتوور و گەشتوگوزار. ڕێکخراوەکە کار دەکات بۆ پشتگیری نۆژەنکردنەوە و بەکارهێنانی نوێی ئەم ماڵانە و گۆڕینیان بۆ شوێنی پێشانگا، وۆرکشۆپی هونەری، چالاکیی کولتووری و بەرنامەی فێرکاری.",

    visionTitle: "دیدگامان",

    vision:
      "مسمار دەیەوێت ببێتە نموونەیەکی عێراقی بۆ گرێدانی کەلەپوور بە هونەر و گەشەپێدانی بەردەوام. لە بەغدا ژمارەیەکی زۆر لە ماڵە کەلەپوورییەکان ماون، کە زۆریان تووشی پشتگوێخستن و کەمیی چاکسازی بوون. کێشەکە تەنها بیناکە نییە؛ زۆرجار کوچە و ڕێگە و خزمەتگوزاری دەوروبەریش پێویستی بە چاودێری هەیە. بۆیە مسمار پێی وایە زیندووکردنەوەی ماڵی کەلەپووری دەبێت شوێن و دەوروبەری پێکەوە بگرێتەوە.",

    goalsTitle: "ئامانجەکانمان",

    goals: [
      "زیندووکردنەوەی ماڵە کەلەپوورییەکان و گۆڕینیان بۆ شوێنی کولتووری، هونەری و گەشتیاری.",
      "نۆژەنکردنەوەی ماڵەکان بە شێوەیەک کە ڕۆح و وردەکاریی تەلارسازییەکە بپارێزێت.",
      "ڕێکخستنی پێشانگا و وۆرکشۆپی هونەری لە ناو ماڵە کەلەپوورییەکان.",
      "فێرکردنی نەوەی نوێ دەربارەی کەلەپووری بەغدا و عێراق بە بەرنامە و سەردان و ناوەڕۆکی کولتووری.",
      "زیندووکردنەوەی ناوچەکانی دەوروبەری ماڵە کەلەپوورییەکان، چونکە ڕێگەی گەیشتن بە شوێنەکە بەشێکە لە ئەزموونی سەردانکەر.",
      "پشتگیری هونەرمەندان و دەستکاران و دەستپێشخەرییە کولتوورییەکان.",
      "بەرهەمهێنانی ناوەڕۆکی وێنەیی و دۆکیۆمێنتاری بۆ پاراستنی یادەوەری ئەم شوێنانە.",
      "دروستکردنی نموونەیەکی گەشتیاریی کولتووری کە سوود بە شار و خەڵکەکەی بگەیەنێت.",
    ],
  },
};

export default async function AboutPage({
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

      <section className="px-6 pb-16 pt-32 md:px-16">
        <Link
          href={`/${locale}`}
          className="mb-8 inline-flex items-center gap-3 text-sm font-light text-[#2a1005]/60 hover:text-[#2f9c95]"
        >
          <ArrowIcon size={16} />
          {t.back}
        </Link>

        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr]">
          <div>
            <h1 className="text-[38px] font-light leading-[1.15] md:text-[72px]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-[820px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
              {t.intro}
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1400&auto=format&fit=crop"
            alt=""
            className="h-[280px] w-full object-cover md:h-[430px]"
          />
        </div>
      </section>

      <section className="grid gap-8 px-6 py-10 md:grid-cols-2 md:px-16">
        <div className="border-t border-[#2a1005]/20 pt-8">
          <h2 className="text-[30px] font-light md:text-[46px]">
            {t.missionTitle}
          </h2>
          <p className="mt-5 text-sm font-light leading-8 text-[#2a1005]/70 md:text-base">
            {t.mission}
          </p>
        </div>

        <div className="border-t border-[#2a1005]/20 pt-8">
          <h2 className="text-[30px] font-light md:text-[46px]">
            {t.visionTitle}
          </h2>
          <p className="mt-5 text-sm font-light leading-8 text-[#2a1005]/70 md:text-base">
            {t.vision}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 md:px-16">
        <h2 className="text-[30px] font-light md:text-[46px]">
          {t.goalsTitle}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.goals.map((goal, index) => (
            <div
              key={goal}
              className="border border-[#2a1005]/15 bg-[#fbf8f3] p-6"
            >
              <span className="text-sm text-[#2f9c95]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 text-sm font-light leading-7 text-[#2a1005]/75">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}