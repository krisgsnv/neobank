export const containsHTML = (str: string) => /<\/?[a-z][\s\S]*>/i.test(str);

export const isValidSrc = (result: { [key: string]: string }, prop:string) => {
  return new Promise((resolve, reject) => {
    try {
      let image = document.createElement("img");
      image.src = result[prop];

      image.onload = () => {
        resolve(result);
      };
      image.onerror = () => {
        reject(false);
      };
    } catch (error) {
      console.error(error);
    }
  });
};

export const haveEmptyValues = (obj: { [key: string]: string }) => {
  return Object.values(obj).some((el) => (!el ? true : false));
};
