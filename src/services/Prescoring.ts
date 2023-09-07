import type {
  PrescoringFormDataType,
  PrescoringOfferType,
  PrescoringOffersType
} from "@/types/Prescoring";
import axios from "axios";

const PrescoringService = {
  getOffers: async (data: PrescoringFormDataType): Promise<PrescoringOffersType | undefined> => {
    try {
      const response = await axios.post("/application", data);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  },
  selectOffer: async (data: PrescoringOfferType): Promise<boolean | undefined> => {
    try {
      const response = await axios.post("/application/apply", data);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default PrescoringService;
