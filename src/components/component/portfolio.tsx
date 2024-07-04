import AboutSection from "../homepage/AboutSection";
import ContactSection from "../homepage/ContactSection";
import MainSection from "../homepage/MainSection";
import Navbar from "../homepage/Navbar";
import ProjectsSection from "../homepage/ProjectsSection";
import SkillSection from "../homepage/SkillSection";

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]  ">
      <main className="flex-1">
        <Navbar />
        <MainSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
