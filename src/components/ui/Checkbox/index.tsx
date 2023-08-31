import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

interface CheckboxPropsType {
  label: string;
  className?: string;
  checked?: boolean;
}

const Checkbox = ({
  label,
  className,
  checked = false
}: CheckboxPropsType): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const labelClasses = classNames("checkbox-label", className);

  const changeHandler = (): void => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={changeHandler}
      />
      <span className="checkbox-label__text">{label}</span>
    </label>
  );
};

export default Checkbox;
