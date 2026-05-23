"use client";

import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { business, moodChips } from "@/data/siteData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function MoodboardBuilder() {
  const [selected, setSelected] = useState<string[]>(["Minimal Luxury", "Destination Weekend"]);
  const [toast, setToast] = useState("");

  const packageName = useMemo(() => {
    if (selected.includes("Destination Weekend") || selected.includes("Cultural Fusion")) {
      return "Destination Weekend";
    }
    if (selected.includes("Royal Ballroom") || selected.includes("Floral Maximalist")) {
      return "Ultra Luxury Production";
    }
    if (selected.includes("Intimate Private Estate")) {
      return "Signature Planning";
    }
    return "Consultation Only";
  }, [selected]);

  useEffect(() => {
    window.localStorage.setItem("maisonVowMoodboard", JSON.stringify({ selected, packageName }));
  }, [packageName, selected]);

  const toggleChip = (chip: string) => {
    setSelected((current) =>
      current.includes(chip) ? current.filter((item) => item !== chip) : [...current, chip]
    );
  };

  const sendMoodboard = () => {
    setToast("Your moodboard preview is ready for consultation.");
    const phone = business.whatsappNumber.replace(/[^\d]/g, "");
    const message = `${business.whatsappMessage} My selected mood is: ${
      selected.length ? selected.join(", ") : "open to creative direction"
    }. Recommended package: ${packageName}.`;
    window.localStorage.setItem("maisonVowMoodboard", JSON.stringify({ selected, packageName }));
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-padding bg-[oklch(0.12_0.012_48_/_0.72)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="eyebrow mb-5">Build your wedding mood</p>
            <h2 className="display max-w-4xl text-5xl text-pearl md:text-7xl">
              Compose the first creative signal.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {moodChips.map((chip) => {
                const active = selected.includes(chip);
                return (
                  <motion.button
                    layout
                    key={chip}
                    type="button"
                    onClick={() => toggleChip(chip)}
                    className={`border px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "border-mutedGold bg-mutedGold text-obsidian"
                        : "border-mutedGold/26 text-sand hover:border-mutedGold/70 hover:text-pearl"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {chip}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.aside
            layout
            className="luxury-surface p-6 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
              Mood preview
            </p>
            <div className="mt-6 min-h-48 border border-mutedGold/22 p-5">
              <AnimatePresence mode="popLayout">
                {selected.length ? (
                  selected.map((chip) => (
                    <motion.span
                      layout
                      key={chip}
                      className="mb-2 mr-2 inline-flex border border-sand/30 px-3 py-2 text-sm text-pearl"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {chip}
                    </motion.span>
                  ))
                ) : (
                  <motion.p
                    className="copy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Select a few style notes to form the preview.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-7 border-t border-mutedGold/22 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                Recommended package
              </p>
              <p className="mt-3 font-display text-4xl text-pearl">{packageName}</p>
              <Button type="button" className="mt-7 w-full" onClick={sendMoodboard}>
                Send This Moodboard
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
      <Toast message={toast} onClose={() => setToast("")} />
    </section>
  );
}
