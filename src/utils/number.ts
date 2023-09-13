export const numberWithSpaces = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const isNumbersSameLength = (num1: number, num2: number): boolean => {
  return num1.toString().length === num2.toString().length;
};
