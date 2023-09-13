import ConfirmationSection from "@/components/containers/sections/Confirmation";
import Congratulations from "@/components/containers/sections/Congratulations";
import Loader from "@/components/ui/Loader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { type StatusType } from "@/types/Application";
import { useState } from "react";

const Confirmation = (): JSX.Element => {
  const step = useAppSelector((store) => store.application.step);
  const [status, setStatus] = useState<StatusType>("success");

  const statusChangeHandler = (status: StatusType): void => {
    setStatus(status);
  };

  const getConfirmationSection = (): React.ReactNode => {
    if (step === 6) {
      return <ConfirmationSection statusChangeHandler={statusChangeHandler} />;
    } else if (step === 7) {
      return <Congratulations />;
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
        getConfirmationSection()
      )}
    </>
  );
};

export default Confirmation;
