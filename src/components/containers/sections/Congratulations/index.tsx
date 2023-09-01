import Button from "@/components/ui/Button";
import "./style.scss";
import { Link } from "react-router-dom";

const Congratulations = (): JSX.Element => {
  return (
    <section className="congratulations">
      <h2 className="congratulations__h2">
        Congratulations! You have completed your new credit card.
      </h2>
      <p className="congratulations__message">
        Your credit card will arrive soon. Thank you for choosing us!
      </p>
      <Link to="/">
        <Button text="View other offers of our bank" />
      </Link>
    </section>
  );
};

export default Congratulations;
