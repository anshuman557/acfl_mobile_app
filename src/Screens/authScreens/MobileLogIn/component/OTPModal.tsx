import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTPModal = ({visible, onClose, otp, setOtp, handleVerifyOTP}: any) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter OTP</Text>
          <OTPInputView
            style={styles.otpInput}
            pinCount={6}
            autoFocusOnLoad
            code={otp}
            onCodeChanged={setOtp}
            codeInputFieldStyle={styles.otpBox}
          />
          <TouchableOpacity onPress={() => Alert.alert('OTP Resent!')}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerifyOTP}>
            <Text style={styles.verifyText}>Verify OTP</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
   
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  otpInput: {
    width: '100%',
    alignSelf: 'center',
    height: '20%',
  },
  otpBox: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    color: '#000',
  },
  resendText: {
    color: 'blue',
    marginTop: 10,
    textAlign:'left'
  },
  verifyButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius:20,
    marginTop: 10,
    width:'90%',
    alignItems:'center'
  },
  verifyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeText: {
    color: 'red',
    marginTop: 10,
  },
});

export default OTPModal;
