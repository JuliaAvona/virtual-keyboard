const storageGet = (name, alternative) => {
  return window.localStorage.getItem(name) || alternative;
};

const storageSet = (name, value) => {
  window.localStorage.setItem(name, value);
};

export { storageGet, storageSet };