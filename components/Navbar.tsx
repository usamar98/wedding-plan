"use client";

import { business, navigationLinks } from "@/data/siteData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-mutedGold/18 bg-obsidian/58 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="group flex flex-col">
          <span className="font-display text-2xl text-pearl">{business.name}</span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-mutedGold/80">
            Destination atelier
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-sand/78 transition hover:text-pearl"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#inquiry"
          className="hidden border border-mutedGold/45 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-pearl transition hover:bg-mutedGold hover:text-obsidian md:inline-flex"
        >
          Plan My Event
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-mutedGold/35 text-sand lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="border-t border-mutedGold/20 bg-[oklch(0.13_0.014_50_/_0.96)] px-4 py-8 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <div className="section-shell grid gap-4">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-mutedGold/18 py-4 font-display text-4xl text-pearl"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
