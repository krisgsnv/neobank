import "./style.scss";

export interface AccordionItemType {
  id: number;
  title: string;
  content: JSX.Element | string;
};

interface AccordionPropType {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  items: AccordionItemType[];
}

const Accordion = ({
  activeItem,
  setActiveItem,
  items
}: AccordionPropType): JSX.Element => {
  const clickHandler = (e: React.MouseEvent, id: number): void => {
    e.preventDefault();
    if (id === activeItem) {
      setActiveItem(0);
    } else {
      setActiveItem(id);
    }
  };
  return (
    <div className="accordion">
      {items.map((item) => (
        <details
          key={item.id}
          className="accordion-item"
          onClick={(e) => {
            clickHandler(e, item.id);
          }}
          open={activeItem === item.id}
        >
          <summary className="accordion-item__title">{item.title}</summary>
          <div className="accordion-item__content">{item.content}</div>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
