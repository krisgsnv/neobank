import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LocalStorage from "@/services/LocalStorage";
import News from "@/services/News";
import { NewsItems, NewsType } from "@/types/News";
import NewsSliderItem from "./NewsSliderItem";
import NewsSliderNav from "./NewsSliderNav";
import { sliderProps } from "./sliderProps";
import "./style.scss";

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
        <>
          <Swiper {...sliderProps}>
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
          <NewsSliderNav />
        </>
      ) : (
        <p>We're sorry, but there was an error processing your request.</p>
      )}
    </div>
  );
};

export default NewsSlider;
