import dayjs from "dayjs";

export const dateFormat = (str) => dayjs(str).format("DD/MM/YYYY");

export const getLocalStorage = (key) =>
  window.localStorage.getItem(key) || null;

export const setLocalStorage = (data) =>
  Object.entries(data).forEach(([key, value]) =>
    window.localStorage.setItem(key, value)
  );

export const removeLocalStorage = (...args) => {
  args.forEach((arg) => {
    window.localStorage.removeItem(arg);
  });
};
