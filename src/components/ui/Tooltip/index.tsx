import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

type TooltipPropsType = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

const Tooltip = (props: TooltipPropsType) => {
  let tooltipClasses = classNames("tooltip", props.className);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-target" onMouseEnter={show} onMouseLeave={hide}>
        {props.children}
      </div>
      {visible && <p className={tooltipClasses}>{props.text}</p>}
    </div>
  );
};

export default Tooltip;
