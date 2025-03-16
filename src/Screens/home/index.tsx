import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../../library/styles/commonStyles';
import CommonHeader from '../../components/atoms/header/CommonHeader';
import {colors} from '../../library/styles/colors';
import {getScaledFontSize} from '../../library/utils/globalFunctions';
import {fonts} from '../../library/styles/fonts';
import imagePath from '../../library/constants/imagePath';
import iconPath from '../../library/constants/iconPath';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {navigationStrings} from '../../navigation/navigationStrings';
import { User, UserCircle2 } from 'lucide-react-native';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const onPress = () => {
    navigation.navigate(navigationStrings.UserDetails);
  };
  return (
    <View style={styles.mainContainer}>
      <CommonHeader text="Hello, Anshuman Singh!" onPress={onPress} Icon={<UserCircle2 color={colors.black} size={30}/>} />

      <View style={styles.innerCard}>
        <View style={styles.docCard}>
          <View>
            <Text style={styles.applicText}>Applications</Text>
            <Text style={styles.NoText}>63</Text>
          </View>
          <Image source={iconPath.documentIcon} />
        </View>

        <TouchableOpacity style={styles.ViewCard} activeOpacity={0.7}>
          <Text style={styles.ViewText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addText}>Create Application</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addText}>Complete Application</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addText}>Add CPV Info</Text>
        </TouchableOpacity>

        <View style={styles.applogoCard}>
          <Text style={styles.poweredText}>Powered By</Text>
          <Image
            source={imagePath.appLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
  innerCard: {
    ...commonStyles.fullInnerContainer,
  },
  docCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  applicText: {
    fontSize: getScaledFontSize(16),
    color: colors.black,
  },
  NoText: {
    fontSize: getScaledFontSize(18),
    color: colors.black,
    fontWeight: 'bold',
  },
  ViewCard: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: colors.primaryBlue,
    marginVertical: 20,
    alignItems: 'center',
  },
  ViewText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: getScaledFontSize(14),
    fontFamily: fonts.fontBold,
  },
  addButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  addText: {
    color: colors.primaryBlue,
    fontSize: getScaledFontSize(15),
    fontFamily: fonts.fontBold,
  },
  applogoCard: {
    alignItems: 'center',
    marginVertical: 100,
  },
  poweredText: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: getScaledFontSize(14),
    color: colors.black,
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default Home;
