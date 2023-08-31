import ScoringForm from "@/components/containers/forms/Scoring";
import StepMessage from "@/components/containers/sections/StepMessage";

const Scoring = (): JSX.Element => (
  <>
    <StepMessage
      title="Wait for a decision on the application"
      message="The answer will come to your mail within 10 minutes"
    />
    <ScoringForm />
  </>
);

export default Scoring;
