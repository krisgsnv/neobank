import "./style.scss";

interface ModalLayoutPropsType {
  title?: string;
  children?: React.ReactNode;
}

const ModalLayout = ({
  children,
  title
}: ModalLayoutPropsType): JSX.Element => {
  return (
    <div className="modal-layout-wrapper">
      <div className="modal-layout">
        <div className="modal-layout__heading">
          {title && <h4 className="modal-layout__title">{title}</h4>}
          <button type="button" className="modal-layout__close" title="Close"></button>
        </div>
        <div className="modal-layout__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
