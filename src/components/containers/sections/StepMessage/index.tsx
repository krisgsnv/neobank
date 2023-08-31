import "./style.scss";

interface StepMessagePropTypes {
  title: string;
  message: string;
}

const StepMessage = ({ title, message }: StepMessagePropTypes): JSX.Element => {
  return (
    <section className="step-message">
      <b className="step-message__title">{title}</b>
      <p className="step-message__description">{message}</p>
    </section>
  );
};

export default StepMessage;
