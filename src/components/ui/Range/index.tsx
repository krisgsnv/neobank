import type { CSSProperties } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import type { FieldValues, RegisterOptions } from "react-hook-form";
import { numberWithSpaces } from "@/utils/number";
import "./style.scss";

interface RangeCustomStylesType extends CSSProperties {
  "--value": number;
  "--min": number;
  "--max": number;
}

interface RangePropsType {
  name: string;
  registerParams?: RegisterOptions;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
}

const Range = ({
  name,
  registerParams,
  className,
  min = 0,
  max = 100,
  step = 1
}: RangePropsType): JSX.Element => {
  const methods = useFormContext<FieldValues>();
  const { getValues, register } = methods;
  const { amount } = getValues();

  const rangeClasses = classNames("range", className);

  const inputHandler = (e: React.FormEvent): void => {
    const target = e.target as HTMLInputElement;
    target.style.setProperty("--value", target.value);
  };

  const styles: RangeCustomStylesType = {
    "--value": amount,
    "--min": min,
    "--max": max
  };

  return (
    <div className={rangeClasses}>
      <span className="range__value">{numberWithSpaces(amount)}</span>
      <input
        className="range__input"
        type="range"
        min={min}
        max={max}
        step={step}
        onInput={inputHandler}
        style={styles}
        {...register(name, registerParams)}
      />
      <div className="range__controls">
        <span>{numberWithSpaces(min)}</span>
        <span>{numberWithSpaces(max)}</span>
      </div>
    </div>
  );
};

export default Range;
