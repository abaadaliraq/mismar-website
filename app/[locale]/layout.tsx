import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";
import { BASE_URL, normalizeLocale } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["NGO", "Organization"],
  name: "MISMAR Foundation for Arts and Sustainable Development",
  alternateName: [
    "MISMAR Foundation",
    "مؤسسة مسمار للفنون والتنمية المستدامة",
    "دامەزراوەی مسمار بۆ هونەر و گەشەپێدانی بەردەوام",
  ],
  url: BASE_URL,
  email: "info@mismararts.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baghdad",
    addressCountry: "IQ",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MISMAR Foundation",
  alternateName: "MISMAR Foundation for Arts and Sustainable Development",
  url: BASE_URL,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = normalizeLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...websiteJsonLd,
            inLanguage: safeLocale,
          }),
        }}
      />
      <SiteMotion>
        <Navbar locale={safeLocale} />
        {children}
        <Footer locale={safeLocale} />
      </SiteMotion>
    </>
  );
}
