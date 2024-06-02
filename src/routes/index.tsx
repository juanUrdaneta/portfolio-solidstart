import AboutMe from "~/components/AboutMe";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Header from "~/components/Header";
import Projects from "~/components/Projects";
import Resume from "~/components/Resume";
import Lenis from "lenis";
import { onMount } from "solid-js";

import { Meta, Title } from "@solidjs/meta";

export default function Home() {
  let lenis: Lenis | undefined;
  onMount(() => {
    if (typeof window !== "undefined") {
      lenis = new Lenis();
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  });
  return (
    <>
      <Title>Juan Urdaneta - Portfolio - Software Engineer</Title>
      <Meta name="description" content="Juan Urdaneta, Software Engineer, Sr. Front End developer" />
      <Meta
        name="keywords"
        content="Juan Urdaneta, Software Engineer, Sr. Front End developer, Sr. Front End developer, ReactJS, NextJS, Javscript, AWS, THREEJS, GSAP"
      />
      <Meta name="author" content="Juan Urdaneta" />
      <Meta
        property="og:title"
        content="Portfolio | Juan Urdaneta, Software Engineer, Sr. Front End developer"
      />
      <Meta
        property="og:description"
        content="Welcome! come and take a look at my professional journey as a Sr. Front End developer."
      />
      <Meta property="og:image" content="https://juanurdaneta.github.io/portfolio/mulata.webp" />
      <Meta property="og:url" content="https://juanurdaneta.github.io/portfolio/" />
      <Meta property="og:type" content="website" />
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
    </>
  );
}
