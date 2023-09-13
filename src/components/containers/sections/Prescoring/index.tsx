import { useAppSelector } from "@/hooks/useAppSelector";

import PrescoringForm from "@/components/containers/forms/Prescoring";
import PrescoringMessage from "./PrescoringMessage";
import PrescoringOffers from "./PrescoringOffers";

import "./style.scss";
import Loader from "@/components/ui/Loader";

const Prescoring = (): JSX.Element => {
  const status = useAppSelector((state) => state.prescoring.status);
  const prescoringStep = useAppSelector((state) => state.prescoring.step);

  const getPrescoringSection = (): React.ReactNode => {
    if (prescoringStep === 0) return <PrescoringForm />;
    else if (prescoringStep === 1) return <PrescoringOffers />;
    else if (prescoringStep >= 2) return <PrescoringMessage />;
  };

  return (
    <section className="prescoring">
      {status === "loading" ? (
        <Loader className="prescoring-loader" />
      ) : status === "error" ? (
        <p className="error">
          We&#39;re sorry, but there was an error processing your request.
        </p>
      ) : (
        getPrescoringSection()
      )}
    </section>
  );
};

export default Prescoring;
