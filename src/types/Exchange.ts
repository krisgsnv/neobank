export type ExchangeDataType = [string, number][] | null;

export type ExchangeType = {
  status: "loading" | "success" | "error";
  list: ExchangeDataType;
  optional: string[]
};
