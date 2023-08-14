import classNames from "classnames";
import "./style.scss";

type DividerPropTypes = {
  position: "vertical" | "horizontal";
  type: "solid" | "dashed";
  className?: string;
};

const Divider = (props: DividerPropTypes) => {
  const dividerClasses = classNames('divider', props.className, {
    divider_dashed: props.type === "dashed",
    divider_solid: props.type === "solid",
    divider_vertical: props.position === "vertical",
    divider_horizontal: props.position === "horizontal",
  });

  return <div className={dividerClasses}></div>;
};

export default Divider;
