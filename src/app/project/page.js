"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    id: 1,
    num: "01",
    category: "Ecommorse Shop",
    title: "Full-Stack",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      {
        name: "React.Js",
      },
      {
        name: "Redux.Toolkit",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.Js",
      },
    ],
    image: "/category1.png",
    live: "https://ecommorse.vercel.app/",
    github: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 2,
    num: "02",
    category: "Delivery Food",
    title: "Full-Stack",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      {
        name: "Next.Js",
      },
      {
        name: "Next.Auth",
      },
      {
        name: "React.Hook",
      },
      {
        name: "Tailwind",
      },
    ],
    image: "/category2.png",
    live: "https://delivery-food-xi-two.vercel.app/",
    github: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 3,
    num: "03",
    category: "Social Blog",
    title: "Full-Stack",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      {
        name: "Next.Js",
      },
      {
        name: "React.Hook",
      },
      {
        name: "CSS",
      },
    ],
    image: "/category3.png",
    live: "",
    github: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 4,
    num: "04",
    category: "fullstack",
    title: "Project 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: [
      {
        name: "Next.Js",
      },
      {
        name: "Tailwind",
      },
    ],
    image: "/logo1.jpg",
    live: "",
    github: "",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update prject state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* info */}
          <div className="w-full h-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] group">
              {/* Num */}
              <div className="text-8xl leading-none font-extrabold text-white group-hover:text-accent">
                {project.num}
              </div>
              {/* cartegory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <h3 className="text-[32px] font-medium leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              <p className="text-white/60">{project.desc}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* icons Live & Github */}
              <div className="flex items-center gap-4">
                {/* live */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-primary">Demo project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-primary">Github reponsitory</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative  group flex justify-center items-center bg-pink-50/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain "
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* btn slider */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
