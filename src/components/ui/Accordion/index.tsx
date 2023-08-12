import { useContext } from "react";
import { AccordionContext } from "@/components/containers/FAQ";
import AccordionItem, { AccordionItemType } from "./AcordionItem";
import "./style.scss";

type AccordionPropType = {
  items: AccordionItemType[];
};

const Accordion = (props: AccordionPropType) => {
  const [activeItem] = useContext(AccordionContext);

  return (
    <div className="accordion">
      {props.items.map((item) => (
        <AccordionItem key={item.id} {...item} isOpen={activeItem == item.id} />
      ))}
    </div>
  );
};

export default Accordion;
