import "@/scss/index.scss";

import "./mobile-menu";
import renderCurrencyExchange from "./render/exchange";
import renderNews, { initializeSlider } from "./render/news";

import { setIntervalUpdatingHtml } from "./utils";

const quotes = ["USD", "TRY", "CHF", "EUR", "JPY", "CNY"];

renderCurrencyExchange(quotes);
renderNews();

setIntervalUpdatingHtml("exchange-reload-time", "exchange", 15, () => renderCurrencyExchange(quotes));
setIntervalUpdatingHtml("news-reload-time", "news", 15, renderNews);

initializeSlider();
