import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./style.scss";
import classNames from "classnames";

interface MultiselectPropTypes {
  items: string[];
  name: string;
  propsChangeHandler: (data: string[], e?: React.ChangeEvent) => void;
  selected?: string[];
}

const Multiselect = ({
  items,
  name,
  propsChangeHandler,
  selected
}: MultiselectPropTypes): JSX.Element => {
  const checkboxInitial = items.map((item) => {
    return {
      value: item,
      checked: selected?.includes(item) ?? false
    };
  });

  const [open, setOpen] = useState(false);

  const multiselectClasses = classNames("exchange__multiselect multiselect", {
    multiselect_open: open
  });

  const dropdownClasses = classNames("multiselect__dropdown", {
    multiselect__dropdown_hidden: !open
  });

  const multiselect = useDetectClickOutside({
    onTriggered: () => {
      setOpen(false);
    }
  });
  const [checkboxState, setCheckboxState] = useState(checkboxInitial);

  const changeHandler = (i: number): void => {
    const updated = checkboxState.map((item, index) =>
      index === i ? { ...item, checked: !item.checked } : item
    );
    setCheckboxState(updated);
    propsChangeHandler(
      updated.filter((item) => item.checked).map((item) => item.value)
    );
  };

  const clickHandler = (): void => {
    setOpen((prev) => !prev);
  };
  return (
    <form
      ref={multiselect}
      className={multiselectClasses}
      onClick={clickHandler}
    >
      <span className="multiselect__heading">Select quotes</span>
      <div className={dropdownClasses}>
        {items.map((item, i) => {
          return (
            <label key={item} className="multiselect__option">
              <input
                className="multiselect__checkbox"
                type="checkbox"
                hidden
                name={name}
                value={item}
                onChange={() => {
                  changeHandler(i);
                }}
                checked={checkboxState[i].checked}
              />
              <span className="multiselect__option-value">{item}</span>
            </label>
          );
        })}
      </div>
    </form>
  );
};

export default Multiselect;
