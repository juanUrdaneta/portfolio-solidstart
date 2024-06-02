import gsap from "gsap";
import { onCleanup, onMount } from "solid-js";

const Resume = () => {
  onMount(() => {
    gsap.fromTo(
      `#lets-talk`,
      { y: 200 },
      {
        y: 0,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: `#resume-content`,
          start: "10% 20%",
        },
      }
    );
  });

  return (
    <div id="resume" class="relative w-screen z-30 flex justify-center ">
      <div id="resume-content" class="w-4/6 max-w-[1600px] flex flex-col h-full ">
        <div class="w-full z-10 h-[800px] flex flex-col md:flex-row items-center mb-12 ">
          <p class="w-full md:w-1/2 py-8 md:py-0 text-md md:text-2xl leading-2 md:leading-10 text-left font-inter font-light">
            During my journey as a web developer, I have worked on various products from the drawing board
            stage to full production. By collaborating with both product owners and graphic designers, I’ve
            gained knowledge that allows me to approach technical solutions from a comprehensive perspective.
          </p>
          <div class="w-full md:w-1/2 flex justify-center items-center">
            <div
              id="cat-pic"
              class="rounded-md overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img src="mulata.webp" loading="lazy" class="w-[320px] h-[560px] object-cover" />
            </div>
          </div>
        </div>
        <div
          id="lets-talk"
          class="w-full  h-full flex flex-col lg:flex-row justify-start items-center gap-12 mb-8 md:mb-24"
        >
          <h2 class="font-inter font-semibold text-3xl md:text-8xl  mb-0 text-left select-none uppercase">
            Let's get <br />
            <span class="pl-8 md:pl-20">Talking!</span>
          </h2>
          <div class=" w-full lg:w-1/2 flex flex-col ">
            <p class="text-xl text-left font-inter font-light mb-2 md:mb-12">
              Want to work together or looking for an engenieer to join the team? Let’s talk.
            </p>
            <div class="flex justify-center lg:justify-start items-start h-16">
              <a href="mailto:urdntjuan@gmail.com">
                <button class="w-56 h-12 text-white-bone transition-all duration-500 rounded-xl bg-black-soft hover:bg-black-soft/80 ">
                  Let's work together!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
