import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function SocialLinks() {
  const socialLinks = [
    { icon: GitHubLogoIcon, href: "https://github.com/yourusername" },
    { icon: LinkedInLogoIcon, href: "https://linkedin.com/in/yourusername" },
    { icon: TwitterLogoIcon, href: "https://twitter.com/yourusername" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}
