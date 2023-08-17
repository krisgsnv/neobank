import classNames from "classnames";
import "./style.scss";

type FormLayoutPropsType = {
  children?: React.ReactNode;
  className?: string;
};

const FormLayout = (props: FormLayoutPropsType) => {
  const layoutClasses = classNames("form-layout", props.className);

  return <div className={layoutClasses}>{props.children}</div>;
};

export default FormLayout;
