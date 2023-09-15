import { useState, useEffect } from "react";
import "./style.scss";
import classNames from "classnames";
import { type StatusType } from "@/types/Application";
import Document from "@/services/Document";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setStep } from "@/store/applicationSlice";
import { isNumbersSameLength } from "@/utils/number";

type CodeNumType = number | null;

interface Code {
  value: CodeNumType[];
  error: boolean;
}

interface ConfirmationPropsType {
  statusChangeHandler?: (status: StatusType) => void;
}

const Confirmation = ({
  statusChangeHandler = () => {}
}: ConfirmationPropsType): JSX.Element => {
  const dispatch = useAppDispatch();
  const applicationId = useAppSelector(
    (state) => state.application.applicationId
  );

  const validCode = parseInt(
    useAppSelector((state) => state.application.sesCode)
  );

  const numClasses = (num: CodeNumType): string =>
    classNames("confirmation-code__num", {
      "confirmation-code__num_active": num
    });

  const [code, setCode] = useState<Code>({
    value: new Array(4).fill(null),
    error: false
  });

  const getNumericCode = (code: CodeNumType[]): number | null => {
    const numericValue = parseInt(code.join(""));
    return isNaN(numericValue) ? null : numericValue;
  };

  const sendCode = async (): Promise<void> => {
    statusChangeHandler("loading");
    const numericValue = getNumericCode(code.value);
    try {
      if (applicationId && numericValue) {
        const result = await Document.sendSESCode(applicationId, numericValue);
        if (result) {
          dispatch(setStep(7));
          statusChangeHandler("success");
        } else throw new Error();
      }
    } catch (error) {
      statusChangeHandler("error");
    }
  };

  const addCodeNum = (val: CodeNumType): void => {
    setCode((prev) => {
      const index = prev.value.findIndex((num) => num === null);
      const value = prev.value.map((num, i) => (i === index ? val : num));
      const numericValue = getNumericCode(value);
      const error = !!(
        numericValue &&
        validCode &&
        isNumbersSameLength(numericValue, validCode) &&
        numericValue !== validCode
      );
      return { error, value };
    });
  };

  const deleteCodeNum = (): void => {
    setCode((prev) => {
      const index = prev.value.findLastIndex((num) => num);
      const value = prev.value.map((num, i) => (i === index ? null : num));
      return { ...prev, value };
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

  useEffect(() => {
    if (getNumericCode(code.value) === validCode) {
      void sendCode();
    }
  }, [code.value]);
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
