import { AltArrowLeftIcon } from "@solar-icons/react/line-duotone/alt-arrow-left";
import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";
import { MicrophoneIcon } from "@solar-icons/react/line-duotone/microphone";
import { PlayIcon } from "@solar-icons/react/line-duotone/play";
import type { ReactNode } from "react";
import { InitialsAvatar } from "./ui";

function HeaderButton({ children }: { children: ReactNode }) {
  return <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-iceberg">{children}</div>;
}

/** A message bubble: coral for you, paper with a hairline for them. */
function Bubble({ me, time, children }: { me?: boolean; time: string; children: ReactNode }) {
  return (
    <div className={`my-0.5 flex items-end gap-2 ${me ? "justify-end" : "justify-start"}`}>
      {!me ? <InitialsAvatar initials="J" size={28} className="mb-0.5 bg-james-soft text-james-deep" /> : null}
      <div
        className={`bubble max-w-[72%] rounded-[20px] px-3.5 py-2.5 ${
          me ? "rounded-br-[6px] bg-accent text-white" : "rounded-bl-[6px] border-[0.5px] border-hairline bg-paper text-ink"
        }`}
      >
        {children}
        <p className={`mt-1 text-right text-[10px] ${me ? "text-white/70" : "text-muted"}`}>{time}</p>
      </div>
    </div>
  );
}

const WAVE = [6, 12, 18, 10, 20, 14, 8, 16, 22, 12, 7, 15, 19, 9, 13, 6, 11, 17, 8, 5];

/** Chat with the co-parent, pushed over the tabs (pengu/src/screens/Chat.tsx). */
export function ChatScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-canvas">
      <div className="flex items-center justify-between gap-3 border-b-[0.5px] border-hairline bg-paper px-4 pb-3 pt-[62px]">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <HeaderButton>
            <AltArrowLeftIcon size={18} color="#0E0E12" />
          </HeaderButton>
          <div className="min-w-0">
            <p className="text-[20px] tracking-[-0.5px] text-ink">Chat</p>
            <p className="mt-px flex items-center gap-1.5 text-[12px] text-ink-3">
              <span className="h-[7px] w-[7px] rounded-full bg-maria" />
              About Emma · with James
            </p>
          </div>
        </div>
        <HeaderButton>
          <MagnifierIcon size={18} color="#0E0E12" />
        </HeaderButton>
      </div>

      <div className="flex-1 space-y-1 px-4 pt-3">
        <div className="my-2.5 flex justify-center">
          <span className="rounded-full bg-frost px-3 py-1 text-[11px] text-ink-3">Today</span>
        </div>
        <Bubble time="9:12 AM">
          <p className="text-[15px] leading-[22px]">Could I take Emma this Saturday? My sister&apos;s wedding is in the afternoon.</p>
        </Bubble>
        <Bubble me time="9:20 AM">
          <p className="text-[15px] leading-[22px]">Sure. You take Saturday and I&apos;ll have her next Sunday?</p>
        </Bubble>
        <Bubble time="9:24 AM">
          <p className="text-[15px] leading-[22px]">Deal. I&apos;ll send the swap in the calendar 🙏</p>
        </Bubble>
        <Bubble time="9:25 AM">
          <div className="voice flex w-[200px] items-center gap-2.5 py-1">
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-iceberg pl-0.5">
              <PlayIcon size={16} color="#0E0E12" />
            </span>
            <span className="flex h-6 flex-1 items-center gap-[3px]">
              {WAVE.map((h, i) => (
                <span key={i} className={`w-[3px] rounded-full ${i < 6 ? "bg-ink" : "bg-ink/25"}`} style={{ height: h }} />
              ))}
            </span>
            <span className="text-[10px] text-ink-3">0:14</span>
          </div>
        </Bubble>
        <Bubble me time="9:31 AM">
          <p className="text-[15px] leading-[22px]">Got it. Her swim bag is by the door, I&apos;ll pack it Friday.</p>
        </Bubble>
      </div>

      <div className="flex items-center gap-2.5 border-t-[0.5px] border-hairline bg-paper px-4 pb-[34px] pt-2.5">
        <div className="flex h-[42px] flex-1 items-center rounded-[21px] bg-iceberg px-3.5 text-[15px] text-muted">Message…</div>
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-accent">
          <MicrophoneIcon size={18} color="#FFFFFF" />
        </span>
      </div>
    </div>
  );
}
