import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale =
    locale === "ar" || locale === "en" || locale === "ku"
      ? locale
      : "ar";

  return (
    <>
      <Navbar locale={safeLocale} />
      {children}
      <Footer locale={safeLocale} />
    </>
  );
}