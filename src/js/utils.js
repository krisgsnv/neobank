export const containsHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

export const isValidSrc = (result, prop) => {
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

export const haveEmptyValues = (obj) => {
  return Object.values(obj).some((el) => (!el ? true : false));
};

export const setIntervalCallback = (name, minutes, callback) => {
  let reloadTime = localStorage.getItem(name);
  const currentTime = new Date().getTime();

  if (!reloadTime) {
    reloadTime = new Date().setTime(new Date().getTime() + minutes * 60 * 1000);
    localStorage.setItem(name, reloadTime);
  }

  if (currentTime >= +reloadTime) {
    callback();
    reloadTime = new Date().setTime(+reloadTime + minutes * 60 * 1000);
    localStorage.setItem(name, reloadTime);
  }
};

export const setIntervalUpdatingHtml = (timerStorageName, contentStorageName, minutes, callback) => {
  setIntervalCallback(timerStorageName, minutes, () => {
    callback()
  });
  
  setInterval(() => {
    setIntervalCallback(timerStorageName, minutes, () => {
      localStorage.removeItem(contentStorageName);
      callback();
    });
  }, 1000 * 60);
}