import { type StatusType } from "@/types/Application";
import {
  type PrescoringOffersType,
  type PrescoringFormDataType
} from "@/types/Prescoring";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PrescoringStateType {
  formData: PrescoringFormDataType;
  offers: PrescoringOffersType;
  step: number;
  status: StatusType;
}

const initialState: PrescoringStateType = {
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
  },
  step: 0,
  status: "success"
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
    },
    setPrescoringStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    }
  }
});

export const { setFormData, setOffers, setPrescoringStep, setStatus } =
  prescoringSlice.actions;
export default prescoringSlice.reducer;
