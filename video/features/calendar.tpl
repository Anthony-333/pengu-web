<!--@problem-->
<!-- The old way: a group-text scramble over whose weekend it is -->
<div class="absolute inset-x-0 top-0 z-10 flex flex-col items-center border-b-[0.5px] border-hairline bg-paper pb-2.5 pt-[58px]">
  <span class="absolute left-4 top-[70px] text-[17px] text-sky-deep">‹ 12</span>
  <span class="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-james-soft text-[17px] text-james-deep">J</span>
  <p class="mt-1 text-[12px] text-ink-2">James</p>
</div>

<div id="missed" class="absolute inset-x-2.5 top-[52px] z-20 flex items-center gap-3 rounded-[22px] bg-white/90 px-3.5 py-3 shadow-[0_12px_32px_rgb(14_14_18/0.18)] backdrop-blur-xl">
  <span class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-accent-ink text-[16px] text-white">✆</span>
  <div class="min-w-0 flex-1">
    <p class="text-[15px] text-ink">Missed calls (3)</p>
    <p class="text-[13px] text-ink-3">James</p>
  </div>
</div>

<div class="absolute inset-x-0 top-[150px] flex flex-col gap-2 px-3.5">
  <p class="bubble self-start max-w-[78%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[21px] text-ink">Is Emma with you or me this weekend?</p>
  <p class="bubble self-end max-w-[78%] rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-[21px] text-white">Yours? We swapped for the 14th</p>
  <p class="bubble self-start max-w-[78%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[21px] text-ink">That was last month 😩</p>
  <p class="bubble self-end max-w-[78%] rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-[21px] text-white">Hang on, checking the spreadsheet</p>
  <p class="bubble self-start max-w-[78%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[21px] text-ink">Which one? Mine says schedule_v3_FINAL</p>
  <p class="bubble self-end max-w-[78%] rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-[21px] text-white">Mine is v4…</p>
  <p class="bubble self-start max-w-[78%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[21px] text-ink">School needs a pickup name by 3pm</p>
  <p class="bubble self-start max-w-[78%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[21px] text-ink">Hello??</p>
  <div class="bubble flex h-[36px] w-[62px] items-center justify-center gap-1 self-start rounded-[20px] bg-frost">
    <span class="dot block h-[7px] w-[7px] rounded-full bg-muted"></span>
    <span class="dot block h-[7px] w-[7px] rounded-full bg-muted"></span>
    <span class="dot block h-[7px] w-[7px] rounded-full bg-muted"></span>
  </div>
</div>

<div class="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t-[0.5px] border-hairline bg-paper px-3 pb-[30px] pt-2">
  <span class="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-frost text-[18px] text-ink-3">+</span>
  <span class="flex h-[36px] flex-1 items-center rounded-full border-[0.5px] border-hairline px-3.5 text-[15px] text-ink-3">Message</span>
</div>

<!--@overlay-->
<div id="toast" class="absolute inset-x-4 bottom-[100px] z-10 flex items-center gap-3 rounded-[22px] bg-ink px-4 py-3 shadow-[0_14px_34px_rgb(14_14_18/0.28)]">
  <span class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maria-deep text-[14px] text-white">✓</span>
  <div class="min-w-0 flex-1">
    <p class="text-[14px] text-white">Fri handover · 6:00 PM</p>
    <p class="text-[12px] text-white/60">Approved by James · on both calendars</p>
  </div>
</div>

<!--@script-->
<script>
  window.FEATURE = {
    at: 3.0,
    problem(tl, h) {
      const bubbles = gsap.utils.toArray("#prob .bubble");
      // The first message is already there on frame 0 (the poster).
      gsap.set(bubbles.slice(1), { opacity: 0, y: 14, scale: 0.92 });
      gsap.set("#missed", { y: -120, opacity: 0 });
      // Messages land faster and faster: the scramble speeding up.
      [0.55, 1.0, 1.38, 1.7, 1.96, 2.18, 2.38, 2.56].forEach((t, i) => {
        tl.to(bubbles[i + 1], { opacity: 1, y: 0, scale: 1, duration: 0.32, ease: "back.out(1.6)" }, t);
      });
      tl.to("#prob .dot", { keyframes: { y: [0, -3, 0] }, duration: 0.4, stagger: 0.12, ease: "sine.inOut" }, 2.6);
      tl.to("#missed", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 2.25);
      h.buzz("#prob", 2.45);
    },
    solution(tl, at) {
      gsap.set("#sol .cal-day", { opacity: 0, scale: 0.6 });
      gsap.set("#sol .day-detail", { opacity: 0, y: 18 });
      gsap.set("#toast", { opacity: 0, y: 24, scale: 0.96 });
      tl.to("#sol .cal-day", { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)", stagger: { each: 0.016, grid: [5, 7], from: "start" } }, at)
        .to("#sol .day-detail", { opacity: 1, y: 0, duration: 0.6 }, at + 0.75)
        .to("#toast", { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.3)" }, at + 1.3);
    },
  };
</script>
