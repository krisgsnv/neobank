import { type PaymentScheduleType } from "@/types/PaymentSchedule";
import axios from "axios";

const Admin = {
  getApplicationStatus: async (
    applicationId: number
  ): Promise<string | undefined> => {
    try {
      const response = await axios.get(`/admin/application/${applicationId}`);
      if (response.status === 200) {
        return response.data.status;
      }
    } catch (error) {
      console.error(error);
    }
  },
  getPaymentSchedule: async (
    applicationId: number
  ): Promise<PaymentScheduleType | undefined> => {
    try {
      const response = await axios.get(`/admin/application/${applicationId}`);
      if (response.status === 200) {
        return response.data.credit.paymentSchedule;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default Admin;
