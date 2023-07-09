import React from 'react';
import {Modal, StyleSheet, Pressable, ViewStyle} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  SlideInDown,
  SlideOutDown,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';

import colors from '../../utils/colors';
import {hp, hpp, wp, wpp} from '../../utils/config';

type Props = {
  visible: boolean;
  toggleVisible: () => void;
  // children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  ChildComponent: (props: any) => JSX.Element;
  type?: 'bottomsheet' | 'popup';
  showCloseIcon?: boolean;
  childProps?: any;
};

export default function ModalUI({
  visible,
  toggleVisible,
  // children,
  type = 'bottomsheet',
  // showCloseIcon,
  childProps,
  ChildComponent,
}: Props) {
  const [animateChild, setAnimateChild] = React.useState(true);

  const container_style = React.useMemo<ViewStyle>(() => {
    if (type === 'bottomsheet') {
      return {
        flexDirection: 'column-reverse',
      };
    } else {
      return {
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
  }, [type]);

  const onRequestClose = React.useCallback(() => {
    setAnimateChild(false);
    setTimeout(toggleVisible, 300);
  }, [toggleVisible]);

  React.useEffect(() => {
    if (visible) {
      setAnimateChild(true);
    } else {
      setAnimateChild(false);
    }
  }, [visible]);

  // const childrenWithCloseProp = React.cloneElement(children, ['name'], []);

  return (
    <Modal
      animationType="none"
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      // onDismiss={onRequestClose}
      statusBarTranslucent={true}>
      {animateChild && (
        <Animated.View
          layout={Layout}
          entering={FadeIn}
          exiting={FadeOut.duration(200)}>
          <Pressable
            style={[styles.container, container_style]}
            onPress={onRequestClose}
            android_ripple={{color: colors.ripple_color_primary}}>
            {type === 'bottomsheet' && (
              <Animated.View style={styles.childContainer}>
                <Animated.View
                  entering={SlideInDown}
                  exiting={SlideOutDown}
                  style={styles.child}>
                  <ChildComponent {...childProps} closeModal={onRequestClose} />
                </Animated.View>
              </Animated.View>
            )}
            {type === 'popup' && (
              <Animated.View
                layout={Layout}
                entering={ZoomIn}
                exiting={ZoomOut}>
                <ChildComponent {...childProps} closeModal={onRequestClose} />
              </Animated.View>
            )}
          </Pressable>
        </Animated.View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: wp(100),
    height: hp(100),
  },
  subContainer: {
    height: hp(100),
    width: wp(100),
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
  },
  childContainer: {
    position: 'absolute',
    bottom: 0,
    maxHeight: hp(98),
    flex: 1,
  },
  child: {
    backgroundColor: colors.bg,
    borderTopEndRadius: wpp(24),
    borderTopStartRadius: wpp(24),
    overflow: 'hidden',
    paddingHorizontal: wpp(20),
    paddingTop: hpp(20),
    width: wp(100),
    paddingBottom: hpp(30),
  },
});
