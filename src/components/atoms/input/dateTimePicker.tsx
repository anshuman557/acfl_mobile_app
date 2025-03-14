import React, { memo, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../library/styles/colors";
import { fonts } from "../../../library/styles/fonts";
import { globalStyleDefinitions } from "../../../library/styles/globalStyleDefinitions";
import { getScaledFontSize } from "../../../library/utils/globalFunctions";
interface iProps {
  placeholder: string;
  value: string;
  onChangeText: any;
  customStyle?: ViewStyle;
  customTextStyles?: TextStyle;
  isRequired?: boolean;
  mode?: "date" | "time" | "datetime";
  minimumDate?: any;
  maximumDate?: any;
}

const DateTimeModal = ({
  placeholder,
  value,
  onChangeText,
  customStyle,
  isRequired,
  mode,
  minimumDate,
  maximumDate,
}: iProps) => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setDatePicker(true)}
      style={[styles.secureInputContainer, customStyle]}
    >
      {!value ? (
        <Text style={[styles.textStyle, { color: colors.secondaryText1 }]}>
          {placeholder}
          {isRequired && (
            <Text style={{ color: colors.appLightSecondary }}>*</Text>
          )}
        </Text>
      ) : (
        <Text style={styles.textStyle}>{value}</Text>
      )}

      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconContainer}
        onPress={() => setDatePicker(true)}
      >
        <Feather
          name={mode == "time" ? "clock" : "calendar"}
          size={24}
          color={colors.gray}
        />
      </TouchableOpacity>

      <DateTimePicker
        isVisible={datePicker}
        mode={mode || "date"}
        date={date}
        onConfirm={(date) => {
          setDatePicker(false);
          setDate(date);
          onChangeText(date?.toISOString());
        }}
        onCancel={() => setDatePicker(false)}
        display={Platform.OS === "ios" ? "spinner" : "default"}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        themeVariant="light"
        buttonTextColorIOS={colors.appSecondary}
        textColor={colors.black}
      />
    </TouchableOpacity>
  );
};

export default memo(DateTimeModal);

const styles = StyleSheet.create({
  secureInputContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 45,
    borderWidth: 1,
    borderColor: colors.secondaryBorder,
    overflow: "hidden",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: globalStyleDefinitions.commonItemsMargin.margin,
  },
  textStyle: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(19),
    backgroundColor: colors.white,
    justifyContent: "space-between",
    flex: 1,
    textAlignVertical: "center",
    paddingVertical: 0,
  },
  iconContainer: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: 45,
  },
});
