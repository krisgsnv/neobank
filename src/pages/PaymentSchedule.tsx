import PaymentScheduleSection from "@/components/containers/sections/PaymentSchedule";
import StepMessage from "@/components/containers/sections/StepMessage";
import Loader from "@/components/ui/Loader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { type StatusType } from "@/types/Application";
import { useState } from "react";

const PaymentSchedule = (): JSX.Element => {
  const step = useAppSelector((store) => store.application.step);
  const [status, setStatus] = useState<StatusType>("success");

  const statusChangeHandler = (status: StatusType): void => {
    setStatus(status);
  };

  const getPaymentSheduleSection = (): React.ReactNode => {
    if (step === 4) {
      return (
        <PaymentScheduleSection statusChangeHandler={statusChangeHandler} />
      );
    } else if (step > 4) {
      return (
        <StepMessage
          title="Documents are formed"
          message="Documents for signing will be sent to your email"
        />
      );
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
        getPaymentSheduleSection()
      )}
    </>
  );
};
export default PaymentSchedule;
