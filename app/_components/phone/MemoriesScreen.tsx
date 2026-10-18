import Image, { type StaticImageData } from "next/image";
import { AltArrowLeftIcon } from "@solar-icons/react/line-duotone/alt-arrow-left";
import { ArrowUpToLineIcon } from "@solar-icons/react/line-duotone/arrow-up-to-line";
import { CameraIcon } from "@solar-icons/react/line-duotone/camera";
import { GalleryIcon } from "@solar-icons/react/line-duotone/gallery";
import { HeartIcon } from "@solar-icons/react/line-duotone/heart";
import { PlayIcon } from "@solar-icons/react/line-duotone/play";
import park from "@/public/images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg";
import drawing from "@/public/images/vitaly-gariev-inrYL3ffAsQ-unsplash.jpg";
import shoulders from "@/public/images/morgan-lane-YZHBeFlEhrg-unsplash.jpg";
import crafts from "@/public/images/alan-rodriguez-N17Nkbsc-zY-unsplash.jpg";
import { TabBar, type ScreenProps } from "./Phone";
import { Chip, RoundButton, SubScreenHeader } from "./ui";

type Memory = {
  src: StaticImageData;
  shape: "tall" | "sq" | "short";
  caption: string;
  date: string;
  tags: string[];
  by: "m" | "j";
  react?: [string, number][];
  video?: boolean;
};

// The app lays memories out in two columns, alternating left/right.
const colA: Memory[] = [
  { src: park, shape: "tall", caption: "Sunday at the park with Dad", date: "Oct 18", tags: ["#park", "#weekend"], by: "j", react: [["❤️", 2]] },
  { src: drawing, shape: "short", caption: "Homework, then drawing", date: "Oct 14", tags: ["#school"], by: "m" },
];
const colB: Memory[] = [
  { src: crafts, shape: "sq", caption: "Coloring club 🖍️", date: "Oct 16", tags: ["#firsts"], by: "m", react: [["😍", 1]], video: true },
  { src: shoulders, shape: "tall", caption: "First cold walk of fall", date: "Oct 11", tags: ["#weekend"], by: "j" },
];

const HEIGHT = { tall: 180, sq: 150, short: 120 };

function MemoryCard({ m }: { m: Memory }) {
  return (
    <div className="memory rounded-[22px] bg-paper p-1.5 shadow-[0_8px_20px_rgb(14_14_18/0.06)]">
      <div className="relative overflow-hidden rounded-[17px]" style={{ height: HEIGHT[m.shape] }}>
        <Image src={m.src} alt="" fill sizes="180px" className="object-cover" />
        {m.video ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 pl-0.5">
              <PlayIcon size={18} color="#FFFFFF" />
            </span>
          </div>
        ) : null}
        <span
          className="absolute right-2.5 top-2.5 h-3 w-3 rounded-full border-2 border-paper"
          style={{ background: m.by === "m" ? "#1FAA77" : "#7B61FF" }}
        />
      </div>
      <div className="space-y-[3px] px-2 pb-2 pt-2.5">
        <p className="text-[13px] leading-[18px] tracking-[-0.2px] text-ink">{m.caption}</p>
        <p className="text-[11px] text-ink-3">{m.date}</p>
        <p className="text-[11px] text-accent">{m.tags.join(" ")}</p>
        {m.react ? (
          <div className="mt-1.5 flex gap-1">
            {m.react.map(([e, n]) => (
              <span key={e} className="react rounded-full bg-frost px-[7px] py-[3px] text-[11px]">
                {e} {n}
              </span>
            ))}
            <span className="px-[7px] py-[3px] text-[10px] text-ink-3">+</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function MemoriesScreen({ tabBar = true }: ScreenProps) {
  return (
    <div className="absolute inset-0 bg-canvas">
      <SubScreenHeader
        title="Memories"
        subtitle="Shared with Sarah & James"
        back={AltArrowLeftIcon}
        right={<RoundButton icon={ArrowUpToLineIcon} accent />}
      />
      <div className="flex gap-2 overflow-hidden px-4 pb-3">
        <Chip selected>All</Chip>
        <Chip>
          <span className="h-[7px] w-[7px] rounded-full bg-maria" />
          Sarah
        </Chip>
        <Chip>
          <span className="h-[7px] w-[7px] rounded-full bg-james" />
          James
        </Chip>
        <Chip>
          <HeartIcon size={12} color="#6B6B76" />
          Favorites
        </Chip>
      </div>
      <div className="flex gap-3 px-4">
        <div className="flex flex-1 flex-col gap-3">
          {colA.map((m) => (
            <MemoryCard key={m.caption} m={m} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {colB.map((m) => (
            <MemoryCard key={m.caption} m={m} />
          ))}
        </div>
      </div>
      {/* Camera + Upload bar, sitting above the floating tab bar */}
      <div className="absolute inset-x-0 bottom-[96px] z-10 flex gap-2.5 bg-gradient-to-t from-canvas via-canvas to-transparent px-4 pb-2 pt-6">
        <span className="flex h-[54px] flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[15px] text-white shadow-[0_6px_8px_rgb(255_90_60/0.25)]">
          <CameraIcon size={20} color="#FFFFFF" />
          Camera
        </span>
        <span className="flex h-[54px] flex-1 items-center justify-center gap-2 rounded-full bg-paper text-[15px] text-ink shadow-[0_6px_8px_rgb(0_0_0/0.08)]">
          <GalleryIcon size={20} color="#0E0E12" />
          Upload
        </span>
      </div>
      {tabBar ? <TabBar active={2} /> : null}
    </div>
  );
}
