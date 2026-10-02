import type { Metadata } from "next";
import ProjectsInitiativesSection from "@/components/ProjectsInitiativesSection";
import { buildMetadata } from "@/lib/seo";

type Locale = "ar" | "en" | "ku";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "projects", "projects");
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <div className="h-[72px] bg-[#2a1005]" />
      <ProjectsInitiativesSection locale={locale} />
    </main>
  );
}
