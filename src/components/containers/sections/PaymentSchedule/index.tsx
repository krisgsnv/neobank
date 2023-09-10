import FormLayout from "@/components/layout/FormLayout";
import "./style.scss";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Table from "@/components/ui/Table";
import { useEffect, useState } from "react";
import DenyApplication from "@/components/containers/modals/DenyApplication";
import { type StatusType } from "@/types/Application";
import { useAppSelector } from "@/hooks/useAppSelector";
import Admin from "@/services/Admin";
import { type PaymentScheduleType } from "@/types/PaymentSchedule";
import Loader from "@/components/ui/Loader";
import Document from "@/services/Document";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setStep } from "@/store/applicationSlice";

const tableColumns = [
  "Number",
  "Date",
  "Total payment",
  "Interest payment",
  "Debt payment",
  "Remaining debt"
];

interface PaymentSchedulePropsType {
  statusChangeHandler: (status: StatusType) => void;
}

const PaymentSchedule = ({
  statusChangeHandler
}: PaymentSchedulePropsType): JSX.Element => {
  const [isAgreement, setIsAgreement] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [tableData, setTableData] = useState<PaymentScheduleType>([]);
  const [status, setStatus] = useState<StatusType>("loading");
  const applicationId = useAppSelector(
    (state) => state.application.applicationId
  );

  const dispatch = useAppDispatch();

  const getTableData = async (): Promise<void> => {
    const result = await Admin.getPaymentSchedule(applicationId);
    if (result) {
      setStatus("success");
      setTableData(result.splice(1));
    }
  };

  useEffect(() => {
    try {
      if (applicationId) {
        void getTableData();
      }
    } catch (error) {
      statusChangeHandler("error");
    }
  }, []);

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

  const sendHandler = async (): Promise<void> => {
    statusChangeHandler("loading");
    try {
      if (applicationId) {
        const result = await Document.sendDocument(applicationId);
        if (result) {
          dispatch(setStep(5));
          statusChangeHandler("success");
        }
      }
    } catch (error) {
      statusChangeHandler("error");
    }
  };

  return (
    <>
      {status === "loading" ? (
        <Loader centered />
      ) : status === "error" ? (
        <p className="error">
          We&#39;re sorry, but there was an error processing your request.
        </p>
      ) : (
        <>
          <section className="payment-schedule">
            <FormLayout>
              <div className="payment-schedule__heading">
                <h2 className="payment-schedule__h2">Payment Schedule</h2>
                <span className="payment-schedule__step">Step 3 of 5</span>
              </div>
              <div className="payment-schedule__table">
                <Table
                  columns={tableColumns}
                  data={tableData}
                  dataKey={"number"}
                />
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
                  clickHandler={sendHandler}
                />
              </div>
            </FormLayout>
          </section>
          {isModalShown && <DenyApplication closeHandler={closeModal} />}
        </>
      )}
    </>
  );
};

export default PaymentSchedule;
