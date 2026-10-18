<!--@problem-->
<!-- The old way: the one message that mattered, buried by the chatter -->
<div class="absolute inset-x-0 top-0 z-10 flex flex-col items-center border-b-[0.5px] border-hairline bg-paper pb-2.5 pt-[58px]">
  <span class="absolute left-4 top-[70px] text-[17px] text-sky-deep">‹ 27</span>
  <span class="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-james-soft text-[17px] text-james-deep">J</span>
  <p class="mt-1 text-[12px] text-ink-2">James</p>
</div>

<!-- Fixed row heights (first 72, the rest 44) so the scroll is plain arithmetic. -->
<div id="thread" class="absolute inset-x-0 bottom-[84px] px-3.5">
  <div class="row flex h-[72px] items-start"><p id="meds" class="h-16 max-w-[80%] rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-[24px] text-ink">Antibiotics 2x a day until Sunday. Bottle’s in her backpack 💊</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">ok 👍</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Soccer moved to 5 btw</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">Can you grab her jacket?</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Which one</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">The blue one</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">📷 Photo</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">Cute!!</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Dentist is next Tuesday</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">Sure</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Grandma wants to visit</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">Which weekend?</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Not sure yet</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">👍</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">She has a cough again</p></div>
  <div class="row flex h-[44px] items-start"><p class="h-9 whitespace-nowrap rounded-[20px] bg-frost px-3.5 py-2 text-[15px] leading-5 text-ink">Did you give her the medicine?</p></div>
  <div class="row flex h-[44px] items-start justify-end"><p class="h-9 whitespace-nowrap rounded-[20px] bg-sky-deep px-3.5 py-2 text-[15px] leading-5 text-white">What medicine??</p></div>
</div>

<div class="absolute inset-x-0 bottom-0 z-10 flex items-center gap-2 border-t-[0.5px] border-hairline bg-paper px-3 pb-[30px] pt-2">
  <span class="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-frost text-[18px] text-ink-3">+</span>
  <span class="flex h-[36px] flex-1 items-center rounded-full border-[0.5px] border-hairline px-3.5 text-[15px] text-ink-3">Message</span>
</div>

<!--@overlay-->
<div id="toast" class="absolute inset-x-4 bottom-[100px] z-10 flex items-center gap-3 rounded-[22px] bg-ink px-4 py-3 shadow-[0_14px_34px_rgb(14_14_18/0.28)]">
  <span class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maria-deep text-[14px] text-white">✓</span>
  <div class="min-w-0 flex-1">
    <p class="text-[14px] text-white">Antibiotics acknowledged</p>
    <p class="text-[12px] text-white/60">James can see you’ve got it</p>
  </div>
</div>

<!--@script-->
<script>
  // "Acknowledged" stacked over the urgent note's "Acknowledge" button.
  const ackBtn = document.querySelector("#sol .mx-4.mb-3 .bg-ink.rounded-full");
  ackBtn.style.position = "relative";
  const acked = document.createElement("span");
  acked.id = "acked";
  acked.className = "absolute right-0 top-0 flex h-full items-center gap-1 whitespace-nowrap rounded-full bg-maria-soft px-3 text-[12px] text-maria-deep";
  acked.textContent = "✓ Acknowledged";
  ackBtn.appendChild(acked);

  window.FEATURE = {
    at: 3.4,
    problem(tl, h) {
      const rows = gsap.utils.toArray("#prob .row");
      const n = rows.length - 1;
      const ROW = 44;
      gsap.set(rows.slice(1), { opacity: 0 });
      gsap.set("#thread", { y: n * ROW });
      // The meds message is readable for a beat, then the chatter speeds up
      // and scrolls it away under the header. The last two land slower.
      let t = 0.9;
      let dt = 0.2;
      for (let k = 1; k <= n; k++) {
        const d = Math.min(0.24, dt);
        tl.fromTo("#thread", { y: (n - k + 1) * ROW }, { y: (n - k) * ROW, duration: d, ease: "power2.out", immediateRender: false }, t)
          .fromTo(rows[k], { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.2, immediateRender: false }, t);
        if (k === n - 2) dt = 0.3;
        t += dt;
        dt = Math.max(0.09, dt * 0.88);
      }
      h.buzz("#prob", 3.0);
    },
    solution(tl, at) {
      const cards = gsap.utils.toArray("#sol .mx-4.mb-3");
      gsap.set(cards, { opacity: 0, y: 18 });
      gsap.set("#acked", { opacity: 0, scale: 0.6 });
      gsap.set("#toast", { opacity: 0, y: 24, scale: 0.96 });
      tl.to(cards, { opacity: 1, y: 0, duration: 0.55, stagger: 0.14 }, at + 0.05)
        .to(cards[0], { keyframes: { scale: [1, 1.025, 1] }, duration: 0.6, ease: "sine.inOut" }, at + 0.85)
        .to("#acked", { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.4)" }, at + 1.15)
        .to("#toast", { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.3)" }, at + 1.4);
    },
  };
</script>
