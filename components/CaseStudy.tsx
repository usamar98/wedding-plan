"use client";

import { caseStudyDays } from "@/data/siteData";
import { motion } from "framer-motion";

export function CaseStudy() {
  return (
    <section className="relative section-padding bg-[oklch(0.10_0.012_48_/_0.72)]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow mb-5">Cinematic case study</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Inside a Three-Day Destination Wedding
            </h2>
            <p className="copy mt-7">
              A scroll story built to show how planning becomes pacing: arrival,
              ceremony, dinner, afterparty, farewell.
            </p>
          </div>

          <div className="grid gap-8">
            {caseStudyDays.map((day, index) => (
              <motion.article
                key={day.day}
                className="grid gap-5 border-t border-mutedGold/24 pt-6 md:grid-cols-[0.76fr_1fr] md:items-end"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="order-2 md:order-1">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                    {day.day}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-pearl">{day.title}</h3>
                  <p className="copy mt-4">{day.text}</p>
                </div>
                <div className="image-frame order-1 aspect-[4/5] md:order-2">
                  <img src={day.image} alt={`${day.day} ${day.title}`} className="h-full w-full object-cover" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
