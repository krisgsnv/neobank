import { createSlice } from "@reduxjs/toolkit";

interface StepType {
  number: number;
}
const initialState: StepType = {
  number: 0
};

const stepSlice = createSlice({
  name: "step",
  initialState,
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
