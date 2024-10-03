"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.header
      className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <CodeIcon className="h-6 w-6 text-purple-600" />
          <motion.span
            className="ml-2 text-lg font-semibold text-gray-800"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Samarpit Santoki
          </motion.span>
        </motion.div>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              prefetch={false}
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}

export default Navbar;

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
