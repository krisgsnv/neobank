import axios from "axios";
import { ExchangeDataType } from "@/types/Exchange";

const ExchangeService = {
  get: async (quotes: string[]): Promise<ExchangeDataType> => {
    const API_KEY = "bcfd35641dmsh5d24916a72c1c70p126c56jsn667ba9720d6f";

    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        to: "RUB",
        q: "1",
        from: "",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };

    try {
      if (quotes.length) {
        const promises = quotes.map((quote) => {
          options.params.from = quote;
          return axios.request(options);
        });

        const request = await Promise.all(promises);
        return quotes.map((quote, i) => [quote, request[i].data]);
      } else {
        throw new Error("Empty request.");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default ExchangeService;
