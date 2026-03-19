import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["200", "300", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enviseo",
  description:
    "Everything follows your lead. The operating environment for the modern estate.",
  icons: {
    icon: "/icon.svg",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${interTight.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
