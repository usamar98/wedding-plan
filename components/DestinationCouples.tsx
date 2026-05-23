"use client";

import { Button } from "@/components/ui/Button";
import { destinationCouples } from "@/data/siteData";
import type { DestinationCouple } from "@/types";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";

export function DestinationCouples() {
  return (
    <section className="section-padding relative overflow-hidden bg-[oklch(0.105_0.012_48_/_0.72)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-mutedGold/30" />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Couples across destinations</p>
            <h2 className="display max-w-4xl text-5xl text-pearl md:text-7xl">
              Real romance, placed in the right city.
            </h2>
          </div>
          <p className="copy max-w-2xl lg:justify-self-end">
            A destination planner should sell the feeling of the couple inside the
            place, not a generic travel postcard. Hover each story to reveal the
            planning mood and setting.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_1.05fr_0.95fr]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {destinationCouples.map((item, index) => (
            <CoupleCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CoupleCard({ item, index }: { item: DestinationCouple; index: number }) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 160, damping: 22, mass: 0.45 });
  const springY = useSpring(rawY, { stiffness: 160, damping: 22, mass: 0.45 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);

  const tall = index === 0 || index === 2;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(event) => {
        if (reduceMotion || window.innerWidth < 900) return;
        const rect = event.currentTarget.getBoundingClientRect();
        rawX.set((event.clientX - rect.left) / rect.width - 0.5);
        rawY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1100
      }}
      className={`group relative overflow-hidden border border-mutedGold/24 bg-obsidian/50 shadow-soft ${
        tall ? "min-h-[620px]" : "min-h-[540px] xl:mt-16"
      }`}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.012_48_/_0.92)] via-[oklch(0.10_0.012_48_/_0.35)] to-[oklch(0.12_0.012_48_/_0.08)]" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-5 top-5 h-px origin-left scale-x-0 bg-mutedGold transition duration-700 group-hover:scale-x-100" />
        <div className="absolute inset-y-5 right-5 w-px origin-top scale-y-0 bg-mutedGold transition duration-700 group-hover:scale-y-100" />
      </div>

      <div className="relative z-[1] flex h-full min-h-[inherit] flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mutedGold">
              {item.coupleStyle}
            </p>
            <h3 className="mt-3 font-display text-5xl text-pearl">{item.destination}</h3>
          </div>
          <span className="grid h-12 w-12 place-items-center border border-pearl/35 text-sm font-bold text-pearl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="translate-y-6 transition duration-500 group-hover:translate-y-0">
          <p className="max-w-sm text-lg leading-8 text-pearl">{item.story}</p>
          <div className="mt-5 grid gap-2 text-sm text-sand/84">
            <p>{item.season}</p>
            <p>{item.setting}</p>
          </div>
          <Button
            type="button"
            variant="secondary"
            className="mt-7 bg-obsidian/30 backdrop-blur"
            onClick={() => document.querySelector("#inquiry")?.scrollIntoView()}
          >
            Plan This Mood
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
