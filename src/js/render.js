import { getCookie, setCookie } from "./cookie";
import getCurrencyExchange from "./exchange";

const exchangeBlock = document.querySelector(".exchange");
const exchangeSpinner = exchangeBlock.querySelector(".spinner");

const renderTable = (data) => {
  const table = document.createElement("table");
  table.classList.add("exchange__table");

  const tbody = document.createElement("tbody");
  tbody.classList.add("exchange__table-body");
  table.appendChild(tbody);

  data.forEach((_, i) => {
    if (i % 3 === 0) {
      const row = tbody.insertRow();
      row.classList.add("exchange__table-row");

      data.slice(i, i + 3).forEach(([key, value]) => {
        const cell = row.insertCell();
        cell.classList.add("exchange__currency");

        const currencyName = document.createElement("span");
        currencyName.classList.add("exchange__currency-name");
        currencyName.textContent = `${key}:`;

        const currencyValue = document.createTextNode(value.toFixed(2));
        cell.append(currencyName, currencyValue);
      });
    }
  });
  return table;
};

export const renderCurrencyExchange = (quotes) => {
  const cookiesData = getCookie("currency-exchange");
  if (cookiesData) {
    exchangeSpinner.classList.add("spinner_hidden");
    exchangeBlock.insertBefore(renderTable(JSON.parse(cookiesData)), exchangeSpinner);
  } else {
    getCurrencyExchange(quotes)
      .then((result) => [...result.entries()])
      .then((entries) => {
        setCookie("currency-exchange", JSON.stringify(entries), 15 * 60);
        exchangeBlock.insertBefore(renderTable(entries), exchangeSpinner);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "We're sorry, but there was an error processing your request.";

        exchangeBlock.insertBefore(errorMessage, exchangeSpinner);
      })
      .finally(() => exchangeSpinner.classList.add("spinner_hidden"));
  }
};
