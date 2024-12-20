import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArroupRightICon from '@/assets/icons/arrow-up-right.svg';
import { url } from "inspector";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader, Card  } from "@/components/Index";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return(
  <section className="pb-16 lg:py-24">
  <div className="container">
    <SectionHeader
      heading="Real-world-projects"
      title="Featured Projects"
      description="See How i transform concepts into engaging digital experience"
    />
    <div className="flex flex-col mt-10 md:mt-20 gap-20">
      {portfolioProjects.map((project) => (
        <Card className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-18" key={project.title}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">
          <div className="ppercase uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent inline-flex gap-2">
            <span>{project.company} </span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
           <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
           <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
           <ul className="flex flex-col gap-4 mat-4">
            {project.results.map((result)=>(
              <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckIcon className="size-5 md:size-6 text-emerald-300 inline-block"/>
                {result.title}
              </li>
            ))}
           </ul>
           <a href={project.link}>
           <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl mt-8 font-semibold inline-flex justify-center items-center gap-2">
              <span>View Full Site</span>
              <ArroupRightICon className="size-4"/>
            </button>
           </a>
        </div>
        <div className="relative">
           <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
        </div>
        </div>
        </Card>
      ))}
    </div>
  </div>
</section>
  )
};
