import card from "@/assets/images/card1.png";
import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

import "./style.scss";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useNavigate } from "react-router";

const LoanBanner = (): JSX.Element => {
  const step = useAppSelector((state) => state.application.step);
  const applicationId = useAppSelector((state) => state.application.applicationId);
  const navigate = useNavigate();

  const goToStep = (): void => {
    if (step <= 1) {
      const prescoring = document.querySelector(".prescoring");
      prescoring?.scrollIntoView({ behavior: "smooth" });
    } else if (step === 2 || step === 3) {
      navigate(`/loan/${applicationId}`);
    } else if (step === 4) {
      navigate(`/loan/${applicationId}/document`);
    } else if (step === 5) {
      navigate(`/loan/${applicationId}/document/sign`);
    } else if (step > 5) {
      navigate(`/loan/${applicationId}/code`);
    }
  };

  const buttonText = step < 2 ? "Apply for card" : "Continue registration";

  return (
    <section className="loan-banner">
      <h1 className="h1 loan-banner__h1">Platinum digital credit card</h1>
      <p className="loan-banner__text">
        Our best credit card. Suitable for everyday spending and shopping. Cash
        withdrawals and transfers without commission and interest.
      </p>
      <div className="loan-banner__features">
        <Tooltip
          text="When repaying the full debt up to 160 days."
          className="loan-banner__tooltip loan-banner__tooltip_left"
        >
          <div className="loan-banner__feature">
            <b className="loan-banner__feature-title">Up to 160 days</b>
            <span className="loan-banner__feature-description">No percent</span>
          </div>
        </Tooltip>
        <Tooltip
          text="Over the limit willaccrue percent."
          className="loan-banner__tooltip loan-banner__tooltip_center"
        >
          <div className="loan-banner__feature">
            <b className="loan-banner__feature-title">
              Up to <span className="price">600 000 ₽</span>
            </b>
            <span className="loan-banner__feature-description">
              Credit limit
            </span>
          </div>
        </Tooltip>
        <Tooltip
          text="Promotion valid until December 31, 2022."
          className="loan-banner__tooltip loan-banner__tooltip_right"
        >
          <div className="loan-banner__feature">
            <b className="loan-banner__feature-title">0 ₽</b>
            <span className="loan-banner__feature-description">
              Card service is free
            </span>
          </div>
        </Tooltip>
      </div>
      <Button
        text={buttonText}
        className="loan-banner__anchor"
        clickHandler={goToStep}
      />
      <img src={card} alt="Card" className="loan-banner__card" />
    </section>
  );
};

export default LoanBanner;
