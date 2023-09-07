export type ExchangeDataType = Array<[string, number]> | null;

export interface ExchangeType {
  status: "loading" | "success" | "error";
  list: ExchangeDataType;
  optional: string[];
}
