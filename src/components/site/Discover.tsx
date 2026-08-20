import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

type Profile = {
  img: string;
  alt: string;
  name: string;
  age: number;
  city: string;
  identity: string;
  match: string;
  span: string;
  ratio: string;
};

const PROFILES: Profile[] = [
  {
    img: p1,
    alt: "Portræt af Nova",
    name: "Nova",
    age: 27,
    city: "København",
    identity: "Non-binær · Pan",
    match: "92% fælles: vinyl, lange gåture, film",
    span: "md:col-span-4 md:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    img: p2,
    alt: "Portræt af Amara",
    name: "Amara",
    age: 31,
    city: "Aarhus",
    identity: "Lesbisk",
    match: "87% fælles: klatring, kunst, kaffe",
    span: "md:col-span-3",
    ratio: "aspect-[4/3]",
  },
  {
    img: p5,
    alt: "To mænd i en gade i København",
    name: "Mikkel & venner",
    age: 29,
    city: "Nørrebro",
    identity: "Gay · Ser efter kemi",
    match: "Fælles: byvandring, madklub",
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    img: p3,
    alt: "Portræt af Jonas",
    name: "Jonas",
    age: 34,
    city: "Odense",
    identity: "Transmand · Bi",
    match: "84% fælles: musik, cyklen, bøger",
    span: "md:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    img: p4,
    alt: "Portræt af Rani",
    name: "Rani",
    age: 25,
    city: "Aalborg",
    identity: "Queer · Ace-spektrum",
    match: "79% fælles: teater, tatoveringer",
    span: "md:col-span-4",
    ratio: "aspect-square",
  },
  {
    img: p6,
    alt: "Portræt af Lene",
    name: "Lene",
    age: 46,
    city: "Frederiksberg",
    identity: "Bi · Søger et forhold",
    match: "88% fælles: havet, jazz, keramik",
    span: "md:col-span-4",
    ratio: "aspect-[4/5]",
  },
];

export function Discover() {
  return (
    <section id="opdag" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-xs text-magenta mb-5">Opdag mennesker</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)]">
              Mennesker, der allerede er her.
            </h2>
          </div>
          <a
            href="#matches"
            className="border-foreground hover:bg-foreground hover:text-background border px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors"
          >
            Se flere profiler →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12">
          {PROFILES.map((p) => (
            <article
              key={p.name}
              className={`reveal group bg-card relative overflow-hidden ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover ${p.ratio} transition-transform duration-700 group-hover:scale-[1.04]`}
              />
              <div className="from-ink/95 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              <div className="text-ink-foreground absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-bold tracking-[-0.02em] uppercase">
                  {p.name}, {p.age}
                </p>
                <p className="text-ink-foreground/70 text-xs">
                  {p.city} · {p.identity}
                </p>
                <p className="text-lime mt-3 text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.match}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
