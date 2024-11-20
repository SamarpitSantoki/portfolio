"use client";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ProjectCardProps, projects } from "@/constants/projects";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-border bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              My Projects
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800">
              Showcasing My Web Development Expertise
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of the web applications I&apos;ve built, each
              showcasing my ability to create visually appealing, functional,
              and user-friendly solutions.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="max-h-96"
              style={{
                height: "100%",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;

function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  employer,
  employerLink,
  codeLink,
  demoLink,
  siteLink,
  techStack,
}: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg shadow-purple-100 group hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 flex-1 h-full"
      whileHover={{ scale: 1.03 }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageSrc}
          width="550"
          height="310"
          alt={imageAlt}
          className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full cursor-pointer"
        />
      </a>
      <div className="p-4 h-full">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {employer && (
            <p className="text-sm text-purple-600 mb-2">
              <a
                href={employerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {employer}
              </a>
            </p>
          )}
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        </a>
        <div className="flex flex-wrap gap-2 mb-4 flex-1 min-h-16">
          {techStack?.map((tech) => (
            <Badge key={tech} variant="secondary" className="h-5">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          {demoLink && (
            <a
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          {siteLink && (
            <a
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Landing</span>
            </a>
          )}
          {codeLink && (
            <a
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
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
