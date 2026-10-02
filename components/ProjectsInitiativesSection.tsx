import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectsContent, type Locale } from "@/lib/projectsContent";

type Props = {
  locale?: Locale;
};

export default function ProjectsInitiativesSection({ locale = "ar" }: Props) {
  const t = getProjectsContent(locale);
  const isRtl = t.dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const buttonClass =
    "mt-8 inline-flex w-fit items-center gap-3 border border-[#2a1005]/25 px-7 py-3 text-sm font-light transition hover:border-[#2f9c95] hover:bg-[#2f9c95] hover:text-[#f7efe8]";

  const opensInNewTab = (href: string) =>
    href.startsWith("http") || href.endsWith(".pdf");

  return (
    <section
      id="projects"
      dir={t.dir}
      className="bg-[#f3ede5] px-6 py-20 text-[#2a1005] md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-[900px]">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-light uppercase tracking-[0.26em] text-[#2a1005]/45">
              {t.eyebrow}
            </p>
            <div className="h-px w-14 bg-[#2f9c95]" />
          </div>

          <h1 className="text-[38px] font-light leading-[1.18] md:text-[68px]">
            {t.title}
          </h1>

          <p className="mt-6 max-w-[720px] text-sm font-light leading-8 text-[#2a1005]/65 md:text-base">
            {t.intro}
          </p>
        </div>

        <div className="border-t border-[#2a1005]/15">
          {t.items.map((project, index) => {
            const imageFirst = index % 2 === 0;
            const action = project.action;

            return (
              <article
                key={project.slug}
                className="grid gap-0 border-b border-[#2a1005]/15 bg-[#fbf8f3] md:grid-cols-2"
              >
                <div
                  className={`relative h-[290px] overflow-hidden md:h-[430px] ${
                    imageFirst ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div
                  className={`flex min-h-[330px] flex-col justify-center border-[#2a1005]/15 px-6 py-10 md:min-h-[430px] md:px-12 ${
                    imageFirst
                      ? "md:order-2 md:border-r"
                      : "md:order-1 md:border-l"
                  }`}
                >
                  <p className="text-xs font-light uppercase tracking-[0.28em] text-[#2f9c95]">
                    {project.category}
                  </p>

                  <h3 className="mt-5 text-[32px] font-light leading-[1.14] md:text-[52px]">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-[620px] text-sm font-light leading-8 text-[#2a1005]/68 md:text-base">
                    {project.description}
                  </p>

                  {action ? (
                    <a
                      href={action.href}
                      target={opensInNewTab(action.href) ? "_blank" : undefined}
                      rel={opensInNewTab(action.href) ? "noreferrer" : undefined}
                      className={buttonClass}
                    >
                      {action.label}
                      <ArrowIcon size={16} />
                    </a>
                  ) : (
                    <Link
                      href={`/${locale}/projects/${project.slug}`}
                      className={buttonClass}
                    >
                      {t.viewProject}
                      <ArrowIcon size={16} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
