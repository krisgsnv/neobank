import CardSteps from "@/components/containers/sections/CardSteps";
import LoanBanner from "@/components/containers/banners/LoanBanner";
import LoanTabs from "@/components/containers/sections/LoanTabs";
import Prescoring from "@/components/containers/forms/Prescoring";
import PrescoringOffers from "@/components/containers/sections/PrescoringOffers";

const Loan = (): JSX.Element => (
  <>
    <LoanBanner />
    <LoanTabs />
    <CardSteps />
    <Prescoring />
    <PrescoringOffers />
  </>
);

export default Loan;
