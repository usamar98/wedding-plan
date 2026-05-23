"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { services } from "@/data/siteData";
import type { ServiceExperience } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Services() {
  const [hovered, setHovered] = useState(services[0].id);
  const [selected, setSelected] = useState<ServiceExperience | null>(null);
  const active = services.find((service) => service.id === hovered) ?? services[0];

  return (
    <section id="experiences" className="section-padding bg-[oklch(0.11_0.012_48_/_0.45)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow mb-5">Signature experiences</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Planning as atmosphere, not administration.
            </h2>
            <p className="copy mt-7">
              Each service is presented as a creative and logistical production:
              considered enough for private clients, structured enough for complicated
              destination events.
            </p>
            <div className="image-frame mt-10 hidden aspect-[4/5] lg:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={`${active.title} editorial reference`}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            className="grid gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          >
            {services.map((service) => (
              <motion.article
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                onMouseEnter={() => setHovered(service.id)}
                className="group border border-mutedGold/22 p-5 transition duration-300 hover:border-mutedGold/60 hover:bg-pearl/[0.035] md:p-7"
              >
                <div className="grid gap-5 md:grid-cols-[5rem_1fr_auto] md:items-center">
                  <p className="font-display text-5xl text-mutedGold">{service.number}</p>
                  <div>
                    <h3 className="font-display text-3xl text-pearl md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="copy mt-3 max-w-3xl">{service.description}</p>
                  </div>
                  <Button type="button" variant="ghost" onClick={() => setSelected(service)}>
                    Learn More
                  </Button>
                </div>
                <div className="image-frame mt-5 aspect-[16/9] lg:hidden">
                  <img src={service.image} alt={`${service.title} detail`} className="h-full w-full object-cover" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
      >
        {selected ? (
          <div className="grid gap-7 md:grid-cols-[0.9fr_1fr]">
            <div className="image-frame aspect-[4/5]">
              <img src={selected.image} alt={`${selected.title} modal`} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                {selected.number}
              </p>
              <p className="copy mt-5">{selected.detail}</p>
              <Button
                type="button"
                className="mt-8"
                onClick={() => {
                  setSelected(null);
                  document.querySelector("#inquiry")?.scrollIntoView();
                }}
              >
                Request Proposal
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
