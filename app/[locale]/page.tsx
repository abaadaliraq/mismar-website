import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import AboutTicketCard from "@/components/AboutTicketCard";
import WorkshopsTicketCard from "@/components/WorkshopsTicketCard";
import RestorationTicketCard from "@/components/RestorationTicketCard";
import ProjectsTicketCard from "@/components/ProjectsTicketCard";
import JoinMismarSection from "@/components/JoinMismarSection";
import { buildMetadata } from "@/lib/seo";

type Locale = "ar" | "en" | "ku";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "home");
}

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
     <ProjectsTicketCard locale={locale} />
     <JoinMismarSection locale={locale} />
      
    </main>
  );
}
