import { useState } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import type { FieldValues, RegisterOptions } from "react-hook-form";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./style.scss";

const defaultProps = {
  type: "text"
};

interface Option {
  value: unknown;
  label: string;
}

interface SelectPropsType {
  name: string;
  selectedIndex?: number;
  options: Option[];
  registerParams?: RegisterOptions;
}

const Select = ({
  name,
  selectedIndex = -1,
  options,
  registerParams
}: SelectPropsType): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedIndex);

  const {
    register,
    formState: { errors },
    setValue,
    getFieldState,
    trigger
  } = useFormContext<FieldValues>();

  const errorMessage = errors[name]?.message?.toString();

  const selectClasses = classNames("select__value", {
    select__value_error: getFieldState(name).invalid,
    select__value_open: open
  });

  const optionClasses = (i: number): string =>
    classNames("select__option multiselect__option multiselect__option-value", {
      select__option_selected: i === selected
    });

  const toggleOpen = (): void => {
    setOpen((prevState) => !prevState);
  };

  const select = useDetectClickOutside({
    onTriggered: () => {
      setOpen(false);
    }
  });

  const selectHandler = (item: Option, i: number): void => {
    if (i !== selected) {
      setSelected(i);
      setValue(name, item.value);
      void trigger(name);
    }
    toggleOpen();
  };

  return (
    <>
      <div className="select">
        <input
          type="hidden"
          className="select__input"
          {...register(name, registerParams)}
        />
        <div onClick={toggleOpen} ref={select} className={selectClasses}>
          {selected !== -1 && options[selected].label}
        </div>
        {open && (
          <div className="select__options multiselect__dropdown">
            {options.map((item, i) => {
              return (
                <div
                  key={item.label}
                  className={optionClasses(i)}
                  onClick={() => {
                    selectHandler(item, i);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {errorMessage && <p className="input-error">{errorMessage}</p>}
    </>
  );
};

Select.defaultProps = defaultProps;

export default Select;
