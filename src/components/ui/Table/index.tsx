import classNames from "classnames";
import "./style.scss";
import { useState } from "react";
import { byObjectValues } from "@/utils/validation";

type TableRowType = Record<string, string | number>;
type SortConfigFieldType = keyof TableRowType;

interface TablePropsType {
  columns: string[];
  data: TableRowType[];
  dataKey: SortConfigFieldType;
}

interface SortConfigType {
  key: SortConfigFieldType;
  reverse: boolean;
}

const Table = ({ columns, data, dataKey }: TablePropsType): JSX.Element => {
  const configFields = Object.keys(data[0]);
  const config = configFields.map((fieldName) => ({
    key: fieldName,
    reverse: false
  }));

  const sortData = (
    data: TableRowType[],
    config: SortConfigType[]
  ): TableRowType[] => [...data].sort(byObjectValues(config));

  const [sort, setSort] = useState<{
    data: TableRowType[];
    config: SortConfigType[];
  }>({ data: sortData(data, config), config });

  const getConfigField = (
    key: SortConfigFieldType
  ): SortConfigType | undefined => sort.config.find((item) => item.key === key);

  const sortHeadingClasses = (i: number): string =>
    classNames("table__heading", {
      table__heading_reversed: getConfigField(configFields[i])?.reverse
    });

  const changeSort = (i: number): void => {
    const key = configFields[i];

    setSort(({ config, data }) => {
      const newConfig = config.filter((item) => item.key !== key);
      const configProp = getConfigField(key) as SortConfigType;
      const newConfigProp = { key, reverse: !configProp.reverse };

      if (configProp.reverse) newConfig.splice(i, 0, newConfigProp);
      else newConfig.unshift(newConfigProp);

      return {
        config: newConfig,
        data: sortData(data, newConfig)
      };
    });
  };

  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {columns.map((name, i) => (
            <th
              className="table__cell"
              key={name}
              onClick={() => changeSort(i)}
            >
              <span className={sortHeadingClasses(i)}>{name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sort.data.map((item) => (
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
