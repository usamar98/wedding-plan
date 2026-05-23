"use client";

import { Toast } from "@/components/ui/Toast";
import { business, destinations, navigationLinks } from "@/data/siteData";
import { FormEvent, useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setToast("Thank you for joining the private list.");
  };

  return (
    <footer className="border-t border-mutedGold/24 bg-[oklch(0.09_0.012_48)] py-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div>
            <h2 className="font-display text-5xl text-pearl">{business.name}</h2>
            <p className="copy mt-5 max-w-md">
              {business.positioning}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
              Quick links
            </h3>
            <div className="mt-5 grid gap-3">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sand/82 transition hover:text-pearl">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
              Destinations
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sand/82">
              {destinations.slice(0, 8).map((destination) => (
                <a key={destination.id} href="#destinations" className="transition hover:text-pearl">
                  {destination.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
              Private list
            </h3>
            <form onSubmit={submit} className="mt-5 grid gap-3">
              <label className="sr-only" htmlFor="newsletter">
                Email address
              </label>
              <input
                id="newsletter"
                className="field"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="border border-mutedGold/45 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-pearl transition hover:bg-mutedGold hover:text-obsidian"
              >
                Join Newsletter
              </button>
            </form>
            <div className="mt-7 grid gap-2 text-sm text-sand/82">
              <a href={`mailto:${business.email}`} className="transition hover:text-pearl">
                {business.email}
              </a>
              <a
                href={`https://wa.me/${business.whatsappNumber.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pearl"
              >
                {business.whatsappNumber}
              </a>
              <p>Instagram: {business.instagram}</p>
              <p>Pinterest: {business.pinterest}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-mutedGold/18 pt-6 text-sm text-sand/62 md:flex-row md:items-center md:justify-between">
          <p>Frontend-only demo. No backend, database, payments, or authentication.</p>
          <p>{new Date().getFullYear()} {business.name}</p>
        </div>
      </div>
      <Toast message={toast} onClose={() => setToast("")} />
    </footer>
  );
}
