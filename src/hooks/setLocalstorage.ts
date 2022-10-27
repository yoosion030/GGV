export const setLocalstorage = (key: string, value: number[]) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
