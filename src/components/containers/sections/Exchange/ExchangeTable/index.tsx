import { ExchangeDataType } from "@/types/Exchange";
import "./style.scss";

type ExchangeTablePropTypes = {
  list: ExchangeDataType;
};

const ExchangeTable = (props: ExchangeTablePropTypes) => {
  return (
    <table className="exchange__table">
      <tbody className="exchange__table-body">
        {props.list?.map((_, i) => {
          if (i % 2 === 0) {
            return (
              <tr key={i} className="exchange__table-row">
                {props.list?.slice(i, i + 2).map(([key, value]) => {
                  return (
                    <td key={key} className="exchange__currency">
                      <span className="exchange__currency-name">{key}:</span>
                      {value.toFixed(2)}
                    </td>
                  );
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default ExchangeTable;
