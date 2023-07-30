import { JobType } from "../../Types/JobType";
import { FaReact } from "react-icons/fa";

import React from 'react'
import { ChakraUisvg } from "./ChakraUisvg";
import { SiTypescript } from "react-icons/si";


export const jobs: JobType[] = [
    {
      company: "RefactorMi",
      dates: "06/2022 - 05/2023",
      role: "Front End Developer",
      img: "refactormi.png",
      desc:`UI development of applications for client companies.vUsage of GitHub for version control, HTML, CSS, React.JS + TypeScript, Chakra UI library, Storybook and NX monorepository .`,
      icons: [<FaReact color="#00DBF7"/>, <ChakraUisvg/>, <SiTypescript color="#2F74C0"/>]
      },
    {
      company: "Tod's SPA",
      dates: "05/2023 - 07/2023",
      role: "Email Campaign Developer",
      img: "tods.png",
      desc: "Creation and editing of HTML email templates for global newlsetter campaigns for Tod's, Hogan, Fay and Roger Vivier brands. Usage of Adobe Campaign. Usage of Adobe Dreaweaver. Interational team collaboration ",
    },
  ];