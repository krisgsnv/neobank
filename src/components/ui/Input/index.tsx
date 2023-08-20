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

const Input = ({name, type, placeholder, registerParams, className}: InputPropsType) => {
  const {
    register,
    formState: { errors, isSubmitted },
    getFieldState,
  } = useFormContext<FieldValues>();

  const errorMessage = errors[name]?.message;

  const inputClasses = classNames("input", className, {
    input_error: getFieldState(name).invalid,
    input_success: isSubmitted && !getFieldState(name).invalid,
  });

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        {...register(name, registerParams)}
      />
      {errorMessage && <p className="input-error">{errorMessage.toString()}</p>}
    </>
  );
};

Input.defaultProps = defaultProps;

export default Input;
