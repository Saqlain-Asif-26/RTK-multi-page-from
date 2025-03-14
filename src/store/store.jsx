import { configureStore } from '@reduxjs/toolkit'
import formSlice from "./Slices/FormSlice";

export const store = configureStore({
  reducer: {
    nameSlice: formSlice,
  },
})