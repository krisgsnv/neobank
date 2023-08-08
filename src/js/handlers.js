import {renderCurrencyExchange, quotesList } from "./render/exchange";
import { setMinutesFromNow } from "./utils";

const multiselect = document.querySelector(".multiselect");

const toggleHandler = (e) => {
  const el = e.target;
  el.classList.toggle("multiselect_open");
};

const changeHandler = (e) => {
  const el = e.target;
  if (el.classList.contains("multiselect__checkbox")) {
    const parentBlock = document.querySelector(".exchange");
    const form = parentBlock.querySelector("form");
    const formData = new FormData(form);
    const selected = formData.getAll("select");

    localStorage.setItem("selected-quotes", JSON.stringify(selected));
    localStorage.removeItem("currency-exchange");
    localStorage.setItem("exchange-reload-time", setMinutesFromNow(15));

    renderCurrencyExchange({ required: quotesList.required, optional: selected });
  }
};

const clickHandler = (e) => {
  const el = e.target;
  const clickInsideMultiselect = e.composedPath().includes(multiselect)

  if (!clickInsideMultiselect) {
    multiselect.open = false;
    multiselect.classList.remove("multiselect_open");
  } 

  if (el.classList.contains("header__nav-btn")) {
    el.classList.toggle("header__nav-btn_active");
    document.body.classList.toggle("no-scroll");
    document.querySelector(".header__list")?.classList.toggle("header__list_active");
  }
};

document.body.addEventListener("click", clickHandler);
multiselect?.addEventListener("toggle", toggleHandler);
multiselect?.addEventListener("change", changeHandler);
