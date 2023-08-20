import classNames from "classnames";
import "./style.scss";

type LoaderPropsType = {
  className?: string;
};

const Loader = ({ className }: LoaderPropsType) => {
  const loaderClasses = classNames("loader", className);
  return <div className={loaderClasses}></div>;
};

export default Loader;
