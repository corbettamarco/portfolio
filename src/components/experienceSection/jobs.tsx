import { FaReact } from "react-icons/fa";
import { JobType } from "../../Types/JobType";

import { Image } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import {
  SiAdobedreamweaver,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiPostgresql,
  SiPython,
  SiStorybook,
  SiTypescript
} from "react-icons/si";
import { ChakraUisvg } from "./ChakraUisvg";

export const jobs: JobType[] = [
  {
    company: "RefactorMi",
    dates: "06/2022 - 05/2023",
    role: "Front End Developer",
    img: "refactormi.png",
    location: 'Fulll Remote',
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
    company: "Tod's",
    dates: "05/2023 - 07/2023",
    role: "Email Campaign Developer",
    img: "tods.png",
    location: 'Milan',
    desc: "Creation and editing of HTML email templates for global newlsetter campaigns for Tod's, Hogan, Fay and Roger Vivier brands. Usage of Adobe Campaign and Adobe Dreaweaver. Interational team collaboration.",
    icons: [
      <SiHtml5 color="#DD4B24" />,
      <SiCss3 color="#254BDD" />,
      <SiAdobedreamweaver color="#F75EEE" />,
    ],
  },
  {
    company: "Huroos",
    dates: "08/2023 - 12/2024",
    role: "Fullstack Developer",
    img: "huroos.jpeg",
    location: 'Milan',
    desc: "Odoo ERP and Website Development using Python, XML, JavaScript and PostGreSQL.",
    icons: [
      <Image src="odoo.png" maxH="80px" m="0" />,
      <svg style={{ maxHeight: '80px', maxWidth: '80px' }}>
        <defs>
          <linearGradient id="pyGradient" gradientTransform={"rotate(45)"}>
            <stop offset="25%" stopColor="#407CACff" />
            <stop offset="50%" stopColor="#3C7CAEff" />
            <stop offset="75%" stopColor="#648EB1ff" />
            <stop offset="100%" stopColor="#FCE987ff" />

          </linearGradient>
        </defs>
        <IconContext.Provider value={{ attr: { fill: "url('#pyGradient')" } }}>
          <SiPython />
        </IconContext.Provider>
      </svg>,
      <SiPostgresql />
    ],
  },
  {
    company: "Software Inside",
    dates: "01/2024 - 04/2025",
    role: "Software Developer",
    img: "software-inside.jpg",
    location: 'Remote',
    desc: "Development of both frontend and backend of webapps forcustomer companies. Usage of Golang, Java Springboot, Docker, Angular",
    icons: [
      <Image src="golang.png" h="80px" m="0" />,
      <Image src="Spring_Boot.png" h="80px" m="0" />,
      <Image src="docker.png" h="80px" m="0" />,
      <Image src="angular.jpg" maxH="80px" m="0" />,
    ],
  },
  {
    company: "DataTrust AG",
    dates: "04/2024 - Present",
    role: "Fullstack Developer",
    img: "datatrust_ag.jpg",
    location: 'Remote',
    desc: "Fullstack development of a backup and data recovery application using React.js, Python and Supabase.",
    icons: [
      <FaReact color="#00DBF7" />,
      <svg style={{ maxHeight: '80px', maxWidth: '80px' }}>
        <defs>
          <linearGradient id="pyGradient2" gradientTransform={"rotate(45)"}>
            <stop offset="25%" stopColor="#407CACff" />
            <stop offset="50%" stopColor="#3C7CAEff" />
            <stop offset="75%" stopColor="#648EB1ff" />
            <stop offset="100%" stopColor="#FCE987ff" />

          </linearGradient>
        </defs>
        <IconContext.Provider value={{ attr: { fill: "url('#pyGradient2')" } }}>
          <SiPython />
        </IconContext.Provider>
      </svg>,
      <Image src="supabase.png" maxH="80px" m="0" />,
    ],
  },
];
