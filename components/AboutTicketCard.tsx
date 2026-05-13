import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const ticketImage = "/images/about-ticket.jpg";

const content = {
  ar: {
    dir: "rtl",
    label: "نبذة عن المنظمة",
    title: "منظمة مسمار للفنون",
    subtitle: "مساحة ثقافية تعنى بالفنون، التراث، والتنمية المستدامة",
    date: "2026",
    location: "بغداد / بيت التحفيات",
    cta: "ادخل للصفحة",
  },
  en: {
    dir: "ltr",
    label: "About the Organization",
    title: "Mismar Organization for Arts",
    subtitle: "A cultural space dedicated to arts, heritage, and sustainable development",
    date: "2026",
    location: "Baghdad / Bayt Al-Tuhafiyat",
    cta: "Open page",
  },
  ku: {
    dir: "rtl",
    label: "دەربارەی ڕێکخراو",
    title: "ڕێکخراوی مسمار بۆ هونەر",
    subtitle: "شوێنێکی کولتووری بۆ هونەر، کەلەپوور و گەشەپێدانی بەردەوام",
    date: "2026",
    location: "بەغدا / ماڵی التحفیات",
    cta: "کردنەوەی پەڕە",
  },
};

export default function AboutTicketCard({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = t.dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="about-ticket" dir={t.dir} className="bg-[#f3ede5] py-14">
      <Link
        href={`/${locale}/about`}
        className="group grid w-full overflow-hidden border-y border-[#2a1005]/15 bg-[#fbf8f3] text-[#2a1005] transition duration-500 hover:border-[#2f9c95]/70 md:grid-cols-[1.35fr_1fr]"
      >
        <div className="relative h-[260px] overflow-hidden md:h-[340px]">
          <img
            src={ticketImage}
            alt="Mismar Organization"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="grid border-t border-[#2a1005]/15 md:border-r md:border-t-0">
          <div className="grid grid-cols-[90px_1fr] border-b border-[#2a1005]/15">
            <div className="flex flex-col items-center justify-center border-l border-[#2a1005]/15 py-5">
              <span className="text-4xl font-light leading-none">04</span>
              <span className="mt-1 text-xs text-[#2a1005]/55">{t.date}</span>
            </div>

            <div className="flex flex-col justify-center px-6 py-5">
              <p className="mb-2 text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
                {t.label}
              </p>

              <h2 className="text-2xl font-light md:text-3xl">{t.title}</h2>

              <p className="mt-3 text-sm font-light leading-7 text-[#2a1005]/65">
                {t.subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_150px]">
            <div className="flex flex-col justify-center px-6 py-5">
              <p className="text-xs text-[#2a1005]/45">LOCATION</p>
              <p className="mt-1 text-sm font-light">{t.location}</p>
            </div>

            <div className="border-r border-[#2a1005]/15 bg-[repeating-linear-gradient(90deg,#2a1005_0,#2a1005_2px,transparent_2px,transparent_7px)] opacity-70" />
          </div>

          <div className="flex items-center gap-3 border-t border-[#2a1005]/15 px-6 py-4 text-sm font-light transition group-hover:text-[#2f9c95]">
            {t.cta}
            <ArrowIcon size={16} />
          </div>
        </div>
      </Link>
    </section>
  );
}