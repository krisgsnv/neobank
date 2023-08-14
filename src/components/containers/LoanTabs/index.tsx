import AboutCard from "@/components/containers/AboutCard";
import Tabs from "@/components/ui/Tabs";
import Cashback from "@/components/containers/Cashback";
import FAQ from "@/components/containers/FAQ";
import Rates from "@/components/containers/Rates";
import "./style.scss";

const items = [
  { title: "About card", content: <AboutCard /> },
  { title: "Rates and conditions", content: <Rates /> },
  { title: "Cashback", content: <Cashback /> },
  { title: "FAQ", content: <FAQ /> },
];

const LoanTabs = () => {
  return (
    <section className="loan-tabs">
      <Tabs items={items} />
    </section>
  );
};

export default LoanTabs;
