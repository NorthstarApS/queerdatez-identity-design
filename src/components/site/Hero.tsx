import heroImg from "@/assets/hero.jpg";
import { QuickMatch } from "./QuickMatch";

export function Hero() {
  return (
    <section id="top" className="bg-ink text-ink-foreground relative">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-0 px-5 pt-32 pb-0 md:px-10 lg:grid-cols-12 lg:pt-40">
        <div className="lg:col-span-7 lg:pr-10 lg:pb-28">
          <p className="label-xs text-lime mb-8">Queer dating · Danmark</p>
          <h1 className="text-[clamp(2.75rem,8.5vw,7.5rem)]">
            Find én, der er
            <br />
            vild med dig.
            <br />
            <span className="text-magenta">Som du er.</span>
          </h1>
          <p className="text-ink-foreground/70 mt-8 max-w-xl text-base leading-relaxed md:text-lg">
            QueerDatez er dating skabt til LGBTQ+ mennesker. Mød mennesker, der matcher
            dig, dine værdier og det, du leder efter.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#matches"
              className="bg-magenta text-magenta-foreground hover:bg-lime hover:text-lime-foreground px-8 py-4 text-center text-xs font-bold tracking-[0.14em] uppercase transition-colors"
            >
              Find mit match
            </a>
            <a
              href="#opret"
              className="border-ink-foreground/40 text-ink-foreground hover:border-lime hover:text-lime border px-8 py-4 text-center text-xs font-bold tracking-[0.14em] uppercase transition-colors"
            >
              Opret gratis profil
            </a>
          </div>

          <p className="label-xs text-ink-foreground/50 mt-6">
            LGBTQ+ dating · Din profil · Dine valg
          </p>
        </div>

        <div className="relative mt-14 lg:col-span-5 lg:mt-0">
          <img
            src={heroImg}
            alt="To personer griner sammen på en bar om aftenen"
            width={1440}
            height={1600}
            className="h-[52vh] w-full object-cover object-center brightness-[0.82] contrast-[1.05] lg:h-[86vh]"
          />
          <div className="from-ink pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />
          <span className="bg-lime text-lime-foreground label-xs absolute bottom-0 left-0 px-4 py-2 lg:-left-6">
            Ægte mennesker
          </span>
        </div>
      </div>

      <QuickMatch />
    </section>
  );
}
