import type { ScoringFormDataType } from "@/types/Scoring";
import axios from "axios";

const ScoringService = {
  sendFormData: async (
    data: ScoringFormDataType,
    applicationId: number
  ): Promise<boolean | undefined> => {
    try {
      const response = await axios.put(`/application/registration/${applicationId}`, data);
      console.log(response);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default ScoringService;
