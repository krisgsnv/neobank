import "@/scss/index.scss";
import "./handlers";
import {
  renderCurrencyExchange,
  quotesList,
  renderMultiselect,
} from "./render/exchange";
import renderNews, { initializeSlider } from "./render/news";
import { setIntervalUpdatingHtml } from "./utils";

renderCurrencyExchange();
renderNews();
renderMultiselect();

setIntervalUpdatingHtml("exchange-reload-time", "currency-exchange", 15, () => {
  const selected = localStorage.getItem("selected-quotes");
  if (selected) {
    renderCurrencyExchange({
      required: quotesList.required,
      optional: JSON.parse(selected),
    });
  } else {
    renderCurrencyExchange();
  }
});
setIntervalUpdatingHtml("news-reload-time", "news", 15, renderNews);

initializeSlider();
