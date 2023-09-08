import FormLayout from "@/components/layout/FormLayout";
import "./style.scss";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Table from "@/components/ui/Table";
import { useState } from "react";
import DenyApplication from "@/components/containers/modals/DenyApplication";

const tableData = [
  {
    number: 1,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 9000,
    remainingDebt: 92000
  },
  {
    number: 2,
    date: "2023-08-30",
    totalPayment: 12000,
    interestPayment: 12000,
    debtPayment: 9000,
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

const tableColumns = [
  "Number",
  "Date",
  "Total payment",
  "Interest payment",
  "Debt payment",
  "Remaining debt"
];

const PaymentSchedule = (): JSX.Element => {
  const [isAgreement, setIsAgreement] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const checkBoxHandler = (): void => {
    setIsAgreement((prev) => !prev);
  };

  const showModal = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setIsModalShown(true);
  };

  const closeModal = (): void => {
    setIsModalShown(false);
  };

  return (
    <>
      <section className="payment-schedule">
        <FormLayout>
          <div className="payment-schedule__heading">
            <h2 className="payment-schedule__h2">Payment Schedule</h2>
            <span className="payment-schedule__step">Step 3 of 5</span>
          </div>
          <div className="payment-schedule__table">
            <Table columns={tableColumns} data={tableData} dataKey={"number"} />
          </div>
          <div className="payment-schedule__buttons">
            <Button
              text="Deny"
              className="payment-schedule__button payment-schedule__button_deny"
              clickHandler={showModal}
            />
            <Checkbox
              label="I agree with the payment schedule"
              className="payment-schedule__checkbox"
              changeHandler={checkBoxHandler}
              checked={isAgreement}
            />
            <Button
              text="Send"
              className="payment-schedule__button payment-schedule__button_send"
              disabled={!isAgreement}
            />
          </div>
        </FormLayout>
      </section>
      {isModalShown && <DenyApplication closeHandler={closeModal} />}
    </>
  );
};

export default PaymentSchedule;
