import "./style.scss";

type FormLayoutPropsType = {
  children?: React.ReactNode;
};

const FormLayout = (props: FormLayoutPropsType) => {
  return <section className="form-layout">{props.children}</section>;
};

export default FormLayout;
