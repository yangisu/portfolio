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
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#07050d]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-120px] top-[-140px] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(156,109,255,0.32),transparent_70%)]" />
        <div className="absolute right-[-120px] top-[22%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(84,60,145,0.28),transparent_70%)]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-[#211b34]/80 bg-[#080611]/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#b89cff]"
          >
            Portfolio
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#cfc5e6] md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[#4a4067] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#dfd6f8] transition hover:border-[#9c6dff] hover:text-white"
          >
            Hire Me
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
        <ContactSection
          email={portfolioData.contact.email}
          github={portfolioData.contact.github}
          linkedin={portfolioData.contact.linkedin}
        />
      </main>

      <SiteFooter name={portfolioData.profile.name} />
    </div>
  );
}
