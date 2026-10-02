import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

type Props = {
  locale?: Locale;
};

const content = {
  ar: {
    dir: "rtl",
    title: "لنحوّل بيتاً تراثياً إلى مساحة حيّة.",
    text: "تعاون ثقافي وفني لإحياء الذاكرة وصناعة أثر حقيقي.",
    cta: "تواصل مع مسمار",
  },
  en: {
    dir: "ltr",
    title: "Let’s turn heritage houses into living spaces.",
    text: "A quiet invitation to collaborate on art, memory, and cultural revival.",
    cta: "Contact Mismar",
  },
  ku: {
    dir: "rtl",
    title: "با ماڵێکی کەلەپووری بکەینە شوێنێکی زیندوو.",
    text: "هاوکارییەکی کولتووری و هونەری بۆ زیندووکردنەوەی یادەوەری.",
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
      className="border-y border-[#f7efe8]/10 bg-[#140804] px-6 py-10 text-[#f7efe8] md:px-16 md:py-12"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-[24px] font-light leading-tight md:text-[34px]">
            {t.title}
          </h2>
          <p className="mt-3 max-w-[620px] text-sm font-light leading-7 text-[#f7efe8]/62">
            {t.text}
          </p>
        </div>

        <Link
          href={`/${locale}/contact`}
          className="inline-flex w-fit items-center gap-3 border border-[#f7efe8]/24 px-6 py-3 text-sm font-light transition hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-white"
        >
          {t.cta}
          <ArrowIcon size={16} />
        </Link>
      </div>
    </section>
  );
}
