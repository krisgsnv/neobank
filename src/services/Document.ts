import axios from "axios";

const Document = {
  sendDocument: async (applicationId: number): Promise<boolean | undefined> => {
    try {
      const response = await axios.post(`/document/${applicationId}`);
      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default Document;
