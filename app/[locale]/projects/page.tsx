import ProjectsInitiativesSection from "@/components/ProjectsInitiativesSection";

type Locale = "ar" | "en" | "ku";

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
