//import CryptoJS from 'crypto-js';
//import { differenceInMinutes } from 'date-fns';
// config
//import { LOCAL_STORAGE_KEY } from 'config/constants';

const STORAGE_NAME = 'SAFESTOCK_STORAGE';

const checkLocalStorage = () => {
  if (localStorage.getItem(STORAGE_NAME)) return true;
  return false;
};

export const setAuthData = (data) => {
  removeAuthData();

  //const stores =
  //  typeof data.stores === 'string' ? JSON.parse(data.stores) : data.stores;

  const storage = {
    user: {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      optin: data.optin,
      level: data.level,
      token: data.token,
    },
    //stores,
    //store: stores.length > 0 ? stores[0] : {},
    create: new Date().getTime(),
  };
  /*if (data.privileges) {
    storage.prg = CryptoJS.AES.encrypt(
      data.privileges,
      LOCAL_STORAGE_KEY
    ).toString();
  }*/

  localStorage.setItem(STORAGE_NAME, JSON.stringify(storage));
};

export const getAuthData = () => {
  if (checkLocalStorage()) {
    return JSON.parse(localStorage.getItem(STORAGE_NAME));
  }
  return null;
};

//export const getAuthPrivileges = () => {
//  return getAuthData()?.prg;
//};
//export const getAuthToken = () => {
//  return getAuthData()?.token;
//};
export const getAuthUser = () => {
  return getAuthData()?.user;
};
//export const getAuthStore = () => {
//  return getAuthData() ? getAuthData().store : {};
//};
//export const checkAuthLevel = () => {
//  if (getAuthUser()?.level === '_master' || getAuthUser()?.level === '_admin') {
//    return 'admin';
//  }
//  return getAuthUser()?.level;
//};

export const removeAuthData = () => {
  localStorage.removeItem(STORAGE_NAME);
};

export const differenceInMinutes = (now, start) => {
  var seconds = (now.getTime() - start) / 1000;
  return seconds / 60;
}

export const checkLoggedIn = () => {
  if (checkLocalStorage()) {
    // if change the time (1200), you should change jwt time also.
    if (differenceInMinutes(new Date(), getAuthData().create) > 1200) {
      removeAuthData();
      return false;
    }
    return true;
  }
  return false;
};
