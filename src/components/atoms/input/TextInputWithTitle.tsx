import React, { memo, useState } from "react";
import {
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
import { getScaledFontSize } from "../../../library/utils/globalFunctions";
import { globalStyleDefinitions } from "../../../library/styles/globalStyleDefinitions";

interface iProps {
  placeholder: string;
  text: string;
  value: string;
  onChangeText: (val: string) => any;
  multiline?: boolean;
  customStyle?: ViewStyle;
  caretHidden?: boolean;
  textAlign?: any;
  secureEntry?: boolean;
  customTextStyles?: TextStyle;
  isEditable?: boolean;
  isError?: boolean;
  isNumber?: boolean;
  showCountryPicker?: any;
  countryCode?: any;
  isRequired?: boolean;
}

const TextInputWithTitle = ({
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
  isError,
  isNumber,
  showCountryPicker,
  countryCode,
  isRequired,
}: iProps) => {
  const [isSecured, setIsSecured] = useState(false);

  const onViewIconPress = () => {
    setIsSecured(!isSecured);
  };

  return (
    <View
      key={`textInput ${placeholder}`}
      style={{
        marginTop: globalStyleDefinitions.commonItemsMargin.margin,
        ...customStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Text style={styles.textInputPlaceholder}>
          {text}
          {isRequired && <Text style={{ color: colors.appSecondary }}>*</Text>}
        </Text>
      </View>
      {countryCode ? (
        <View
          style={[
            styles.secureInputContainer,
            {
              ...customTextStyles,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={showCountryPicker}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              borderRadius: 20,
              height: 30,
              width: 30,
              overflow: "hidden",
            }}
          >
            <CountryFlag isoCode={countryCode?.code} size={30} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 5,
              fontSize: getScaledFontSize(13),
              lineHeight: getScaledFontSize(16),
              color: colors.gray,
              fontFamily: fonts.fontRegular,
            }}
          >
            {countryCode?.dial_code}
          </Text>
          <TextInput
            style={styles.textStyle}
            value={value}
            textAlign={textAlign ? textAlign : "left"}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText1}
            caretHidden={caretHidden}
            keyboardType={isNumber ? "number-pad" : "default"}
            editable={isEditable}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
          />
        </View>
      ) : secureEntry ? (
        <View
          style={[
            styles.secureInputContainer,
            {
              ...customTextStyles,
            },
          ]}
        >
          <TextInput
            style={styles.textStyle}
            value={value}
            textAlign={textAlign ? textAlign : "left"}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.secondaryText1}
            caretHidden={caretHidden}
            secureTextEntry={!isSecured}
            keyboardType={isNumber ? "number-pad" : "default"}
            editable={isEditable}
            multiline={multiline}
            numberOfLines={multiline ? 4 : 1}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={onViewIconPress}
            style={styles.iconContainer}
          >
            <Feather
              name={isSecured ? "eye" : "eye-off"}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          style={[
            styles.textInputStyle,
            {
              height: multiline ? 150 : 45,
              ...customTextStyles,
            },
          ]}
          value={value}
          textAlign={textAlign ? textAlign : "left"}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.secondaryText1}
          caretHidden={caretHidden}
          secureTextEntry={isSecured}
          keyboardType={isNumber ? "number-pad" : "default"}
          editable={isEditable}
          multiline={multiline}
          numberOfLines={multiline ? 4 : 1}
        />
      )}
    </View>
  );
};

export default memo(TextInputWithTitle);

const styles = StyleSheet.create({
  textInputPlaceholder: {
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(17.5),
    fontFamily: fonts.fontMedium,
    color: colors.gray1,
    marginLeft: 2,
  },
  secureInputContainer: {
    borderRadius: 8,
    backgroundColor: colors.white,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    marginTop: 2,
  },
  textStyle: {
    fontFamily: fonts.fontRegular,
    color: colors.black,
    fontSize: getScaledFontSize(13),
    lineHeight: getScaledFontSize(15.5),
    backgroundColor: colors.white,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flex: 1,
  },
  textInputStyle: {
    borderRadius: 8,
    paddingHorizontal: 10,
    fontFamily: fonts.fontRegular,
    fontSize: getScaledFontSize(13),
    lineHeight: getScaledFontSize(15.5),
    height: 45,
    color: colors.black,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.buttonBorder,
    marginTop: 2,
  },
  eyeIcon: {
    fontSize: getScaledFontSize(20),
    color: colors.gray,
  },
  iconContainer: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    // width: '10%',
    height: "100%",
    paddingRight: 10,
  },
});
