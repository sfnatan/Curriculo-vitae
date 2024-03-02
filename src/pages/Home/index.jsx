import { AboutSection } from "../../components/AboutSection";
import { BannerSection } from "../../components/BannerSection";
import { CourseSection } from "../../components/CourseSection";
import { ExperienceSection } from "../../components/ExperienceSection";
import { SkillSection } from "../../components/SkillSection";
import { TemplateSection } from "../../components/TemplateSection";

export const Home = () => {
  return (
    <>
      <TemplateSection>
        <BannerSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <CourseSection />
      </TemplateSection>
    </>
  );
};
