import documentFile from "@/assets/documents/credit-card-offer.pdf";
import "./style.scss";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import { type StatusType } from "@/types/Application";
import { useState } from "react";
import { setSesCode, setStep } from "@/store/applicationSlice";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import Document from "@/services/Document";
import Admin from "@/services/Admin";

interface DocumentSigningPropsType {
  statusChangeHandler: (status: StatusType) => void;
}

const DocumentSigning = ({
  statusChangeHandler
}: DocumentSigningPropsType): JSX.Element => {
  const [isAgreement, setIsAgreement] = useState(false);
  const checkBoxHandler = (): void => {
    setIsAgreement((prev) => !prev);
  };

  const applicationId = useAppSelector(
    (state) => state.application.applicationId
  );
  const dispatch = useAppDispatch();

  const submitHandler = async (): Promise<void> => {
    statusChangeHandler("loading");
    try {
      if (applicationId) {
        const result = await Document.signDocument(applicationId);
        const sesCode = await Admin.getSESCode(applicationId);

        if (result && sesCode) {
          dispatch(setStep(6));
          dispatch(setSesCode(sesCode));
          statusChangeHandler("success");
        } else throw new Error();
      }
    } catch (error) {
      statusChangeHandler("error");
    }
  };

  return (
    <section className="document-signing">
      <div className="document-signing__heading">
        <h2 className="document-signing__h2">Signing of documents</h2>
        <span className="document-signing__step">Step 4 of 5</span>
      </div>
      <p className="document-signing__text">
        Information on interest rates under bank deposit agreements with
        individuals. Center for Corporate Information Disclosure. Information of
        a professional participant in the securities market. Information about
        persons under whose control or significant influence the Partner Banks
        are. By leaving an application, you agree to the processing of personal
        data, obtaining information, obtaining access to a credit history, using
        an analogue of a handwritten signature, an offer, a policy regarding the
        processing of personal data, a form of consent to the processing of
        personal data.
      </p>
      <a
        href={documentFile}
        target="_blank"
        rel="noreferrer"
        className="document-signing__file"
      >
        <h3>Information on your card</h3>
      </a>
      <div className="document-signing__buttons">
        <Checkbox
          label="I agree"
          checked={isAgreement}
          changeHandler={checkBoxHandler}
        />
        <Button
          text="Send"
          className="document-signing__button"
          clickHandler={submitHandler}
        />
      </div>
    </section>
  );
};

export default DocumentSigning;
