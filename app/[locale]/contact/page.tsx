import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactMailForm from "@/components/ContactMailForm";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, Phone, Play } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

type Locale = "ar" | "en" | "ku";

const contact = {
  email: "info@mismar.ngo",
  phone: "+9647779922838",
  instagram: "https://www.instagram.com/mismar_ngo/?__pwa=1",
  facebook:
    "https://web.facebook.com/profile.php?id=61595166274711&rdid=cPEygDkURRKb9QGz&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F19DzPEj9Z1%2F%3F_rdc%3D1%26_rdr#",
  youtube: "https://www.youtube.com/@mismarngo",
  tiktok: "https://www.tiktok.com/@mismar.ngo?lang=en",
};

const content = {
  ar: {
    dir: "rtl",
    back: "العودة للرئيسية",
    title: "تواصل وانضم إلى مسمار",
    contactImageAlt: "التواصل مع مؤسسة مسمار للثقافة والتنمية المستدامة في بغداد",
    subtitle:
      "إذا كنت ترغب بالتعاون، المشاركة، دعم مشاريع الترميم، إقامة ورش أو فعاليات فنية، أو لديك بيت تراثي يحتاج إلى إحياء، يمكنك التواصل معنا عبر النموذج التالي.",
    formTitle: "أرسل طلبك إلى مسمار",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    notes: "اكتب ملاحظاتك أو تفاصيل الطلب",
    button: "إرسال الطلب",
    subject: "طلب تواصل مع مؤسسة مسمار",
    infoTitle: "لماذا تتواصل مع مسمار؟",
    infoText:
      "تعمل مؤسسة مسمار على إحياء البيوت التراثية وتحويلها إلى فضاءات ثقافية وسياحية وفنية حيّة، كما تستضيف المعارض والورش الفنية والبرامج الثقافية والتعليمية.",
    contactTitle: "معلومات التواصل",
    email: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    socialTitle: "تابع مسمار",
  },

  en: {
    dir: "ltr",
    back: "Back Home",
    title: "Contact & Join Mismar",
    contactImageAlt: "Contact MISMAR Foundation for Culture and Sustainable Development in Baghdad",
    subtitle:
      "If you would like to collaborate, support restoration projects, organize workshops or exhibitions, or restore a heritage house, contact us through the form below.",
    formTitle: "Send Your Request",
    name: "Full Name",
    phone: "Phone Number",
    notes: "Write your message or request details",
    button: "Send Request",
    subject: "Contact request for MISMAR Foundation",
    infoTitle: "Why Mismar?",
    infoText:
      "MISMAR Foundation works to revive heritage houses and transform them into living cultural, artistic, and touristic destinations while hosting workshops, exhibitions, and educational programs.",
    contactTitle: "Contact Information",
    email: "Email",
    phoneLabel: "Phone",
    socialTitle: "Follow Mismar",
  },

  ku: {
    dir: "rtl",
    back: "گەڕانەوە بۆ سەرەکی",
    title: "پەیوەندی و بەشداری لە مسمار",
    contactImageAlt: "پەیوەندی بە دامەزراوەی مسمار بۆ کولتوور و گەشەپێدانی بەردەوام لە بەغدا",
    subtitle:
      "ئەگەر دەتەوێت هاوکاری، پشتگیری، بەشداری، یان چالاکییەکی کولتووری پێشنیار بکەیت، لە ڕێگەی ئەم فۆرمەوە پەیوەندیمان پێوە بکە.",
    formTitle: "داواکارییەکەت بنێرە",
    name: "ناوی تەواو",
    phone: "ژمارەی مۆبایل",
    notes: "وردەکاری داواکارییەکەت بنووسە",
    button: "ناردنی داواکاری",
    subject: "داواکاری پەیوەندی بۆ مسمار",
    infoTitle: "بۆچی مسمار؟",
    infoText:
      "مسمار کار دەکات بۆ نۆژەنکردنەوەی شوێنە کەلەپوورییەکان و گۆڕینیان بۆ شوێنی کولتووری و هونەری.",
    contactTitle: "زانیاری پەیوەندی",
    email: "ئیمەیڵ",
    phoneLabel: "مۆبایل",
    socialTitle: "شوێنکەوتنی مسمار",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "contact", "contact");
}

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
            src="/images/contact.jpg"
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
              src="/images/contact.jpg"
              alt={t.contactImageAlt}
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

            <div className="mt-9 border-t border-[#2a1005]/12 pt-7">
              <h3 className="text-xl font-light md:text-2xl">
                {t.contactTitle}
              </h3>

              <div className="mt-5 grid gap-3 text-sm font-light text-[#2a1005]/70">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex w-fit items-center gap-3 transition hover:text-[#2f9c95]"
                  dir="ltr"
                >
                  <Mail size={16} />
                  {contact.email}
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex w-fit items-center gap-3 transition hover:text-[#2f9c95]"
                  dir="ltr"
                >
                  <Phone size={16} />
                  {contact.phone}
                </a>
              </div>

              <p className="mt-7 text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
                {t.socialTitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2a1005]/18 px-4 py-2 text-sm font-light transition hover:border-[#2f9c95] hover:text-[#2f9c95]"
                >
                  Instagram
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2a1005]/18 px-4 py-2 text-sm font-light transition hover:border-[#2f9c95] hover:text-[#2f9c95]"
                >
                  Facebook
                </a>
                <a
                  href={contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#2a1005]/18 px-4 py-2 text-sm font-light transition hover:border-[#2f9c95] hover:text-[#2f9c95]"
                >
                  <Play size={14} />
                  YouTube
                </a>
                <a
                  href={contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2a1005]/18 px-4 py-2 text-sm font-light transition hover:border-[#2f9c95] hover:text-[#2f9c95]"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border border-[#2a1005]/10 bg-[#fbf8f3] p-6 md:p-10">
            <h3 className="mb-8 text-[28px] font-light md:text-[40px]">
              {t.formTitle}
            </h3>

            <ContactMailForm
              dir={t.dir as "rtl" | "ltr"}
              email={contact.email}
              labels={{
                name: t.name,
                phone: t.phone,
                notes: t.notes,
                button: t.button,
                subject: t.subject,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
