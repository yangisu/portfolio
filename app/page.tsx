import { AboutSection } from "@/components/about-section";
import { CaseStudySection } from "@/components/case-study-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimelineSection } from "@/components/experience-timeline-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SkillsSection } from "@/components/skills-section";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const contact = (portfolioData as {
    contact?: {
      email?: string;
      github?: string;
      linkedin?: string;
    };
  }).contact;

  const hasContact = Boolean(contact?.email || contact?.github || contact?.linkedin);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#070a08]">
      <header className="sticky top-0 z-20 px-4 pt-4 md:px-8">
        <nav className="top-shell mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#top" className="font-semibold tracking-tight text-[var(--ivory)] md:text-lg">
            YANGISU.
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" className="nav-link transition">About</a>
            <a href="#skills" className="nav-link transition">Competencies</a>
            <a href="#projects" className="nav-link transition">Projects</a>
            <a href="#contact" className="nav-link transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="theme-outline-btn rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 py-12 md:gap-24 md:px-10 md:py-16">
        <HeroSection
          name={portfolioData.profile.name}
          role={portfolioData.profile.role}
          introduction={portfolioData.profile.introduction}
          stack={portfolioData.profile.stack}
          experience={portfolioData.profile.experience}
        />
        <AboutSection
          description={portfolioData.about.description}
          workStyle={portfolioData.about.workStyle}
          strengths={portfolioData.about.strengths}
          values={portfolioData.about.values}
        />
        <SkillsSection groups={portfolioData.skillGroups} />
        <ExperienceTimelineSection items={portfolioData.experiences} />
        <ProjectsSection projects={portfolioData.projects} />
        <CaseStudySection
          title={portfolioData.caseStudy.title}
          context={portfolioData.caseStudy.context}
          challenge={portfolioData.caseStudy.challenge}
          approach={portfolioData.caseStudy.approach}
          outcome={portfolioData.caseStudy.outcome}
          stack={portfolioData.caseStudy.stack}
        />
        {hasContact ? (
          <ContactSection
            email={contact?.email}
            github={contact?.github}
            linkedin={contact?.linkedin}
          />
        ) : null}
      </main>

      <SiteFooter name={portfolioData.profile.name} />
    </div>
  );
}
