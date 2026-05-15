// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container-width flex items-center justify-between py-4 px-6">
        <div className="font-bold text-lg">
          Wudome Peki Initiative
        </div>

        <div className="hidden md:flex gap-8">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#impact">Impact</Link>
          <Link href="#donate">Donate</Link>
          <Link href="#gallery">Gallery</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#impact">Impact</Link>
          <Link href="#donate">Donate</Link>
          <Link href="#gallery">Gallery</Link>
        </div>
      )}
    </nav>
  );
}