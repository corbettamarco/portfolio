import { FaReact } from "react-icons/fa";
import { JobType } from "../../Types/JobType";

import {
  SiAdobedreamweaver,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";
import { ChakraUisvg } from "./ChakraUisvg";

export const jobs: JobType[] = [
  {
    company: "RefactorMi",
    dates: "06/2022 - 05/2023",
    role: "Front End Developer",
    img: "refactormi.png",
    location:'Fulll Remote',
    desc: `UI development of applications for client companies. Usage of GitHub for version control, HTML, CSS, React.JS + TypeScript, Chakra UI library, Storybook and NX monorepository.`,
    icons: [
      <FaReact color="#00DBF7" />,
      <ChakraUisvg />,
      <SiTypescript color="#2F74C0" />,
      <SiHtml5 color="#DD4B24" />,
      <SiCss3 color="#254BDD" />,
      <SiGithub color="black" />,
      <SiStorybook color="#FF4785" />
    ],
  },
  {
    company: "Tod's SPA",
    dates: "05/2023 - 07/2023",
    role: "Email Campaign Developer",
    img: "tods.png",
    location:'Milan',
    desc: "Creation and editing of HTML email templates for global newlsetter campaigns for Tod's, Hogan, Fay and Roger Vivier brands. Usage of Adobe Campaign and Adobe Dreaweaver. Interational team collaboration.",
    icons: [
      <SiHtml5 color="#DD4B24" />,
      <SiCss3 color="#254BDD" />,
      <SiAdobedreamweaver color="#F75EEE" />,
    ],
  },
];
