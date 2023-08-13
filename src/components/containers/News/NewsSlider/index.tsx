import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import LocalStorage from "@/services/LocalStorage";
import "./style.scss";
import News from "@/services/News";

import { NewsItems, NewsType } from "@/types/News";
import NewsSliderItem from "./NewsSliderItem";
import NewsSliderNav from "./NewsSliderNav";

const NewsSlider = () => {
  const [timer, setTimer] = useState(new Date());
  const [news, setNews] = useState<NewsType>({
    status: "loading",
    items: null,
  });

  const updateNews = (currentTime: number, interval: number) => {
    News.get()
      .then((data) => News.filter(data))
      .then((filtered) => {
        if (filtered) {
          LocalStorage.set("news", filtered);
          setNews({
            status: "success",
            items: filtered,
          });
        }
      });
    LocalStorage.set("news-reload-time", currentTime + interval);
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    const reloadTime = LocalStorage.get<number>("news-reload-time");
    const interval = 15 * 60 * 1000;

    if (LocalStorage.get<NewsItems>("news")) {
      setNews({
        status: "success",
        items: LocalStorage.get<NewsItems>("news"),
      });
    }
    if (reloadTime) {
      if (currentTime >= reloadTime) {
        updateNews(currentTime, interval);
      }
    } else {
      updateNews(currentTime, interval);
    }
    const timerInterval = setInterval(() => {
      setTimer(new Date());
    }, 5000);
    return () => clearInterval(timerInterval);
  }, [timer]);

  return (
    <div className="news-slider">
      {news.status === "loading" ? (
        <div className="news-slider__spinner spinner"></div>
      ) : news.status === "success" && news.items ? (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.3}
          slidesPerGroup={1}
          spaceBetween={20}
          slidesOffsetBefore={4}
          slidesOffsetAfter={4}
          allowTouchMove={false}
          observer={true}
          observeParents={true}
          observeSlideChildren={true}
          navigation={{
            disabledClass: "news-slider-nav__btn_disabled",
            nextEl: ".news-slider-nav__btn_next",
            prevEl: ".news-slider-nav__btn_prev",
          }}
          wrapperClass="news-slider__wrapper"
          breakpoints={{
            500: { slidesPerView: 1.45, spaceBetween: 40 },
            700: { slidesPerView: 2.45, spaceBetween: 60 },
            1200: { slidesPerView: 3.45, spaceBetween: 80 },
          }}
        >
          {news.items.map((item) => (
            <SwiperSlide
              tag="article"
              className="news-slider__slide"
              key={item.title}
            >
              <NewsSliderItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>We're sorry, but there was an error processing your request.</p>
      )}
      <NewsSliderNav />
    </div>
  );
};

export default NewsSlider;
