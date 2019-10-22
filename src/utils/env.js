
export const isH5 = process.env.TARO_ENV === 'h5';

const env = {
  mode: process.env.NODE_ENV, //开发:'development',打包：'production'
};

export const isProductionMode = () => {
  return env.mode === 'production';
};

export const host = isProductionMode()
  ? '.' //生产host
  : isH5 ? '/api' : ''; //开发host
