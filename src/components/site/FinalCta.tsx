export function FinalCta() {
  return (
    <section id="opret" className="bg-magenta text-magenta-foreground py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 className="reveal max-w-[16ch] text-[clamp(2.6rem,9vw,8rem)]">
          Someone out there is looking for someone like you.
        </h2>
        <div className="mt-14 flex flex-col gap-8 border-t border-current/30 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="font-display max-w-lg text-2xl font-bold tracking-[-0.02em] md:text-3xl">
            Gør det lidt lettere at finde hinanden.
          </p>
          <a
            href="#opret"
            className="bg-ink text-ink-foreground hover:bg-lime hover:text-lime-foreground inline-block px-10 py-5 text-xs font-bold tracking-[0.16em] uppercase transition-colors"
          >
            Opret min profil →
          </a>
        </div>
      </div>
    </section>
  );
}
