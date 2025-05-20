"use client";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center gap-2">
      <div className="border bg-gray-200 w-8 h-8 flex items-center justify-center rounded font-bold">Wn</div>
      <div className="text-2xl font-bold">Webinator</div>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-4 py-1 bg-green-200 rounded hover:bg-green-600">View</button>
        <button className="px-4 py-1 bg-green-500 border rounded hover:bg-green-600">Generate</button>
      </div>
    </header>
  );
}
