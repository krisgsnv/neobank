import { useState } from "react";
import "./style.scss";

const Confirmation = (): JSX.Element => {
  const [code] = useState<Array<number | null>>(
    new Array(4).fill(0)
  );
  const error = false;

  return (
    <section className="confirmation">
      <h2 className="confirmation__h2">Please enter confirmation code</h2>
      <div className="confirmation-code confirmation__code">
        {code.map((num, i) => (
          <input key={i} type="number" className="confirmation-code__num" value={0}/>
        ))}
      </div>
      {error && <p className="confirmation__error">Invalid confirmation code</p>}
    </section>
  );
};

export default Confirmation;
