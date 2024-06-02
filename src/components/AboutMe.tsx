import gsap from "gsap";
import { onMount } from "solid-js";

const AboutMe = () => {
  onMount(() => {
    gsap.to("#about-me-one", {
      opacity: 1,
      ease: "sine.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: "#header",
        start: "bottom center",
      },
    });

    gsap.to("#about-me-one", {
      y: 0,
      ease: "power4.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: "#header",
        start: "bottom center",
      },
    });
  });
  return (
    <div class="relative h-[70vh] md:h-[90vh] max-h-[1400px] w-screen flex">
      <div class="w-full flex">
        <div id="about-me-one" class="w-full h-full flex justify-center translate-y-[25vh] opacity-0  ">
          <div class="w-full md:w-7/12 h-full flex flex-col justify-center items-center px-12 ">
            <h3 class="text-lg md:text-5xl font-inter font-extrabold mb-10">Hi there!</h3>
            <p class="text-md md:text-4xl text-center font-inter font-light mb-8 md:mb-16">
              <span class="font-bold">Pixel perfect</span> software engineer based in Buenos Aires.
            </p>
            <p class="text-md md:text-4xl text-center font-inter font-light mb-8 md:mb-16">
              Experienced in React, Next.js, AWS and a bunch of cool tech.
            </p>
            <p class="text-md md:text-4xl text-center font-inter font-light mb-8 md:mb-16">
              Passionate about turning great ideas into great products.
            </p>
            <p class="text-md md:text-4xl text-center font-inter font-light mb-8 md:mb-16">
              Problem-solving oriented, naturally curious, continually growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
