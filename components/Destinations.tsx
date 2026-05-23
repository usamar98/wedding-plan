"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { destinations } from "@/data/siteData";
import type { Destination } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";

export function Destinations() {
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[620px] w-[min(92vw,1180px)] opacity-35">
        <WorldLines />
      </div>

      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Destinations we design for</p>
            <h2 className="display max-w-3xl text-5xl text-pearl md:text-7xl">
              A world map of private vows.
            </h2>
          </div>
          <p className="copy max-w-2xl md:justify-self-end">
            From palace hotels to cliffside terraces, each destination is shaped around
            guest movement, weather, venue rules, family priorities, and the feeling the
            couple wants guests to carry home.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.045 } }
          }}
        >
          {destinations.map((destination) => (
            <motion.article
              key={destination.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 }
              }}
              className="group luxury-surface min-h-[270px] p-5 transition duration-300 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setActiveDestination(destination)}
                className="flex h-full w-full flex-col text-left"
              >
                <span className="mb-10 h-2 w-2 rounded-full bg-mutedGold shadow-[0_0_0_8px_oklch(0.72_0.09_82_/_0.11)]" />
                <h3 className="font-display text-4xl text-pearl">{destination.name}</h3>
                <dl className="mt-6 grid gap-3 text-sm text-sand/82">
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-mutedGold/80">
                      Best for
                    </dt>
                    <dd>{destination.bestEventType}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-mutedGold/80">
                      Capacity
                    </dt>
                    <dd>{destination.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-mutedGold/80">
                      Planning investment
                    </dt>
                    <dd>{destination.investment}</dd>
                  </div>
                </dl>
                <span className="mt-auto inline-flex pt-8 text-xs font-bold uppercase tracking-[0.18em] text-pearl">
                  View Destination
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Modal
        open={Boolean(activeDestination)}
        onClose={() => setActiveDestination(null)}
        title={activeDestination?.name ?? ""}
      >
        {activeDestination ? (
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-mutedGold/25 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                Destination overview
              </p>
              <p className="copy mt-4">{activeDestination.overview}</p>
              <Button
                type="button"
                className="mt-8 w-full"
                onClick={() => {
                  setActiveDestination(null);
                  document.querySelector("#inquiry")?.scrollIntoView();
                }}
              >
                Start Inquiry
              </Button>
            </div>
            <dl className="grid gap-4">
              <Detail label="Ideal wedding style" value={activeDestination.idealWeddingStyle} />
              <Detail label="Best season" value={activeDestination.bestSeason} />
              <Detail label="Venue types" value={activeDestination.venueTypes.join(", ")} />
              <Detail label="Sample budget range" value={activeDestination.budgetRange} />
            </dl>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-mutedGold/20 pb-4">
      <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-mutedGold/80">
        {label}
      </dt>
      <dd className="mt-2 text-lg text-pearl">{value}</dd>
    </div>
  );
}

function WorldLines() {
  return (
    <svg viewBox="0 0 1000 520" role="img" aria-label="Abstract world route lines" className="h-full w-full">
      <defs>
        <linearGradient id="route" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.09 82)" stopOpacity="0.1" />
          <stop offset="55%" stopColor="oklch(0.72 0.09 82)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="oklch(0.82 0.04 76)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[90, 180, 270, 360, 450, 540, 630, 720, 810, 900].map((x) => (
        <path
          key={x}
          d={`M${x} 20 C ${x - 80} 160, ${x + 80} 330, ${x} 500`}
          fill="none"
          stroke="oklch(0.72 0.09 82 / 0.16)"
          strokeWidth="1"
        />
      ))}
      {[90, 170, 250, 330, 410].map((y) => (
        <path
          key={y}
          d={`M30 ${y} C 260 ${y - 80}, 650 ${y + 80}, 970 ${y}`}
          fill="none"
          stroke="oklch(0.72 0.09 82 / 0.14)"
          strokeWidth="1"
        />
      ))}
      <path
        d="M142 308 C 276 104, 457 170, 612 258 S 827 350, 900 162"
        fill="none"
        stroke="url(#route)"
        strokeWidth="2"
      />
      {[142, 302, 463, 612, 778, 900].map((x, index) => (
        <circle key={x} cx={x} cy={[308, 177, 205, 258, 314, 162][index]} r="5" fill="oklch(0.72 0.09 82)" />
      ))}
    </svg>
  );
}
