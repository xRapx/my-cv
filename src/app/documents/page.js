"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import UI_Header from "@/components/UI_Header"
import UI_Feature from "@/components/UI_Feature"

// Constans

const Documents = () => {
  const [text, setTest] = useState("component");


  function handleRouter(tab) {
    switch (tab) {
      case "component":
        setTest(tab);
      case "feature":
        setTest(tab);
      case "item_1":
        setTest(tab);
      case "item_2":
        setTest(tab);
      case "item_3":
        setTest(tab);
      default:
        break;
    }
  }


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
      className="container mx-auto"
    >
      <div className="flex align-center py-2 border border-b-accent">
        <Tabs defaultValue="component">
          <TabsList className="flex w-full max-w-[200px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="component"
              onClick={() => handleRouter("component")}
            >
              Components
            </TabsTrigger>
            <TabsTrigger
              value="feature"
              onClick={() => handleRouter("feature")}
            >
              Features
            </TabsTrigger>
            <TabsTrigger value="item_1" onClick={() => handleRouter("item_1")}>
              Item 1
            </TabsTrigger>
            <TabsTrigger value="item_2" onClick={() => handleRouter("item_2")}>
              Item 2
            </TabsTrigger>
            <TabsTrigger value="item_3" onClick={() => handleRouter("item_3")}>
              Item 3
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* test routing */}
      <div>
        {text === "component" && <UI_Header/>}
        {/* content Nav */}
        {text === "feature" && <UI_Feature/>}
        {text === "item_1" && <div>item_1</div>}
        {text === "item_2" && <div>item_2</div>}
        {text === "item_3" && <div>item_3</div>}
      </div>
    </motion.div>
  );
};

export default Documents;
