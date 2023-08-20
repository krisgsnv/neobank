import classNames from "classnames";
import "./style.scss";

type FormLayoutPropsType = {
  children?: React.ReactNode;
  className?: string;
};

const FormLayout = ({ children, className }: FormLayoutPropsType) => {
  const layoutClasses = classNames("form-layout", className);

  return <div className={layoutClasses}>{children}</div>;
};

export default FormLayout;
