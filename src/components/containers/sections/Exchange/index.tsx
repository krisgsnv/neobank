import { useEffect, useState } from "react";
import { getCurrentDate } from "@/utils/date";
import ExchangeTable from "./ExchangeTable";
import Multiselect from "@/components/ui/Multiselect";
import LocalStorage from "@/services/LocalStorage";
import { ExchangeDataType } from "@/services/Exchange";
import ExchangeService from "@/services/Exchange";

import "./style.scss";

const quotes = {
  required: ["USD", "EUR"],
  optional: ["TRY", "CHF", "JPY", "CNY"],
};

type ExchangeType = {
  status: "loading" | "success" | "error";
  data: ExchangeDataType;
};

const Exchange = () => {
  const date = getCurrentDate();
  const selectedQuotes =
    LocalStorage.get<string[]>("selected-quotes") || quotes.optional;
  const [quotesList, setQuotesList] = useState<string[]>(selectedQuotes);
  const [currencyExchange, setCurrencyExchange] = useState<ExchangeType>({
    status: "loading",
    data: LocalStorage.get<ExchangeDataType>("currency-exchange"),
  });

  useEffect(() => {
    if (currencyExchange.data) {
      setCurrencyExchange({
        status: "success",
        data: LocalStorage.get<ExchangeDataType>("currency-exchange"),
      });
    } else {
      ExchangeService.get([...quotes.required, ...quotesList])
        .then((entries) => {
          LocalStorage.set("currency-exchange", entries);
          setCurrencyExchange({ status: "success", data: entries });
        })
        .catch((error) => {
          console.error(error);
          setCurrencyExchange({ status: "error", data: null });
        });
    }
  }, [quotesList]);

  const changeHandler = (data: string[]) => {

    // LocalStorage.set("selected-quotes", data);
    // setQuotesList(data);
    

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
      ) : currencyExchange.status === "success" && currencyExchange.data ? (
        <>
          <div className="exchange__heading exchange__heading_quotes">
            <h3 className="h3 exchange__h3">Currency</h3>
            <Multiselect
              changeHandler={changeHandler}
              items={quotes.optional}
              name="exchange"
              selected={selectedQuotes}
            />
          </div>
          <ExchangeTable items={currencyExchange.data} />
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
