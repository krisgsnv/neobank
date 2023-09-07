import { useState, useEffect } from "react";
import "./style.scss";
import classNames from "classnames";

type CodeNumType = number | null;

interface Code {
  value: CodeNumType[];
  error: boolean;
}

const Confirmation = (): JSX.Element => {
  const numClasses = (num: CodeNumType): string =>
    classNames("confirmation-code__num", {
      "confirmation-code__num_active": num
    });

  const [code, setCode] = useState<Code>({
    value: new Array(4).fill(null),
    error: false
  });

  const addCodeNum = (val: CodeNumType): void => {
    setCode((prev) => {
      const index = prev.value.findIndex((num) => num === null);
      const value = prev.value.map((num, i) => (i === index ? val : num));
      const error = value.every((num) => num);
      return { error, value };
    });
  };

  const deleteCodeNum = (): void => {
    setCode((prev) => {
      const index = prev.value.findLastIndex((num) => num);
      const value = prev.value.map((num, i) => (i === index ? null : num));
      const error = value.every((num) => num);
      return { error, value };
    });
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent): void => {
      const { key } = e;
      const numericValue = parseInt(key);

      if (!isNaN(numericValue)) {
        addCodeNum(numericValue);
      } else if (key === "Backspace") {
        deleteCodeNum();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <section className="confirmation">
      <h2 className="confirmation__h2">Please enter confirmation code</h2>
      <div className="confirmation-code confirmation__code">
        {code.value.map((num, i) => (
          <div key={i} className={numClasses(num)}>
            {num}
          </div>
        ))}
      </div>
      {code.error && (
        <p className="confirmation__error">Invalid confirmation code</p>
      )}
    </section>
  );
};

export default Confirmation;
