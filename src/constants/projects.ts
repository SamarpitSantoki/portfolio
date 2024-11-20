export interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  codeLink?: string;
  demoLink?: string;
  siteLink?: string;
  employer?: string;
  employerLink?: string;
  techStack?: string[];
}
export const projects: ProjectCardProps[] = [
  {
    title: "Book Your Pandit",
    description:
      "A multi-platform app for booking religious services and ceremonies.",
    imageSrc: "/projects/bookyourpandit.png",
    imageAlt: "Book Your Pandit",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.bookyourpandit.client",
    siteLink: "https://bookyourpandit.in",
    href: "https://bookyourpandit.in",
    techStack: ["React Native", "Nativewind", "Zustand", "Next.js"],
    // employer: "Urbano Infotech Pvt. Ltd.",
    // employerLink: "https://urbanoinfotech.com/",
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
    // employer: "Vasoya Brothers Infotech",
    // employerLink: "https://vasoyabrothers.com/",
  },
  {
    title: "VP Financials",
    description: "A community management platform for VP Financials.",
    imageSrc: "/projects/vp-financials.png",
    imageAlt: "VP Financials",
    demoLink: "https://vpfinancials.in",
    href: "https://vpfinancials.in",
    techStack: ["Next.js", "Tailwind CSS", "Express"],
    // employer: "Beknown Enterprise",
    // employerLink: "https://www.beknownenterprise.in/",
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
    title: "Tales: Craft Your Own Story",
    description:
      "An app that allows users to create their own stories, collaborate with AI, and share it.",
    imageSrc: "/projects/tales.png",
    imageAlt: "Tales: Craft Your Own Story",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.samarpit.tales",
    href: "https://play.google.com/store/apps/details?id=com.samarpit.tales",
    techStack: ["React Native", "Tamagui", "Expo", "OpenAI"],
  },
];
