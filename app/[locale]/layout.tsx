import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Locale = "ar" | "en" | "ku";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      {children}
      <Navbar locale={locale} />
      <Footer locale={locale} />
    </>
  );
}