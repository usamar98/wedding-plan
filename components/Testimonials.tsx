"use client";

import { testimonials } from "@/data/siteData";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const testimonial = testimonials[active];

  return (
    <section className="section-padding bg-[oklch(0.10_0.012_48_/_0.72)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Client words</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Calm is the real luxury.
            </h2>
          </div>
          <div className="luxury-surface min-h-[360px] p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.figure
                key={testimonial.initials}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center border border-mutedGold/40 font-display text-2xl text-mutedGold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-pearl">{testimonial.location}</p>
                    <p className="text-sm text-sand/75">{testimonial.eventType}</p>
                  </div>
                </div>
                <blockquote className="mt-10 font-display text-4xl leading-tight text-pearl md:text-6xl">
                  "{testimonial.quote}"
                </blockquote>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.initials}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 flex-1 transition ${index === active ? "bg-mutedGold" : "bg-pearl/18"}`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
