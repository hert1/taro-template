import Taro from "@tarojs/taro";
import {saveToken, saveOpenid} from "../utils/tokenService";

export const login = () => {
  // 登录
  Taro.login({
    success: res => this.getAccessToken(res.code)
  })
};

const getAccessToken = (code) => {
  Taro.request({
    url: 'http://47.101.174.209:8888/oauth/token?code=code&grant_type=miniProgram-auth',
    data: {
      code: code
    },
    success: res => {
      saveToken(res.data.token);
      saveOpenid(res.data.openid);
      window.location.reload();
    }
  })
}

