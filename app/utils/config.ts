import {Dimensions} from 'react-native';

export const defaultDeviceSize = {
  height: 812,
  width: 375,
};

const deviceHeight =
  Dimensions.get('screen').height || defaultDeviceSize.height;
const deviceWidth = Dimensions.get('screen').width || defaultDeviceSize.width;

export const hp = (value: number) => {
  return (deviceHeight * value) / 100;
};

export const wp = (value: number) => {
  return (deviceWidth * value) / 100;
};

export const ICON_SF = hp(100) / defaultDeviceSize.height;
export const Width_SF = wp(100) / defaultDeviceSize.width;

export const fp = (val: number) => {
  return val * ICON_SF;
};

export const hpp = (val: number) => {
  return val * ICON_SF;
};

export const wpp = (val: number) => {
  return val * Width_SF;
};
