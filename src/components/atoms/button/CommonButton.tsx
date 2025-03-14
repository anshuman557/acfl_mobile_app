import React, { memo } from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import commonStyles from "../../../library/styles/commonStyles";

interface iProps {
  buttonTitle: string;
  onPress?: () => void;
  customStyles?: ViewStyle;
  disabled?: boolean;
  customTextStyles?: TextStyle;
}

const CommonButton = ({
  buttonTitle,
  onPress,
  customStyles,
  disabled,
  customTextStyles,
}: iProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      style={[commonStyles.commonButton, { ...customStyles }]}
    >
      <Text style={[commonStyles.commoButtonText, { ...customTextStyles }]}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(CommonButton);
