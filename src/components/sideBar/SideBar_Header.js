"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Header_img1 from "public/Header_img1.jpg"
import Image from "next/image";

const SideBar_Header = () => {
  const [tabMenu, setTabMenu] = useState("preview");

  const syntax = `
 <div class="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
  <div class="border shadow-teal-300 shadow-md max-w-2xl p-6 rounded-lg dark:bg-gray-700 dark:text-gray-300">
   <div class="w-full max-w-screen-xl px-10 mx-auto">
            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ">

                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto dark:text-white">
                        All Categories
                        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div id="dropdownNavbar" class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44 dark:text-white">
                        <ul class="py-1 dark:text-white" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white">Mobiles</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white">Laptops & PCs</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:text-white">Cameras</a>
                            </li>
                        </ul>

                    </div>
                </li>
                <li>
                    <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700">
                        Mobile Phones
                    </a>
                </li>
                <li>
                    <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700">
                        Laptop & PC
                    </a>
                </li>
                <li>
                    <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700">
                        Cameras
                    </a>
                </li>
            </ul>
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
        <h3 className="text-4xl font-bold">Header</h3>
        <div className="flex justify-between">
          <p className=" p-6 max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:my-0">
            Example Header 1
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
                  <Image src={Header_img1} alt="" className="w-full h-full scale-100 hover:scale-110 duration-100 object-contain"/>
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

export default SideBar_Header;
