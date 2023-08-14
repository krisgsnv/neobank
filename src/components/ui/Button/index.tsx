import classNames from "classnames";
import "./style.scss";

const defaultProps = {
  text: "Button",
  type: "button",
};

type ButtonPropsType = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonPropsType) => {
  const buttonClasses = classNames("button", props.className, {});
  return (
    <button type={props.type} className={buttonClasses}>
      {props.text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
