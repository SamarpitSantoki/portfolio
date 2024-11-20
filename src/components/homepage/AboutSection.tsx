"use client";
import * as motion from "framer-motion/client";
import { useInView } from "react-intersection-observer";

function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-semibold">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
              Passionate About Crafting Exceptional Web Experiences
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a full-stack developer, I have a deep passion for creating
              innovative and user-friendly web applications. With a strong
              foundation in both front-end and back-end technologies, I strive
              to deliver solutions that not only look great but also function
              seamlessly.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 font-semibold">
              My Expertise
            </div>
            <ul className="grid gap-6">
              {[
                "Front-End Development",
                "Back-End Development",
                "Full-Stack Integration",
                "AI-Enabled Solutions",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">{item}</h3>
                    <p className="text-gray-600">
                      {item === "Front-End Development" &&
                        "Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React, Vue, and Angular."}
                      {item === "Back-End Development" &&
                        "Experienced in building robust server-side applications using Node.js, Express, and various databases like MySQL, PostgreSQL, and MongoDB."}
                      {item === "Full-Stack Integration" &&
                        "Adept at seamlessly integrating front-end and back-end components to create cohesive and scalable web applications."}
                      {item === "AI-Enabled Solutions" &&
                        "Skilled in developing AI-powered applications and automation solutions, leveraging machine learning and natural language processing techniques to enhance user experiences and streamline processes."}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
