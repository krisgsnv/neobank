import DocumentSigningSection from "@/components/containers/sections/DocumentSigning";
import StepMessage from "@/components/containers/sections/StepMessage";
import Loader from "@/components/ui/Loader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { type StatusType } from "@/types/Application";
import { useState } from "react";

const DocumentSigning = (): JSX.Element => {
  const step = useAppSelector((store) => store.application.step);
  const [status, setStatus] = useState<StatusType>("success");

  const statusChangeHandler = (status: StatusType): void => {
    setStatus(status);
  };

  const getDocumentSection = (): React.ReactNode => {
    if (step === 5) {
      return (
        <DocumentSigningSection statusChangeHandler={statusChangeHandler} />
      );
    } else if (step > 5) {
      return (
        <StepMessage
          title="Documents have been successfully signed and sent for approval"
          message="Within 10 minutes you will be sent a PIN code to your email for confirmation"
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
        getDocumentSection()
      )}
    </>
  );
};
export default DocumentSigning;
