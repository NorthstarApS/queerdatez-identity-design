import { useState } from "react";

const OPTIONS = [
  "Kærlighed",
  "Dating",
  "Et forhold",
  "Nye mennesker",
  "Kemi",
  "Noget udefineret",
];

export function Looking() {
  const [picked, setPicked] = useState<string[]>(["Kemi"]);

  const toggle = (o: string) =>
    setPicked((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));

  return (
    <section id="matches" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-xs text-muted-foreground mb-6">Dine intentioner</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)]">Hvad håber du at finde?</h2>
            <p className="text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Vælg et eller flere. Du kan altid ændre det senere — og du behøver ikke vide
              det hele fra start.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {OPTIONS.map((o) => {
                const active = picked.includes(o);
                return (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(o)}
                    className={`reveal font-display border px-6 py-8 text-left text-lg font-bold tracking-[0.06em] uppercase transition-colors duration-200 md:text-xl ${
                      active
                        ? "bg-magenta text-magenta-foreground border-magenta"
                        : "border-foreground/25 hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
