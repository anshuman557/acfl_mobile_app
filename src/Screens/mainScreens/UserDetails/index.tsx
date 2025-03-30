import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import commonStyles from '../../../library/styles/commonStyles';
import CommonHeader from '../../../components/atoms/header/CommonHeader';
import {Home} from 'lucide-react-native';
import {colors} from '../../../library/styles/colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getScaledFontSize} from '../../../library/utils/globalFunctions';
import imagePath from '../../../library/constants/imagePath';
import IconTextInput from '../../../components/atoms/input/IconTextInput';
const DATA = [
  {
    title: 'FirstName',
    details: 'Leo',
  },

  {
    title: 'LastName',
    details: 'Singh',
  },

  {
    title: 'Email',
    details: 'anshuman577@gmail.com',
  },

  {
    title: 'Mobile',
    details: '6284580058',
  },

  {
    title: 'Pincode',
    details: '140001',
  },

  {
    title: 'City',
    details: 'KOLKATA',
  },

  {
    title: 'State',
    details: 'WEST BENGAL',
  },

  {
    title: 'Address',
    details: 'Kolkata bada bazar',
  },
];
const UserDetails = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const backNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <CommonHeader
        text="Hello!,Anshuman Singh"
        onPress={backNavigation}
        Icon={<Home color={colors.black} size={25} />}
      />
      <View style={styles.InnerContainer}>
        <Text style={styles.userText}>User Details</Text>
        <ScrollView>
          {DATA.map((item, index) => {
            return (
              <View style={{marginVertical: 5}}>
                <Text
                  style={{color: '#000', fontWeight: 'bold', marginLeft: 10}}>
                  {item.title}
                </Text>

                <IconTextInput
                  key={index}
                  isEditable={false}
                  value={item.details}
                />
              </View>
            );
          })}
          <View style={styles.applogoCard}>
            <Text style={styles.poweredText}>Powered By</Text>
            <Image
              source={imagePath.appLogo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={styles.logoutCard}>
            <Text style={styles.logoutTEXT}>Logout</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.wrapperContainer,
  },
  InnerContainer: {
    ...commonStyles.fullInnerContainer,
  },
  userText: {
    color: colors.black,
    fontSize: getScaledFontSize(16),
    fontWeight: 'bold',
  },

  applogoCard: {
    alignItems: 'center',
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
  logoutCard: {
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    margin: 10,
  },
  logoutTEXT: {
    fontSize: getScaledFontSize(12),
    fontWeight: 'bold',
    color: colors.primaryBlue,
  },
});

export default UserDetails;
