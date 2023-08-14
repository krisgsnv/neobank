import classNames from "classnames";
import "./style.scss";

const defaultProps = {
  type: "text"
};

type InputPropsType = {
  type?: string,
  placeholder?: string;
};

const Input = (props: InputPropsType) => {
  const inputClasses = classNames({
    input: true,
  });

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={inputClasses}
    />
  );
};

Input.defaultProps = defaultProps;

export default Input;
