import axios from "axios";

const getCurrencyExchange = async (quotes) => {
  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: {
      to: "RUB",
      q: "1",
    },
    headers: {
      "X-RapidAPI-Key": "bcfd35641dmsh5d24916a72c1c70p126c56jsn667ba9720d6f",
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

      return new Map(quotes.map((quote, i) => [quote, request[i].data]));
    } else {
      throw new Error("Empty request.");
    }
  } catch (error) {
    console.error(error);
  }
};

export default getCurrencyExchange;
