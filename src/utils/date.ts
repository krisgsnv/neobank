import { parse, isValid, format } from "date-fns";

export const getCurrentDate = (): string => {
  return new Date().toLocaleDateString();
};

export const today = new Date();

export const transformDateFormat = (
  value: string,
  pattern: string
): string | null => {
  const date = parse(value, pattern, new Date());
  if (isValid(date) && pattern.length === value.length) {
    return format(date, pattern);
  } else return null;
};
