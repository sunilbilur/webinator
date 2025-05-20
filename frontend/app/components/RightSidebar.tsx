"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { updateStyles } from "../redux/layoutSlice";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function RightSidebar({ selectedId }: { selectedId: string | null }) {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(s => s.layout.selected);
  const [collapsed, setCollapsed] = useState(false);

  if (!selected) {
    return (
      <div className={`transition-all p-2 border-l ${collapsed ? 'w-4' : 'w-64'}`}>        
        <button onClick={() => setCollapsed(!collapsed)} className="absolute bottom-2 right-2">{collapsed ? '>' : '<'}</button>
      </div>
    );
  }

  const style = selected.styles || {};

  return (
    <div className={`transition-all p-4 border-l ${collapsed ? 'w-4' : 'w-64'}`}>      
      <button onClick={() => setCollapsed(!collapsed)} className="absolute bottom-2 right-2">{collapsed ? '>' : '<'}</button>
      {!collapsed && (
        <div>
          <h3 className="font-semibold mb-2">Properties</h3>
          <div className="mb-2">
            <label>Font Size</label>
            <input type="number" value={parseInt(style.fontSize)||16}
              onChange={e => dispatch(updateStyles({ path: selected.path!, styles: { fontSize: e.target.value + 'px' }}))} />
          </div>
          {selected.type === 'p' && (
            <ReactQuill value={selected.text || ''}
              onChange={val => dispatch(updateStyles({ path: selected.path!, styles: {}, }))} />
          )}
        </div>
      )}
    </div>
  );
}
