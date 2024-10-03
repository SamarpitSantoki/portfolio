"use client";
import { motion } from "framer-motion";

function SkillSection() {
  const skills = [
    {
      category: "Front-end",
      technologies: "React, Next.js, HTML, CSS, JavaScript, TypeScript",
    },
    {
      category: "Back-end",
      technologies: "Node.js, Express, MongoDB, PostgreSQL, MySQL",
    },
    {
      category: "Tools & Frameworks",
      technologies: "Git, GitHub, Figma, Tailwind CSS, Jest, Cypress",
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white"
      id="skills"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {/* ... */}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-purple-100 p-4 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-purple-800 focus:bg-purple-200 focus:text-purple-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm font-medium leading-none group-hover:underline text-purple-600">
                {skill.category}
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-purple-700">
                {skill.technologies}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSection;
