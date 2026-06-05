// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import logo from './images/SCEPLogo.png'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sustainable Community Enrichment Project",
  description:
    "Supporting education, agriculture, and economic empowerment in rural Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <link rel="shortcut icon" href={logo.src} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}