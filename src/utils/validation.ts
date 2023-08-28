export const containsHTML = (str: string): boolean =>
  /<\/?[a-z][\s\S]*>/i.test(str);

export const isValidSrc = async (
  result: Record<string, string>,
  prop: string
): Promise<Record<string, string> | false> => {
  return await new Promise((resolve, reject) => {
    try {
      const image = document.createElement("img");
      image.src = result[prop];

      image.onload = () => {
        resolve(result);
      };
      image.onerror = () => {
        resolve(false);
      };
    } catch (error) {
      console.error(error);
    }
  });
};

export const haveEmptyValues = (obj: Record<string, string>): boolean => {
  return Object.values(obj).some((el) => !el);
};

export const byField = <T extends keyof U, U>(fieldName: T) => {
  return (a: U, b: U) => {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
};
