const WORDS = [
  { text: "LESBIAN", cls: "text-[clamp(2rem,7vw,6rem)]" },
  { text: "GAY", cls: "text-[clamp(2.5rem,9vw,8rem)] text-magenta" },
  { text: "BI", cls: "text-[clamp(2rem,6vw,5rem)]" },
  { text: "TRANS", cls: "text-[clamp(2.2rem,8vw,7rem)] text-violet" },
  { text: "QUEER", cls: "text-[clamp(2rem,7vw,6rem)] italic" },
  { text: "NON-BINARY", cls: "text-[clamp(1.6rem,5vw,4rem)]" },
  { text: "PAN", cls: "text-[clamp(2rem,7vw,6rem)]" },
  { text: "ACE", cls: "text-[clamp(1.8rem,6vw,5rem)] text-magenta" },
];

export function AllOfYou() {
  return (
    <section id="community" className="border-hairline border-t pt-28 pb-24 md:pt-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-xs text-magenta mb-6">QueerDatez</p>
            <h2 className="reveal text-[clamp(2.5rem,6vw,5rem)]">Hele dig er velkommen.</h2>
          </div>
          <div className="reveal lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              QueerDatez er skabt til mennesker på tværs af køn, seksualitet og identitet.
              Uanset om du leder efter kærlighed, dating, kemi eller noget, der endnu ikke
              har fået et navn.
            </p>
          </div>
        </div>

        <div className="reveal mt-20 flex flex-wrap items-baseline gap-x-8 gap-y-2 leading-[0.85] font-extrabold tracking-[-0.045em] uppercase">
          {WORDS.map((w, i) => (
            <span
              key={w.text}
              className={`font-display ${w.cls} hover:text-magenta transition-colors duration-300`}
              style={{ transform: `translateY(${(i % 3) * 8}px)` }}
            >
              {w.text}
            </span>
          ))}
          <span className="font-display bg-lime text-lime-foreground px-4 text-[clamp(3rem,12vw,10rem)] leading-[0.9]">
            YOU
          </span>
        </div>
      </div>
    </section>
  );
}
