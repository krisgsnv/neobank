import { numberWithSpaces } from "@/utils/number";
import "./style.scss";
import classNames from "classnames";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/hooks/useAppSelector";
import { byField } from "@/utils/validation";
import { type PrescoringOfferType } from "@/types/Prescoring";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setStep } from "@/store/stepSlice";
import PrescoringService from "@/services/Prescoring";
import { setPrescoringStep, setStatus } from "@/store/prescoringSlice";

const PrescoringOffers = (): JSX.Element => {
  const offers = useAppSelector((store) => store.prescoring.offers);
  const fieldName: keyof PrescoringOfferType = "monthlyPayment";
  const sortedOffers = [...offers].sort(byField(fieldName));

  const dispatch = useAppDispatch();

  const listItemIconClasses = (value: boolean): string =>
    classNames("prescoring-offer__list-item prescoring-offer__list-item_icon", {
      "prescoring-offer__list-item_enable": value,
      "prescoring-offer__list-item_disable": !value
    });

  const selectOffer = async (offer: PrescoringOfferType): Promise<void> => {
    setStatus("loading");
    try {
      const res = await PrescoringService.selectOffer(offer);
      if (res) {
        dispatch(setStep(2));
        dispatch(setPrescoringStep(2));
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const decreaseStep = (): void => {
    dispatch(setPrescoringStep(0));
  };

  return (
    <div className="prescoring-offers">
      {sortedOffers.map((offer, i) => {
        const {
          requestedAmount,
          totalAmount,
          term,
          monthlyPayment,
          rate,
          isInsuranceEnabled,
          isSalaryClient
        } = offer;
        return (
          <div key={i} className="prescoring-offer">
            <ul className="prescoring-offer__list">
              <li className="prescoring-offer__list-item">
                Requested amount:&nbsp;
                <span className="price prescoring-offer__price">
                  {numberWithSpaces(requestedAmount)} ₽
                </span>
              </li>
              <li className="prescoring-offer__list-item">
                Total amount:&nbsp;
                <span className="price">{numberWithSpaces(totalAmount)} ₽</span>
              </li>
              <li className="prescoring-offer__list-item">For {term} months</li>
              <li className="prescoring-offer__list-item">
                Monthly payment:&nbsp;
                <span className="price">
                  {numberWithSpaces(monthlyPayment)} ₽
                </span>
              </li>
              <li className="prescoring-offer__list-item">
                Your rate: {rate}%
              </li>
              <li className={listItemIconClasses(isInsuranceEnabled)}>
                <span className="prescoring-offer__text">
                  Insurance included
                </span>
              </li>
              <li className={listItemIconClasses(isSalaryClient)}>
                <span className="prescoring-offer__text">Salary client</span>
              </li>
            </ul>
            <Button
              text="Select"
              className="prescoring-offer__button"
              clickHandler={async () => await selectOffer(offer)}
            />
          </div>
        );
      })}
      <button
        type="button"
        className="prescoring__btn"
        title="Previous"
        onClick={decreaseStep}
      ></button>
    </div>
  );
};

export default PrescoringOffers;
