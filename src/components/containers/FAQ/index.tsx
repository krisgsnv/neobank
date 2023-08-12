import FAQAnswer from "./FAQAnswer";
import Accordion from "@/components/ui/Accordion";

import "./style.scss";
import { createContext, useState } from "react";

const questions1 = [
  {
    id: 1,
    title: "Name",
    content: <FAQAnswer text="Answer1" />,
  },
  {
    id: 2,
    title: "Name",
    content: <FAQAnswer text="Answer1" />,
  },
];

const questions2 = [
  {
    id: 3,
    title: "Name2",
    content: <FAQAnswer text="Answer1" />,
  },
  {
    id: 4,
    title: "Name2",
    content: <FAQAnswer text="Answer1" />,
  },
];

type AccordionContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

export const AccordionContext = createContext<AccordionContextType>([
  0,
  () => {},
]);

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section className="faq">
      {
        <AccordionContext.Provider value={[activeItem, setActiveItem]}>
          <Accordion items={questions1} />
          <Accordion items={questions2} />
        </AccordionContext.Provider>
      }
    </section>
  );
};

export default FAQ;
