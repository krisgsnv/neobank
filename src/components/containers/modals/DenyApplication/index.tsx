import ModalLayout from "@/components/layout/ModalLayout";
import "./style.scss";
import Button from "@/components/ui/Button";

const DenyApplication = (): JSX.Element => {
  return (
    <ModalLayout title="Deny application">
      <div className="deny-application">
        <p className="deny-application__text">
          You exactly sure, you want to cancel this application?
        </p>
        <div className="deny-application__buttons">
          <Button
            text="Deny"
            className="deny-application__button deny-application__button_deny"
          />
          <Button
            text="Cancel"
            className="deny-application__button"
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default DenyApplication;
