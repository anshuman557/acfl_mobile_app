import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../library/styles/colors';
import {fonts} from '../../../library/styles/fonts';
import {getScaledFontSize} from '../../../library/utils/globalFunctions';
import { globalStyleDefinitions } from '../../../library/styles/globalStyleDefinitions';

type HeaderProps = {
  onPress?: () => void;
};

const LanguageHeader = ({onPress}: HeaderProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Text style={[styles.text, {color: colors.black,}]}>
        TH<Text style={{color: colors.black}}> I </Text>
        <Text style={{color: colors.appSecondary}}>EN</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: globalStyleDefinitions.screenPadding.padding,
    paddingRight: globalStyleDefinitions.screenPadding.padding,
  },
  text: {
    color: colors.white,
    fontSize: getScaledFontSize(13),
    lineHeight: getScaledFontSize(15.5),
    fontFamily: fonts.fontMedium,
  },
});

export default LanguageHeader;
