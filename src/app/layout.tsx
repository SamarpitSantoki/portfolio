import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { URL } from "url";
import "./globals.css";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Samarpit Santoki",
  metadataBase: new URL("https://samarpit.dev"),
  description:
    "Full Stack Developer with 3+ Years of competitive experience in Web and Mobile Development ",
  icons: [
    {
      url: "/me.jpg",
      rel: "icon",
    },
  ],
  abstract:
    "Full Stack Developer with 3+ Years of competitive experience in Web and Mobile Development ",
  authors: {
    name: "Samarpit Santoki",
  },
  creator: "Samarpit Santoki",
  publisher: "Samarpit Santoki",
  keywords: [
    "Samarpit Santoki",
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React Developer",
    "Node Developer",
    "Express Developer",
    "React Native",
  ],
  twitter: {
    card: "summary",
    site: "https://samarpit.dev",
    creator: "@SamarpitSantoki",
    description:
      "Full Stack Developer with 3+ Years of competitive experience in Web and Mobile Development ",
    title: "Samarpit Santoki",
    images: [
      {
        url: "/me.jpg",
        alt: "Samarpit Santoki",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://samarpit.dev",
    title: "Samarpit Santoki",
    description:
      "Full Stack Developer with 3+ Years of competitive experience in Web and Mobile Development ",
    images: [
      {
        url: "/me.jpg",
        alt: "Samarpit Santoki",
      },
    ],
    emails: ["samarpit.santoki@gmail.com"],
    phoneNumbers: ["+91 9512084467"],
  },
};

import posthog from "posthog-js";
import { CSPostHogProvider } from "@/providers/posthog-provider";

posthog.init("", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "always",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={ibm_plex_sans.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
