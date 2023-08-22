import axios from "axios";
import "dotenv/config";
import type { ExchangeDataType } from "@/types/Exchange";

const ExchangeService = {
  get: async (quotes: string[]): Promise<ExchangeDataType> => {
    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        to: "RUB",
        q: "1",
        from: ""
      },
      headers: {
        "X-RapidAPI-Key": process.env.EXCHANGE_API_KEY,
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
      }
    };

    try {
      if (quotes.length) {
        const promises = quotes.map(async (quote) => {
          options.params.from = quote;
          return await axios.request(options);
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
  }
};

export default ExchangeService;
