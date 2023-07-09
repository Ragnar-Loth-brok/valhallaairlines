type LayoutEvent = {
  nativeEvent: {
    layout: {
      width: number;
      height: number;
      x: number;
      y: number;
    };
    target: number;
  };
};

type ReanimatedDimensions = {
  height: number;
  width: number;
  pageX: number;
  pageY: number;
  x: number;
  y: number;
};

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  App: undefined;
};

export type {RootStackParamList, ReanimatedDimensions, LayoutEvent};
