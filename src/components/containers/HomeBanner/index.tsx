import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import card4 from "@/assets/images/card4.png";

import "./style.scss";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="home-banner__text">
        <h1 className="h1 home-banner__h1">
          Choose the design you like and apply for card right now
        </h1>
        <button
          type="button"
          className="button button_default home-banner__button"
        >
          Choose the card
        </button>
      </div>
      <div className="home-banner__cards">
        <img src={card1} alt="First card" className="home-banner__card" />
        <img src={card2} alt="Second card" className="home-banner__card" />
        <img src={card3} alt="Third card" className="home-banner__card" />
        <img src={card4} alt="Fourth card" className="home-banner__card" />
      </div>
    </section>
  );
};

export default HomeBanner;
