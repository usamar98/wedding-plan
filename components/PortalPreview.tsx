"use client";

import { portalCards } from "@/data/siteData";
import { motion } from "framer-motion";

export function PortalPreview() {
  return (
    <section className="section-padding bg-[oklch(0.12_0.012_48_/_0.72)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">Client Experience Portal Preview</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              A private dashboard feel inside a luxury site.
            </h2>
            <p className="copy mt-7">
              Frontend preview only - no backend attached.
            </p>
          </div>

          <motion.div
            className="border border-mutedGold/25 bg-[oklch(0.92_0.012_76)] p-4 text-obsidian shadow-soft md:p-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-4 border-b border-obsidian/12 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-espresso/70">
                  Maison client portal
                </p>
                <h3 className="mt-1 font-sans text-2xl font-extrabold tracking-tight">
                  Lake Como Weekend
                </h3>
              </div>
              <div className="border border-obsidian/15 px-4 py-2 text-sm font-bold">
                68% prepared
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {portalCards.map((card) => (
                <article key={card.title} className="border border-obsidian/12 bg-[oklch(0.965_0.008_78)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-espresso/62">
                    {card.title}
                  </p>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-obsidian">
                    {card.value}
                  </p>
                  <p className="mt-2 min-h-10 text-sm leading-6 text-espresso/72">{card.helper}</p>
                  {typeof card.progress === "number" ? (
                    <div className="mt-4 h-1 bg-obsidian/10">
                      <motion.div
                        className="h-full w-full origin-left bg-espresso"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: card.progress / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
