import gsap from "gsap";
import { onMount } from "solid-js";

const PROJECTS = ["shortbread", "incept", "climatika", "dvinum"];

const Projects = () => {
  onMount(() => {
    gsap.fromTo(
      `#recent-title`,
      { y: 200 },
      {
        y: 0,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: `#projects`,
          start: "top 90%",
        },
      }
    );
    PROJECTS.forEach((project, index) => {
      gsap.fromTo(
        `#${project}-selector-name`,
        { x: index % 2 ? 420 : -420 },
        {
          x: 0,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: `#${project}-selector`,
            start: "top 70%",
          },
        }
      );
    });
  });

  return (
    <>
      <div
        id="projects"
        class="relative z-20 flex min-h-screen w-screen flex-col items-center justify-center bg-transparent max-[1600px]:px-8 mt-10 md:mt-0"
      >
        <div class="w-full h-48 flex justify-start items-center max-w-[1600px] overflow-hidden  mb-10 md:mb-24">
          <h2
            id="recent-title"
            class="font-inter font-semibold text-4xl md:text-8xl  text-left select-none uppercase"
          >
            Recent <br />
            <span class="pl-8 md:pl-24">Projects</span>
          </h2>
        </div>
        <div class="hidden lg:flex w-full justify-center ">
          {/* <div class="w-full lg:flex"> */}
          <article class="w-full max-w-[1600px] ">
            <DesktopProjectB
              stack={["React", "Nextjs", "Tailwind"]}
              img="shortbread.webp"
              url="https://create.shortbread.ai"
              selectorId="shortbread"
              name="Shortbread.ai Engine"
              text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."
            />
            <div class="trigger-0"></div>
            {/* <DesktopProjectB
              stack={["React", "React Native", "AWS"]}
              name="GrocerSave App"
              left
              img="shortbread.webp"
              text="Developed front end features for a crowd sourced grocery list React Native App. Worked closely with the Product Manager to develop specific workflows that enabled potential power users to perform mass data update operations with a focus on data integrity and ease of use.
              Developed backend features that enabled the automation for mass product updates and allowed out backend interact with core aws services."
            /> */}
            <div class="trigger-1"></div>
            <DesktopProjectB
              stack={["React", "Nextjs", "Tailwind"]}
              name="Incept Landing Page"
              left
              url="https://incept-landing-git-main-anemolo.vercel.app/"
              img="incept.webp"
              selectorId="incept"
              text="Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."
            />
            <div class="trigger-2"></div>
            <DesktopProjectB
              stack={["React", "Nextjs", "Firebase"]}
              name="Climatika App"
              url="https://config.glassbygaviota.com/climatika"
              selectorId="climatika"
              img="climatika.webp"
              text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            />

            <div class="trigger-3"></div>
            <DesktopProjectB
              stack={["Angular", "Firebase"]}
              name="Dvinum"
              url="https://app.dvinum.es/id/Sv6raUSulwRS3DN5MgBAnMHUhex2"
              selectorId="dvinum"
              left
              img="dvinum.webp"
              text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            />
            <div class="trigger-4"></div>
            {/* <DesktopProjectB
              stack={["React", "React Native", "Firebase"]}
              name="Mesa Premium"
              left
              img="mesap.webp"
              text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers."
            /> */}
          </article>
        </div>
        {/* mobile content */}
        <article class="mb-2 w-full max-w-[1200px] flex flex-col items-center lg:hidden ">
          <Project
            name="Shortbread.ai Engine"
            text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."
            imgSrc="shortbread.webp"
            order={1}
            url="https://create.shortbread.ai"
            selectorId="shortbread"
          />
          <Project
            name="Incept Landing Page"
            text="Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."
            imgSrc="incept.webp"
            order={3}
            url="https://incept-landing-git-main-anemolo.vercel.app/"
            selectorId="incept"
          />
          <Project
            name="Climatika App"
            text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            imgSrc="climatika.webp"
            order={4}
            url="https://config.glassbygaviota.com/climatika"
            selectorId="climatika"
          />
          <Project
            name="Dvinum"
            text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            imgSrc="dvinum.webp"
            order={5}
            url="https://app.dvinum.es/id/Sv6raUSulwRS3DN5MgBAnMHUhex2"
            selectorId="dvinum"
          />
        </article>
      </div>
      {/* end mobile content */}
    </>
  );
};

export default Projects;

const Project = (props: {
  name: string;
  text: string;
  imgSrc: string;
  order: number;
  grocer?: boolean;
  url?: string;
  selectorId?: string;
}) => {
  return (
    <div
      id={props.selectorId + "-selector"}
      class={`flex w-full md:w-[600px] h-full flex-col justify-start items-center mb-10 z-[${props.order}] `}
    >
      <div class="rounded-lg overflow-hidden h-fit w-fit shadow-xl mb-2 z-20 ">
        {props.grocer ? (
          <div class="bg-[#659952] w-[92vw] h-full flex justify-center items-center flex-col">
            <img src={"grocer.svg"} alt="img" class="w-[200px] h-auto" loading="lazy" />
            <p class="text-black-soft font-archivo text-2xl text-left">Grocersave</p>
          </div>
        ) : (
          <img src={props.imgSrc} class=" max-w-3/4 h-auto w-[600px]  transition-all duration-300 " />
        )}
      </div>
      <div class="flex w-full flex-col items-start justify-start z-10">
        <p class="text-black-soft font-inter font-light mt-2 text-3xl text-left mb-2">{props.name}</p>
        <p class="text-black-soft/60 max-w-[500px] font-inter text-left text-sm mb-2">{props.text}</p>
      </div>
      <div class="flex w-full justify-end">
        <a target="_blank" href={props.url}>
          <button class="w-24 h-12 bg-black-soft transition-all rounded-xl text-white-bone">See live</button>
        </a>
      </div>
    </div>
  );
};
type StackKeywords = "Angular" | "Tailwind" | "React" | "Nextjs" | "AWS" | "Firebase" | "React Native";

const DesktopProjectB = (props: {
  name: string;
  text: string;
  img: string;
  selectorId?: string;
  stack: StackKeywords[];
  url?: string;
  left?: boolean;
}) => {
  return (
    <div
      id={props.selectorId + "-selector"}
      class={`desktop-project flex justify-center w-full h-[75vh] max-h-[800px] ${
        props.left ? "flex-row-reverse" : ""
      }`}
    >
      <div class="relative w-7/12 h-full z-20">
        <div class="relative overflow-hidden shadow-xl mb-4 rounded h-[60%]">
          <img
            src={props.img}
            loading="lazy"
            alt="img"
            class={`w-full h-full object-cover  hover:scale-105 transition-all duration-500`}
          />
        </div>
        <p class="text-black-soft font-inter font-light text-left max-w-[90%] text-md ">{props.text}</p>
      </div>
      <div
        id={`${props.selectorId}-selector-name`}
        class={`px-14 w-5/12 z-10 h-[60%] flex justify-end  ${
          props.left ? "items-end" : " items-start"
        } flex-col`}
      >
        <p class="text-black-soft/70 mb-6 font-inter select-none">{props.stack.join(" - ")}</p>
        <p
          class={`text-black-soft mb-8 font-inter font-light max-[1400px]:text-6xl text-8xl ${
            props.left ? "text-right" : "text-left"
          } name-trigger`}
        >
          {props.name}
        </p>
        {props.url ? (
          <a target="_blank" href={props.url}>
            <button class="w-44 h-12 bg-black-soft hover:bg-black-soft/80 transition-all rounded-xl text-white-bone">
              See live
            </button>
          </a>
        ) : (
          <a href="mailto:urdntjuan@gmail.com">
            <button class="w-64 h-12 text-white-bone transition-all duration-500 rounded-xl bg-black-soft hover:bg-black-soft/80 ">
              Let's work together!
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
