"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import LeftSidebar from "@/app/components/LeftSidebar";
import RightSidebar from "@/app/components/RightSidebar";
import Editor from "./components/Editor";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <div className="flex-1 flex flex-col overflow-hidden p-2">
          <span className="text-sm my-2">/ Home / Page</span>
          <div className="flex-1 border-2 border-gray-300 rounded overflow-hidden relative bg-white">
            <Editor />
          </div>
        </div>
        <RightSidebar selectedId={selectedId} />
      </div>
    </div>
  );
}
