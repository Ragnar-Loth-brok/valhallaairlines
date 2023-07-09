import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {LogoTitleStyles, common} from '../utils/defaultStyles';
import Animated, {
  EntryAnimationsValues,
  EntryExitAnimationFunction,
  Layout,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import colors from '../utils/colors';
import {SplashScreenTexts} from '../utils/string';

const Image_uri =
  'https://images.unsplash.com/photo-1558882423-f05f3544bebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80';

export default function SplashScreen(): JSX.Element {
  const animate = useSharedValue(0);

  const ImageEnteringAnimation: EntryExitAnimationFunction = (
    _: EntryAnimationsValues,
  ) => {
    'worklet';
    const animations = {
      transform: [
        {
          scale: withTiming(1, {duration: 2000}),
        },
      ],
    };
    const initialValues = {
      transform: [
        {
          scale: 1.3,
        },
      ],
    };

    const callback = (finished: boolean) => {
      // if (finished) {
      //   animate.value = withTiming(1, {duration: 2000});
      // }
    };

    return {
      initialValues,
      animations,
      callback,
    };
  };

  const heading1Style = useAnimatedStyle(() => {
    const height = interpolate(animate.value, [0, 1], [0, 65]);
    const translateY = interpolate(animate.value, [0, 1], [20, 0]);
    return {
      height,
      transform: [{translateY}],
    };
  }, []);

  const heading2Style = useAnimatedStyle(() => {
    const height = interpolate(animate.value, [0, 1], [0, 65]);
    const translateY = interpolate(animate.value, [0, 1], [-20, 0]);

    return {
      height,
      transform: [{translateY}],
    };
  }, []);

  useEffect(() => {
    animate.value = withDelay(500, withTiming(1, {duration: 1500}));
  }, []);

  return (
    <View style={[common.container]}>
      <StatusBar hidden />
      <Animated.Image
        layout={Layout}
        entering={ImageEnteringAnimation}
        style={StyleSheet.absoluteFill}
        source={{uri: Image_uri}}
      />
      <View style={[StyleSheet.absoluteFill, styles.imageOverlay]} />
      <View style={[common.flexCenter]}>
        <Animated.View style={[heading1Style]}>
          <Text style={[LogoTitleStyles.default]}>
            {SplashScreenTexts.heading1}
          </Text>
        </Animated.View>
        <Animated.View style={[heading2Style]}>
          <Text style={[LogoTitleStyles.default]}>
            {SplashScreenTexts.heading2}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageOverlay: {
    backgroundColor: colors.overlay,
  },
});
