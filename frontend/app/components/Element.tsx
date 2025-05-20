"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Resizable } from "re-resizable";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { moveElement, resizeElement, selectElement } from "../redux/layoutSlice";

export default function Element({ element, path, onSelect }: any) {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(s => s.layout.selected?.id === element.id);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: element.id, data: element });
  const style = { ...element.styles, position: 'absolute', transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined };

  return (
    <Resizable
      size={{ width: element.styles.width || 'auto', height: element.styles.height || 'auto' }}
      onResizeStop={(e, dir, ref, d) => dispatch(resizeElement({ path, size: { width: ref.offsetWidth, height: ref.offsetHeight } }))}
    >
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        onClick={(e) => { e.stopPropagation(); dispatch(selectElement({ path })); onSelect(element.id); }}
        className={`${selected ? 'border-2 border-blue-500' : ''} cursor-move`}
        style={style}
      >
        {element.type === 'textarea' ? (
          <textarea defaultValue={element.text} />
        ) : element.type === 'select' ? (
          <select><option>Option 1</option></select>
        ) : element.type === 'radio' ? (
          <input type="radio" />
        ) : (
          React.createElement(element.type, { }, element.text)
        )}
      </div>
    </Resizable>
  );
}