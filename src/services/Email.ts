import axios from "axios";

const EmailService = {
  subscribe: async (data: { email: string }) => {
    axios
      .post("/email", data)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error(error);
      });
  },
};

export default EmailService;
