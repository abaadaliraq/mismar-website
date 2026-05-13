"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    eyebrow: "عن مسمار",
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
      "منظمة مسمار للفنون مساحة ثقافية تحتضن البيوت التراثية، وتعيد تحويلها إلى منصات للفن والمعارض والورش.",
    body:
      "من مقرها في بيت التحفيات، تعمل مسمار على دعم الفنانين والشباب، وتنظيم ورش فنية وتراثية وتاريخية تثقيفية، وربط الذاكرة العراقية بالحاضر بلغة معاصرة.",
    button: "المزيد عن مسمار",
  },

  en: {
    dir: "ltr",
    eyebrow: "About Mismar",
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
      "Mismar Organization for Arts is a cultural space that embraces heritage houses and transforms them into platforms for art, exhibitions, and workshops.",
    body:
      "Based at Bayt Al-Tuhafiyat, Mismar supports artists and youth through artistic, heritage, and historical workshops that reconnect Iraqi memory with the present.",
    button: "More about Mismar",
  },

  ku: {
    dir: "rtl",
    eyebrow: "دەربارەی مسمار",
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
      "ڕێکخراوی مسمار بۆ هونەر شوێنێکی کولتوورییە کە ماڵە کەلەپوورییەکان دەگرێتەوە و دەیانکاتە سەکۆی هونەر و پێشانگا و وۆرکشۆپ.",
    body:
      "لە بنکەکەی لە ماڵی التحفیات، مسمار کار دەکات بۆ پشتگیری هونەرمەندان و گەنجان و گرێدانی یادەوەری عێراقی بە ئێستاوە.",
    button: "زیاتر دەربارەی مسمار",
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

          <a
            href="#programs"
            className="mt-8 inline-flex items-center gap-3 bg-[#2a1005] px-7 py-3 text-sm font-light text-[#f7efe8] transition hover:bg-[#2f9c95]"
          >
            {t.button}
            <ArrowLeft size={16} />
          </a>
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
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=900&auto=format&fit=crop"
              alt="Mismar exhibition"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-[44%] top-[25%] z-20 h-36 w-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=900&auto=format&fit=crop"
              alt="Mismar gallery"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[5%] top-[37%] z-30 h-56 w-[285px] overflow-hidden md:w-[350px]">
            <img
              src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=1200&auto=format&fit=crop"
              alt="Heritage museum interior"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-[18%] top-[9%] z-40 flex items-start gap-2 text-[#2a1005]">
            <span className="text-[76px] font-light leading-none">م</span>
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