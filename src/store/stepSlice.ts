import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: {
    number: 0
  },
  reducers: {
    increaseStep: (state) => {
      state.number += 1;
    },
    decreaseStep: (state) => {
      state.number -= 1;
    }
  }
});

export const { increaseStep, decreaseStep } = stepSlice.actions;
export default stepSlice.reducer;
