import type { ExchangeDataType } from "@/types/Exchange";
import "./style.scss";

interface ExchangeTablePropTypes {
  list: ExchangeDataType;
}

const ExchangeTable = ({ list }: ExchangeTablePropTypes): JSX.Element => {
  return (
    <table className="exchange__table">
      <tbody className="exchange__table-body">
        {list?.map((_, i) => {
          if (i % 2 === 0) {
            return (
              <tr key={i} className="exchange__table-row">
                {list?.slice(i, i + 2).map(([key, value]) => (
                  <td key={key} className="exchange__currency">
                    <span className="exchange__currency-name">{key}:</span>
                    {value.toFixed(2)}
                  </td>
                ))}
              </tr>
            );
          } else return "";
        })}
      </tbody>
    </table>
  );
};

export default ExchangeTable;
