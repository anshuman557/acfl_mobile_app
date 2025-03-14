import {Platform, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../constants/globalConstants';
import {getScaledFontSize} from '../utils/globalFunctions';
import {colors} from './colors';
import {fonts} from './fonts';
import {globalStyleDefinitions} from './globalStyleDefinitions';

const commonStyles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  wrapperContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS == 'ios' ? 50 : 0,
  },
  fullInnerContainer: {
    flex: 1,
    padding: globalStyleDefinitions.cardInnerPadding.padding,
  },
  appIcon: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  onboardingImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  commonButton: {
    alignSelf: 'center',
    backgroundColor: colors.appSecondary,
    borderRadius: globalStyleDefinitions.br_10.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    marginTop: globalStyleDefinitions.commonItemsMargin.margin,
  },
  commoButtonText: {
    color: colors.white,
    fontSize: getScaledFontSize(16),
    fontFamily: fonts.fontBold,
    lineHeight: getScaledFontSize(19),
  },
  headerText: {
    fontSize: getScaledFontSize(22),
    color: colors.black,
    fontFamily: fonts.fontBold,
    lineHeight: getScaledFontSize(24),
  },
  subHeaderText: {
    fontSize: getScaledFontSize(16),
    color: colors.gray1,
    fontFamily: fonts.fontRegular,
    lineHeight: getScaledFontSize(19),
  },
  BottomTabIcon: {
    height: 22,
    width: 22,
  },
});
export default commonStyles;
