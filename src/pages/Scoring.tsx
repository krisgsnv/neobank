import ScoringForm from "@/components/containers/forms/Scoring";
import StepMessage from "@/components/containers/sections/StepMessage";
// import { useAppSelector } from "@/hooks/useAppSelector";

const Scoring = (): JSX.Element => {
  // const step = useAppSelector((store) => store.step.number);
  return (
    <>
      <ScoringForm />
      <StepMessage
        title="Wait for a decision on the application"
        message="The answer will come to your mail within 10 minutes"
      />
    </>
  );
};

export default Scoring;
