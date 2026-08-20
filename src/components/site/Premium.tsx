const TIERS = [
  {
    name: "QueerDatez",
    tag: "Inkluderet",
    body: "Din profil bliver på QueerDatez. Intet andet sted — medmindre du selv vælger det.",
    accent: false,
  },
  {
    name: "QueerDatez + 1 platform",
    tag: "Premium",
    body: "Vælg én ekstra platform i netværket, hvor din profil også må vises.",
    accent: true,
  },
  {
    name: "Multi-platform",
    tag: "Premium+",
    body: "Bliv synlig på flere platforme i netværket samtidig — og slå dem fra igen, når du vil.",
    accent: false,
  },
];

export function Premium() {
  return (
    <section className="border-hairline border-t py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-xs text-muted-foreground mb-6">Netværksmuligheder</p>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)]">Vil du ses af flere?</h2>
          </div>
          <p className="text-muted-foreground lg:col-span-6 lg:col-start-7 lg:pt-3">
            En standardprofil bliver på QueerDatez. Med premium kan du vælge at gøre din
            profil synlig på flere datingplatforme i netværket og øge dine muligheder for
            at møde nogen. Du vælger selv platformene.
          </p>
        </div>

        <div className="border-hairline grid grid-cols-1 border-t md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`reveal border-hairline flex flex-col justify-between border-b p-8 md:border-r md:border-b-0 md:p-10 md:last:border-r-0 ${
                t.accent ? "bg-violet text-violet-foreground border-violet" : ""
              }`}
            >
              <div>
                <span
                  className={`label-xs ${t.accent ? "text-violet-foreground/70" : "text-magenta"}`}
                >
                  {t.tag}
                </span>
                <h3 className="mt-6 text-2xl uppercase">{t.name}</h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    t.accent ? "text-violet-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {t.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#opret"
            className="bg-foreground text-background hover:bg-magenta hover:text-magenta-foreground px-8 py-4 text-xs font-bold tracking-[0.14em] uppercase transition-colors"
          >
            Se muligheder →
          </a>
          <p className="text-muted-foreground text-sm">
            Du vælger selv platformene. Din profil deles aldrig uden dit aktive valg.
          </p>
        </div>
      </div>
    </section>
  );
}
