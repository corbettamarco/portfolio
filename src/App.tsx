import { AppShell } from "@saas-ui/react";
import { AboveTheFold } from "./components/aboveTheFold/AboveTheFold";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { CustomSidebar } from "./components/sidebarComponents/CustomSidebar";
import { Footer } from "./components/footer/Footer";
import { ExperienceSection } from "./components/experienceSection/ExperienceSection";
export const App = () => {
  return (
    <AppShell navbar={<NavBar />} sidebar={<CustomSidebar />}>
        <AboveTheFold />
        <Projects />
        <ExperienceSection/>
        <Footer />
  
    </AppShell>
  );
};
