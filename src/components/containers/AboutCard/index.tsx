import "./style.scss";

const AboutCard = () => {
  return (
    <section className="about-card">
      <div className="about-card__item about-card__item_light about-card__item_money">
        <b className="h2 about-card__title">
          Up to <span className="price">50 000 ₽</span>
        </b>
        <p className="about-card__description">
          Cash and transfers without commission and percent
        </p>
      </div>
      <div className="about-card__item about-card__item_dark about-card__item_calendar">
        <b className="h2 about-card__title">Up to 160 days</b>
        <p className="about-card__description">Without percent on the loan</p>
      </div>
      <div className="about-card__item about-card__item_light about-card__item_clock">
        <b className="h2 about-card__title">Free delivery</b>
        <p className="about-card__description">
          We will deliver your card by courier at a convenient place and time
          for you
        </p>
      </div>
      <div className="about-card__item about-card__item_dark about-card__item_bag">
        <b className="h2 about-card__title">Up to 12 months</b>
        <p className="about-card__description">
          No percent. For equipment, clothes and other purchases in installments
        </p>
      </div>
      <div className="about-card__item about-card__item_light about-card__item_card">
        <b className="h2 about-card__title">
          Convenient deposit and withdrawal
        </b>
        <p className="about-card__description">
          At any ATM. Top up your credit card for free with cash or transfer
          from other cards
        </p>
      </div>
    </section>
  );
};

export default AboutCard;
