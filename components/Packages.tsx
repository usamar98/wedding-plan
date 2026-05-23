"use client";

import { Button } from "@/components/ui/Button";
import { packages } from "@/data/siteData";
import { motion } from "framer-motion";

export function Packages() {
  return (
    <section className="section-padding">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Investment packages</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Clear starting points for premium planning.
            </h2>
          </div>
          <p className="copy max-w-2xl md:justify-self-end">
            These are wedding planner package prices for the demo brand. The interface
            is designed so any planner can swap in their real tiers from one data file.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-4 lg:grid-cols-[0.95fr_1.05fr_1.05fr_1.2fr]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055 } } }}
        >
          {packages.map((item, index) => (
            <motion.article
              key={item.name}
              variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
              className={`flex min-h-[520px] flex-col border p-6 ${
                index === packages.length - 1
                  ? "border-mutedGold/70 bg-mutedGold text-obsidian"
                  : "border-mutedGold/24 bg-obsidian/36 text-pearl"
              }`}
            >
              <p className={`text-sm font-bold uppercase tracking-[0.18em] ${index === packages.length - 1 ? "text-obsidian/70" : "text-mutedGold"}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-7 font-display text-4xl">{item.name}</h3>
              <p className="mt-4 text-3xl font-extrabold">{item.price}</p>
              <p className={`mt-5 leading-7 ${index === packages.length - 1 ? "text-obsidian/76" : "text-sand/82"}`}>
                {item.description}
              </p>
              <ul className="mt-7 grid gap-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <span className={`mt-2 h-px w-5 ${index === packages.length - 1 ? "bg-obsidian/70" : "bg-mutedGold"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                variant={index === packages.length - 1 ? "secondary" : "primary"}
                className={`mt-auto w-full ${index === packages.length - 1 ? "border-obsidian/70 text-obsidian hover:bg-obsidian hover:text-pearl" : ""}`}
                onClick={() => document.querySelector("#inquiry")?.scrollIntoView()}
              >
                Request Proposal
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
