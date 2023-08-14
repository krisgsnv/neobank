import "./style.scss";

const CardSteps = () => {
  return (
    <section className="card-steps">
      <h2 className="h2 card-steps__h2">How to get a card</h2>
      <ol className="card-steps__list">
        <li className="card-steps__list-item">
          <p className="card-steps__text">
            Fill out an online application - you do not need to visit the bank
          </p>
        </li>
        <li className="card-steps__list-item">
          <p className="card-steps__text">
            Find out the bank's decision immediately after filling out the
            application
          </p>
        </li>
        <li className="card-steps__list-item">
          <p className="card-steps__text">
            The bank will deliver the card free of charge, wherever convenient,
            to your city
          </p>
        </li>
      </ol>
    </section>
  );
};

export default CardSteps;
