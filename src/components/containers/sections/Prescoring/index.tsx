import { useAppSelector } from "@/hooks/useAppSelector";

import PrescoringForm from "@/components/containers/forms/Prescoring";
import PrescoringMessage from "./PrescoringMessage";
import PrescoringOffers from "./PrescoringOffers";

import "./style.scss";

const Prescoring = (): JSX.Element => {
  const step = useAppSelector((state) => state.step.number);
  return (
    <section className="prescoring">
      {step >= 2 ? (
        <PrescoringMessage />
      ) : step === 1 ? (
        <PrescoringOffers />
      ) : (
        <PrescoringForm />
      )}
    </section>
  );
};

export default Prescoring;
