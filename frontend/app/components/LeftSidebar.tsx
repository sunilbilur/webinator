"use client";

import React, { useState } from "react";
import { MdPages, MdExtension, MdPermMedia, MdSettings, MdClose } from "react-icons/md";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function LeftSidebar() {
  const [leftPaneOpen, setLeftPaneOpen] = useState(false);

  function openLeftPanel(panel: string): any {
    setLeftPaneOpen(true);
  }

  return (
    <div className="border-r border-gray-300">
      {
        leftPaneOpen && (
          <div className="absolute ml-[125px] w-[400px] h-[92%] mt-2 bg-gray-100 rounded border border-gray-200 z-10 flex items-end flex-col overflow-hidden p-2">
            <span 
            onClick={() => setLeftPaneOpen(false)}
            className="text-sm my-2 cursor-pointer">
              <MdClose size={12} />
            </span>
            <div className="w-full h-full border-2 border-gray-300 rounded overflow-hidden relative bg-white">
            </div>
          </div>
        )
      }
      <div className="flex flex-col p-2 pt-6 gap-y-2">
        <div
        onClick={ () =>openLeftPanel("pages") }
         className="flex items-center cursor-pointer gap-2 hover:bg-green-200 p-2 rounded">
            <MdPages size={24} /> 
          <span className="text-sm ">
            Pages
          </span>
        </div>

        <div
        onClick={ () =>openLeftPanel("pages") }
         className="flex items-center cursor-pointer gap-2 hover:bg-green-200 p-2 rounded">
          <MdExtension size={24} />
          <span className="text-sm ">Elements</span>
        </div>

        <div 
        onClick={ () =>openLeftPanel("pages") }
        className="flex items-center cursor-pointer gap-2 hover:bg-green-200 p-2 rounded">
          <MdPermMedia size={24} />
          <span className="text-sm ">Media</span>
        </div>

        <div 
        onClick={ () =>openLeftPanel("pages") }
        className="flex items-center gap-2 cursor-pointer hover:bg-green-200 p-2 rounded">
          <MdSettings size={24} />
          <span className="text-sm ">Settings</span>
        </div>
      </div>

    </div>
  );
}
