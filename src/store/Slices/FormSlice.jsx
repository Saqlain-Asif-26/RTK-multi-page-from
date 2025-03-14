import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {
      step: 1,
      formData: {
      name: "",
      email: "",
      password: "",
      },
    },
    reducers: {
        setName(state, action){
          state.formData.name = action.payload;
        },
        setEmail(state, action){
          state.formData.email = action.payload;
        },
        setPassword(state, action){
          state.formData.password = action.payload;
        },
        prevStep(state){
          state.step -= 1;
        },
        nextStep(state){
          state.step += 1;
        },
        formRefill(state){
          state.formData = { name: "", email: "", password: "" };
          state.step = 1;
        },
    }
})

export const { setName, setEmail, setPassword, prevStep, nextStep, formRefill } = formSlice.actions;
export default formSlice.reducer