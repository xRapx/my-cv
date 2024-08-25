"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Section_Image from "public/Section_img1.jpg"
import Image from "next/image";

const SideBar_Section = () => {
  const [tabMenu, setTabMenu] = useState("preview");

  const syntax = `
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
              class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                  <br class="hidden lg:inline-block">readymade gluten
              </h1>
              <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                  cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
                  tumeric truffaut hexagon try-hard chambray.</p>
              <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
      </div>
    </section>
  `

  function handleTab(tab) {
    switch (tab) {
      case "preview":
        setTabMenu(tab);
      case "code":
        setTabMenu(tab);
      default:
        break;
    }
  }

  return (
    <div className="w-full">
    <div className="flex flex-col gap-[30px] xl:text-left ">
      <h3 className="text-4xl font-bold">Section</h3>
      <div className="flex justify-between">
        <p className=" p-6 max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:my-0">
          Example Section 1
        </p>
         {/* button */}
         <Tabs defaultValue="preview" className="p-4 ">
              <TabsList className="flex justify-end w-full max-w-[200px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger
                  value="preview"
                  onClick={() => handleTab("preview")}
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" onClick={() => handleTab("code")}>
                  Code
                </TabsTrigger>
              </TabsList>
            </Tabs>
      </div>
      <ScrollArea className="">
        <ul className="grid grid-cols-1  gap-[30px] w-full ">
          <li className="bg-white flex flex-col py-2 px-10 rounded-xl w-full justify-center items-center lg:items-start gap-1">
            {/* content */}
            {tabMenu === "preview" && (
              <div className="p-6">
                <Image src={Section_Image} alt="" className="w-full h-full scale-100 hover:scale-110 duration-100 object-contain"/>
              </div>
            )}
            {tabMenu === "code" && (
              <SyntaxHighlighter language="html" style={solarizedlight}>     
                {syntax}
              </SyntaxHighlighter>
            )}
          </li>
        </ul>
      </ScrollArea>
    </div>
  </div>
  );
};

export default SideBar_Section;
