import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ovasis Group Limited | Digital Agency in Kenya",
  description: "Ovasis Group Limited is a Kenyan digital agency specializing in UI/UX Design, Front-End Engineering, Software Development (Web & Mobile), Product Management, and Graphic Design & Branding. We transform ideas into exceptional digital experiences.",
  keywords: [
    "digital agency Kenya",
    "UI/UX design",
    "front-end engineering",
    "software development Kenya",
    "web development",
    "mobile app development",
    "product management",
    "graphic design",
    "branding agency",
    "Nairobi digital agency",
    "Ovasis Group",
    "digital transformation",
    "user experience design",
    "creative agency Kenya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
