import classNames from "classnames";
import { useFormContext, FieldValues, RegisterOptions } from "react-hook-form";

import "./style.scss";

const defaultProps = {
  type: "text",
};

type InputPropsType = {
  name: string;
  type?: string;
  placeholder?: string;
  registerParams?: RegisterOptions;
  className?: string;
};

const Input = (props: InputPropsType) => {
  const {
    register,
    formState: { errors, isSubmitted },
    getFieldState,
  } = useFormContext<FieldValues>();

  const errorMessage = errors[props.name]?.message;

  const inputClasses = classNames("input", props.className, {
    input_error: getFieldState(props.name).invalid,
    input_success: isSubmitted && !getFieldState(props.name).invalid,
  });

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={inputClasses}
        {...register(props.name, props.registerParams)}
      />
      {errorMessage && <p className="input-error">{errorMessage.toString()}</p>}
    </>
  );
};

Input.defaultProps = defaultProps;

export default Input;
