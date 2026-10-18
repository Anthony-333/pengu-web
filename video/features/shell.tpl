<!doctype html>
<!--
  GENERATED SOURCE: edit video/features/shell.tpl or video/features/{{NAME}}.tpl,
  then run `npm run screens`. Screen markup comes from app/_components/phone.
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
      data-composition-id="{{ID}}"
      data-start="0"
      data-duration="{{DURATION}}"
      data-width="780"
      data-height="1688"
    >
      <div id="screen" class="clip font-semibold text-ink" data-layout-allow-occlusion data-layout-allow-overlap data-start="0" data-duration="{{DURATION}}" data-track-index="0">
        <!-- The old way: the problem, built up to a breaking point -->
        <div id="prob" class="scene bg-paper" data-layout-allow-overflow data-layout-allow-occlusion>{{PROBLEM}}</div>

        <!-- Pengu: revealed through a circle opening behind the badge -->
        <div id="sol" class="scene" data-layout-allow-overflow data-layout-allow-occlusion>
          {{SOLUTION}}
          {{OVERLAY}}
        </div>
        <div id="tabbar" class="scene" style="z-index: 20; pointer-events: none">{{TABBAR}}</div>

        {{STATUS}}
        {{INDICATOR}}

        <!-- Resolution beat: the Pengu mark lands, then opens into the app -->
        <div class="absolute inset-0 z-40 flex items-center justify-center" style="pointer-events: none">
          <div id="badge" class="flex h-[92px] w-[92px] items-center justify-center rounded-[28px] bg-paper shadow-[0_18px_50px_rgb(14_14_18/0.28),inset_0_0_0_0.5px_rgb(14_14_18/0.08)]">{{LOGO}}</div>
        </div>
      </div>
    </div>

    <script>
      // The Pengu badge passes over the solution screen during the reveal.
      document.querySelectorAll(".scene p, .scene span, #sol div").forEach((el) => el.setAttribute("data-layout-allow-occlusion", ""));
    </script>
    {{SCRIPT}}
    <script>
      // ---- Shared problem -> Pengu timeline ----
      // The feature script above sets window.FEATURE = { at, problem(tl, h), solution(tl, at, h) }.
      // `at` is when the problem gives way, in the problem's own (unslowed) time.
      // The problem plays SLOW times slower, so it has room to land; the
      // reveal and the Pengu screen keep their pace. render-screens.tsx sizes
      // the root duration from the same numbers.
      const SLOW = {{SLOW}};
      const F = window.FEATURE;
      const T = F.at * SLOW;
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      const problem = gsap.timeline({ defaults: { ease: "power3.out" } });
      const h = {
        // A short phone buzz: the moment the chaos tips over.
        buzz(target, at) {
          problem.to(target, { keyframes: { x: [0, -4, 4, -3, 3, -1, 0] }, duration: 0.42, ease: "none" }, at);
        },
      };

      gsap.set("#sol", { clipPath: "circle(0% at 50% 50%)" });
      gsap.set("#tabbar", { opacity: 0, y: 26 });
      gsap.set("#badge", { opacity: 0, scale: 0.55 });

      F.problem(problem, h);
      problem.timeScale(1 / SLOW);
      tl.add(problem, 0);

      tl.to("#prob", { filter: "blur(9px) saturate(0.5)", scale: 0.93, opacity: 0.5, duration: 0.65, ease: "power2.in" }, T)
        .to("#badge", { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" }, T + 0.2)
        .to("#sol", { clipPath: "circle(80% at 50% 50%)", duration: 1.0, ease: "power3.inOut" }, T + 0.7)
        .to("#badge", { opacity: 0, scale: 1.3, duration: 0.55, ease: "power2.in" }, T + 0.95)
        .to("#tabbar", { opacity: 1, y: 0, duration: 0.7 }, T + 1.25);

      F.solution(tl, T + 1.1, h);

      window.__timelines["{{ID}}"] = tl;
      tl.seek(0);
    </script>
  </body>
</html>
