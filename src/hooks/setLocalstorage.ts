export const setLocalstorage = (key: string | undefined, value: number[]) => {
  key && window.localStorage.setItem(key, JSON.stringify(value));
};
