import classNames from "classnames";
import "./style.scss";

interface LoaderPropsType {
  className?: string;
  centered?: boolean;
}

const Loader = ({ className, centered }: LoaderPropsType): JSX.Element => {
  const loaderClasses = classNames("loader", className, {
    loader_centered: centered
  });
  return <div className={loaderClasses}></div>;
};

export default Loader;
