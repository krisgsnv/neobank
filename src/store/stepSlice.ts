import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    setStep: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    }
  }
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
