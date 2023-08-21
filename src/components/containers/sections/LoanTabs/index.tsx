import AboutCard from "@/components/containers/sections/AboutCard";
import Tabs from "@/components/ui/Tabs";
import Cashback from "@/components/containers/sections/Cashback";
import FAQ from "@/components/containers/sections/FAQ";
import Rates from "@/components/containers/sections/Rates";
import "./style.scss";

const items = [
  { title: "About card", content: <AboutCard /> },
  { title: "Rates and conditions", content: <Rates /> },
  { title: "Cashback", content: <Cashback /> },
  { title: "FAQ", content: <FAQ /> }
];

const LoanTabs = (): JSX.Element => {
  return (
    <section className="loan-tabs">
      <Tabs items={items} />
    </section>
  );
};

export default LoanTabs;
