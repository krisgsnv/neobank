import "./style.scss";

const ratesList: [string, string][] = [
  ["Card currency", "Rubles, dollars, euro"],
  ["Interest free period", "0% up to 160 days"],
  ["Payment system", "Mastercard, Visa"],
  ["Maximum credit limit on the card", "600 000 ₽"],
  [
    "Replenishment and withdrawal",
    "At any ATM. Top up your credit card for free with cash or transfer from other cards",
  ],
  ["Max cashback per month", "15 000 ₽"],
  [
    "Transaction Alert",
    "60 ₽ — SMS or push notifications\n0 ₽ — card statement, information about transactions in the online bank",
  ],
];

const Rates = () => (
  <section className="rates">
    <table className="rates__table">
      <tbody>
        {ratesList.map((rate) => {
          const [name, value] = rate;
          return (
            <tr key={name} className="rates__table-row">
              <td className="rates__table-data rates__table-data_heading">{name}</td>
              <td className="rates__table-data">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </section>
);

export default Rates;
