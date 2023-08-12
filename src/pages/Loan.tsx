import PageLayout from "@/components/layout/PageLayout";
import Cashback from "@/components/containers/Cashback";
import FAQ from "@/components/containers/FAQ";
import Rates from "@/components/containers/Rates";

const Loan = () => (
  <PageLayout>
    <Rates />
    <Cashback />
    <FAQ />
  </PageLayout>
);

export default Loan;
