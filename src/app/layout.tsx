import type { Metadata } from "next";
import { AppChakraProvider } from "@/components/chakra-provider";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillBridge Local",
  description: "Skill-based volunteering matchmaker for local communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppChakraProvider>
          <SiteNav />
          {children}
        </AppChakraProvider>
      </body>
    </html>
  );
}
