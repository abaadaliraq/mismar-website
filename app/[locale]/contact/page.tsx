import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    title: "تواصل وانضم إلى مسمار",
    subtitle:
      "إذا كنت ترغب بالتعاون، المشاركة، دعم مشاريع الترميم، إقامة ورش أو فعاليات فنية، أو لديك بيت تراثي يحتاج إلى إحياء، يمكنك التواصل معنا عبر النموذج التالي.",
    formTitle: "أرسل طلبك إلى مسمار",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    notes: "اكتب ملاحظاتك أو تفاصيل الطلب",
    button: "إرسال الطلب",
    infoTitle: "لماذا تتواصل مع مسمار؟",
    infoText:
      "تعمل منظمة مسمار على إحياء البيوت التراثية وتحويلها إلى فضاءات ثقافية وسياحية وفنية حيّة، كما تستضيف المعارض والورش الفنية والبرامج الثقافية والتعليمية.",
  },

  en: {
    dir: "ltr",
    back: "Back Home",
    title: "Contact & Join Mismar",
    subtitle:
      "If you would like to collaborate, support restoration projects, organize workshops or exhibitions, or restore a heritage house, contact us through the form below.",
    formTitle: "Send Your Request",
    name: "Full Name",
    phone: "Phone Number",
    notes: "Write your message or request details",
    button: "Send Request",
    infoTitle: "Why Mismar?",
    infoText:
      "Mismar works to revive heritage houses and transform them into living cultural, artistic, and touristic destinations while hosting workshops, exhibitions, and educational programs.",
  },

  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",
    title: "پەیوەندی و بەشداری لە مسمار",
    subtitle:
      "ئەگەر دەتەوێت هاوکاری، پشتگیری، بەشداری، یان چالاکییەکی کولتووری پێشنیار بکەیت، لە ڕێگەی ئەم فۆرمەوە پەیوەندیمان پێوە بکە.",
    formTitle: "داواکارییەکەت بنێرە",
    name: "ناوی تەواو",
    phone: "ژمارەی مۆبایل",
    notes: "وردەکاری داواکارییەکەت بنووسە",
    button: "ناردنی داواکاری",
    infoTitle: "بۆچی مسمار؟",
    infoText:
      "مسمار کار دەکات بۆ نۆژەنکردنەوەی شوێنە کەلەپوورییەکان و گۆڕینیان بۆ شوێنی کولتووری و هونەری.",
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = content[locale] ?? content.ar;
  const isRtl = t.dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main dir={t.dir} className="min-h-screen bg-[#f3ede5] text-[#2a1005]">
      <Navbar locale={locale} />

      <section className="relative overflow-hidden border-b border-[#2a1005]/10 px-6 pb-16 pt-32 md:px-16">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/contact-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 grid gap-12 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <Link
              href={`/${locale}`}
              className="mb-8 inline-flex items-center gap-3 text-sm font-light text-[#2a1005]/60 transition hover:text-[#2f9c95]"
            >
              <ArrowIcon size={16} />
              {t.back}
            </Link>

            <h1 className="max-w-[820px] text-[42px] font-light leading-[1.1] md:text-[78px]">
              {t.title}
            </h1>

            <p className="mt-7 max-w-[760px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="/images/contact-side.jpg"
              alt="Mismar contact"
              className="h-[300px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-[#2f9c95]">
              MISMAR
            </p>

            <h2 className="text-[32px] font-light leading-tight md:text-[52px]">
              {t.infoTitle}
            </h2>

            <p className="mt-7 text-base font-light leading-9 text-[#2a1005]/72">
              {t.infoText}
            </p>
          </div>

          <div className="border border-[#2a1005]/10 bg-[#fbf8f3] p-6 md:p-10">
            <h3 className="mb-8 text-[28px] font-light md:text-[40px]">
              {t.formTitle}
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder={t.name}
                className="h-14 w-full border border-[#2a1005]/15 bg-transparent px-5 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
              />

              <input
                type="tel"
                name="phone"
                placeholder={t.phone}
                className="h-14 w-full border border-[#2a1005]/15 bg-transparent px-5 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
              />

              <textarea
                name="notes"
                placeholder={t.notes}
                rows={6}
                className="w-full resize-none border border-[#2a1005]/15 bg-transparent px-5 py-4 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
              />

              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-3 bg-[#2a1005] px-10 text-sm font-light text-white transition hover:bg-[#2f9c95]"
              >
                {t.button}
                <ArrowIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}