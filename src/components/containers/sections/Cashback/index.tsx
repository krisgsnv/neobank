import "./style.scss";

const cashbackList: Array<[string, string]> = [
  ["For food delivery, cafes and restaurants", "5%"],
  ["In supermarkets with our subscription", "5%"],
  ["In clothing stores and children's goods", "2%"],
  ["Other purchases and payment of services and fines", "1%"],
  ["Shopping in online stores", "up to 3%"],
  ["Purchases from our partners", "30%"]
];

const Cashback = (): JSX.Element => (
  <section className="cashback">
    <ul className="cashback__list">
      {cashbackList.map((item) => {
        const [title, description] = item;
        return (
          <li key={title} className="cashback__item">
            <p className="cashback__item-title">{title}</p>
            <b className="cashback__item-description">{description}</b>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Cashback;
