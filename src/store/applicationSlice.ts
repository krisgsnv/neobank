import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ApplicationType {
  step: number;
  applicationId: number | null;
  sesCode: string;
}
const initialState: ApplicationType = {
  step: 0,
  applicationId: null,
  sesCode: ""
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
    setSesCode: (state, action: PayloadAction<string>) => {
      state.sesCode = action.payload;
    },
    clear: () => {}
  }
});

export const { setStep, setApplicationId, setSesCode, clear } = applicationSlice.actions;
export default applicationSlice.reducer;
