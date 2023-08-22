import "./style.scss";
import NewsSlider from "./NewsSlider";

const News = (): JSX.Element => {
  return (
    <section className="news">
      <h2 className="news__h2">Current news from the world of finance</h2>
      <p className="news__text">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <NewsSlider />
    </section>
  );
};

export default News;
