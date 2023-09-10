import ScoringForm from "@/components/containers/forms/Scoring";
import StepMessage from "@/components/containers/sections/StepMessage";
import Loader from "@/components/ui/Loader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { type StatusType } from "@/types/Application";
import { useState } from "react";

const Scoring = (): JSX.Element => {
  const step = useAppSelector((store) => store.application.step);
  const [status, setStatus] = useState<StatusType>("success");

  const statusChangeHandler = (status: StatusType): void => {
    setStatus(status);
  };

  const getScoringSection = (): React.ReactNode => {
    if (step === 2) {
      return <ScoringForm statusChangeHandler={statusChangeHandler} />;
    } else if (step > 2) {
      return (
        <StepMessage
          title="Wait for a decision on the application"
          message="The answer will come to your mail within 10 minutes"
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
        getScoringSection()
      )}
    </>
  );
};

export default Scoring;
