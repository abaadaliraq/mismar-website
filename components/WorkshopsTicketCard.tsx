"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const ticketImage = "/images/workshop-cover.jpg";

const content = {
  ar: {
    dir: "rtl",
    label: "الورش والمعارض",
    title: "الفنون كمساحة للحياة والتعلّم",
    subtitle:
      "ورش ومعارض للرسم والنحت والأعمال اليدوية، مع برامج للأطفال والطلبة داخل بيت التحفيات.",
    date: "ورش",
    location: "بغداد / بيت التحفيات",
    cta: "استكشف الأنشطة",
  },

  en: {
    dir: "ltr",
    label: "Workshops & Exhibitions",
    title: "Art as a Space for Learning",
    subtitle:
      "Painting, sculpture, crafts, and educational workshops for children and students.",
    date: "ART",
    location: "Baghdad / Bayt Al-Tuhafiyat",
    cta: "Explore Activities",
  },

  ku: {
    dir: "rtl",
    label: "وۆرکشۆپ و پێشانگا",
    title: "هونەر وەک شوێنی فێربوون",
    subtitle:
      "وۆرکشۆپی وێنەکێشان، پەیکەرسازی و هونەرە دەستییەکان بۆ منداڵان و خوێندکاران.",
    date: "ART",
    location: "بەغدا / ماڵی التحفیات",
    cta: "بینینی چالاکییەکان",
  },
};

export default function WorkshopsTicketCard({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = t.dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="workshops-ticket" dir={t.dir} className="bg-[#f3ede5] py-14">
      <motion.div
        initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={`/${locale}/activities`}
          className="group grid w-full overflow-hidden border-y border-[#2a1005]/15 bg-[#fbf8f3] text-[#2a1005] transition duration-500 hover:border-[#2f9c95]/70 md:grid-cols-[1fr_1.35fr]"
        >
          {/* DETAILS - RIGHT */}
          <div className="order-2 grid border-t border-[#2a1005]/15 md:order-1 md:border-l md:border-t-0">
            <div className="grid grid-cols-[90px_1fr] border-b border-[#2a1005]/15">
              <div className="flex flex-col items-center justify-center border-l border-[#2a1005]/15 py-5">
                <span className="text-4xl font-light leading-none">
                  {t.date}
                </span>
                <span className="mt-1 text-xs text-[#2a1005]/55">2026</span>
              </div>

              <div className="flex flex-col justify-center px-6 py-5">
                <p className="mb-2 text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
                  {t.label}
                </p>

                <h2 className="text-2xl font-light md:text-3xl">
                  {t.title}
                </h2>

                <p className="mt-3 text-sm font-light leading-7 text-[#2a1005]/65">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_150px]">
              <div className="flex flex-col justify-center px-6 py-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#2a1005]/45">
                  LOCATION
                </p>
                <p className="mt-1 text-sm font-light">{t.location}</p>
              </div>

              <div className="border-r border-[#2a1005]/15 bg-[repeating-linear-gradient(90deg,#2a1005_0,#2a1005_2px,transparent_2px,transparent_7px)] opacity-70" />
            </div>

            <div className="flex items-center gap-3 border-t border-[#2a1005]/15 px-6 py-4 text-sm font-light transition group-hover:text-[#2f9c95]">
              {t.cta}
              <ArrowIcon size={16} />
            </div>
          </div>

          {/* IMAGE - LEFT */}
          <div className="order-1 relative h-[260px] overflow-hidden md:order-2 md:h-[340px]">
            <motion.img
              src={ticketImage}
              alt="Mismar workshops and exhibitions"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="absolute inset-0 bg-black/10" />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="absolute left-5 top-5 border border-white/35 bg-white/70 px-4 py-2 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2a1005]/60">
                Mismar Arts
              </p>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}