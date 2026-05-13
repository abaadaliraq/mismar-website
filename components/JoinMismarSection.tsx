import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    eyebrow: "شارك معنا",
    title: "لنحوّل بيتاً تراثياً إلى مساحة حيّة.",
    text: "إذا كنت صاحب بيت تراثي، فناناً، مؤسسة تعليمية، جهة داعمة، أو ترغب بالمشاركة في إحياء التراث، تواصل مع منظمة مسمار لنصنع معاً أثراً ثقافياً حقيقياً.",
    cta: "تواصل مع مسمار",
  },
  en: {
    dir: "ltr",
    eyebrow: "Join Us",
    title: "Let’s turn heritage houses into living cultural spaces.",
    text: "Whether you are a heritage house owner, artist, educational institution, supporter, or volunteer, Mismar welcomes collaboration to create real cultural impact.",
    cta: "Contact Mismar",
  },
  ku: {
    dir: "rtl",
    eyebrow: "بەشداری بکە",
    title: "با ماڵێکی کەلەپووری بکەینە شوێنێکی کولتووری زیندوو.",
    text: "ئەگەر خاوەنی ماڵی کەلەپووریت، هونەرمەندیت، دامەزراوەی فێرکارییت یان دەتەوێت پشتگیری بکەیت، پەیوەندی بە مسمارەوە بکە.",
    cta: "پەیوەندی بە مسمارەوە",
  },
};

export default function JoinMismarSection({ locale = "ar" }: Props) {
  const t = content[locale] ?? content.ar;
  const ArrowIcon = t.dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="contact"
      dir={t.dir}
      className="relative overflow-hidden bg-[#2a1005] px-6 py-24 text-[#f7efe8] md:px-16 md:py-32"
    >
      <div className="absolute inset-0 opacity-25">
        <img
          src="/images/join-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,156,149,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <p className="mb-6 text-xs font-light uppercase tracking-[0.35em] text-[#2f9c95]">
          {t.eyebrow}
        </p>

        <h2 className="max-w-[900px] text-[42px] font-light leading-[1.15] md:text-[82px]">
          {t.title}
        </h2>

        <p className="mt-8 max-w-[760px] text-base font-light leading-9 text-[#f7efe8]/75 md:text-lg">
          {t.text}
        </p>

        <Link
          href={`/${locale}/contact`}
          className="mt-10 inline-flex items-center gap-3 border border-[#f7efe8]/35 px-8 py-4 text-sm font-light transition hover:border-[#2f9c95] hover:bg-[#2f9c95]"
        >
          {t.cta}
          <ArrowIcon size={17} />
        </Link>
      </div>
    </section>
  );
}