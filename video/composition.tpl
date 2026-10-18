<!doctype html>
<!--
  GENERATED SOURCE: edit this template, then run `npm run screens`
  to produce index.html. Screen markup comes from app/_components/phone.
-->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=780, height=1688" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Elms+Sans:wght@400..800&display=block" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>
      /* No global reset here: unlayered rules would beat Tailwind's utilities (preflight resets already) */
      html,
      body {
        width: 780px;
        height: 1688px;
        overflow: hidden;
        background: #f2f2f5;
      }
      /* Authored in iPhone points (390x844), rendered at 2x. */
      #screen {
        zoom: 2;
        position: relative;
        width: 390px;
        height: 844px;
        overflow: hidden;
        background: #f2f2f5;
        font-family: "Elms Sans", ui-sans-serif, system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      .scene {
        position: absolute;
        inset: 0;
      }
    </style>
    <script>
      window.__tailwindReady=new Promise(function(resolve){
      var loaded=document.readyState==="complete";
      var resolved=false;
      var observer;
      function readTailwindCss(){var styles=document.querySelectorAll("style");for(var i=styles.length-1;i>=0;i--){var text=styles[i].textContent||"";if(text.indexOf("tailwindcss v")!==-1)return text;}return "";}
      function finish(){if(resolved||!loaded||!readTailwindCss())return;resolved=true;if(observer)observer.disconnect();resolve(true);}
      observer=new MutationObserver(finish);
      observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
      if(loaded){finish();}else{window.addEventListener("load",function(){loaded=true;finish();},{once:true});}
      });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.2.4/dist/index.global.js" integrity="sha384-v5YF9xS+gLRWdvrQ0u/WRbCkjSIH0NjHIPe8tBL1ZRrmI7PiSH6LLdzs0aAIMCuh" crossorigin="anonymous"></script>
    <style type="text/tailwindcss">
      /* Copied from app/globals.css by render-screens.tsx */
      @theme {
        {{THEME}}
      }
    </style>
  </head>
  <body>
    <div
      id="root"
      data-composition-id="main"
      data-start="0"
      data-duration="12"
      data-width="780"
      data-height="1688"
    >
      <div id="screen" class="clip font-semibold text-ink" data-layout-allow-occlusion data-layout-allow-overlap data-start="0" data-duration="12" data-track-index="0">
        <div id="s-home" class="scene" data-layout-allow-overflow data-layout-allow-occlusion>{{HOME}}</div>
        <div id="s-cal" class="scene" data-layout-allow-overflow data-layout-allow-occlusion>{{SCHEDULE}}</div>
        <div id="s-exp" class="scene" data-layout-allow-overflow data-layout-allow-occlusion>{{EXPENSES}}</div>

        <div id="tb-0" class="scene" style="z-index: 20; pointer-events: none">{{TABBAR_0}}</div>
        <div id="tb-1" class="scene" style="z-index: 20; pointer-events: none">{{TABBAR_1}}</div>
        <div id="tb-2" class="scene" style="z-index: 20; pointer-events: none">{{TABBAR_2}}</div>

        {{STATUS}}
        {{INDICATOR}}

        <!-- iOS notification banner -->
        <div id="banner" class="absolute inset-x-2.5 top-[56px] z-40 flex items-center gap-3 rounded-[24px] bg-white/85 px-3.5 py-3 shadow-[0_12px_32px_rgb(14_14_18/0.18)] backdrop-blur-xl">
          <div class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-paper shadow-[inset_0_0_0_0.5px_rgb(14_14_18/0.1)]">{{LOGO}}</div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <p class="text-[15px] tracking-[-0.2px] text-ink">James added an expense</p>
              <span class="text-[12px] text-ink-3">now</span>
            </div>
            <p class="text-[14px] text-ink-2">Dentist visit · $240.00 · split 50/50</p>
          </div>
        </div>

        <!-- Tap ripple -->
        <div id="tap" class="absolute z-50 h-14 w-14 rounded-full bg-ink/15" style="left: 0; top: 0"></div>
      </div>
    </div>

    <script>
      // ---- Static markup built once (deterministic) ----
      // Lists scroll under the floating tab bar and FAB, as in the app; the
      // checker reads the opt-out from the covered text itself.
      document.querySelectorAll(".scene p, .scene span").forEach((el) => el.setAttribute("data-layout-allow-occlusion", ""));
      // A "settled" pill stacked over the dentist row's "pending" one, so the
      // swap is a pure opacity/scale tween that seeks cleanly.
      const pending = document.querySelector("#s-exp .status-pending");
      const settled = document.createElement("span");
      settled.id = "st-settled";
      settled.className = "absolute right-0 top-0 inline-block rounded-full bg-maria-soft px-2.5 py-[5px] text-[11px] text-maria-deep";
      settled.textContent = "settled";
      pending.id = "st-pending";
      pending.parentElement.appendChild(settled);
      const actions = document.querySelectorAll("#s-exp .ex-row")[0].querySelectorAll(".flex-wrap > span");

      // ---- Timeline (12s seamless loop) ----
      const TAB_X = (i) => 24.5 + 85.4 * (i + 0.5);
      const TAB_Y = 844 - 22 - 31;
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

      // Initial state, applied outside the timeline so frame 0 renders it.
      // It also equals the final state, so the clip loops seamlessly.
      gsap.set(["#s-cal", "#s-exp", "#tb-1", "#tb-2"], { opacity: 0 });
      gsap.set("#banner", { y: -140, opacity: 0 });
      gsap.set("#tap", { opacity: 0, scale: 0.4 });
      gsap.set("#s-cal .cal-day", { opacity: 0, scale: 0.6 });
      gsap.set("#s-cal .day-detail", { opacity: 0, y: 18 });
      gsap.set("#s-exp .ex-row", { opacity: 0, y: 14 });
      gsap.set("#st-settled", { opacity: 0, scale: 0.6 });

      // Home: a co-parent's expense lands as a push notification
      tl.to("#banner", { y: 0, opacity: 1, duration: 0.65, ease: "back.out(1.4)" }, 0.6)
        .to("#banner", { y: -140, opacity: 0, duration: 0.45, ease: "power2.in" }, 2.3);

      function tap(i, at) {
        tl.set("#tap", { left: TAB_X(i) - 28, top: TAB_Y - 28 }, at)
          .fromTo("#tap", { opacity: 0.6, scale: 0.4 }, { opacity: 0, scale: 1.5, duration: 0.5, ease: "power2.out", immediateRender: false }, at);
      }
      // iOS tab switches swap content in place; the bar itself stays put.
      function switchTo(fromScene, toScene, fromBar, toBar, at) {
        tl.to(toBar, { opacity: 1, duration: 0.25, ease: "none" }, at)
          .to(fromBar, { opacity: 0, duration: 0.25, ease: "none" }, at)
          .fromTo(toScene, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, immediateRender: false }, at)
          .to(fromScene, { opacity: 0, duration: 0.3, ease: "none" }, at);
      }

      // Home -> Schedule
      tap(1, 2.9);
      switchTo("#s-home", "#s-cal", "#tb-0", "#tb-1", 3.0);
      tl.to("#s-cal .cal-day", { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)", stagger: { each: 0.018, grid: [5, 7], from: "start" } }, 3.25)
        .to("#s-cal .day-detail", { opacity: 1, y: 0, duration: 0.5 }, 4.3);

      // Schedule -> Records (Expenses)
      tap(2, 6.6);
      switchTo("#s-cal", "#s-exp", "#tb-1", "#tb-2", 6.7);
      tl.to("#s-exp .ex-row", { opacity: 1, y: 0, duration: 0.45, stagger: 0.12 }, 7.1)
        .to(actions, { opacity: 0.35, duration: 0.3 }, 9.3)
        .to("#st-pending", { opacity: 0, scale: 0.6, duration: 0.25, ease: "power2.in" }, 9.4)
        .to("#st-settled", { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2.4)" }, 9.55);

      // Records -> Home (loops back to frame 0)
      tap(0, 10.9);
      switchTo("#s-exp", "#s-home", "#tb-2", "#tb-0", 11.0);
      tl.set("#s-cal .cal-day", { opacity: 0, scale: 0.6 }, 11.5)
        .set("#s-cal .day-detail", { opacity: 0, y: 18 }, 11.5)
        .set("#s-exp .ex-row", { opacity: 0, y: 14 }, 11.5)
        .set(actions, { opacity: 1 }, 11.5)
        .set("#st-pending", { opacity: 1, scale: 1 }, 11.5)
        .set("#st-settled", { opacity: 0, scale: 0.6 }, 11.5)
        .set("#s-home", { opacity: 1 }, 12);

      window.__timelines = window.__timelines || {};
      window.__timelines["main"] = tl;
      tl.seek(0);
    </script>
  </body>
</html>
