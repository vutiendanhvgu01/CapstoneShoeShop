export const ACCESS_TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";

export const { saveStore, saveStoreJson, getStore, getStoreJson } = {
  saveStore: (name, stringValue) => {
    localStorage.setItem(name, stringValue);
    return stringValue;
  },
  saveStoreJson: (name, value) => {
    let sValue = JSON.stringify(value);
    localStorage.setItem(name, sValue);
    return value; //object
  },
  getStore: (name) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  getStoreJson: (name) => {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
    return null;
  },
};
