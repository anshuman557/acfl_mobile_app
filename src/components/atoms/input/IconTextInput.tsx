import React, { memo, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import CountryFlag from "react-native-country-flag";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../../library/styles/colors";
import { fonts } from "../../../library/styles/fonts";
import { globalStyleDefinitions } from "../../../library/styles/globalStyleDefinitions";
import { getScaledFontSize } from "../../../library/utils/globalFunctions";

interface iProps {
  placeholder: string;
  text?: string;
  value: string;
  onChangeText: (val: string) => any;
  multiline?: boolean;
  customStyle?: ViewStyle;
  caretHidden?: boolean;
  textAlign?: any;
  secureEntry?: boolean;
  customTextStyles?: TextStyle;
  isEditable?: boolean;
  isNumber?: boolean;
  showCountryPicker?: any;
  countryCode?: any;
  isRequired?: boolean;
  labelStyle?: TextStyle;
  onPress?: () => any;
  maxLength?: number;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
}

const IconTextInput = ({
  placeholder,
  text,
  value,
  onChangeText,
  multiline,
  customStyle,
  caretHidden,
  textAlign,
  secureEntry,
  customTextStyles,
  isEditable,
  isNumber,
  showCountryPicker,
  countryCode,
  isRequired,
  labelStyle,
  onPress,
  maxLength,
  rightIcon,
  onRightIconPress,
}: iProps) => {
  const [isSecured, setIsSecured] = useState(false);

  const onViewIconPress = () => {
    setIsSecured(!isSecured);
  };

  return (
    <View
      key={`textInput ${placeholder}`}
      style={[
        { marginTop: globalStyleDefinitions.commonItemsMargin.margin },
        customStyle,
      ]}
      onStartShouldSetResponder={onPress}
    >
      {text && (
        <Text style={[styles.textInputPlaceholder, labelStyle]}>
          {text}
          {isRequired && <Text style={styles.requiredText}>*</Text>}
        </Text>
      )}
      {countryCode ? (
        <View style={[styles.secureInputContainer, customTextStyles]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={showCountryPicker}
            style={styles.countryPickerContainer}
          >
            <CountryFlag isoCode={countryCode?.code} size={30} />
          </TouchableOpacity>
          <Text style={styles.countryCodeText}>{countryCode?.dial_code}</Text>
          <TextInput
            style={styles.textStyle}
            value={value}
            textAlign={textAlign || "left"}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText1}
            caretHidden={caretHidden}
            keyboardType={isNumber ? "number-pad" : "default"}
            editable={isEditable}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
            maxLength={maxLength}
          />
        </View>
      ) : secureEntry ? (
        <View style={[styles.secureInputContainer, customTextStyles]}>
          <TextInput
            style={styles.textStyle}
            value={value}
            textAlign={textAlign || "left"}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText1}
            caretHidden={caretHidden}
            secureTextEntry={!isSecured}
            keyboardType={isNumber ? "number-pad" : "default"}
            editable={isEditable}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
            maxLength={maxLength}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={onViewIconPress}
            style={styles.iconContainer}
          >
            <Feather
              name={isSecured ? "eye" : "eye-off"}
              size={24}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.secureInputContainer,
            customTextStyles,
            { height: multiline ? "auto" : 48 },
          ]}
        >
          <TextInput
            style={[
              customTextStyles,
              multiline ? styles.multilineTextInput : styles.textStyle,
            ]}
            value={value}
            textAlign={textAlign || "left"}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText1}
            caretHidden={caretHidden}
            secureTextEntry={isSecured}
            keyboardType={isNumber ? "number-pad" : "default"}
            editable={isEditable}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
            maxLength={maxLength}
          />
          {rightIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onRightIconPress}
              style={styles.iconContainer}
            >
              <Image
                source={rightIcon}
                style={styles.icon}
                tintColor={colors.appSecondary}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(IconTextInput);

const styles = StyleSheet.create({
  textInputPlaceholder: {
    fontSize: getScaledFontSize(16),
    lineHeight: getScaledFontSize(24),
    fontFamily: fonts.fontRegular,
    color: colors.gray,
  },
  requiredText: {
    color: colors.appSecondary,
  },
  secureInputContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.secondaryBorder,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  countryPickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  countryCodeText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(16),
    color: colors.gray,
    fontFamily: fonts.fontRegular,
  },
  textStyle: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(14),
    backgroundColor: colors.white,
    flex: 1,
    lineHeight: getScaledFontSize(16),
    height: 48,
    textAlignVertical: "center",
    paddingVertical: 0,
  },
  multilineTextInput: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(14),
    backgroundColor: colors.white,
    minHeight: 40,
    maxHeight: 120,
    textAlignVertical: "top",
    lineHeight: getScaledFontSize(19),
    paddingVertical: 5,
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
    paddingVertical: 5,
    justifyContent: "center",
  },
  icon: {
    height: 25,
    width: 25,
  },
});
