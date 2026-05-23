"use client";

import { journeySteps } from "@/data/siteData";
import { motion } from "framer-motion";

export function ClientJourney() {
  return (
    <section className="section-padding">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">Client journey</p>
          <h2 className="display text-5xl text-pearl md:text-7xl">
            A precise process for emotional work.
          </h2>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="relative border-l border-mutedGold/30 pl-12">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="relative grid grid-cols-[12rem_1fr] gap-10 border-b border-mutedGold/18 py-8"
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute -left-[3.18rem] top-10 h-3 w-3 rounded-full bg-mutedGold" />
                <p className="font-display text-4xl text-mutedGold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-4xl text-pearl">{step.title}</h3>
                  <p className="copy mt-3 max-w-3xl">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 lg:hidden">
          {journeySteps.map((step, index) => (
            <details key={step.title} className="border border-mutedGold/24 p-4">
              <summary className="cursor-pointer list-none font-display text-2xl text-pearl">
                <span className="mr-3 text-mutedGold">{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </summary>
              <p className="copy mt-4">{step.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
