import { useEffect } from "react";
import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";

interface ModalLayoutPropsType {
  title?: string;
  children?: React.ReactNode;
  closeHandler: () => void;
}

const ModalLayout = ({
  children,
  title,
  closeHandler
}: ModalLayoutPropsType): JSX.Element => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent): void => {
      const { key } = e;
      if (key === "Escape") {
        closeHandler();
      }
    };
    document.body.classList.add("no-scroll");
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const modal = useDetectClickOutside({
    onTriggered: closeHandler
  });

  return (
    <div className="modal-layout-wrapper">
      <div className="modal-layout" ref={modal}>
        <div className="modal-layout__heading">
          {title && <h4 className="modal-layout__title">{title}</h4>}
          <button
            type="button"
            className="modal-layout__close"
            title="Close"
            onClick={closeHandler}
          ></button>
        </div>
        <div className="modal-layout__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
