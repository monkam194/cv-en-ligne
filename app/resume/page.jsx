"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaDocker, FaGitAlt } from "react-icons/fa";



import { SiNextdotjs, SiTailwindcss, SiPhp, SiCsharp, SiPostgresql, SiWordpress } from "react-icons/si";



const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Passionné par le développement et la résolution de problèmes grâce aux nouvelles technologies, je suis en quête d’une alternance pour poursuivre mon master en ingénierie logicielle.",
  items: [
    {
      company: "Projet personnel",
      position: "Création de mon CV en ligne",
      duration: "2025",
      details: [
        "Création d'une application web de CV interactif avec React.js et Next.js.",
        "Utilisation de Tailwind CSS pour un design moderne et responsive.",
        "Déploiement et gestion du projet sur GitHub."
      ],
    },
    {
      company: "NavXpert",
      position: "Développeur back-end",
      duration: "Mars - Juin 2024",
      details: [
        "Développement d'une API avec ASP.NET et C#.",
        "Intégration de l'API de la SNCF et des données de transport en commun fournies par Île-de-France Mobilités.",
        "Développement front-end avec React.js pour des visualisations interactives d'itinéraires."
      ],
    },
    {
      company: "Start Compta",
      position: "Développeur back-end",
      duration: "Mars - Juin 2024",
      details: [
        "Développement de fonctionnalités back-end d'une application de comptabilité en C# et WPF.",
        "Gestion des environnements de développement avec Docker.",
        "Gestion des données utilisateurs avec PostgreSQL.",
        "Coordination de projet avec Jira et collaboration via GitLab."
      ],
    },
    {
      company: "Colette Club",
      position: "Formateur invité",
      duration: "2024",
      details: [
        "Formation d'une trentaine de membres à la création de blogs personnels avec WordPress."
      ],
    },
  ],
};

// données sur l'éducation
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon éducation",
  description: "Parcours académique en ingénierie logicielle et informatique.",
  items: [
    {
      institution: "ESIEA Ivry-sur-Seine, France",
      degree: "Semestre 4 - Ingénierie logicielle",
      duration: "2024 - Présent",
    },
    {
      institution: "IUT Douala, Cameroun",
      degree: "Licence en génie logiciel",
      duration: "2020 - 2023",
    },
    {
      institution: "IUT Douala, Cameroun",
      degree: "DUT en génie informatique",
      duration: "2020 - 2023",
    },
  ],
};

// données sur les compétences
const skills = {
  title: "Mes compétences",
  description:
    "Compétences techniques et humaines acquises au fil de mon parcours académique et professionnel.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3 (Bootstrap, Tailwind CSS)",
    },
    {
      icon: <FaJs />,
      name: "JavaScript (React + TypeScript)",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiPhp />,
      name: "PHP (Laravel)",
    },
    {
      icon: <SiCsharp />,
      name: "C# (ASP.NET, WPF, .NET MAUI)",
    },
    {
      icon: <FaGitAlt />,
      name: "Git (GitHub, GitLab, Bitbucket)",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL, MySQL",
    },
    {
      icon: <SiWordpress />,
      name: "WordPress",
    },
  ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
