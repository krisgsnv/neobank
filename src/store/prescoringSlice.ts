import {
  type PrescoringOffersType,
  type PrescoringFormDataType
} from "@/types/Prescoring";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PrescoringStateType {
  formData: PrescoringFormDataType;
  offers: PrescoringOffersType;
}

export const initialState: PrescoringStateType = {
  offers: [],
  formData: {
    amount: 150000,
    term: 6,
    firstName: "",
    lastName: "",
    middleName: null,
    email: "",
    birthdate: "",
    passportSeries: "",
    passportNumber: ""
  }
};

const prescoringSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<PrescoringFormDataType>) => {
      state.formData = action.payload;
    },
    setOffers: (state, action: PayloadAction<PrescoringOffersType>) => {
      state.offers = action.payload;
    }
  }
});

export const { setFormData, setOffers } = prescoringSlice.actions;
export default prescoringSlice.reducer;
