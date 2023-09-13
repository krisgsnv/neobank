import "./style.scss";

const PrescoringMessage = (): JSX.Element => {
  return (
    <div className="prescoring-message">
      <b className="prescoring-message__title">The preliminary decision has been sent to your email.</b>
      <p className="prescoring-message__description">In the letter you can get acquainted with the preliminary decision on the credit card.</p>
    </div>
  );
};

export default PrescoringMessage;
