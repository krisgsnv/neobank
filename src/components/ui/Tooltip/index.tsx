import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

interface TooltipPropsType {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const Tooltip = ({
  text,
  className,
  children
}: TooltipPropsType): JSX.Element => {
  const tooltipClasses = classNames("tooltip", className);

  const [visible, setVisible] = useState(false);

  const show = (): void => {
    setVisible(true);
  };

  const hide = (): void => {
    setVisible(false);
  };

  return (
    <div className="tooltip-wrapper">
      <div className="tooltip-target" onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </div>
      {visible && <p className={tooltipClasses}>{text}</p>}
    </div>
  );
};

export default Tooltip;
