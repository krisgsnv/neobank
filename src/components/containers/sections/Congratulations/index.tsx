import Button from "@/components/ui/Button";
import "./style.scss";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { clear } from "@/store/applicationSlice";
import { useNavigate } from "react-router";

const Congratulations = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const finishRegistration = (): void => {
    dispatch(clear());
    navigate("/");
  };

  return (
    <section className="congratulations">
      <h2 className="congratulations__h2">
        Congratulations! You have completed your new credit card.
      </h2>
      <p className="congratulations__message">
        Your credit card will arrive soon. Thank you for choosing us!
      </p>
      <Button
        text="View other offers of our bank"
        clickHandler={finishRegistration}
      />
    </section>
  );
};

export default Congratulations;
