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

const Label = (props: LabelPropsType) => {
  const labelClasses = classNames("label", props.classNames, {
    label_required: props.required,
    label_horizontal: props.direction === "horizontal",
    label_vertical: props.direction === "vertical",
  });

  return (
    <label className={labelClasses}>
      <span className="label__text">
        {props.text}
        {props.required ? <sup className="label__asterisk">*</sup> : ""}
      </span>
      {props.children}
    </label>
  );
};

Label.defaultProps = defaultProps;

export default Label;
