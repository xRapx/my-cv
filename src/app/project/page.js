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
import TableUi from "@/components/Table";

const projects = [
  {
    id: 1,
    num: "01",
    category: "Ecommorse Shop",
    title: "Full-Stack",
    feature: [
      {
        name: "🛠️ Complete shop built from scratch in React.Js & Node.Js.",
      },
      {
        name: "💻 Beautiful landing page included.",
      },
      {
        name: "💳 Secret admin dashboard to manage .",
      },
      {
        name: "🛒 Basic features of commercial electronics.",
      },
      {
        name: "🛍️ Customers can purchase directly from you.",
      },
      {
        name: "🌟 Clean, modern CSS UI on top with Tailwind.",
      },
      {
        name: "🔑 Authentication using Nodejs server.",
      },
      {
        name: "✉️ Beautiful thank-you email after purchase",
      },
      {
        name: "⌨️ 100% written in Javascript",
      },
      {
        name: "⌨️🎁 ...much more",
      },
    ],
    desc: `Describe: 
      ✅ Friendly interface to use.
      ✅ User features allow login, registration & logout.
      ✅ Good-looking Product interface with suitable product search filters for users
      ✅ High data storage capacity, fast access speed.
      ✅ Account security & payment guaranteed for each user account.`,
    stack: [
      {
        name: "React.JS",
      },
      {
        name: "Redux.Toolkit",
      },
      {
        name: "Tailwind.CSS",
      },
      {
        name: "Node.JS",
      },
      {
        name: "MongoDB",
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
    feature: [
      {
        name: "🛠️ Complete shop built from scratch in Next.js 14.",
      },
      {
        name: "💻 Beautiful landing page included.",
      },
      {
        name: "💳 Secret admin dashboard to manage .",
      },
      {
        name: "🛒 Order your favorite dishes & reasonable prices.",
      },
      {
        name: "🛍️ Customers can order food directly from you.",
      },
      {
        name: "🌟 Clean, modern CSS UI on top with Tailwind.",
      },
      {
        name: "🔑 Authentication using Credentials .",
      },
      {
        name: "✉️ Beautiful thank-you email after purchase",
      },
      {
        name: "⌨️ 100% written in Javascript",
      },
      {
        name: "⌨️🎁 ...much more",
      },
    ],
    desc: `Describe: 
      ✅ Friendly interface, easy to use.
      ✅ User feature allows login, registration and logout.
      ✅ Beautiful product interface with diverse dishes
      ✅ High data storage capacity, fast access speed.
      ✅ Account security & payment guarantee for each user account.`,
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Next.Auth",
      },
      {
        name: "MongoDB",
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
    feature: [
      {
        name: "🛠️ Complete shop built from scratch in React.JS Node.JS",
      },
      {
        name: "💻 Beautiful landing page included.",
      },
      {
        name: "💳 Secret admin dashboard to manage .",
      },
      {
        name: "🛒 Create posts with your favorite topics.",
      },
      {
        name: "🛍️ Customers can post directly on the interface.",
      },
      {
        name: "🌟 Clean, modern CSS UI .",
      },
      {
        name: "🔑 Authentication using Node.JS builder custom.",
      },
      {
        name: "✉️ Beautiful thank-you email after purchase",
      },
      {
        name: "⌨️ 100% written in Javascript",
      },
      {
        name: "⌨️🎁 ...much more",
      },
    ],
    desc: `Describe: 
      ✅ Friendly interface, easy to use.
      ✅ User feature allows login, registration and logout.
      ✅ Create, update, delete, move, personal posts
      ✅ High data storage capacity, fast access speed.
      ✅ Account security & payment guarantee for each user account.`,
    stack: [
      {
        name: "React.JS",
      },
      {
        name: "Node.JS",
      },
      {
        name: "CSS",
      },
      {
        name: "MongoDB",
      },

    ],
    image: "/category3.png",
    live: "https://my-profile-snowy-theta.vercel.app",
    github: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 4,
    num: "04",
    category: "Real estate rental services",
    title: "Full-Stack",
    feature: [
      {
        name: "🛠️ Complete shop built from scratch in Next.JS 14",
      },
      {
        name: "💻 Beautiful landing page included.",
      },
      {
        name: "💳 Secret admin dashboard to manage .",
      },
      {
        name: "🛒 Real estate filtering and search features.",
      },
      {
        name: "🛍️ Customers can book and buy real estate online.",
      },
      {
        name: "🌟 Clean, modern CSS UI top Taiwind, Shadcn .",
      },
      {
        name: "🔑 Authentication using Kinde.",
      },
      {
        name: "✉️ Beautiful thank-you email after purchase",
      },
      {
        name: "⌨️ 100% written in Typescript",
      },
      {
        name: "⌨️🎁 ...much more",
      },
    ],
    desc: `Describe: 
      ✅ Friendly interface, easy to use.
      ✅ User management feature using Kinde
      ✅ Search and order suitable products
      ✅ High data storage capacity, fast access speed.
      ✅ Account security & payment guarantee for each user account.`,
    stack: [
      {
        name: "Next.JS",
      },
      {
        name: "Kinde",
      },
      {
        name: "Tailwind",
      },
      {
        name: "MongoDB",
      },

    ],
    image: "",
    live: "https://my-profile-snowy-theta.vercel.app",
    github: "Lorem ipsum dolor sit amet,",
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
              <div className="flex justify-between">
                {/* Num */}
                <div className="text-8xl leading-none font-extrabold text-white group-hover:text-accent">
                  {project.num}
                </div>
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
              {/* Features */}
              <div>
                <TableUi data={project.feature}/>
              </div>
              {/* border */}
              <div className="border border-white/20"></div>
             
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
