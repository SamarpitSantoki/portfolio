export interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  codeLink?: string;
  demoLink?: string;
  techStack?: string[];
}
export const projects: ProjectCardProps[] = [
  {
    title: "VP Financials",
    description: "A community management platform for VP Financials.",
    imageSrc: "/projects/vp-financials.png",
    imageAlt: "VP Financials",
    demoLink: "https://vpfinancials.in",
    href: "https://vpfinancials.in",
    techStack: ["Next.js", "Tailwind CSS", "Express"],
  },
  {
    title: "Decorum",
    description:
      "An event management platform for creating and managing events.",
    imageSrc: "/projects/decorum.png",
    imageAlt: "Decorum",
    demoLink: "https://event-client-three.vercel.app/",
    href: "https://event-client-three.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "Bun", "Elysia", "Zustand"],
  },
  {
    title: "Lotto World",
    description:
      "An online lottery platform for buying and managing lottery tickets.",
    imageSrc: "/projects/lottoworld.png",
    imageAlt: "Lotto World",
    demoLink: "https://lottoworld.shop/",
    href: "https://lottoworld.shop/",
    techStack: ["Next.js", "Tailwind CSS", "Express", "MongoDB"],
  },
  {
    title: "Book Your Pandit",
    description:
      "A multi-platform app for booking religious services and ceremonies.",
    imageSrc: "/projects/bookyourpandit.png",
    imageAlt: "Book Your Pandit",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.bookyourpandit.client",
    href: "https://play.google.com/store/apps/details?id=com.bookyourpandit.client",
    techStack: ["React Native", "Nativewind", "Zustand", "Next.js"],
  },
];
