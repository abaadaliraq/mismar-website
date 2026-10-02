import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, FileText } from "lucide-react";
import {
  getProject,
  getProjectsContent,
  projectSlugs,
  type Locale,
} from "@/lib/projectsContent";

export function generateStaticParams() {
  return projectSlugs.flatMap((slug) =>
    (["ar", "en", "ku"] as const).map((locale) => ({
      locale,
      slug,
    })),
  );
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = locale === "ar" || locale === "en" || locale === "ku" ? locale : "ar";
  const t = getProjectsContent(safeLocale);
  const project = getProject(safeLocale, slug);

  if (!project) {
    notFound();
  }

  const isRtl = t.dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const opensInNewTab = (href: string) =>
    href.startsWith("http") || href.endsWith(".pdf");

  return (
    <main dir={t.dir} className="min-h-screen bg-[#f3ede5] text-[#2a1005]">
      <section className="grid min-h-[640px] items-center gap-10 border-b border-[#2a1005]/10 px-6 pb-16 pt-32 md:grid-cols-[1fr_0.92fr] md:px-16">
        <div>
          <Link
            href={`/${safeLocale}/projects`}
            className="mb-8 inline-flex items-center gap-3 text-sm font-light text-[#2a1005]/60 transition hover:text-[#2f9c95]"
          >
            <ArrowIcon size={16} />
            {t.back}
          </Link>

          <p className="text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
            {project.category}
          </p>

          <h1 className="mt-5 text-[42px] font-light leading-[1.1] md:text-[78px]">
            {project.title}
          </h1>

          <p className="mt-7 max-w-[820px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
            {project.description}
          </p>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="h-[310px] w-full object-cover md:h-[460px]"
        />
      </section>

      <section className="grid border-b border-[#2a1005]/10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="px-6 py-12 md:px-16 md:py-16">
          <p className="max-w-[820px] text-base font-light leading-9 text-[#2a1005]/72 md:text-lg">
            {project.details}
          </p>

          {project.visit && (
            <a
              href={project.visit.href}
              target={opensInNewTab(project.visit.href) ? "_blank" : undefined}
              rel={opensInNewTab(project.visit.href) ? "noreferrer" : undefined}
              className="mt-9 inline-flex items-center gap-3 bg-[#2a1005] px-7 py-3 text-sm font-light text-[#f7efe8] transition hover:bg-[#2f9c95]"
            >
              {project.visit.label || t.visitLabel}
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <div className="border-t border-[#2a1005]/10 px-6 py-12 md:border-r md:border-t-0 md:px-12 md:py-16">
          {project.pdfs && project.pdfs.length > 0 && (
            <div>
              <h2 className="text-[28px] font-light md:text-[40px]">
                {t.pdfTitle}
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.pdfs.map((pdf) => (
                  <a
                    key={pdf.label}
                    href={pdf.href}
                    target={opensInNewTab(pdf.href) ? "_blank" : undefined}
                    rel={opensInNewTab(pdf.href) ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 border border-[#2a1005]/20 px-5 py-3 text-sm font-light transition hover:border-[#2f9c95] hover:text-[#2f9c95]"
                  >
                    {pdf.label}
                    <FileText size={15} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.externalLinks && project.externalLinks.length > 0 && (
            <div className={project.pdfs?.length ? "mt-10" : ""}>
              <h2 className="text-[28px] font-light md:text-[40px]">
                {t.externalTitle}
              </h2>

              <div className="mt-6 grid gap-3">
                {project.externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-sm font-light text-[#2a1005]/65 transition hover:text-[#2f9c95]"
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
