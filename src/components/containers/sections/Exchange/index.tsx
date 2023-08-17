import { useEffect, useState } from "react";
import { getCurrentDate } from "@/utils/date";
import ExchangeTable from "./ExchangeTable";
import Multiselect from "@/components/ui/Multiselect";
import LocalStorage from "@/services/LocalStorage";
import { ExchangeType, ExchangeDataType } from "@/types/Exchange";
import ExchangeService from "@/services/Exchange";

import "./style.scss";

const quotes = {
  required: ["USD", "EUR"],
  optional: ["TRY", "CHF", "JPY", "CNY"],
};

const Exchange = () => {
  const date = getCurrentDate();
  // const [timer, setTimer] = useState(new Date());
  // const [selectedQuotes, setSelectedQuotes] = useState<string[]>(
  //   LocalStorage.get("selected-quotes") || quotes.optional,
  // );

  const [currencyExchange, setCurrencyExchange] = useState<ExchangeType>({
    status: "loading",
    list: LocalStorage.get<ExchangeDataType>("currency-exchange"),
    optional: quotes.optional,
  });

  useEffect(() => {
    ExchangeService.get([
      ...quotes.required,
      ...currencyExchange.optional,
    ]).then((result) => {
      if (result) {
        LocalStorage.set("currency-exchange", result);
        setCurrencyExchange((prev) => {
          return { ...prev, status: "success", list: result };
        });
      } else {
        setCurrencyExchange((prev) => {
          return { ...prev, status: "error" };
        });
      }
    });
  }, [currencyExchange.optional]);

  // const updateNews = (currentTime: number, interval: number) => {
  //   console.log(optionalQuotes);

  //   ExchangeService.get([...quotes.required, ...optionalQuotes]).then(
  //     (result) => {
  //       if (result) {
  //         LocalStorage.set("currency-exchange", result);
  //         setCurrencyExchange({
  //           status: "success",
  //           items: result,
  //         });
  //       }
  //     },
  //   );
  //   LocalStorage.set("exchange-reload-time", currentTime + interval);
  // };

  // useEffect(() => {
  //   const currentTime = new Date().getTime();
  //   const reloadTime = LocalStorage.get<number>("exchange-reload-time");
  //   const interval = 15 * 60 * 1000;

  //   if (LocalStorage.get<ExchangeDataType>("currency-exchange")) {
  //     setCurrencyExchange({
  //       status: "success",
  //       items: LocalStorage.get<ExchangeDataType>("currency-exchange"),
  //     });
  //   }
  //   if (reloadTime) {
  //     if (currentTime >= reloadTime) {
  //       updateNews(currentTime, interval);
  //     }
  //   } else {
  //     updateNews(currentTime, interval);
  //   }
  //   const timerInterval = setInterval(() => {
  //     setTimer(new Date());
  //   }, 5000);
  //   return () => clearInterval(timerInterval);
  // }, [timer]);

  const changeHandler = (optional: string[]) => {
    setCurrencyExchange((prev) => {
      return { ...prev, optional };
    });
  };

  return (
    <section className="exchange">
      <div className="exchange__heading">
        <h2 className="h2 exchange__h2">Exchange rate in internet bank</h2>
        <p className="exchange__additional-info">
          Update every 15 minutes, MSC {date}
        </p>
      </div>
      {currencyExchange.status === "loading" ? (
        <div className="exchange__spinner spinner"></div>
      ) : currencyExchange.status === "success" ? (
        <>
          <div className="exchange__heading exchange__heading_quotes">
            <h3 className="h3 exchange__h3">Currency</h3>
            <Multiselect
              changeHandler={changeHandler}
              items={quotes.optional}
              name="exchange"
              selected={quotes.optional}
            />
          </div>
          <ExchangeTable list={currencyExchange.list} />
        </>
      ) : (
        <p>We're sorry, but there was an error processing your request.</p>
      )}
      <a href="/" className="exchange__link">
        All courses
      </a>
    </section>
  );
};

export default Exchange;
