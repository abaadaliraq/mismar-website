import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import AboutTicketCard from "@/components/AboutTicketCard";
import WorkshopsTicketCard from "@/components/WorkshopsTicketCard";
import RestorationTicketCard from "@/components/RestorationTicketCard";
import JoinMismarSection from "@/components/JoinMismarSection";



type Locale = "ar" | "en" | "ku";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <Hero locale={locale} />
      <AboutIntro locale={locale} />
     <AboutTicketCard locale={locale} />
     <WorkshopsTicketCard locale={locale} />
     <RestorationTicketCard locale={locale} />
     <JoinMismarSection locale={locale} />
      
    </main>
  );
}