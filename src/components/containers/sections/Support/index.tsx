import "./style.scss";

const Support = () => {
  return (
    <section className="support">
      <p className="support__heading">Support</p>
      <h2 className="h2 support__h2">
        Subscribe Newsletter & get
        <span className="support__h2_fullwidth">Bank News</span>
      </h2>
      <form className="support__form">
        <input
          className="support__input"
          type="text"
          placeholder="Your email"
        />
        <button className="button support__button" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Support;
