import "./style.scss";

interface StepMessagePropTypes {
  title: string;
  message: string;
}

const StepMessage = ({ title, message }: StepMessagePropTypes): JSX.Element => {
  return (
    <section className="step-message">
      <h2 className="step-message__title">{title}</h2>
      <p className="step-message__description">{message}</p>
    </section>
  );
};

export default StepMessage;
