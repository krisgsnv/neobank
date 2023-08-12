import "./style.scss";

const Exchange = () => {
  return (
    <section className="exchange">
      <div className="exchange__heading">
        <h2 className="h2 exchange__h2">Exchange rate in internet bank</h2>
        <p className="exchange__additional-info">
          Update every 15 minutes, MSC 09.08.2022
        </p>
      </div>
      <h3 className="h3 exchange__h3">Currency</h3>
      <table className="exchange__table"></table>
      <div className="exchange__spinner spinner"></div>
      <a href="/" className="exchange__link">
        All courses
      </a>
    </section>
  );
};

export default Exchange;
