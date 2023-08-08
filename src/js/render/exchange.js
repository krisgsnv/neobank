import getCurrencyExchange from "../api/exchange";

const parentBlock = document.querySelector(".exchange");
const spinner = parentBlock.querySelector(".spinner");
const table = parentBlock.querySelector(".exchange__table");
const multiselectDropdown = parentBlock.querySelector(".multiselect__dropdown");

export const quotesList = {
  required: ["USD", "EUR"],
  optional: ["TRY", "CHF", "JPY", "CNY"],
};

const renderTable = (data) => {
  const tbody = document.createElement("tbody");
  tbody.classList.add("exchange__table-body");
  table.appendChild(tbody);

  data.forEach((_, i) => {
    if (i % 2 === 0) {
      const row = tbody.insertRow();
      row.classList.add("exchange__table-row");

      data.slice(i, i + 2).forEach(([key, value]) => {
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

export const renderMultiselect = () => {
  let data = localStorage.getItem("selected-quotes");

  data ? (data = JSON.stringify(data)) : (data = quotesList.optional);

  multiselectDropdown.innerHTML = quotesList.optional
    .map(
      (el) =>
        `<label class="multiselect__option">
          <input
            class="multiselect__checkbox"
            type="checkbox"
            hidden
            name="select"
            value="${el}"
            ${data.includes(el) ? "checked" : ""}
          />
          <span class="multiselect__option-value">${el}</span>
        </label>`,
    )
    .join("");
};

export const renderCurrencyExchange = (quotes = quotesList) => {
  const { required, optional } = quotes;
  const currencyExchange = localStorage.getItem("currency-exchange");

  table.innerHTML = "";

  if (currencyExchange) {
    spinner.classList.add("spinner_hidden");
    table.append(renderTable(JSON.parse(currencyExchange)));
  } else {
    spinner.classList.remove("spinner_hidden");
    getCurrencyExchange([...required, ...optional])
      .then((result) => [...result.entries()])
      .then((entries) => {
        localStorage.setItem("currency-exchange", JSON.stringify(entries));
        table.append(renderTable(entries));
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "We're sorry, but there was an error processing your request.";
        parentBlock.insertBefore(errorMessage, spinner);
      })
      .finally(() => spinner.classList.add("spinner_hidden"));
  }
};