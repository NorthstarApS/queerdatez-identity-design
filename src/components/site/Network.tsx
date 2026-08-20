import { useState } from "react";

type Platform = { id: string; name: string; note: string; locked?: boolean };

const PLATFORMS: Platform[] = [
  { id: "qd", name: "QueerDatez", note: "Din hjemmeplatform", locked: true },
  { id: "idatez", name: "iDatez", note: "Bred dating i netværket" },
  { id: "ph24", name: "PartnerHub24", note: "Fokus på faste forhold" },
  { id: "future", name: "Fremtidige platforme", note: "Spørger altid først" },
];

export function Network() {
  const [on, setOn] = useState<Record<string, boolean>>({
    qd: true,
    idatez: false,
    ph24: false,
    future: false,
  });

  return (
    <section id="saadan" className="bg-ink text-ink-foreground py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label-xs text-lime mb-6">More ways to match</p>
            <h2 className="reveal text-[clamp(2.4rem,5.6vw,4.75rem)]">
              Én profil.
              <br />
              Flere steder at
              <br />
              blive fundet.
            </h2>
            <p className="text-ink-foreground/70 reveal mt-8 max-w-xl leading-relaxed">
              Din QueerDatez-profil kan også vises på andre datingplatforme i vores
              netværk. Det giver dig mulighed for at møde flere relevante mennesker — uden
              at oprette den samme profil igen og igen.
            </p>
            <p className="border-magenta reveal mt-8 border-l-4 py-2 pl-5 text-xl font-semibold md:text-2xl">
              Du bestemmer altid selv, hvor din profil vises.
            </p>
          </div>

          <div className="reveal lg:col-span-5 lg:col-start-8">
            <div className="border-ink-foreground/20 border">
              <div className="border-ink-foreground/20 flex items-center justify-between border-b px-6 py-5">
                <span className="label-xs">Vis min profil på</span>
                <span className="label-xs text-ink-foreground/50">Dine valg</span>
              </div>

              <ul>
                {PLATFORMS.map((p) => {
                  const active = on[p.id];
                  return (
                    <li
                      key={p.id}
                      className="border-ink-foreground/10 flex items-center justify-between gap-4 border-b px-6 py-5 last:border-b-0"
                    >
                      <div>
                        <p className="font-display text-sm font-bold tracking-[0.12em] uppercase">
                          {p.name}
                        </p>
                        <p className="text-ink-foreground/50 mt-1 text-xs">{p.note}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={active}
                        aria-label={`Vis min profil på ${p.name}`}
                        disabled={p.locked}
                        onClick={() => setOn((s) => ({ ...s, [p.id]: !s[p.id] }))}
                        className={`flex h-9 w-[4.5rem] shrink-0 items-center border transition-colors ${
                          active
                            ? "bg-lime border-lime"
                            : "border-ink-foreground/30 bg-transparent"
                        } ${p.locked ? "cursor-not-allowed opacity-80" : ""}`}
                      >
                        <span
                          className={`h-full w-1/2 transition-transform duration-200 ${
                            active
                              ? "bg-lime-foreground translate-x-full"
                              : "bg-ink-foreground/40 translate-x-0"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <p className="text-ink-foreground/50 border-ink-foreground/20 border-t px-6 py-5 text-xs">
                Du kan ændre dine valg når som helst. Din profil vises aldrig på en anden
                platform, før du selv slår den til.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
