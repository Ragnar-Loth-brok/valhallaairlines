import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {ICON_SF} from '../../utils/config';

type Props = {
  size?: number;
  height?: number;
  width?: number;
};

export default function SVGIconContainer({
  height,
  size = 0,
  width,
  children,
}: PropsWithChildren<Props>) {
  const containerStyles = React.useMemo(() => {
    return {
      width: width ? width * ICON_SF : size * ICON_SF,
      height: height ? height * ICON_SF : size * ICON_SF,
    };
  }, [size, height, width]);

  return <View style={[styles.container, containerStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
