import "@/scss/index.scss";

import "./mobile-menu";

import { renderCurrencyExchange } from "./render";

const quotes = ["USD", "TRY", "CHF", "EUR", "JPY", "CNY"];

renderCurrencyExchange(quotes);
