import { pressLogos } from "@/data/siteData";

export function Press() {
  return (
    <section className="border-y border-mutedGold/20 py-14">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
          <p className="copy max-w-md">
            As seen in selected wedding and lifestyle publications.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {/* Placeholder press logos for demo use only. Replace with licensed real logos before production. */}
            {pressLogos.map((logo) => (
              <div
                key={logo}
                className="grid min-h-24 place-items-center border border-mutedGold/24 px-4 text-center font-display text-2xl text-pearl/86"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
