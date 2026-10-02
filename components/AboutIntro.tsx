"use client";

import { motion } from "framer-motion";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    eyebrow: "ذاكرة حيّة",
    established: "تأسست",
    year: "2026",
    title: (
      <>
        ذاكرة بغداد
        <br />
        عبر الفن والتراث
      </>
    ),
    lead:
      "تعمل مسمار على إعادة حضور التراث في الحياة المعاصرة، من خلال الفن، إحياء الأماكن، توثيق المقتنيات، وصناعة تجارب ثقافية تربط الماضي بالحاضر.",
    body:
      "من البيت التراثي إلى العمل الفني والمبادرة الرقمية، تتعامل المؤسسة مع الذاكرة كمساحة قابلة للحفظ والتطوير والمشاركة.",
    imageAltMain: "تفاصيل من تجربة مؤسسة مسمار داخل بيت تراثي في بغداد",
    imageAltDetail01: "مساحة فنية وتراثية ضمن مبادرات مؤسسة مسمار",
    imageAltDetail02: "مقتنيات وتراث بغدادي ضمن ذاكرة مؤسسة مسمار",
  },

  en: {
    dir: "ltr",
    eyebrow: "Living Memory",
    established: "Established",
    year: "2026",
    title: (
      <>
        Baghdad’s memory
        <br />
        through art and heritage
      </>
    ),
    lead:
      "Mismar restores the presence of heritage in contemporary life through art, place revival, collection documentation, and cultural experiences that connect the past with the present.",
    body:
      "From the heritage house to the artwork and the digital initiative, the foundation treats memory as a space that can be preserved, developed, and shared.",
    imageAltMain: "MISMAR Foundation heritage and art experience in Baghdad",
    imageAltDetail01: "Art and heritage space within a MISMAR Foundation initiative",
    imageAltDetail02: "Baghdad heritage objects connected to MISMAR Foundation memory work",
  },

  ku: {
    dir: "rtl",
    eyebrow: "یادەوەریی زیندوو",
    established: "دامەزراوە",
    year: "2026",
    title: (
      <>
        یادەوەری بەغدا
        <br />
        لە ڕێگەی هونەر و کەلەپوور
      </>
    ),
    lead:
      "مسمار کار دەکات بۆ گەڕاندنەوەی ئامادەبوونی کەلەپوور لە ژیانی هاوچەرخدا، لە ڕێگەی هونەر، زیندووکردنەوەی شوێنەکان، بەدۆکیۆمێنتکردنی کۆکراوەکان و دروستکردنی ئەزموونی کولتووری.",
    body:
      "لە ماڵی کەلەپوورییەوە بۆ کاری هونەری و دەستپێشخەریی دیجیتاڵی، دامەزراوەکە مامەڵە لەگەڵ یادەوەری دەکات وەک شوێنێک بۆ پاراستن، گەشەپێدان و هاوبەشکردن.",
    imageAltMain: "ئەزموونی کەلەپوور و هونەری دامەزراوەی مسمار لە بەغدا",
    imageAltDetail01: "شوێنی هونەری و کەلەپووری لە دەستپێشخەرییەکانی مسمار",
    imageAltDetail02: "کۆکراوەی کەلەپووری بەغدا لە کاری یادەوەری مسمار",
  },
};

export default function AboutIntro({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = t.dir === "rtl";

  return (
    <section
      id="about"
      dir={t.dir}
      className="relative overflow-hidden bg-[#f7efe8] px-7 py-24 text-[#2a1005] md:px-20 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(42,16,5,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,16,5,0.09)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 45 : -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className={isRtl ? "md:order-2" : "md:order-1"}
        >
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-light uppercase tracking-[0.26em] text-[#2a1005]/45">
              {t.eyebrow}
            </p>
            <div className="h-px w-14 bg-[#2f9c95]" />
          </div>

          <h2 className="max-w-[650px] text-[38px] font-light leading-[1.24] md:text-[64px]">
            {t.title}
          </h2>

          <p className="mt-6 max-w-[560px] text-[18px] font-light leading-8 text-[#2a1005]/80 md:text-[22px]">
            {t.lead}
          </p>

          <p className="mt-5 max-w-[580px] text-sm font-light leading-7 text-[#2a1005]/58">
            {t.body}
          </p>
        </motion.div>

        {/* IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -45 : 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className={`relative min-h-[430px] ${isRtl ? "md:order-1" : "md:order-2"}`}
        >
          <div className="absolute right-[8%] top-[2%] h-28 w-40 border border-[#2a1005]/10 bg-white/50" />

          <div className="absolute right-[19%] top-[13%] z-10 h-44 w-36 overflow-hidden">
            <img
              src="/images/about/about-main.jpg"
              alt={t.imageAltMain}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-[44%] top-[25%] z-20 h-36 w-32 overflow-hidden">
            <img
              src="/images/about/about-detail-01.jpg"
              alt={t.imageAltDetail01}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[5%] top-[37%] z-30 h-56 w-[285px] overflow-hidden md:w-[350px]">
            <img
              src="/images/about/about-detail-02.jpg"
              alt={t.imageAltDetail02}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[18%] top-[9%] z-40 flex items-start gap-2 text-[#2a1005]">
            <div className="pt-4 text-xs font-light leading-5 text-[#2a1005]/65">
              {t.established}
              <br />
              {t.year}
            </div>
          </div>

          <div className="absolute bottom-[18%] right-[34%] h-20 w-20 bg-[#2f9c95]/35" />
          <div className="absolute bottom-[7%] left-[33%] h-16 w-24 bg-[#2a1005]/12" />
        </motion.div>
      </div>
    </section>
  );
}
