const COLUMNS = [
  { title: "QueerDatez", links: ["Om os", "Sådan virker det", "Premium"] },
  { title: "Hjælp", links: ["Kontakt", "Sikkerhed", "Support"] },
  { title: "Juridisk", links: ["Vilkår", "Privatlivspolitik", "Cookies"] },
  { title: "Community", links: ["Retningslinjer", "Rapportér bruger"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p
              className="font-display text-2xl tracking-[-0.04em] uppercase"
              style={{ fontWeight: 900 }}
            >
              Queer<span className="text-magenta">Datez</span>
            </p>
            <p className="text-ink-foreground/50 mt-5 max-w-sm text-sm leading-relaxed">
              QueerDatez is part of a network of dating platforms designed to give members
              more choice in how and where they meet people.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:col-span-7 lg:col-start-6">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="label-xs text-ink-foreground/50 mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-ink-foreground/85 hover:text-lime text-sm transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="border-ink-foreground/15 text-ink-foreground/40 mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-8 text-xs">
          <p>© {new Date().getFullYear()} QueerDatez</p>
          <p className="label-xs">Queer dating / Din profil / Dine valg</p>
        </div>
      </div>
    </footer>
  );
}
