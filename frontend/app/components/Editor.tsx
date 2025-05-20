// components/Editor.tsx
"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import LeftSidebar from "./LeftSidebar";
import EditorCanvas from "./EditorCanvas";
import RightSidebar from "./RightSidebar";

export default function Editor() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDragEnd = (e: DragEndEvent) => {
    // Delegate to your canvas logic if over canvas
    // you can forward this event down or handle here
  };

  return (
    <>
    </>
  );
}
