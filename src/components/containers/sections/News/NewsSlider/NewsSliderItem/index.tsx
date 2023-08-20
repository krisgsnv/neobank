import { NewsItemType } from "@/types/News";
import "./style.scss";

const NewsSliderItem = ({url, urlToImage, title, description}:NewsItemType) => {
  return (
    <a href={url} target="_blank" className="news-slider-item">
      <img
        className="news-slider-item__img"
        src={urlToImage}
        alt={title}
      />
      <h3 className="news-slider-item__title">{title}</h3>
      <p className="news-slider-item__description">{description}</p>
    </a>
  );
};

export default NewsSliderItem;
