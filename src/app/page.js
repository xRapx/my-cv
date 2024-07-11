/* eslint-disable react/no-unescaped-entities */
"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-[#fff]">Aplication Developer</span>
            <h1 className="h1 mb-6 text-[#fff]">
              Hello I'm <br />
              <strong className="text-accent hover:text-accent-hover font-extrabold">
                Huỳnh Minh Quân
              </strong>
            </h1>
            {/* Description */}
            <p className="max-w-[500px] mb-9 text-[#BDB76B]">
            I am eager to work in a dynamic business environment where I can hone my skills, cultivate my qualities, and enhance my problem-solving abilities to assist those around me and contribute positively to the company.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                className="uppercase flex items-center gap-2 text-accent hover:text-primary"
                size="lg"
                variant="outline"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
