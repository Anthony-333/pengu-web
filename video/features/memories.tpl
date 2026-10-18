<!--@problem-->
<!-- The old way: photos scattered across apps, links expiring -->
<div class="px-5 pt-[64px]">
  <p class="text-[30px] leading-[38px] tracking-[-0.9px] text-ink">Emma’s photos</p>
  <p class="mt-0.5 text-[13px] text-ink-3">Somewhere in 4 different apps</p>
</div>

<div class="print absolute left-[22px] top-[170px] w-[170px] rounded-[6px] bg-paper p-1.5 pb-6 shadow-[0_10px_26px_rgb(14_14_18/0.2)]" data-r="-7">
  <img src="assets/nathan-dumlao-Wr3comVZJxU-unsplash.jpg" alt="" class="block h-[150px] w-full rounded-[3px] object-cover" />
</div>
<div class="print absolute left-[196px] top-[205px] w-[160px] rounded-[6px] bg-paper p-1.5 pb-6 shadow-[0_10px_26px_rgb(14_14_18/0.2)]" data-r="6">
  <img src="assets/alan-rodriguez-N17Nkbsc-zY-unsplash.jpg" alt="" class="block h-[130px] w-full rounded-[3px] object-cover" />
</div>
<div class="print absolute left-[40px] top-[392px] flex h-[150px] w-[150px] flex-col items-center justify-center gap-1 rounded-[6px] bg-frost shadow-[0_10px_26px_rgb(14_14_18/0.14)]" data-r="4">
  <span class="text-[26px] text-ink-3">⚠︎</span>
  <span class="text-[12px] text-ink-3">Image unavailable</span>
</div>
<div class="print absolute left-[200px] top-[400px] w-[156px] rounded-[6px] bg-paper p-1.5 pb-6 shadow-[0_10px_26px_rgb(14_14_18/0.2)]" data-r="-5">
  <img src="assets/morgan-lane-YZHBeFlEhrg-unsplash.jpg" alt="" class="block h-[150px] w-full rounded-[3px] object-cover" />
</div>
<div class="print absolute left-[96px] top-[566px] w-[150px] rounded-[6px] bg-paper p-1.5 pb-6 shadow-[0_10px_26px_rgb(14_14_18/0.2)]" data-r="8">
  <img src="assets/vitaly-gariev-inrYL3ffAsQ-unsplash.jpg" alt="" class="block h-[110px] w-full rounded-[3px] object-cover" />
</div>
<div class="print absolute left-[236px] top-[598px] flex h-[120px] w-[124px] flex-col items-center justify-center gap-1 rounded-[6px] bg-frost shadow-[0_10px_26px_rgb(14_14_18/0.14)]" data-r="-9">
  <span class="text-[26px] text-ink-3">⚠︎</span>
  <span class="text-[12px] text-ink-3">Deleted by sender</span>
</div>

<div id="n1" class="absolute inset-x-2.5 top-[52px] z-20 flex items-center gap-3 rounded-[22px] bg-white/90 px-3.5 py-3 shadow-[0_12px_32px_rgb(14_14_18/0.18)] backdrop-blur-xl">
  <span class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-lily-deep text-[18px] text-white">!</span>
  <div class="min-w-0 flex-1">
    <p class="text-[15px] text-ink">Shared album link expired</p>
    <p class="text-[13px] text-ink-3">“School play 🎭” is no longer available</p>
  </div>
</div>
<div id="n2" class="absolute inset-x-2.5 top-[124px] z-20 flex items-center gap-3 rounded-[22px] bg-white/90 px-3.5 py-3 shadow-[0_12px_32px_rgb(14_14_18/0.18)] backdrop-blur-xl">
  <span class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-accent-ink text-[18px] text-white">!</span>
  <div class="min-w-0 flex-1">
    <p class="text-[15px] text-ink">Storage full</p>
    <p class="text-[13px] text-ink-3">New photos can’t be backed up</p>
  </div>
</div>

<!--@overlay-->
<div id="toast" class="absolute inset-x-4 bottom-[174px] z-20 flex items-center gap-3 rounded-[22px] bg-ink px-4 py-3 shadow-[0_14px_34px_rgb(14_14_18/0.28)]">
  <span class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-maria-deep text-[14px] text-white">✓</span>
  <div class="min-w-0 flex-1">
    <p class="text-[14px] text-white">Every photo, in one nest</p>
    <p class="text-[12px] text-white/60">Private to Sarah &amp; James · never expires</p>
  </div>
</div>

<!--@script-->
<script>
  window.FEATURE = {
    at: 3.0,
    problem(tl, h) {
      const prints = gsap.utils.toArray("#prob .print");
      gsap.set(prints[0], { rotation: Number(prints[0].dataset.r) });
      prints.slice(1).forEach((p) => gsap.set(p, { rotation: Number(p.dataset.r) * 2.2, opacity: 0, scale: 1.18, y: 30 }));
      gsap.set(["#n1", "#n2"], { y: -140, opacity: 0 });
      // Photos are tossed down one by one, like a shoebox emptied out.
      // The first one is already down on frame 0 (the poster).
      [0.4, 0.75, 1.05, 1.3, 1.55].forEach((t, i) => {
        const p = prints[i + 1];
        tl.to(p, { rotation: Number(p.dataset.r), opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "power3.out" }, t);
      });
      tl.to("#n1", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 1.9)
        .to("#n2", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 2.3);
      h.buzz("#prob", 2.45);
    },
    solution(tl, at) {
      const cards = gsap.utils.toArray("#sol .memory");
      gsap.set(cards, { opacity: 0, y: 22, scale: 0.96 });
      gsap.set("#toast", { opacity: 0, y: 24, scale: 0.96 });
      tl.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 }, at + 0.05)
        .to("#sol .react", { keyframes: { scale: [1, 1.35, 1] }, duration: 0.5, stagger: 0.15, ease: "sine.inOut" }, at + 0.9)
        .to("#toast", { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.3)" }, at + 1.3);
    },
  };
</script>
