import "./style.scss";

const News = () => {
  return (
    <section className="news">
      <h2 className="h2 news__h2">Current news from the world of finance</h2>
      <p className="news__text">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <div className="news-slider">
        <div className="news-slider__wrapper swiper-wrapper">
          <div className="news-slider__spinner spinner"></div>
        </div>
        <div className="news-slider__nav">
          <button
            type="button"
            className="news-slider__nav-btn news-slider__nav-btn_prev"
            title="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
                stroke="#222222"
              />
            </svg>
          </button>
          <button
            type="button"
            className="news-slider__nav-btn news-slider__nav-btn_next"
            title="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
