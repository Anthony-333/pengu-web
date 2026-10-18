import Image, { type StaticImageData } from "next/image";
import coralWall from "@/public/images/humphrey-m-Cc-CQTUkbH0-unsplash.jpg";
import silhouette from "@/public/images/arifur-rahman-yikKOtj3H94-unsplash.jpg";
import classroom from "@/public/images/cdc-GDokEYnOfnE-unsplash.jpg";
import crayons from "@/public/images/compagnons-OV44gxH71DU-unsplash.jpg";
import shoulders from "@/public/images/morgan-lane-YZHBeFlEhrg-unsplash.jpg";
import crafts from "@/public/images/alan-rodriguez-N17Nkbsc-zY-unsplash.jpg";
import drawing from "@/public/images/vitaly-gariev-inrYL3ffAsQ-unsplash.jpg";
import reading from "@/public/images/vitaly-gariev-kNzJZSAMaxc-unsplash.jpg";

type Tile = { src: StaticImageData; alt: string; w: string; tag?: string };

const rowA: Tile[] = [
  { src: coralWall, alt: "A father lifting his laughing baby", w: "w-56 sm:w-72", tag: "First laugh" },
  { src: drawing, alt: "A mother and son drawing together", w: "w-80 sm:w-[26rem]" },
  { src: shoulders, alt: "A child riding on a parent's shoulders", w: "w-56 sm:w-72", tag: "Autumn walk" },
  { src: crafts, alt: "Children coloring at a table", w: "w-80 sm:w-[26rem]" },
];
const rowB: Tile[] = [
  { src: reading, alt: "A father reading with his son", w: "w-80 sm:w-[26rem]", tag: "Reading night" },
  { src: silhouette, alt: "Silhouette of a parent and child at sunset", w: "w-56 sm:w-72" },
  { src: classroom, alt: "A boy concentrating in class", w: "w-80 sm:w-[26rem]", tag: "School project" },
  { src: crayons, alt: "Painted rocks and markers on a table", w: "w-56 sm:w-72" },
];

function Row({ tiles, direction }: { tiles: Tile[]; direction: "left" | "right" }) {
  return (
    // Tiles twice over, so the infinite slide by half the row loops seamlessly.
    <div className={`flex w-max ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
      {[...tiles, ...tiles].map((t, i) => (
        <div key={i} className="shrink-0 pr-4" aria-hidden={i >= tiles.length || undefined}>
          <div className={`relative h-56 overflow-hidden rounded-3xl sm:h-72 ${t.w}`}>
            <Image src={t.src} alt={i < tiles.length ? t.alt : ""} fill sizes="420px" className="object-cover" />
            {t.tag && (
              <span className="glass absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white">
                {t.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Moments() {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="reveal mx-auto mb-14 max-w-3xl px-5 text-center sm:px-8">
        <p className="mb-4 text-sm font-semibold text-accent-ink">Why families switch</p>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
          Less logistics.
          <br />
          <span className="text-ink-3">More of the good part.</span>
        </h2>
      </div>
      <div className="space-y-4">
        <Row tiles={rowA} direction="left" />
        <Row tiles={rowB} direction="right" />
      </div>
    </section>
  );
}
