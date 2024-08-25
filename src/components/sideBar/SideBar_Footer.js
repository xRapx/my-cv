"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Footer from "public/footer_img1.jpg"
import Image from "next/image";

const SideBar_Header = () => {
  const [tabMenu, setTabMenu] = useState("preview");

  const syntax = `
  <footer class="flex flex-col space-y-10 justify-center m-10">
    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Services</a>
        <a class="hover:text-gray-900" href="#">Media</a>
        <a class="hover:text-gray-900" href="#">Gallery</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>
    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
  </footer>
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
        <h3 className="text-4xl font-bold">Footer</h3>
        <div className="flex justify-between">
          <p className=" p-6 max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:my-0">
            Example Footer 1
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
                  <Image src={Footer} alt="" className="w-full h-full scale-100 hover:scale-110 duration-100 object-contain"/>
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
