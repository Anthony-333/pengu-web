<!--@problem-->
<!-- The old way: a notes-app tally and a pile of paper receipts -->
<div class="px-5 pt-[64px]">
  <span class="text-[17px] text-lily-deep">‹ Notes</span>
  <p class="mt-3 text-[30px] leading-[38px] tracking-[-0.9px] text-ink">Kid costs 😤</p>
  <p class="text-[13px] text-ink-3">Edited just now</p>
  <div class="mt-5 space-y-3">
    <p class="line text-[17px] text-ink-2">Dentist $240 — who paid??</p>
    <p class="line text-[17px] text-ink-2">Swim fees $180 (paid? ask J)</p>
    <p class="line text-[17px] text-ink-2">Backpack $64.50, receipt lost</p>
    <p class="line text-[17px] text-ink-2">Shoes $55 ÷ 2 = ?</p>
    <p class="line text-[17px] text-accent-ink">Total I owe: ???</p>
  </div>
</div>

<div class="receipt absolute left-[28px] top-[470px] w-[156px] rounded-[6px] bg-paper p-3 shadow-[0_10px_26px_rgb(14_14_18/0.18)]" data-r="-9">
  <p class="text-center text-[12px] text-ink">SMILE DENTAL</p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[10px] text-ink-2"><span>Checkup</span><span>$240.00</span></p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[12px] text-ink"><span>TOTAL</span><span>$240.00</span></p>
</div>
<div class="receipt absolute left-[176px] top-[438px] w-[166px] rounded-[6px] bg-paper p-3 shadow-[0_10px_26px_rgb(14_14_18/0.18)]" data-r="7">
  <p class="text-center text-[12px] text-ink">AQUA SWIM CLUB</p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[10px] text-ink-2"><span>Autumn term</span><span>$180.00</span></p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[12px] text-ink"><span>TOTAL</span><span>$180.00</span></p>
</div>
<div class="receipt absolute left-[70px] top-[566px] w-[160px] rounded-[6px] bg-paper p-3 shadow-[0_10px_26px_rgb(14_14_18/0.18)]" data-r="4">
  <p class="text-center text-[12px] text-ink">SHOE BARN</p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[10px] text-ink-2"><span>Kids sneakers</span><span>$55.00</span></p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[12px] text-ink"><span>TOTAL</span><span>$55.00</span></p>
</div>
<div class="receipt absolute left-[196px] top-[592px] w-[150px] rounded-[6px] bg-paper p-3 shadow-[0_10px_26px_rgb(14_14_18/0.18)]" data-r="-5">
  <p class="text-center text-[12px] text-ink">???</p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="text-center text-[10px] text-ink-2">faded · unreadable</p>
  <div class="my-2 border-t border-dashed border-muted"></div>
  <p class="flex justify-between text-[12px] text-ink"><span>TOTAL</span><span>$?.??</span></p>
</div>

<div id="declined" class="absolute inset-x-2.5 top-[52px] z-20 flex items-center gap-3 rounded-[22px] bg-white/90 px-3.5 py-3 shadow-[0_12px_32px_rgb(14_14_18/0.18)] backdrop-blur-xl">
  <span class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-accent-ink text-[18px] text-white">!</span>
  <div class="min-w-0 flex-1">
    <p class="text-[15px] text-ink">Payment request declined</p>
    <p class="text-[13px] text-ink-3">James: “I already paid for that”</p>
  </div>
</div>

<!--@overlay-->
<div id="toast" class="absolute inset-x-4 bottom-[100px] z-10 flex items-center gap-3 rounded-[22px] bg-ink px-4 py-3 shadow-[0_14px_34px_rgb(14_14_18/0.28)]">
  <span class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maria-deep text-[14px] text-white">✓</span>
  <div class="min-w-0 flex-1">
    <p class="text-[14px] text-white">Dentist visit settled</p>
    <p class="text-[12px] text-white/60">$120 each · receipt attached</p>
  </div>
</div>

<!--@script-->
<script>
  // A "settled" pill stacked over the dentist row's "pending" one, so the
  // swap is a pure opacity/scale tween that seeks cleanly.
  const pending = document.querySelector("#sol .status-pending");
  const settled = document.createElement("span");
  settled.id = "st-settled";
  settled.className = "absolute right-0 top-0 inline-block rounded-full bg-maria-soft px-2.5 py-[5px] text-[11px] text-maria-deep";
  settled.textContent = "settled";
  pending.id = "st-pending";
  pending.parentElement.appendChild(settled);
  const actions = document.querySelectorAll("#sol .ex-row")[0].querySelectorAll(".flex-wrap > span");

  window.FEATURE = {
    at: 3.2,
    problem(tl, h) {
      const lines = gsap.utils.toArray("#prob .line");
      gsap.set(lines.slice(1), { opacity: 0, x: -10 });
      const receipts = gsap.utils.toArray("#prob .receipt");
      receipts.forEach((r) => gsap.set(r, { rotation: Number(r.dataset.r), opacity: 0, y: -520 }));
      gsap.set("#declined", { y: -120, opacity: 0 });
      tl.to(lines.slice(1), { opacity: 1, x: 0, duration: 0.35, stagger: 0.24 }, 0.3);
      // Receipts drop onto the pile and settle with a bounce.
      [1.1, 1.45, 1.75, 2.0].forEach((t, i) => {
        tl.to(receipts[i], { opacity: 1, y: 0, duration: 0.55, ease: "bounce.out" }, t);
      });
      tl.to("#declined", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 2.35);
      h.buzz("#prob", 2.6);
    },
    solution(tl, at) {
      gsap.set("#sol .ex-row", { opacity: 0, y: 14 });
      gsap.set("#st-settled", { opacity: 0, scale: 0.6 });
      gsap.set("#toast", { opacity: 0, y: 24, scale: 0.96 });
      tl.to("#sol .ex-row", { opacity: 1, y: 0, duration: 0.5, stagger: 0.13 }, at + 0.1)
        .to(actions, { opacity: 0.35, duration: 0.3 }, at + 1.0)
        .to("#st-pending", { opacity: 0, scale: 0.6, duration: 0.25, ease: "power2.in" }, at + 1.1)
        .to("#st-settled", { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.4)" }, at + 1.25)
        .to("#toast", { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.3)" }, at + 1.45);
    },
  };
</script>
