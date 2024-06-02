import { A } from "@solidjs/router";
import AboutMe from "~/components/AboutMe";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Header from "~/components/Header";
import Projects from "~/components/Projects";
import Resume from "~/components/Resume";
import Lenis from "lenis";
import { onMount } from "solid-js";

export default function Home() {
  let lenis: Lenis | undefined;
  onMount(() => {
    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    if (window && typeof window !== "undefined") {
      lenis = new Lenis();
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    // requestAnimationFrame(raf);
  });
  return (
    <main class="relative bg-white-bone">
      <Header
        scrollTo={(target: string) => {
          lenis?.scrollTo(target, { offset: -200 });
        }}
      ></Header>
      <AboutMe />
      <Projects />
      <div class=" relative w-full h-72 backdrop-invert bg-[#949596]/20"></div>
      <Resume />
    </main>
  );
}
