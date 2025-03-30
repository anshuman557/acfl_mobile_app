import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../library/styles/commonStyles';
import imagePath from '../../../library/constants/imagePath';
import {getScaledFontSize} from '../../../library/utils/globalFunctions';
import {colors} from '../../../library/styles/colors';

const Onboarding = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 3}}>
        <Image source={imagePath.appLogo} />
      </View>
      <View style={styles.InnerCARD}>
        <Text style={styles.parterntext}>Are you a Partner?</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            marginVertical: 20,
          }}>
          <TouchableOpacity style={styles.loginCard}>
            <Text style={styles.logtext}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.JoinCard}>
            <Text style={[styles.logtext, {color: colors.primaryBlue}]}>
              Join us{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text style={{fontSize: 18, color: '#000'}}>Have a tracker id?</Text>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: colors.primaryBlue,
                fontSize: 18,
              }}>
              Track here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.wrapperContainer,
    ...commonStyles.fullInnerContainer,
  },
  InnerCARD: {
    alignItems: 'center',
    flex: 2,
  },
  parterntext: {
    fontSize: getScaledFontSize(12),
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: 10,
  },
  loginCard: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: colors.primaryBlue,
    width: '40%',
    alignItems: 'center',
  },
  logtext: {
    color: colors.white,
    fontSize: getScaledFontSize(12),
  },
  JoinCard: {
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    width: '40%',
    alignItems: 'center',
  },
});
