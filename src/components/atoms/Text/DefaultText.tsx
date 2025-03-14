import {StyleSheet, Text, View} from 'react-native';
import {getScaledFontSize} from '../../../library/utils/globalFunctions';
import { colors } from '../../../library/styles/colors';
import { fonts } from '../../../library/styles/fonts';

export const DefaultText = ({text}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Text style={styles.subText}>
        •{" "}
      </Text>
      <Text
        style={[
          styles.subText,
          {flex:1},
        ]} >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subText: {
    fontSize: getScaledFontSize(14),
    lineHeight: getScaledFontSize(20),
    color: colors.gray2,
    fontFamily: fonts.fontMedium,marginLeft:7
  },
});
