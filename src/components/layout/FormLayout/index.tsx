import classNames from "classnames";
import "./style.scss";

interface FormLayoutPropsType {
  children?: React.ReactNode;
  className?: string;
}

const FormLayout = ({
  children,
  className
}: FormLayoutPropsType): JSX.Element => {
  const layoutClasses = classNames("form-layout", className);

  return <div className={layoutClasses}>{children}</div>;
};

export default FormLayout;
