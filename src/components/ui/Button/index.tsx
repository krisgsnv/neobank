import classNames from "classnames";
import "./style.scss";

const defaultProps = {
  text: "Button",
  type: "button",
  disabled: false,
};

type ButtonPropsType = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = (props: ButtonPropsType) => {
  const buttonClasses = classNames("button", props.className, {
    button_default: !props.disabled,
    button_disabled: props.disabled,
  });
  return (
    <button type={props.type} className={buttonClasses} disabled={props.disabled}>
      {props.text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
