"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#skill", label: "Skill" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.1] dark:bg-black/60">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          advan<span className="text-blue-600">.dev</span>
        </Link>
        <div className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded border px-3 py-1 text-sm md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t px-6 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
