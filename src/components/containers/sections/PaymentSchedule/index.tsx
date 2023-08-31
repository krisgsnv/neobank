import FormLayout from "@/components/layout/FormLayout";
import "./style.scss";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

const tableData = [
  {
    number: 1,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  },
  {
    number: 2,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  },
  {
    number: 3,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  },
  {
    number: 4,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  },
  {
    number: 5,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  },
  {
    number: 6,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 8000,
    remainingDebt: 92000
  }
];

const PaymentSchedule = (): JSX.Element => {
  const tableColumns = [
    "Number",
    "Date",
    "Total payment",
    "Interest payment",
    "Debt payment",
    "Remaining debt"
  ];

  return (
    <section className="payment-schedule">
      <FormLayout>
        <div className="payment-schedule__heading">
          <h2 className="payment-schedule__h2">Payment Schedule</h2>
          <span className="payment-schedule__step">Step 3 of 5</span>
        </div>
        <div className="payment-table__wrapper">
          <table className="payment-table">
            <thead>
              <tr className="payment-table__row">
                {tableColumns.map((name) => (
                  <th className="payment-table__cell " key={name}>
                    <span className="payment-table__cell_heading">
                      {name}
                      <svg
                        className="payment-table__sort-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.1921 9.23047L15.9065 13.6879C16.3408 14.2089 15.9702 15 15.292 15L8.70803 15C8.02976 15 7.65924 14.2089 8.09346 13.6879L11.8079 9.23047C11.9079 9.11053 12.0921 9.11053 12.1921 9.23047Z"
                          fill="#222222"
                        />
                      </svg>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((payment) => (
                <tr key={payment.number} className="payment-table__row">
                  {Object.values(payment).map((value, i) => (
                    <td key={i} className="payment-table__cell">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="payment-schedule__buttons">
          <Button
            text="Deny"
            className="payment-schedule__button payment-schedule__button_deny"
          />
          <Checkbox label="I agree with the payment schedule" className="payment-schedule__checkbox"/>
          <Button
            text="Send"
            className="payment-schedule__button payment-schedule__button_send"
          />
        </div>
      </FormLayout>
    </section>
  );
};

export default PaymentSchedule;
