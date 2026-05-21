import type { Metadata } from "next";
import { Playfair_Display, Jost, JetBrains_Mono } from "next/font/google";
import { RubyCursor } from "@/components/shared/RubyCursor";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reigne — Ruby Édition N°1",
  description:
    "Frontend developer portfolio. Crafted with intention, built with precision — inspired by Jennie Kim's Ruby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RubyCursor />
        {children}
      </body>
    </html>
  );
}
