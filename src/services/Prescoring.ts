import { PrescoringFormData } from "@/types/Prescoring";
import axios from "axios";

const PrescoringService = {
  get: (data: PrescoringFormData) => {
    axios
      .post("/application", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  },
};

export default PrescoringService;
