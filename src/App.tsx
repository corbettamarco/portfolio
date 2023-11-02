import { AppShell } from "@saas-ui/react";
import { AboveTheFold } from "./components/aboveTheFold/AboveTheFold";
import { NavBar } from "./components/NavBar";
import { CustomSidebar } from "./components/sidebarComponents/CustomSidebar";
import { Footer } from "./components/footer/Footer";
import { ExperienceSection } from "./components/experienceSection/ExperienceSection";
import { Projects } from "./components/projectsSection/Projects";
import Contact from "./components/contactSection/Contact";
import { Services } from "./components/servicesSection/Services";
export const App = () => {
  return (
    <AppShell navbar={<NavBar />} sidebar={<CustomSidebar />}>
        <AboveTheFold />
        <Services/>
        <Projects />
        <ExperienceSection/>
        <Contact/>
        <Footer />
  
    </AppShell>
  );
};
