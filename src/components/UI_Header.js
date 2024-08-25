"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import SideBar_Header from "@/components/sideBar/SideBar_Header";
import SideBar_Section from "@/components/sideBar/SideBar_Section";
import SideBar_Hero from "@/components/sideBar/SideBar_Hero";
import SideBar_Footer from "@/components/sideBar/SideBar_Footer";

function UI_Header() {
  const [sideBar, setSideBar] = useState("headers");

  function handleValue(tab) {
    switch (tab) {
      case "headers":
        setSideBar(tab);
      case "section":
        setSideBar(tab);
      case "hero":
        setSideBar(tab);
      case "footer":
        setSideBar(tab);
      default:
        break;
    }
  }

  return (
    <div className="mt-6 mb-12">
      {/* Side Bar */}
      <div className="container mx-auto flex flex-row gap-[60px]">
        <Tabs defaultValue="headers" className="">
          <TabsList className="flex flex-col w-full max-w-[200px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="headers" onClick={() => handleValue("headers")}>
              Header
            </TabsTrigger>
            <TabsTrigger value="section" onClick={() => handleValue("section")}>
              Section
            </TabsTrigger>
            <TabsTrigger value="hero" onClick={() => handleValue("hero")}>
              Hero
            </TabsTrigger>
            <TabsTrigger value="footer" onClick={() => handleValue("footer")}>
              Footer
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Content SideBar*/}
        <div className="w-full ">
          {sideBar === "headers" && <SideBar_Header />}
          {sideBar === "section" && <SideBar_Section />}
          {sideBar === "hero" && <SideBar_Hero />}
          {sideBar === "footer" && <SideBar_Footer />}
        </div>
      </div>
    </div>
  );
}

export default UI_Header;
