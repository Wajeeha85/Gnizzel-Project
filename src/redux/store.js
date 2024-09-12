import { configureStore } from "@reduxjs/toolkit";
import dealsData from "./dealsSlice";
export const store = configureStore({
  reducer: {
    dealsData,
  },
});
