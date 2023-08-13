import { useEffect, useState } from "react";
import "./style.scss";
import LocalStorage from "@/services/LocalStorage";

type MultiselectPropTypes = {
  items: string[];
  name: string;
  changeHandler: (data:string[], e?: React.ChangeEvent) => void;
  selected?: string[];
};

const Multiselect = (props: MultiselectPropTypes) => {
  const checkboxInitial = props.items.map((item) => {
    return {
      value: item,
      checked: props.selected?.includes(item) || false,
    };
  });

  const [checkboxState, setCheckboxState] = useState(checkboxInitial);

  const changeHandler = (i: number) => {
    setCheckboxState((prevState) =>
      prevState.map((item, index) =>
        index === i ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  useEffect(() => {
    props.changeHandler(checkboxState.filter((item) => item.checked).map(item => item.value))
  }, [checkboxState])

  return (
    <form>
      <details className="exchange__multiselect multiselect">
        <summary className="multiselect__heading">Select quotes</summary>
        <div className="multiselect__dropdown">
          {props.items.map((item, i) => {
            return (
              <label key={item} className="multiselect__option">
                <input
                  className="multiselect__checkbox"
                  type="checkbox"
                  hidden
                  name={props.name}
                  value={item}
                  onChange={() => changeHandler(i)}
                  checked={checkboxState[i].checked}
                />
                <span className="multiselect__option-value">{item}</span>
              </label>
            );
          })}
        </div>
      </details>
    </form>
  );
};

export default Multiselect;
