import getCurrencyExchange from "../api/exchange";

const parentBlock = document.querySelector(".exchange");
const spinner = parentBlock.querySelector(".spinner");
const table = document.querySelector(".exchange__table");

const renderTable = (data) => {
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
  return tbody;
};

const renderCurrencyExchange = (quotes = ["USD", "TRY", "CHF", "EUR", "JPY", "CNY"]) => {
  const currencyExchange = localStorage.getItem("currency-exchange");

  if (currencyExchange) {
    spinner.classList.add("spinner_hidden");
    table.innerHTML = "";
    table.append(renderTable(JSON.parse(currencyExchange)));
  } else {
    getCurrencyExchange(quotes)
      .then((result) => [...result.entries()])
      .then((entries) => {
        localStorage.setItem("currency-exchange", JSON.stringify(entries));
        table.innerHTML = "";
        table.append(renderTable(entries));
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "We're sorry, but there was an error processing your request.";
        table.innerHTML = "";
        parentBlock.insertBefore(errorMessage, spinner);
      })
      .finally(() => spinner.classList.add("spinner_hidden"));
  }
};

export default renderCurrencyExchange;
