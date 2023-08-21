import classNames from "classnames";
import "./style.scss";

interface LoaderPropsType {
  className?: string;
}

const Loader = ({ className }: LoaderPropsType): JSX.Element => {
  const loaderClasses = classNames("loader", className);
  return <div className={loaderClasses}></div>;
};

export default Loader;
