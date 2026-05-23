"use client";

import { business } from "@/data/siteData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), prefersReduced ? 550 : 2350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-[oklch(0.09_0.012_48)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-[min(84vw,520px)] text-center">
            <div className="mx-auto mb-8 h-px w-full overflow-hidden bg-mutedGold/15">
              <motion.div
                className="h-full w-full origin-left bg-mutedGold"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <motion.p
              className="font-display text-4xl text-pearl md:text-6xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {business.name}
            </motion.p>
            <motion.p
              className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-sand/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.65 }}
            >
              Curating celebrations across the world
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
