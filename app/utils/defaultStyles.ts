import {StyleSheet} from 'react-native';

import colors from './colors';
import {FONT_TYPES} from './style';
import {ICON_SF, fp, wpp, hpp} from './config';

export const common = StyleSheet.create({
  svg_scale: {
    transform: [{scale: ICON_SF}],
  },
  child_center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  self_center: {
    alignSelf: 'center',
  },
  child_space_between: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_center: {
    textAlign: 'center',
  },
  horizontal_center: {
    alignItems: 'center',
  },
  align_item_center_width_full: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  defRadius: {
    borderRadius: hpp(14),
    overflow: 'hidden',
  },
  flexRow: {
    flexDirection: 'row',
  },
  hideOverflow: {
    overflow: 'hidden',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const LogoTitleStyles = StyleSheet.create({
  default: {
    fontFamily: FONT_TYPES.Logo_Font,
    fontSize: fp(48),
    color: colors.primary,
  },
});
