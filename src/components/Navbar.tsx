import gsap from "gsap";

import { onMount } from "solid-js";

const Navbar = () => {
  onMount(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {
      gsap.fromTo(
        "#header-nav-name",
        { y: "7rem" },
        {
          y: 0,
          fontSize: "2rem",
          scrollTrigger: {
            trigger: "#header",
            start: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress > 0.9) {
                gsap.to("#header-career", {
                  color: "#141516",
                });
                gsap.to("#header-email", {
                  color: "#141516",
                });
                gsap.to("#header-nav-name", {
                  color: "#141516",
                });
                gsap.to("#navbar", {
                  backgroundColor: "rgba(249,246,238,0.6)",
                });
              } else {
                gsap.to("#header-career", {
                  color: "#f9f6ee",
                });
                gsap.to("#header-email", {
                  color: "#f9f6ee",
                });
                gsap.to("#header-nav-name", {
                  color: "#f9f6ee",
                });
                gsap.to("#navbar", {
                  backgroundColor: "#141516",
                });
              }
            },
          },
        }
      );
    });
    mm.add("(max-width: 600px)", () => {
      gsap.fromTo(
        "#header-nav-name",
        { y: "7rem" },
        {
          y: 0,
          fontSize: "2rem",
          scrollTrigger: {
            trigger: "#navbar",
            start: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress > 0.9) {
                gsap.to("#header-career", {
                  color: "#141516",
                });
                gsap.to("#header-email", {
                  color: "#141516",
                });
                gsap.to("#header-nav-name", {
                  color: "#141516",
                });
                gsap.to("#navbar", {
                  backgroundColor: "rgba(249,246,238,0.6)",
                });
              } else {
                gsap.to("#header-career", {
                  color: "#f9f6ee",
                });
                gsap.to("#header-email", {
                  color: "#f9f6ee",
                });
                gsap.to("#header-nav-name", {
                  color: "#f9f6ee",
                });
                gsap.to("#navbar", {
                  backgroundColor: "#141516",
                });
              }
            },
          },
        }
      );
    });
  });
  return (
    <div
      id="navbar"
      class="w-screen h-20 fixed top-0 z-50 mt-[-1px] flex justify-center backdrop-blur-md max-[1600px]:px-8 "
    >
      <nav class="relative flex flex-row-reverse justify-between items-center w-[1600px] max-w-screen">
        <p id="header-email" class="font-interText text-white-bone hidden md:flex ">
          <a class="decoration" href="mailto:urdntjuan@gmail.com">
            urdntjuan@gmail.com
          </a>
        </p>
        <p
          id="header-nav-name"
          class="absolute w-full font-interText font-extrabold text-5xl min-[600px]:text-7xl min-[930px]:text-8xl min-[1210px]:text-9xl tracking-wide uppercase select-none text-white-bone text-left md:text-center "
        >
          Juan Urdaneta
        </p>
        <p id="header-career" class="uppercase font-interText text-white-bone hidden min-[1100px]:flex">
          Software engineer / Creative Developer
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
