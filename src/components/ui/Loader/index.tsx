import classNames from "classnames";
import "./style.scss";

type LoaderPropsType = {
  className?: string;
};

const Loader = (props: LoaderPropsType) => {
  const loaderClasses = classNames("loader", props.className);
  return <div className={loaderClasses}></div>;
};

export default Loader;
