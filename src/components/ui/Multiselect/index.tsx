import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./style.scss";
import classNames from "classnames";

type MultiselectPropTypes = {
  items: string[];
  name: string;
  propsChangeHandler: (data: string[], e?: React.ChangeEvent) => void;
  selected?: string[];
};

const Multiselect = ({
  items,
  name,
  propsChangeHandler,
  selected,
}: MultiselectPropTypes) => {
  const checkboxInitial = items.map((item) => {
    return {
      value: item,
      checked: selected?.includes(item) || false,
    };
  });

  const [open, setOpen] = useState(false);

  const multiselectClasses = classNames("exchange__multiselect multiselect", {
    multiselect_open: open,
  });

  const multiselect = useDetectClickOutside({
    onTriggered: () => setOpen(false),
  });
  const [checkboxState, setCheckboxState] = useState(checkboxInitial);

  const changeHandler = (i: number) => {
    setCheckboxState((prevState) => {
      const updated = prevState.map((item, index) =>
        index === i ? { ...item, checked: !item.checked } : item,
      );
      propsChangeHandler(
        updated.filter((item) => item.checked).map((item) => item.value),
      );
      return updated;
    });
  };

  const clickHandler = () => {
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <form ref={multiselect} onClick={() => clickHandler()}>
      <details className={multiselectClasses}>
        <summary className="multiselect__heading">Select quotes</summary>
        {open && (
          <div className="multiselect__dropdown">
            {items.map((item, i) => {
              return (
                <label key={item} className="multiselect__option">
                  <input
                    className="multiselect__checkbox"
                    type="checkbox"
                    hidden
                    name={name}
                    value={item}
                    onChange={() => changeHandler(i)}
                    checked={checkboxState[i].checked}
                  />
                  <span className="multiselect__option-value">{item}</span>
                </label>
              );
            })}
          </div>
        )}
      </details>
    </form>
  );
};

export default Multiselect;
