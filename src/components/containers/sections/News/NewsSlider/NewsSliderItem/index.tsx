import { NewsItemType } from "@/types/News";
import "./style.scss";

const NewsSliderItem = (props:NewsItemType) => {
  return (
    <a href={props.url} target="_blank" className="news-slider-item">
      <img
        className="news-slider-item__img"
        src={props.urlToImage}
        alt={props.title}
      />
      <h3 className="news-slider-item__title">{props.title}</h3>
      <p className="news-slider-item__description">{props.description}</p>
    </a>
  );
};

export default NewsSliderItem;
