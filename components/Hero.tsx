"use client";

import { Button } from "@/components/ui/Button";
import { heroCards } from "@/data/siteData";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xOne = useTransform(mouseX, [-0.5, 0.5], [-28, 28]);
  const yOne = useTransform(mouseY, [-0.5, 0.5], [18, -18]);
  const xTwo = useTransform(mouseX, [-0.5, 0.5], [18, -18]);
  const yTwo = useTransform(mouseY, [-0.5, 0.5], [-16, 16]);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100dvh] overflow-hidden pt-24"
      onMouseMove={(event) => {
        if (reduceMotion || window.innerWidth < 1024) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.45_0.06_78_/_0.2),transparent_30rem)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-obsidian to-transparent" />
      </div>

      <div className="section-shell grid min-h-[calc(100dvh-6rem)] items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-7">Worldwide event design</p>
          <h1 className="display max-w-[760px] text-[clamp(4rem,10vw,9.4rem)] text-pearl">
            Destination Weddings, Designed Like Cinema.
          </h1>
          <p className="copy mt-8 max-w-2xl text-lg md:text-xl">
            A luxury planning and event design studio crafting immersive celebrations
            for couples, families, and private clients worldwide.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button type="button" onClick={() => document.querySelector("#experiences")?.scrollIntoView()}>
              Explore Experiences
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => document.querySelector("#inquiry")?.scrollIntoView()}
            >
              Plan My Event
            </Button>
          </div>
        </motion.div>

        <div className="relative min-h-[580px] md:min-h-[680px]">
          <motion.div
            style={{ x: reduceMotion ? 0 : xOne, y: reduceMotion ? 0 : yOne }}
            className="image-frame absolute left-0 top-10 h-[390px] w-[62%] md:h-[520px]"
            initial={{ opacity: 0, y: 38, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={heroCards[0].image}
              alt={heroCards[0].alt}
              className="h-full w-full object-cover"
            />
            <HeroLabel title={heroCards[0].title} eyebrow={heroCards[0].eyebrow} />
          </motion.div>

          <motion.div
            style={{ x: reduceMotion ? 0 : xTwo, y: reduceMotion ? 0 : yTwo }}
            className="image-frame absolute right-0 top-0 h-[280px] w-[46%] md:h-[360px]"
            initial={{ opacity: 0, y: 32, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={heroCards[1].image}
              alt={heroCards[1].alt}
              className="h-full w-full object-cover"
            />
            <HeroLabel title={heroCards[1].title} eyebrow={heroCards[1].eyebrow} />
          </motion.div>

          <motion.div
            className="image-frame absolute bottom-10 right-[10%] h-[260px] w-[54%] md:h-[330px]"
            initial={{ opacity: 0, y: 36, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.9, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={heroCards[2].image}
              alt={heroCards[2].alt}
              className="h-full w-full object-cover"
            />
            <HeroLabel title={heroCards[2].title} eyebrow={heroCards[2].eyebrow} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroLabel({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[1] flex items-end justify-between gap-4 p-4">
      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-mutedGold">
          {eyebrow}
        </p>
        <p className="font-display text-3xl text-pearl">{title}</p>
      </div>
      <span className="h-8 w-8 border border-pearl/35" />
    </div>
  );
}
