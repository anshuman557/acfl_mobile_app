import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../library/styles/colors';
import commonStyles from '../../../library/styles/commonStyles';
import { fonts } from '../../../library/styles/fonts';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';

interface iProps {
  title: string;
  onPress?: () => void;
  customStyles?: any;
  disabled?: boolean;
  customTextStyles?: any;
  iconPath?: any;
}

const IconButton = ({
  title,
  onPress,
  customStyles,
  disabled,
  customTextStyles,
  iconPath,
}: iProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, { ...customStyles }]}
    >
      <Image source={iconPath} style={styles.icon} />
      <Text style={[styles.buttonText, { ...customTextStyles }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  buttonContainer: {
    ...commonStyles.commonButton,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondaryText,
    marginTop: 0,
  },
  buttonText: {
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(16),
    fontFamily: fonts.fontBold,
    marginLeft: 16,
    color: colors.black1,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
