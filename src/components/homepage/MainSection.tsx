"use client";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { TypeAnimation } from "react-type-animation";
import { DownloadIcon } from "@radix-ui/react-icons";

function MainSection() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="flex gap-4 items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Image
                    src={"/me.jpg"}
                    width="100"
                    height="100"
                    alt="Samarpit Santoki"
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </motion.div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Samarpit Santoki
                  </h1>
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer",
                      1000,
                      "System Design Enthusiast",
                      1000,
                      "Problem Solver",
                      1000,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="inline-block text-yellow-300 font-semibold text-xl"
                    repeat={Infinity}
                  />
                </div>
              </div>
              <h3
                aria-label="Job Title"
                className="max-w-[600px] text-gray-200 md:text-xl"
              >
                I&apos;m a full-stack developer with a passion for creating
                innovative and user-friendly web applications.
              </h3>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white text-purple-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  Hire Me
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/resume.pdf"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  download
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://www.softsuave.com/blog/wp-content/uploads/2023/01/fullstack-development.png"
              width="550"
              height="550"
              alt="Hero"
              className="hidden lg:block mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
