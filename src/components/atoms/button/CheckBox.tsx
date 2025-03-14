import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../library/styles/colors';
import { fonts } from '../../../library/styles/fonts';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';

interface iProps {
  label?: string;
  onPress?: () => void;
  checked?: boolean;
  color?: string;
  textstyle?: TextStyle;
  containerstyle?: ViewStyle;
}

const Checkbox = ({
  label,
  onPress,
  checked = false,
  color = colors.secondaryText1,
  textstyle,
  containerstyle,
}: iProps) => {
  return (
    <View style={[styles.container, containerstyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.checkboxButton}
      >
        {checked ? (
          <MaterialIcons name="check-box" color={color} size={20} />
        ) : (
          <MaterialIcons
            name="check-box-outline-blank"
            color={color}
            size={20}
          />
        )}
      </TouchableOpacity>
      {label && <Text style={[styles.label, textstyle]}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 4,
  },
  checkboxButton: {
    paddingRight: 8,
  },
  label: {
    fontSize: getScaledFontSize(12),
    lineHeight: getScaledFontSize(14),
    fontFamily: fonts.fontRegular,
    flex: 1,
    color:colors.black
  },
});

export default memo(Checkbox);
