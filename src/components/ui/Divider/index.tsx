import classNames from "classnames";
import "./style.scss";

type DividerPropTypes = {
  position: "vertical" | "horizontal";
  type: "solid" | "dashed";
  className?: string;
};

const Divider = ({ position, type, className }: DividerPropTypes) => {
  const dividerClasses = classNames("divider", className, {
    divider_dashed: type === "dashed",
    divider_solid: type === "solid",
    divider_vertical: position === "vertical",
    divider_horizontal: position === "horizontal",
  });

  return <div className={dividerClasses}></div>;
};

export default Divider;
