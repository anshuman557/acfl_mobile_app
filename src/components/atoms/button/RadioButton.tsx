import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../library/styles/colors';
import { fonts } from '../../../library/styles/fonts';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';
import { globalStyleDefinitions } from '../../../library/styles/globalStyleDefinitions';

type CustomRadioButtonProps = {
  label: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
};

const RadioButton: React.FC<CustomRadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onSelect,
}) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(value)}
      activeOpacity={0.9}
    >
      <View style={[styles.circle, isSelected && styles.selectedCircle]}>
        {isSelected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: globalStyleDefinitions.cardInnerPadding.padding,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondaryText1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedCircle: {
    borderColor: colors.secondaryText1,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.secondaryText1,
  },
  label: {
    fontSize: getScaledFontSize(14),
    fontFamily: fonts.fontRegular,
    color: colors.black,
  },
});

export default memo(RadioButton);
