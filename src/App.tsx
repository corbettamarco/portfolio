import { AppShell } from "@saas-ui/react";
import { NavBar } from "./components/NavBar";
import { AboveTheFold } from "./components/aboveTheFold/AboveTheFold";
import Contact from "./components/contactSection/Contact";
import { ExperienceSection } from "./components/experienceSection/ExperienceSection";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projectsSection/Projects";
import { CustomSidebar } from "./components/sidebarComponents/CustomSidebar";
export const App = () => {
  return (
    <AppShell navbar={<NavBar />} sidebar={<CustomSidebar />}>
        <AboveTheFold />
        {/* <Services/> */}
        <Projects />
        <ExperienceSection/>
        <Contact/>
        <Footer />
  
    </AppShell>
  );
};
