import classNames from "classnames";
import "./style.scss";

const defaultProps = {
  text: "Button",
  type: "button",
  disabled: false
};

interface ButtonPropsType {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  clickHandler?: (e: React.MouseEvent) => void;
}

const Button = ({
  text,
  className,
  type,
  disabled,
  clickHandler
}: ButtonPropsType): JSX.Element => {
  const buttonClasses = classNames("button", className, {
    button_default: !disabled,
    button_disabled: disabled
  });
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
