import classNames from "classnames";
import { useFormContext, FieldValues, RegisterOptions } from "react-hook-form";

import "./style.scss";
import { useState } from "react";

const defaultProps = {
  type: "text",
};

type Option = {
  value: unknown;
  label: string;
};

type SelectPropsType = {
  name: string;
  selectedIndex: number;
  options: Option[];
  registerParams?: RegisterOptions;
};

const Select = (props: SelectPropsType) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.selectedIndex);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const selectClasses = classNames("select__value", {
    select__value_open: open,
  });

  const optionClasses = (i: number) =>
    classNames("select__option multiselect__option multiselect__option-value", {
      select__option_selected: i === selected,
    });

  const toggleOpen = () => setOpen((prevState) => !prevState);

  const selectHandler = (item: Option, i: number) => {
    if (i !== selected) {
      setValue(props.name, item.value);
      setSelected(i);
    }
    toggleOpen();
  };

  return (
    <div className="select">
      <input type="hidden" {...register(props.name, props.registerParams)} />
      <div onClick={toggleOpen} className={selectClasses}>
        {props.options[selected].label}
      </div>
      {open && (
        <div className="select__options multiselect__dropdown">
          {props.options.map((item, i) => {
            return (
              <div
                key={item.label}
                className={optionClasses(i)}
                onClick={() => selectHandler(item, i)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

Select.defaultProps = defaultProps;

export default Select;
