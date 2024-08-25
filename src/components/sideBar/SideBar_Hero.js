"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Hero_Image from "public/Hero_img1.jpg"
import Image from "next/image";

const SideBar_Hero = () => {
  const [tabMenu, setTabMenu] = useState("preview");

  const syntax = `
  <div class="flex h-screen justify-center items-center dark:bg-slate-800">
    <div class="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
        <div class="text-center ">
            <h1
                class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                <span class="block xl:inline"><span class="mb-1 block">Create amazing</span>
                <span class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                    podcast show notes
                </span>
                </span>
                <div class="mt-2">10X faster
                    <span class="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                        class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                        preserveAspectRatio="none">
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                        </path>
                    </svg>
                    <span class="relative">with AI tools.</span>
                    </span>
                </div>
            </h1>
            <p class="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
                example is the AI Content Generator
                that helps you and your team break through creative blocks to create amazing, original content 10X
                faster.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div class="rounded-md shadow"><a
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                        href="#">Get started for free 🚀
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
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
      <h3 className="text-4xl font-bold">Hero</h3>
      <div className="flex justify-between">
        <p className=" p-6 max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:my-0">
          Example Hero 1
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
      <ScrollArea className="w-full">
        <ul className="grid grid-cols-1  gap-[30px] w-full ">
          <li className="bg-white flex flex-col py-2 px-10 rounded-xl w-full justify-center items-center lg:items-start gap-1">
            {/* content */}
            {tabMenu === "preview" && (
              <div className="p-6">
                <Image src={Hero_Image} alt="" className="w-full h-full scale-100 hover:scale-110 duration-100 object-contain"/>
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

export default SideBar_Hero;
