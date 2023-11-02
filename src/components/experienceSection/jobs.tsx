import { FaReact } from "react-icons/fa";
import { JobType } from "../../Types/JobType";

import {
  SiAdobedreamweaver,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiPostgresql,
  SiPython,
  SiStorybook,
  SiTypescript,
  SiXaml,
} from "react-icons/si";
import { ChakraUisvg } from "./ChakraUisvg";
import { Image } from "@chakra-ui/react";
import { IconContext } from "react-icons";

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
  {
    company: "Huroos SRL",
    dates: "08/2023 - Today",
    role: "Fullstack Developer",
    img: "huroos.jpeg",
    location:'Milan',
    desc: "Odoo ERP and Website Development using Python, XML and PostGreSQL.",
    icons: [
      <Image src="odoo.png" maxH="64px" m="0"/>,
    <svg style={{maxHeight:'64px', maxWidth:'64px'}}>
     <defs>
       <linearGradient id="pyGradient" gradientTransform={"rotate(45)"}>
         <stop offset="25%"  stopColor="#407CACff" />
         <stop offset="50%" stopColor="#3C7CAEff" />
         <stop offset="75%"  stopColor="#648EB1ff" />
         <stop offset="100%"  stopColor="#FCE987ff" />

       </linearGradient>
     </defs>
     <IconContext.Provider value={{ attr: {fill: "url('#pyGradient')"}}}>
     <SiPython/>
     </IconContext.Provider>
   </svg>,
      <SiPostgresql/>
    ],
  },
];
