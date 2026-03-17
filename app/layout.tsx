import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enviseo",
  description:
    "Authority, integrated. The operating environment for high-stakes transit and hospitality.",
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
