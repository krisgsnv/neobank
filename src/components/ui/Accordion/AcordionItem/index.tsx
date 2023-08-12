import { useContext } from "react";
import { AccordionContext } from "@/components/containers/FAQ";
import "./style.scss";

export type AccordionItemType = {
  id: number;
  title: string;
  content: JSX.Element | string;
};

type AccordionItemPropType = {
  isOpen: boolean;
} & AccordionItemType;

const AccordionItem = (props: AccordionItemPropType) => {
  const [, setActiveItem] = useContext(AccordionContext);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem(props.id);
  };
  
  return (
    <details
      className="accordion-item"
      onClick={clickHandler}
      open={props.isOpen}
    >
      <summary className="accordion-item__title">{props.title}</summary>
      <div className="accordion-item__content">{props.content}</div>
    </details>
  );
};

export default AccordionItem;
