import { type StatusType } from "./Application";

export type ExchangeDataType = Array<[string, number]> | null;

export interface ExchangeType {
  status: StatusType;
  list: ExchangeDataType;
  optional: string[];
}
