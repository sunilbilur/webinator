"use client"
import { configureStore } from "@reduxjs/toolkit";
import { layoutReducer } from "./layoutSlice";  // now matches above

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
