"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Palette,
  Users,
} from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    slides: [
      {
        image: "/images/hero-1.jpg",
        title: "معارض وورش للفنانين",
        text: "نفتح مساحة للفنانين والشباب عبر ورش فنية وتراثية وتاريخية تثقيفية.",
      },
      {
        image: "/images/hero-2.jpg",
        title: "إحياء بيوت التراث",
        text: "نعيد تحويل البيوت التراثية إلى وجهات ثقافية وسياحية حيّة.",
      },
      {
        image: "/images/hero-3.jpg",
        title: "من بيت التحفيات إلى العالم",
        text: "من بغداد، نعيد تقديم التراث العراقي بروح معاصرة.",
      },
    ],
    info: [
      {
        label: "الموقع",
        value: "الفوتر",
        icon: MapPin,
        href: "#contact",
      },
      {
        label: "الفعاليات",
        value: "معارض وورش",
        icon: CalendarDays,
        href: "/activities",
      },
      {
        label: "الاختصاص",
        value: "الفنون",
        icon: Palette,
        href: "/activities",
      },
      {
        label: "المجتمع",
        value: "شباب ونساء",
        icon: Users,
        href: "/about",
      },
    ],
    cta: "تواصل مع مسمار",
  },

  en: {
    dir: "ltr",
    slides: [
      {
        image: "/images/hero-1.jpg",
        title: "Exhibitions and workshops for artists",
        text: "We create a space for artists and youth through artistic, heritage, and historical workshops.",
      },
      {
        image: "/images/hero-2.jpg",
        title: "Reviving heritage houses",
        text: "We transform heritage houses into living cultural and touristic destinations.",
      },
      {
        image: "/images/hero-3.jpg",
        title: "From Bayt Al-Tuhafiyat to the world",
        text: "From Baghdad, we present Iraqi heritage with a contemporary artistic voice.",
      },
    ],
    info: [
      {
        label: "Location",
        value: "Footer",
        icon: MapPin,
        href: "#contact",
      },
      {
        label: "Activities",
        value: "Exhibitions & Workshops",
        icon: CalendarDays,
        href: "/activities",
      },
      {
        label: "Field",
        value: "Arts",
        icon: Palette,
        href: "/activities",
      },
      {
        label: "Community",
        value: "Youth & Women",
        icon: Users,
        href: "/about",
      },
    ],
    cta: "Contact Mismar",
  },

  ku: {
    dir: "rtl",
    slides: [
      {
        image: "/images/hero-1.jpg",
        title: "پێشانگا و وۆرکشۆپ بۆ هونەرمەندان",
        text: "شوێنێک دەکەینەوە بۆ هونەرمەندان و گەنجان.",
      },
      {
        image: "/images/hero-2.jpg",
        title: "زیندووکردنەوەی ماڵە کەلەپوورییەکان",
        text: "ماڵە کەلەپوورییەکان دەگۆڕین بۆ شوێنی کولتووری و گەشتیاری.",
      },
      {
        image: "/images/hero-3.jpg",
        title: "لە ماڵی التحفیاتەوە بۆ جیهان",
        text: "لە بەغدا، کەلەپووری عێراقی بە زمانێکی نوێ پێشکەش دەکەین.",
      },
    ],
    info: [
      {
        label: "شوێن",
        value: "فوتەر",
        icon: MapPin,
        href: "#contact",
      },
      {
        label: "چالاکییەکان",
        value: "پێشانگا و وۆرکشۆپ",
        icon: CalendarDays,
        href: "/activities",
      },
      {
        label: "پسپۆڕی",
        value: "هونەر",
        icon: Palette,
        href: "/activities",
      },
      {
        label: "کۆمەڵگا",
        value: "گەنجان و ژنان",
        icon: Users,
        href: "/about",
      },
    ],
    cta: "پەیوەندی بە مسمارەوە",
  },
};

export default function Hero({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;
  const isRtl = t.dir === "rtl";

  const [index, setIndex] = useState(0);
  const slide = t.slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [t.slides.length]);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const makeHref = (href: string) => {
    if (href.startsWith("#")) return `/${locale}${href}`;
    return `/${locale}${href}`;
  };

  return (
    <section
      id="home"
      dir={t.dir}
      className="relative h-[92vh] min-h-[650px] overflow-hidden bg-black text-white"
    >
      {/* SLIDE IMAGE */}
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />

      {/* TEXT */}
      <div className="relative z-10 flex h-full items-center px-7 pt-24 md:px-20">
        <div className="max-w-[760px]">
          <h1 className="text-[44px] font-light leading-[1.2] md:text-[76px]">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-[560px] text-base font-light leading-8 text-white/85 md:text-lg">
            {slide.text}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-9 inline-flex items-center gap-3 border border-white/35 px-7 py-4 text-sm font-light transition hover:border-white hover:bg-white hover:text-[#2a1005]"
          >
            {t.cta}
            <ArrowIcon size={17} />
          </Link>
        </div>
      </div>

      {/* INFO BAR */}
      <div className="absolute bottom-[70px] left-1/2 z-20 hidden w-[82%] max-w-[1320px] -translate-x-1/2 overflow-hidden bg-[#f5efe6] text-[#2b1207] shadow-2xl md:grid md:grid-cols-[240px_repeat(4,1fr)]">
        <Link
          href={`/${locale}/contact`}
          className="flex h-20 items-center justify-center gap-4 bg-[#4f5f35] text-sm font-light text-white transition hover:bg-[#2f9c95]"
        >
          <ArrowIcon size={18} />
          {t.cta}
        </Link>

        {t.info.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={makeHref(item.href)}
              className="group flex h-20 items-center justify-center gap-4 border-r border-[#2b1207]/10 px-6 transition hover:bg-[#eee3d7]"
            >
              <Icon
                size={20}
                className="text-[#4f5f35] transition duration-300 group-hover:scale-110 group-hover:text-[#2f9c95]"
              />

              <div className="leading-tight">
                <p className="text-sm font-light">{item.label}</p>
                <p className="mt-1 text-xs font-light text-[#2b1207]/55">
                  {item.value}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* MOBILE BAR */}
      <div className="absolute bottom-8 left-6 right-6 z-20 grid grid-cols-2 gap-3 md:hidden">
        <Link
          href={`/${locale}/about`}
          className="bg-[#f5efe6] px-5 py-4 text-center text-sm font-light text-[#2b1207]"
        >
          {isRtl ? "عن مسمار" : "About"}
        </Link>

        <Link
          href={`/${locale}#contact`}
          className="bg-[#4f5f35] px-5 py-4 text-center text-sm font-light text-white"
        >
          {isRtl ? "تواصل" : "Contact"}
        </Link>
      </div>

      {/* SLIDE INDICATORS */}
      <div
        className={`absolute bottom-7 z-30 hidden gap-3 md:flex ${
          isRtl ? "right-20" : "left-20"
        }`}
        dir="ltr"
      >
        {t.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[2px] transition-all duration-300 ${
              i === index
                ? "w-14 bg-white"
                : "w-7 bg-white/45 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}