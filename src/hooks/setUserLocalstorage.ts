export const setUserLocalstorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};
