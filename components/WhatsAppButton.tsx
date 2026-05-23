"use client";

import { business } from "@/data/siteData";

export function WhatsAppButton() {
  const phone = business.whatsappNumber.replace(/[^\d]/g, "");
  const defaultLink = `https://wa.me/${phone}?text=${encodeURIComponent(business.whatsappMessage)}`;

  const buildSelectionLink = () => {
    let message = business.whatsappMessage;

    try {
      const calculator = window.localStorage.getItem("maisonVowCalculator");
      const moodboard = window.localStorage.getItem("maisonVowMoodboard");

      if (calculator) {
        const parsed = JSON.parse(calculator) as {
          location?: string;
          guestCount?: number;
          estimate?: { low: number; high: number };
        };
        if (parsed.estimate) {
          message += ` Estimate: ${business.currency}${parsed.estimate.low.toLocaleString("en-US")} to ${business.currency}${parsed.estimate.high.toLocaleString("en-US")} for ${parsed.guestCount} guests in ${parsed.location}.`;
        }
      }

      if (moodboard) {
        const parsed = JSON.parse(moodboard) as { selected?: string[]; packageName?: string };
        if (parsed.selected?.length) {
          message += ` Moodboard: ${parsed.selected.join(", ")}. Recommended package: ${parsed.packageName}.`;
        }
      }
    } catch {
      message = business.whatsappMessage;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 md:bottom-7 md:right-7">
      <a
        href={buildSelectionLink()}
        target="_blank"
        rel="noreferrer"
        className="hidden border border-mutedGold/45 bg-[oklch(0.16_0.018_50_/_0.92)] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-pearl shadow-soft backdrop-blur transition hover:bg-mutedGold hover:text-obsidian sm:inline-flex"
      >
        Send Selections
      </a>
      <a
        href={defaultLink}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full border border-mutedGold/50 bg-mutedGold text-sm font-extrabold text-obsidian shadow-soft transition hover:scale-105"
        aria-label="Open WhatsApp inquiry"
      >
        WA
      </a>
    </div>
  );
}
