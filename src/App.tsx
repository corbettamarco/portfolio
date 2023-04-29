import { AppShell } from "@saas-ui/react";
import { AboveTheFold } from "./components/AboveTheFold";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { CustomSidebar } from "./components/sidebarComponents/CustomSidebar";
export const App = () => {
  return (
    <AppShell
      navbar={<NavBar />}
      sidebar={
        <CustomSidebar/>
      }
    >
      <AboveTheFold />
      <Projects />
    </AppShell>
  );
};
