import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Opdag", href: "#opdag" },
  { label: "Matches", href: "#matches" },
  { label: "Sådan virker det", href: "#saadan" },
  { label: "Community", href: "#community" },
  { label: "Sikkerhed", href: "#sikkerhed" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-ink-foreground text-xl font-900 tracking-[-0.04em] uppercase"
          style={{ fontWeight: 900 }}
        >
          Queer<span className="text-magenta">Datez</span>
        </a>

        <nav aria-label="Hovedmenu" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-ink-foreground/80 hover:text-lime text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#opret"
            className="text-ink-foreground/80 hover:text-ink-foreground px-2 py-2 text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-colors"
          >
            Log ind
          </a>
          <a
            href="#opret"
            className="bg-magenta text-magenta-foreground hover:bg-lime hover:text-lime-foreground px-5 py-3 text-[0.8rem] font-bold tracking-[0.1em] uppercase transition-colors"
          >
            Opret profil
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Luk menu" : "Åbn menu"}
          className="text-ink-foreground border-ink-foreground/30 border p-2 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="bg-ink border-ink-foreground/15 border-t lg:hidden">
          <ul className="px-5 py-4">
            {NAV.map((item) => (
              <li key={item.label} className="border-ink-foreground/10 border-b">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-ink-foreground block py-4 text-sm font-semibold tracking-[0.08em] uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 px-5 pb-6">
            <a
              href="#opret"
              className="border-ink-foreground/40 text-ink-foreground flex-1 border px-4 py-3 text-center text-xs font-bold tracking-[0.1em] uppercase"
            >
              Log ind
            </a>
            <a
              href="#opret"
              className="bg-magenta text-magenta-foreground flex-1 px-4 py-3 text-center text-xs font-bold tracking-[0.1em] uppercase"
            >
              Opret profil
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
