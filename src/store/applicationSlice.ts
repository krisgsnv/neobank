import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ApplicationType {
  step: number;
  applicationId: number | null;
}
const initialState: ApplicationType = {
  step: 0,
  applicationId: null
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setApplicationId: (state, action: PayloadAction<number>) => {
      state.applicationId = action.payload;
    },
    clear: () => {}
  }
});

export const { setStep, setApplicationId, clear } = applicationSlice.actions;
export default applicationSlice.reducer;
