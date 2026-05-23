"use client";

import { EventStoryModal } from "@/components/EventStoryModal";
import { portfolioEvents } from "@/data/siteData";
import type { PortfolioEvent } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";

export function Portfolio() {
  const [activeEvent, setActiveEvent] = useState<PortfolioEvent | null>(null);

  return (
    <section id="portfolio" className="section-padding overflow-hidden">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Featured events</p>
            <h2 className="display max-w-4xl text-5xl text-pearl md:text-7xl">
              Portfolio fragments from private celebrations.
            </h2>
          </div>
          <p className="copy md:justify-self-end">
            Scroll sideways through editorial event stories. Each modal is a frontend-only
            sales preview, ready to adapt with a planner's real portfolio.
          </p>
        </div>
      </div>

      <div className="mt-14 overflow-x-auto px-4 pb-6 no-scrollbar">
        <motion.div
          className="flex w-max gap-5"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioEvents.map((event, index) => (
            <article
              key={event.id}
              className="group w-[82vw] max-w-[420px] snap-start border border-mutedGold/24 bg-obsidian/40 p-3 md:w-[410px]"
            >
              <div className="image-frame aspect-[4/5]">
                <img src={event.image} alt={`${event.title} portfolio`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 z-[1] border border-pearl/30 bg-obsidian/45 px-3 py-2 text-xs font-bold text-pearl backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-3">
                <p className="mt-1 text-sm font-semibold text-mutedGold">{event.location}</p>
                <h3 className="mt-2 font-display text-3xl text-pearl">{event.title}</h3>
                <p className="mt-3 text-sm text-sand/78">
                  {event.guestCount} | {event.duration}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span key={tag} className="border border-mutedGold/20 px-2 py-1 text-xs text-sand/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveEvent(event)}
                  className="mt-6 w-full border border-mutedGold/45 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-pearl transition hover:bg-mutedGold hover:text-obsidian"
                >
                  Open Story
                </button>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
      <EventStoryModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </section>
  );
}
