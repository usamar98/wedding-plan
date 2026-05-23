"use client";

import { business, calculatorSettings, destinations } from "@/data/siteData";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const eventTypes = Object.keys(calculatorSettings.eventTypeMultipliers);
const stylingLevels = Object.keys(calculatorSettings.stylingMultipliers);

export function BudgetEstimator() {
  const [location, setLocation] = useState(destinations[0].name);
  const [guestCount, setGuestCount] = useState(120);
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [days, setDays] = useState(3);
  const [stylingLevel, setStylingLevel] = useState(stylingLevels[1]);
  const [travelSupport, setTravelSupport] = useState(true);
  const [vendorSourcing, setVendorSourcing] = useState(true);

  const estimate = useMemo(() => {
    // Change calculator logic in data/siteData.ts. This component only applies those multipliers.
    const base =
      calculatorSettings.basePlanningFee +
      calculatorSettings.locationPremiums[location] +
      guestCount * calculatorSettings.guestRate +
      days * calculatorSettings.dayRate;
    const multiplied =
      base *
      calculatorSettings.eventTypeMultipliers[eventType] *
      calculatorSettings.stylingMultipliers[stylingLevel];
    const extras =
      (travelSupport ? calculatorSettings.travelSupportFee : 0) +
      (vendorSourcing ? calculatorSettings.vendorSourcingFee : 0);
    const low = Math.round((multiplied + extras) / 100) * 100;
    const high = Math.round((low * 1.52) / 100) * 100;
    return { low, high };
  }, [days, eventType, guestCount, location, stylingLevel, travelSupport, vendorSourcing]);

  useEffect(() => {
    const payload = {
      location,
      guestCount,
      eventType,
      days,
      stylingLevel,
      travelSupport,
      vendorSourcing,
      estimate
    };
    window.localStorage.setItem("maisonVowCalculator", JSON.stringify(payload));
  }, [days, estimate, eventType, guestCount, location, stylingLevel, travelSupport, vendorSourcing]);

  const whatsappLink = createWhatsAppLink(
    `${business.whatsappMessage} My visual estimate is ${formatMoney(estimate.low)} to ${formatMoney(
      estimate.high
    )} for ${guestCount} guests in ${location}.`
  );

  return (
    <section id="budget" className="section-padding">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow mb-5">Interactive estimator</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Put a planning range on the table.
            </h2>
            <p className="copy mt-7">
              A sales-demo calculator for wedding planners who want visitors to feel
              guided before the consultation. It is frontend-only and uses local state.
            </p>
          </div>

          <motion.div
            className="luxury-surface p-5 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Event location">
                <select className="field" value={location} onChange={(event) => setLocation(event.target.value)}>
                  {destinations.map((destination) => (
                    <option key={destination.id}>{destination.name}</option>
                  ))}
                </select>
              </Field>

              <Field label="Event type">
                <select className="field" value={eventType} onChange={(event) => setEventType(event.target.value)}>
                  {eventTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </Field>

              <Field label={`Guest count: ${guestCount}`}>
                <input
                  className="w-full accent-[oklch(0.72_0.09_82)]"
                  type="range"
                  min="20"
                  max="900"
                  step="10"
                  value={guestCount}
                  onChange={(event) => setGuestCount(Number(event.target.value))}
                />
              </Field>

              <Field label="Number of event days">
                <input
                  className="field"
                  type="number"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                />
              </Field>

              <Field label="Styling level">
                <select
                  className="field"
                  value={stylingLevel}
                  onChange={(event) => setStylingLevel(event.target.value)}
                >
                  {stylingLevels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-3">
                <Toggle label="Need guest travel support?" value={travelSupport} onChange={setTravelSupport} />
                <Toggle label="Need vendor sourcing?" value={vendorSourcing} onChange={setVendorSourcing} />
              </div>
            </div>

            <div className="mt-8 border-t border-mutedGold/22 pt-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                Estimated planning investment
              </p>
              <p className="mt-3 font-display text-5xl text-pearl md:text-6xl">
                {formatMoney(estimate.low)} - {formatMoney(estimate.high)}
              </p>
              <p className="copy mt-4 text-sm">
                This is a visual estimate only. Final proposals are customized after consultation.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center border border-mutedGold/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-pearl transition hover:bg-mutedGold hover:text-obsidian"
              >
                Send Estimate on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-sand">{label}</span>
      {children}
    </label>
  );
}

function Toggle({
  label,
  value,
  onChange
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex min-h-14 cursor-pointer items-center justify-between gap-4 border border-mutedGold/22 px-4 py-3">
      <span className="text-sm font-semibold text-sand">{label}</span>
      <button
        type="button"
        aria-pressed={value}
        onClick={() => onChange(!value)}
        className={`relative h-7 w-12 border transition ${value ? "border-mutedGold bg-mutedGold/25" : "border-mutedGold/25 bg-obsidian/40"}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 bg-pearl transition ${value ? "left-6" : "left-1"}`}
        />
      </button>
    </label>
  );
}

function formatMoney(value: number) {
  return `${business.currency}${value.toLocaleString("en-US")}`;
}

function createWhatsAppLink(message: string) {
  const phone = business.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
