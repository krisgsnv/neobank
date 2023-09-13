import classNames from "classnames";
import "./style.scss";

interface CheckboxPropsType {
  label: string;
  className?: string;
  checked?: boolean;
  changeHandler?: () => void;
}

const Checkbox = ({
  label,
  className,
  checked = false,
  changeHandler
}: CheckboxPropsType): JSX.Element => {
  const labelClasses = classNames("checkbox-label", className);

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={changeHandler}
      />
      <span className="checkbox-label__text">{label}</span>
    </label>
  );
};

export default Checkbox;
