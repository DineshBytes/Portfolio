"use client";

import { GitBranch } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/55 px-4 py-3 shadow-[0_18px_60px_rgba(40,46,58,.08)] backdrop-blur-2xl">
        <a className="text-sm font-semibold tracking-[.26em]" href="#top">
          SDK
        </a>
        <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[.18em] text-black/55 md:flex">
          {["About", "Projects", "Skills", "Journey", "Contact"].map((item) => (
            <a
              key={item}
              className="transition hover:text-black"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          className="icon-button"
          href={portfolio.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub"
        >
          <GitBranch size={17} />
        </a>
      </nav>
    </header>
  );
}
