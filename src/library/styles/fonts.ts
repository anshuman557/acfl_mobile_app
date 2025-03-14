import {Platform} from 'react-native';

export const fonts = {
  fontRegular:
    Platform.OS == 'android'
      ? 'SF-Pro-Display-Regular'
      : 'SFProDisplay-Regular',
  fontMedium:
    Platform.OS == 'android' ? 'SF-Pro-Display-Medium' : 'SFProDisplay-Medium',
  fontBold:
    Platform.OS == 'android' ? 'SF-Pro-Display-Bold' : 'SFProDisplay-Bold',
  fontSemiBold:
    Platform.OS == 'android'
      ? 'SF-Pro-Display-Semibold'
      : 'SFProDisplay-SemiBold',
};
