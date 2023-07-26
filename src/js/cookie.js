export const setCookie = (name, value, time) => {
  document.cookie = `${name}=${value}; max-age=${time}; path=/`;
};

export const getCookie = (name) => {
  let cookie = {};
  document.cookie.split(";").forEach((el) => {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[name];
};
