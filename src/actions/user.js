import { USER_INFO, USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { API_USER, API_USER_LOGIN } from '../service/api'
import request from "../utils/request";

/**
 * 获取用户信息
 * @param {*} payload
 */
export const dispatchUser = payload => {
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await request.get(API_USER, payload);
    dispatch({
      type: USER_INFO,
      userInfo : result.data
    });
  };
};

/**
 * 用户登录
 * @param {*} payload
 */
export const dispatchLogin = payload => {
  return async dispatch => {
    let result = await request.get(API_USER_LOGIN, payload);
    dispatch({
      type: USER_LOGIN,
    });
  };
};

/**
 * 用户退出登录
 */
export const dispatchLogout = () => ({ type: USER_LOGOUT })
