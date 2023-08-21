import { useEffect, useState } from "react";
import { getCurrentDate } from "@/utils/date";
import ExchangeTable from "./ExchangeTable";
import Multiselect from "@/components/ui/Multiselect";
import { LocalStorage } from "ttl-localstorage";
import type { ExchangeType } from "@/types/Exchange";
import ExchangeService from "@/services/Exchange";
import "./style.scss";
import Loader from "@/components/ui/Loader";

const quotes = {
  required: ["USD", "EUR"],
  optional: ["TRY", "CHF", "JPY", "CNY"]
};

const Exchange = (): JSX.Element => {
  const date = getCurrentDate();
  const [timer, setTimer] = useState(new Date());
  const [currencyExchange, setCurrencyExchange] = useState<ExchangeType>({
    status: "loading",
    list: LocalStorage.get("currency-exchange"),
    optional: LocalStorage.get("selected-quotes") || quotes.optional
  });

  useEffect(() => {
    if (LocalStorage.get("currency-exchange")) {
      setCurrencyExchange((prev) => ({
        ...prev,
        status: "success",
        list: LocalStorage.get("currency-exchange")
      }));
    } else {
      ExchangeService.get([...quotes.required, ...currencyExchange.optional])
        .then((result) => {
          if (result) {
            LocalStorage.put("currency-exchange", result, 15 * 60);
            setCurrencyExchange((prev) => ({
              ...prev,
              status: "success",
              list: result
            }));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const timerInterval = setInterval(() => {
      setTimer(new Date());
    }, 3000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  const changeHandler = (optional: string[]): void => {
    LocalStorage.put("selected-quotes", optional);
    LocalStorage.removeKey("currency-exchange");
    setCurrencyExchange((prev) => ({ ...prev, status: "loading", optional }));
  };

  return (
    <section className="exchange">
      <div className="exchange__heading">
        <h2 className="exchange__h2">Exchange rate in internet bank</h2>
        <p className="exchange__additional-info">
          Update every 15 minutes, MSC {date}
        </p>
      </div>
      {currencyExchange.status === "loading" ? (
        <Loader className="exchange__spinner" />
      ) : currencyExchange.status === "success" ? (
        <>
          <div className="exchange__heading exchange__heading_quotes">
            <h3 className="exchange__h3">Currency</h3>
            <Multiselect
              propsChangeHandler={(data) => {
                changeHandler(data);
              }}
              items={quotes.optional}
              name="exchange"
              selected={currencyExchange.optional}
            />
          </div>
          <ExchangeTable list={currencyExchange.list} />
        </>
      ) : (
        <p>We&#39;re sorry, but there was an error processing your request.</p>
      )}
      <a href="/" className="exchange__link">
        All courses
      </a>
    </section>
  );
};

export default Exchange;
