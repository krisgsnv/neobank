import ModalLayout from "@/components/layout/ModalLayout";
import "./style.scss";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router";

interface DenyApplicationPropsType {
  closeHandler: () => void;
}

const DenyApplication = ({
  closeHandler
}: DenyApplicationPropsType): JSX.Element => {
  const [isDenied, setIsDenied] = useState(false);
  const navigate = useNavigate();

  const textMessage = isDenied
    ? "Your application has been deny!"
    : "You exactly sure, you want to cancel this application?";

  const denyHandler = (): void => {
    setIsDenied(true);
  };

  const toMainPage = (): void => {
    navigate("/");
  };

  const modalCloseHandler = isDenied ? toMainPage : closeHandler;

  return (
    <ModalLayout closeHandler={modalCloseHandler} title="Deny application">
      <div className="deny-application">
        <p className="deny-application__text">{textMessage}</p>
        <div className="deny-application__buttons">
          {isDenied ? (
            <Button
              text="Go home"
              className="deny-application__button"
              clickHandler={toMainPage}
            />
          ) : (
            <>
              <Button
                text="Deny"
                className="deny-application__button deny-application__button_deny"
                clickHandler={denyHandler}
              />
              <Button
                text="Cancel"
                className="deny-application__button"
                clickHandler={closeHandler}
              />
            </>
          )}
        </div>
      </div>
    </ModalLayout>
  );
};

export default DenyApplication;
