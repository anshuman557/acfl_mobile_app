import React, {memo} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextStyle,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {colors} from '../../../library/styles/colors';
import {fonts} from '../../../library/styles/fonts';
import {getScaledFontSize} from '../../../library/utils/globalFunctions';
import imagePath from '../../../library/constants/imagePath';
import {UserCircle2} from 'lucide-react-native';

interface iProps {
  onPress?: () => void;
  text?: string;
  textstyle?: TextStyle;
  Icon:any;
}

const CommonHeader = ({onPress, text, textstyle,Icon}: iProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image style={styles.icon} source={imagePath.appLogo} />

        <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
         {Icon}
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, textstyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.disableText,
    height: 150,
    padding: 16,
    width: '100%',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 100,
    width: 150,
    resizeMode: 'contain',
  },
  iconWrapper: {
    padding: 10,
    marginBottom:30
  },
  title: {
    color: colors.black,
    fontSize: getScaledFontSize(12),
    fontWeight:'bold'
  },
});

export default memo(CommonHeader);
