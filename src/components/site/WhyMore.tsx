const ITEMS = [
  {
    n: "01",
    title: "Flere mennesker",
    body: "Bliv synlig for flere relevante singler.",
  },
  {
    n: "02",
    title: "Én profil",
    body: "Ingen grund til at vedligeholde flere forskellige datingprofiler.",
  },
  {
    n: "03",
    title: "Dit valg",
    body: "Du bestemmer præcis hvilke platforme, der må vise dig.",
  },
];

export function WhyMore() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="label-xs text-muted-foreground mb-14">
          Hvorfor mere end én platform?
        </p>
        <div className="border-hairline grid grid-cols-1 border-t md:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.n}
              className="reveal border-hairline group border-b p-8 md:border-r md:border-b-0 md:p-10 md:last:border-r-0"
            >
              <span className="font-display text-muted-foreground/30 group-hover:text-magenta block text-[clamp(3.5rem,7vw,6rem)] leading-none transition-colors">
                {item.n}
              </span>
              <h3 className="mt-10 text-2xl tracking-[0.02em] uppercase md:text-3xl">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-4 max-w-xs leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
