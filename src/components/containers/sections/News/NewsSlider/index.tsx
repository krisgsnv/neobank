import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LocalStorage } from "ttl-localstorage";

// import News from "@/services/News";
import type { NewsType } from "@/types/News";
import NewsSliderItem from "./NewsSliderItem";
import NewsSliderNav from "./NewsSliderNav";
import Loader from "@/components/ui/Loader";
import { sliderProps } from "./sliderProps";
import "./style.scss";

const NewsSlider = (): JSX.Element => {
  const [timer, setTimer] = useState(new Date());
  const [news, setNews] = useState<NewsType>({
    status: "loading",
    items: null
  });

  useEffect(() => {
    if (LocalStorage.get("news")) {
      setNews({
        status: "success",
        items: LocalStorage.get("news")
      });
    } else {
      // News.get()
      //   .then((data) => {
      //     News.filter(data)
      //       .then((filtered) => {
      //         if (filtered) {
      //           LocalStorage.put("news", filtered, 15 * 60);
      //           setNews({
      //             status: "success",
      //             items: filtered
      //           });
      //         }
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
    const timerInterval = setInterval(() => {
      setTimer(new Date());
    }, 3000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  return (
    <div className="news-slider">
      {news.status === "loading" ? (
        <Loader className="news-slider__spinner" />
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
        <p>We&#39;re sorry, but there was an error processing your request.</p>
      )}
    </div>
  );
};

export default NewsSlider;
