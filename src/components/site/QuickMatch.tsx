import { useState } from "react";

const fieldClass =
  "w-full appearance-none rounded-none border border-input bg-card px-4 py-3.5 text-sm font-medium text-foreground focus:border-magenta focus:outline-none";

const labelClass = "label-xs text-muted-foreground mb-2 block";

export function QuickMatch() {
  const [age, setAge] = useState(35);

  return (
    <div className="mx-auto max-w-[1600px] px-5 md:px-10">
      <form
        aria-label="Hurtig søgning"
        onSubmit={(e) => e.preventDefault()}
        className="border-magenta bg-background text-foreground reveal relative z-10 -mb-16 translate-y-16 border-t-4 p-6 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.6)] md:p-8"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr_auto] lg:items-end">
          <div>
            <label className={labelClass} htmlFor="qm-iam">
              Jeg er
            </label>
            <select id="qm-iam" className={fieldClass} defaultValue="kvinde">
              <option value="kvinde">Kvinde</option>
              <option value="mand">Mand</option>
              <option value="nonbinaer">Non-binær</option>
              <option value="trans">Trans</option>
              <option value="andet">Andet / egen beskrivelse</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="qm-seek">
              Jeg søger
            </label>
            <select id="qm-seek" className={fieldClass} defaultValue="alle">
              <option value="kvinder">Kvinder</option>
              <option value="maend">Mænd</option>
              <option value="nonbinaere">Non-binære</option>
              <option value="alle">Alle</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="qm-age">
              Alder — op til {age}
            </label>
            <input
              id="qm-age"
              type="range"
              min={18}
              max={70}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="accent-magenta h-11 w-full"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="qm-area">
              Område
            </label>
            <select id="qm-area" className={fieldClass} defaultValue="kbh">
              <option value="kbh">København</option>
              <option value="aarhus">Aarhus</option>
              <option value="odense">Odense</option>
              <option value="aalborg">Aalborg</option>
              <option value="hele">Hele Danmark</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-foreground text-background hover:bg-magenta hover:text-magenta-foreground w-full px-8 py-4 text-xs font-bold tracking-[0.14em] uppercase transition-colors lg:w-auto"
          >
            Vis profiler →
          </button>
        </div>
      </form>
    </div>
  );
}
