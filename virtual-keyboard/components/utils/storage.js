const storageGet = (name, alternative) => {
  return alternative || window.localStorage.getItem(name);
};

const storageSet = (name, value) => {
  window.localStorage.setItem(name, value);
};

export { storageGet, storageSet };