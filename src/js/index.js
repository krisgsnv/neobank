import "@/scss/index.scss";

import "./mobile-menu";
import renderCurrencyExchange from "./render/exchange";
import renderNews, { initializeSlider } from "./render/news";

import { setIntervalUpdatingHtml } from "./utils";

renderCurrencyExchange();
renderNews();

setIntervalUpdatingHtml("exchange-reload-time", "currency-exchange", 15, renderCurrencyExchange);
setIntervalUpdatingHtml("news-reload-time", "news", 15, renderNews);

initializeSlider();
