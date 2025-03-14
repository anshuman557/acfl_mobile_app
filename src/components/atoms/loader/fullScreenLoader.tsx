import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {colors} from '../../../library/styles/colors';
import { fonts } from '../../../library/styles/fonts';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';

const FullScreenLoader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparentBlack,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }}>
      <View
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 50,
          paddingVertical: 40,
          borderRadius: 10,
        }}>
        <ActivityIndicator size="large" color={colors.appSecondary} />
        <Text
          style={{
            marginTop: getScaledFontSize(20),
            color: colors.appSecondary,
            fontSize: getScaledFontSize(16),
            fontFamily:fonts.fontSemiBold
          }}>
          Please wait...
        </Text>
      </View>
    </View>
  );
};

export default FullScreenLoader;
