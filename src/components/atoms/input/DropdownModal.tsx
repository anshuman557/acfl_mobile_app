import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colors } from "../../../library/styles/colors";
import { fonts } from "../../../library/styles/fonts";
import { globalStyleDefinitions } from "../../../library/styles/globalStyleDefinitions";
import { getScaledFontSize } from "../../../library/utils/globalFunctions";

interface iProps {
  data: any;
  search?: boolean;
  placeholder?: string;
  onChange?: any;
  value?: string;
  containerStyle?: any;
  isRequired?: boolean;
  label?: string;
  valueField?: string;
}
const InputDropdown = ({
  data,
  search,
  placeholder,
  onChange,
  value,
  containerStyle,
  isRequired,
  label,
  valueField,
}: iProps) => {
  const renderPlaceholder = () => (
    <Text
      style={{
        color: colors.secondaryText1,
        fontFamily: fonts.fontRegular,
        fontSize: getScaledFontSize(13),
        lineHeight: getScaledFontSize(15.5),
      }}
    >
      {placeholder}
      {isRequired && <Text style={{ color: colors.appLightSecondary }}>*</Text>}
    </Text>
  );
  return (
    <Dropdown
      style={[styles.container, containerStyle]}
      itemTextStyle={styles.itemTextStyle}
      containerStyle={styles.dropdownContainer}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data || []}
      search={search}
      searchPlaceholder="Search..."
      maxHeight={300}
      labelField={label || "name"}
      valueField={valueField || "name"}
      placeholder={renderPlaceholder()}
      value={value}
      onChange={(item: any) => onChange(item)}
      selectedTextProps={{ numberOfLines: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 45,
    borderWidth: 1,
    borderColor: colors.secondaryBorder,
    overflow: "hidden",
    paddingHorizontal: 10,
    marginTop: globalStyleDefinitions.commonItemsMargin.margin,
  },
  itemTextStyle: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(19),
    flex: 1,
  },
  dropdownContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondaryBorder,
    overflow: "hidden",
  },
  selectedTextStyle: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(16),
  },
  placeholderStyle: {
    color: colors.secondaryText1,
    fontFamily: fonts.fontRegular,
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(16),
  },
  inputSearchStyle: {
    borderWidth: 0,
    fontFamily: fonts.fontRegular,
    color: colors.black,
    lineHeight: getScaledFontSize(16),
    fontSize: getScaledFontSize(14),
    height: 50,
    marginBottom: 0,
  },
  iconStyle: {
    height: 27,
    width: 27,
  },
});

export default memo(InputDropdown);
