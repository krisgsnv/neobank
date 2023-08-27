import { numberWithSpaces } from "@/utils/number";
import "./style.scss";
import classNames from "classnames";
import Button from "@/components/ui/Button";

const offers = [
  {
    amount: 200000,
    total: 200000,
    months: 24,
    payment: 9000,
    rate: 15,
    insurance: true,
    salary: false
  },
  {
    amount: 200000,
    total: 200000,
    months: 24,
    payment: 9000,
    rate: 15,
    insurance: true,
    salary: false
  },
  {
    amount: 200000,
    total: 200000,
    months: 24,
    payment: 9000,
    rate: 15,
    insurance: true,
    salary: false
  },
  {
    amount: 200000,
    total: 200000,
    months: 24,
    payment: 9000,
    rate: 15,
    insurance: true,
    salary: false
  }
];

const PrescoringOffers = (): JSX.Element => {
  const listItemIconClasses = (value: boolean): string =>
    classNames("prescoring-offer__list-item prescoring-offer__list-item_icon", {
      "prescoring-offer__list-item_enable": value,
      "prescoring-offer__list-item_disable": !value
    });

  return (
    <div className="prescoring-offers">
      {offers.map(
        ({ amount, total, months, payment, rate, insurance, salary }, i) => (
          <div key={i} className="prescoring-offer">
            <ul className="prescoring-offer__list">
              <li className="prescoring-offer__list-item">
                Requested amount:&nbsp;
                <span className="price prescoring-offer__price">
                  {numberWithSpaces(amount)} ₽
                </span>
              </li>
              <li className="prescoring-offer__list-item">
                Total amount:&nbsp;
                <span className="price">{numberWithSpaces(total)} ₽</span>
              </li>
              <li className="prescoring-offer__list-item">
                For {months} months
              </li>
              <li className="prescoring-offer__list-item">
                Monthly payment:&nbsp;
                <span className="price">{numberWithSpaces(payment)} ₽</span>
              </li>
              <li className="prescoring-offer__list-item">
                Your rate: {rate}%
              </li>
              <li className={listItemIconClasses(insurance)}>
                <span className="prescoring-offer__text">
                  Insurance included
                </span>
              </li>
              <li className={listItemIconClasses(salary)}>
                <span className="prescoring-offer__text">Salary client</span>
              </li>
            </ul>
            <Button text="Select" className="prescoring-offer__button" />
          </div>
        )
      )}
    </div>
  );
};

export default PrescoringOffers;
