import "./style.scss";

type TableRowType = Record<string, string | number>;

interface TablePropsType {
  columns: string[];
  data: TableRowType[];
  dataKey: keyof TableRowType;
}

const Table = ({ columns, data, dataKey }: TablePropsType): JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {columns.map((name) => (
            <th className="table__cell " key={name}>
              <span className="table__cell_heading">
                {name}
                <svg
                  className="table__sort-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.1921 9.23047L15.9065 13.6879C16.3408 14.2089 15.9702 15 15.292 15L8.70803 15C8.02976 15 7.65924 14.2089 8.09346 13.6879L11.8079 9.23047C11.9079 9.11053 12.0921 9.11053 12.1921 9.23047Z"
                    fill="#222222"
                  />
                </svg>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item[dataKey]} className="table__row">
            {Object.values(item).map((value, i) => (
              <td key={i} className="table__cell">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
