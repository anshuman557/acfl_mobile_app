import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import commonStyles from '../../../library/styles/commonStyles';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';
import { colors } from '../../../library/styles/colors';
import IconTextInput from '../../../components/atoms/input/IconTextInput';
import OTPModal from './component/OTPModal';
import { useNavigation } from '@react-navigation/native';
import { navigationStrings } from '../../../navigation/navigationStrings';

const MobileLogIn = () => {
    const [mobileNo, setMobileNo] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const navigation = useNavigation<any>();

    const handleVerifyOTP = () => {
        if (otp.length === 6) {
            navigation.navigate(navigationStrings.Home);
        } else {
            Alert.alert('Please enter a valid 6-digit OTP');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerCard}>
                <Text style={styles.logintext}>LogIN</Text>
            </View>
            <View>
                <Text style={styles.mobiletext}>Mobile Number</Text>
                <IconTextInput
                    placeholder='Mobile Number'
                    value={mobileNo}
                    customTextStyles={{ color: '#000' }}
                    onChangeText={setMobileNo}
                /> 
            </View>
            <TouchableOpacity style={styles.otpCard} onPress={() => setModalVisible(true)}>
                <Text style={styles.otpText}>Send OTP</Text>
            </TouchableOpacity>
            <OTPModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
                otp={otp} 
                setOtp={setOtp} 
                handleVerifyOTP={handleVerifyOTP} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        ...commonStyles.wrapperContainer,
        ...commonStyles.fullInnerContainer,
        justifyContent: 'center',
    },
    innerCard: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logintext: {
        fontSize: getScaledFontSize(18),
        color: colors.primaryBlue,
        fontWeight: 'bold',
    },
    mobiletext: {
        fontSize: getScaledFontSize(12),
        color: colors.black,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    otpCard: {
        backgroundColor: colors.primaryBlue,
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 30,
    },
    otpText: {
        fontSize: getScaledFontSize(14),
        fontWeight: 'bold',
        color: colors.white,
    }
});

export default MobileLogIn;
