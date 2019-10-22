import Taro from "@tarojs/taro";

export const namespace = "demo";
export const tokenKey = `${namespace}:token`;
export const openidKey = `${namespace}:openid`;
export const tokenHeader = 'Authorization';

export const saveToken = (val) => {
  Taro.setStorageSync(tokenKey, val);
};

export const getToken = () => {
  const token = Taro.getStorageSync(tokenKey);
  if (token && token != 'null' && token != 'undefined') {
    return token;
  }
  return null;
};
export const deleteToken = () => Taro.removeStorageSync(tokenKey);


export const saveOpenid = (val) => {
  Taro.setStorageSync(openidKey, val);
};

export const getOpenid = () => {
  const openid = Taro.getStorageSync(openidKey);
  if (openid && openid != 'null' && openid != 'undefined') {
    return openid;
  }
  return null;
};
export const deleteOpenid = () => Taro.removeStorageSync(openidKey);
