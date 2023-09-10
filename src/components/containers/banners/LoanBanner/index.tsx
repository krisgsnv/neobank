import card from "@/assets/images/card1.png";
import Tooltip from "@/components/ui/Tooltip";
import Button from "@/components/ui/Button";

import "./style.scss";
import { useAppSelector } from "@/hooks/useAppSelector";

const LoanBanner = (): JSX.Element => {
  const step = useAppSelector((state) => state.application.step);
  console.log(step);

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
      <Button text="Apply for card" className="loan-banner__anchor" />
      <img src={card} alt="Card" className="loan-banner__card" />
    </section>
  );
};

export default LoanBanner;
