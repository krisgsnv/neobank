import { useState } from "react";
import classNames from "classnames";
import "./style.scss";

type TabsPropsType = {
  items: { title: string; content: JSX.Element | string }[];
};

const Tabs = ({ items }: TabsPropsType) => {
  const [active, setActive] = useState(0);

  const changeActive = (i: number) => {
    if (i !== active) {
      setActive(i);
    }
  };

  const tabsButtonClasses = (i: number) =>
    classNames("tabs__button", {
      tabs__button_active: i === active,
    });

  const tabsHeader = items.map((item, i) => (
    <li key={item.title}>
      <button
        type="button"
        className={tabsButtonClasses(i)}
        onClick={() => changeActive(i)}
      >
        {item.title}
      </button>
    </li>
  ));
  return (
    <div className="tabs">
      <ul className="tabs__header">{tabsHeader}</ul>
      {items[active]?.content}
    </div>
  );
};

export default Tabs;
