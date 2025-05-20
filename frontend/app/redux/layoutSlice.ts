import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface ElementNode {
  id: string;
  type: string;
  text?: string;
  styles?: any;
  children?: ElementNode[];
  path?: number[];
}

interface LayoutState {
  root: ElementNode;
  selected?: ElementNode;
}

const initialState: LayoutState = {
  root: { id: nanoid(), type: "div", styles: {}, children: [] },
};

const findNode = (node: ElementNode, path: number[]): ElementNode | null => {
  if (path.length === 0) return node;
  const [i, ...rest] = path;
  return node.children && node.children[i]
    ? findNode(node.children[i], rest)
    : null;
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    addElementAtPosition: (
      state,
      action: PayloadAction<{
        element: Partial<ElementNode>;     // now accepts drag data without id
        path: number[];
        position?: { x: number; y: number };
      }>
    ) => {
      const parent = findNode(state.root, action.payload.path);
      if (!parent) return;
      if (!parent.children) parent.children = [];

      // Build a fully valid ElementNode from the partial drag data:
      const newNode: ElementNode = {
        id: nanoid(),
        type: action.payload.element.type!,      // must exist
        text: action.payload.element.text,
        styles: {
          ...action.payload.element.styles,
          position: "absolute",
          top: action.payload.position?.y + "px",
          left: action.payload.position?.x + "px",
        },
        children: []
      };

      parent.children.push(newNode);
    },

    selectElement: (
      state,
      action: PayloadAction<{ path: number[] }>
    ) => {
      const node = findNode(state.root, action.payload.path);
      if (node) state.selected = { ...node, path: action.payload.path };
    },

    moveElement: (
      state,
      action: PayloadAction<{ from: number[]; to: number[] }>
    ) => {
      /* implement if needed */
    },

    resizeElement: (
      state,
      action: PayloadAction<{
        path: number[];
        size: { width: number; height: number };
      }>
    ) => {
      const node = findNode(state.root, action.payload.path);
      if (node) {
        node.styles = {
          ...node.styles,
          width: action.payload.size.width + "px",
          height: action.payload.size.height + "px",
        };
      }
    },

    updateStyles: (
      state,
      action: PayloadAction<{ path: number[]; styles: any }>
    ) => {
      const node = findNode(state.root, action.payload.path);
      if (node) node.styles = { ...node.styles, ...action.payload.styles };
    },
  },
});

export const layoutReducer = layoutSlice.reducer;
export const {
  addElementAtPosition,
  selectElement,
  moveElement,
  resizeElement,
  updateStyles,
} = layoutSlice.actions;
