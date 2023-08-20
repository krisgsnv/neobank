import classNames from "classnames";
import "./style.scss";

const defaultProps = {
  direction: "vertical",
};

type LabelPropsType = {
  text: string;
  children?: React.ReactNode;
  required?: boolean;
  classNames?: string;
  direction?: "horizontal" | "vertical";
};

const Label = ({
  text,
  children,
  required,
  classNames,
  direction,
}: LabelPropsType) => {
  const labelClasses = classNames("label", classNames, {
    label_required: required,
    label_horizontal: direction === "horizontal",
    label_vertical: direction === "vertical",
  });

  return (
    <label className={labelClasses}>
      <span className="label__text">
        {text}
        {required ? <sup className="label__asterisk">*</sup> : ""}
      </span>
      {children}
    </label>
  );
};

Label.defaultProps = defaultProps;

export default Label;
