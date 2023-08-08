import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import getNews from "../api/news";
import { containsHTML, haveEmptyValues, isValidSrc } from "../utils";

const parentBlock = document.querySelector(".news-slider__wrapper");
const spinner = parentBlock.querySelector(".spinner");

const filterNews = async (news) => {
  const imagePromises = news.map((item) => {
    return isValidSrc(item, "urlToImage");
  });

  const imagePromisesResult = await Promise.allSettled(imagePromises);

  return imagePromisesResult
    .filter((promise) => promise.status === "fulfilled")
    .map((fulfilledPromise) => fulfilledPromise.value)
    .filter(({ url, urlToImage, title, description }) => {
      const entries = { url, urlToImage, title, description };
      return !haveEmptyValues(entries) && !containsHTML(description);
    });
};

const createNewsHtml = (items) => {
  parentBlock.innerHTML = items
    .map(
      (item) =>
        `<a href="${item.url}" target="_blank" class="swiper-slide news-slider__slide">
        <article class="news-item">
          <img
            class="news-item__img"
            src="${item.urlToImage}"
            alt="${item.title}"
          />
          <h3 class="h3 news-item__title">
            ${item.title}
          </h3>
          <p class="news-item__description">
            ${item.description}
          </p>
        </article>
      </a>`,
    )
    .join("");
};

export const initializeSlider = () => {
  new Swiper(".news-slider", {
    modules: [Navigation],
    slidesPerView: 1.3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    slidesOffsetBefore: 4,
    slidesOffsetAfter: 4,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      disabledClass: "news-slider__nav-btn_disabled",
      nextEl: ".news-slider__nav-btn_next",
      prevEl: ".news-slider__nav-btn_prev",
    },

    breakpoints: {
      500: { slidesPerView: 1.45, spaceBetween: 40 },
      700: { slidesPerView: 2.45, spaceBetween: 60 },
      1200: { slidesPerView: 3.45, spaceBetween: 80 },
    },
  });
};

const renderNews = () => {
  const news = localStorage.getItem("news");

  if (news) {
    createNewsHtml(JSON.parse(news));
    spinner.classList.add("spinner_hidden");
  } else {
    getNews()
      .then((data) => {
        filterNews(data.articles).then((filteredNews) => {
          localStorage.setItem("news", JSON.stringify(filteredNews));
          createNewsHtml(filteredNews);
        });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "We're sorry, but there was an error processing your request.";
        parentBlock.innerHTML = "";
        parentBlock.append(errorMessage);
      })
      .finally(() => {
        spinner.classList.add("spinner_hidden");
      });
  }
};

export default renderNews;
