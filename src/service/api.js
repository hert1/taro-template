import {host} from "../utils/env";
export {host};

export const urlPrefix = `${host}`;


// user
export const API_USER = `${urlPrefix}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${urlPrefix}/xhr/u/mailLogin.json`
export const API_CHECK_LOGIN = `${urlPrefix}/xhr/u/checkLogin.json`
