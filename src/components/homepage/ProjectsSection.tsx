import Image from "next/image";
import { Badge } from "../ui/badge";

function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: "VP Financials",
      /*
        For this i build them a portfolio site from where their members can access their services and also get to know more about them.
        aslo build an admin dashboard for them to manage their members and also their services.
        This was for a youtuber called VP Financials
      */
      description: "A community management platform for VP Financials.",
      imageSrc: "/projects/vp-financials.png",
      imageAlt: "VP Financials",
      demoLink: "https://vpfinancials.in",
      href: "https://vpfinancials.in",
      techStack: ["Next.js", "Tailwind CSS", "Exppress"],
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcasing My Web Development Expertise
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of the web applications I&apos;ve built, each
              showcasing my ability to create visually appealing, functional,
              and user-friendly solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  codeLink?: string;
  demoLink?: string;
  techStack?: string[];
}

function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  codeLink,
  demoLink,
  techStack,
}: ProjectCardProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-1">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          width="550"
          height="310"
          alt={imageAlt}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full cursor-pointer"
        />
      </a>
      <div className="p-4 bg-background">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        </a>
        <div className="flex justify-between items-start mt-2">
          <div className="flex gap-2 w-2/3 flex-wrap  ">
            {techStack?.map((tech) => {
              return <Badge key={tech}>{tech}</Badge>;
            })}
          </div>
          <div className="flex flex-col gap-2 text-sm font-medium text-right items-end">
            <a
              className="flex items-center gap-2 text-sm font-medium hover:border-b border-spacing-2 border-black"
              style={{
                display: demoLink ? "flex" : "none",
              }}
              href={demoLink}
              target="_top"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Visit</span>
            </a>

            <a
              className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
              style={{
                display: codeLink ? "flex" : "none",
              }}
              href={codeLink}
              target="_blank"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExternalLinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
