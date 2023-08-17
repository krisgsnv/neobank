import CardSteps from "@/components/containers/sections/CardSteps";
import LoanBanner from "@/components/containers/banners/LoanBanner";
import LoanTabs from "@/components/containers/sections/LoanTabs";
import Prescoring from "@/components/containers/forms/Prescoring";

const Loan = () => (
  <>
    <LoanBanner />
    <LoanTabs />
    <CardSteps />
    <Prescoring />
  </>
);

export default Loan;
