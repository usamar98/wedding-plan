"use client";

import { Button } from "@/components/ui/Button";
import { destinations, services } from "@/data/siteData";
import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

type InquiryState = {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  eventLocation: string;
  eventDate: string;
  guestCount: string;
  eventType: string;
  estimatedBudget: string;
  servicesNeeded: string[];
  message: string;
};

const initialState: InquiryState = {
  name: "",
  email: "",
  whatsapp: "",
  country: "",
  eventLocation: "Dubai",
  eventDate: "",
  guestCount: "120",
  eventType: "Wedding Weekend",
  estimatedBudget: "",
  servicesNeeded: [],
  message: ""
};

export function InquiryForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<InquiryState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(() => (step / 3) * 100, [step]);

  const update = (field: keyof InquiryState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleService = (serviceTitle: string) => {
    setForm((current) => ({
      ...current,
      servicesNeeded: current.servicesNeeded.includes(serviceTitle)
        ? current.servicesNeeded.filter((item) => item !== serviceTitle)
        : [...current.servicesNeeded, serviceTitle]
    }));
  };

  const validateStep = () => {
    if (step === 1 && (!form.name || !form.email || !form.whatsapp || !form.country)) {
      return "Please complete your contact details.";
    }
    if (step === 2 && (!form.eventLocation || !form.eventDate || !form.guestCount || !form.eventType)) {
      return "Please complete the event details.";
    }
    if (step === 3 && (!form.estimatedBudget || !form.message)) {
      return "Please add your budget range and a short note.";
    }
    return "";
  };

  const nextStep = () => {
    const validation = validateStep();
    if (validation) {
      setError(validation);
      return;
    }
    setError("");
    setStep((current) => Math.min(3, current + 1));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateStep();
    if (validation) {
      setError(validation);
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="section-padding">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">Private inquiry</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Begin with a considered note.
            </h2>
            <p className="copy mt-7">
              This multi-step form is a frontend-only mockup. It demonstrates how a
              luxury planner can gather serious leads without adding backend complexity.
            </p>
          </div>

          <motion.div
            className="luxury-surface p-5 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                    Inquiry prepared
                  </p>
                  <h3 className="mt-5 font-display text-5xl text-pearl">
                    Thank you. Your celebration inquiry has been prepared.
                  </h3>
                  <p className="copy mx-auto mt-5 max-w-xl">
                    No backend submission was made. This success screen is local to the demo.
                  </p>
                  <Button
                    type="button"
                    className="mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setForm(initialState);
                    }}
                  >
                    Start Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                    <span>Step {step} of 3</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="mt-3 h-px overflow-hidden bg-pearl/15">
                    <div
                      className="h-px origin-left bg-mutedGold transition-transform"
                      style={{ transform: `scaleX(${progress / 100})` }}
                    />
                  </div>
                </div>

                {step === 1 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name">
                      <input className="field" value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
                    </Field>
                    <Field label="Email">
                      <input className="field" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="name@example.com" />
                    </Field>
                    <Field label="WhatsApp number">
                      <input className="field" value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="+44..." />
                    </Field>
                    <Field label="Country">
                      <input className="field" value={form.country} onChange={(event) => update("country", event.target.value)} placeholder="United Kingdom" />
                    </Field>
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Event location">
                      <select className="field" value={form.eventLocation} onChange={(event) => update("eventLocation", event.target.value)}>
                        {destinations.map((destination) => (
                          <option key={destination.id}>{destination.name}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Event date">
                      <input className="field" type="date" value={form.eventDate} onChange={(event) => update("eventDate", event.target.value)} />
                    </Field>
                    <Field label="Guest count">
                      <input className="field" type="number" min="10" value={form.guestCount} onChange={(event) => update("guestCount", event.target.value)} />
                    </Field>
                    <Field label="Event type">
                      <select className="field" value={form.eventType} onChange={(event) => update("eventType", event.target.value)}>
                        <option>Wedding Weekend</option>
                        <option>Single Day Wedding</option>
                        <option>Private Estate Event</option>
                        <option>Cultural Celebration</option>
                        <option>Corporate Private Event</option>
                      </select>
                    </Field>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="grid gap-5">
                    <Field label="Estimated budget">
                      <select className="field" value={form.estimatedBudget} onChange={(event) => update("estimatedBudget", event.target.value)}>
                        <option value="">Select a range</option>
                        <option>$50,000 to $100,000</option>
                        <option>$100,000 to $250,000</option>
                        <option>$250,000 to $500,000</option>
                        <option>$500,000+</option>
                      </select>
                    </Field>
                    <div>
                      <p className="mb-3 text-sm font-semibold text-sand">Services needed</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        {services.map((service) => {
                          const active = form.servicesNeeded.includes(service.title);
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => toggleService(service.title)}
                              className={`border px-4 py-3 text-left text-sm transition ${
                                active
                                  ? "border-mutedGold bg-mutedGold text-obsidian"
                                  : "border-mutedGold/24 text-sand hover:border-mutedGold/70"
                              }`}
                            >
                              {service.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <Field label="Message">
                      <textarea className="field min-h-36 resize-y" value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell us what matters most about the celebration." />
                    </Field>
                  </div>
                ) : null}

                {error ? <p className="mt-5 text-sm font-semibold text-[oklch(0.78_0.12_35)]">{error}</p> : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <Button type="button" variant="secondary" disabled={step === 1} onClick={() => setStep((current) => Math.max(1, current - 1))}>
                    Back
                  </Button>
                  {step < 3 ? (
                    <Button type="button" onClick={nextStep}>
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit">Submit Inquiry</Button>
                  )}
                </div>
              </form>
            )}
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
