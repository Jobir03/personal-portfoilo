import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Onest } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "./providers/toaster";
import JSONLD from "@/components/seo/json-ld";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobir-ashurov.uz"),
  title: {
    default: "Jobir Ashurov | Senior Frontend Developer & MERN Stack Expert",
    template: "%s | Jobir Ashurov",
  },
  description:
    "Jobir Ashurov is a professional Senior Frontend Developer and MERN Stack expert specializing in building high-performance, scalable web applications with Next.js, React, and TypeScript.",
  keywords: [
    "Jobir Ashurov",
    "Jobir",
    "Ashurov",
    "Frontend Developer",
    "Senior Frontend Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer portfolio",
    "Full Stack Developer Uzbekistan",
  ],
  authors: [{ name: "Jobir Ashurov" }],
  creator: "Jobir Ashurov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobir-ashurov.uz",
    title: "Jobir Ashurov | Senior Frontend Developer & MERN Stack Expert",
    description:
      "Explore the portfolio of Jobir Ashurov, a Senior Frontend Developer specializing in high-end web applications.",
    siteName: "Jobir Ashurov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobir Ashurov | Senior Frontend Developer",
    description:
      "Senior Frontend Developer & MERN Stack expert building the future of the web.",
    creator: "@jobirashurov", // Replace with actual handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JSONLD />
      </head>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="system" disableTransitionOnChange>
          <ToasterProvider />
          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
