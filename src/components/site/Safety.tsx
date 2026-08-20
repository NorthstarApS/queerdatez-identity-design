const POINTS = [
  {
    title: "Hvem der kan finde dig",
    body: "Styr din synlighed, dine filtre og hvem der kan se din profil.",
  },
  {
    title: "Hvilke platforme der viser dig",
    body: "Du slår hver enkelt platform i netværket til og fra — når du vil.",
  },
  {
    title: "Hvad du deler",
    body: "Du bestemmer hvilke billeder og oplysninger der er offentlige.",
  },
  {
    title: "Hvem du taler med",
    body: "Bloker og rapportér brugere direkte fra profilen eller chatten.",
  },
];

export function Safety() {
  return (
    <section id="sikkerhed" className="bg-ink text-ink-foreground py-28 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-xs text-lime mb-6">Sikkerhed &amp; kontrol</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)]">
              Din identitet.
              <br />
              Din profil.
              <br />
              <span className="text-magenta">Dine grænser.</span>
            </h2>
            <p className="text-ink-foreground/60 mt-8 max-w-md text-sm leading-relaxed">
              Vi kan ikke love at internettet er et perfekt sted. Men vi kan give dig
              værktøjerne til at sætte dine egne grænser — og et team, der behandler
              anmeldelser seriøst.
            </p>
            <a
              href="#sikkerhed"
              className="border-ink-foreground/40 text-ink-foreground hover:border-lime hover:text-lime mt-10 inline-block border px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors"
            >
              Læs om sikkerhed →
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="border-ink-foreground/20 border-t">
              {POINTS.map((p) => (
                <div
                  key={p.title}
                  className="border-ink-foreground/20 reveal grid grid-cols-1 gap-2 border-b py-7 sm:grid-cols-[1.1fr_1fr] sm:gap-8"
                >
                  <dt className="font-display text-sm font-bold tracking-[0.12em] uppercase">
                    {p.title}
                  </dt>
                  <dd className="text-ink-foreground/60 text-sm leading-relaxed">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
