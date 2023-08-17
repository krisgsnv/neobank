import { parse, isDate, isMatch } from "date-fns";

export const getCurrentDate = () => {
  return new Date().toLocaleDateString();
};

export const today = new Date();
