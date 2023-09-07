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

interface SortConfig<T> {
  key: keyof T;
  reverse?: boolean;
}

export const byObjectValues = <T extends object>(
  keys: Array<keyof T | SortConfig<T>>
): (a: T, b: T) => 0 | 1 | -1 => {
  return function (a: T, b: T) {
    const firstKey: keyof T | SortConfig<T> = keys[0];
    const isSimple = typeof firstKey === "string";
    const key: keyof T = isSimple
      ? (firstKey as keyof T)
      : (firstKey as SortConfig<T>).key;
    const reverse: boolean = isSimple
      ? false
      : !!(firstKey as SortConfig<T>).reverse;

    if (a[key] === b[key]) {
      if (keys.length === 1) {
        return 0;
      }
      return byObjectValues<T>(keys.slice(1))(a, b);
    }
    if (reverse) {
      return a[key] > b[key] ? -1 : 1;
    }
    return a[key] > b[key] ? 1 : -1;
  };
}
