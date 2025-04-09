import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native';
import React, { useState } from 'react';
import commonStyles from '../../../library/styles/commonStyles';
import CommonHeader from '../../../components/atoms/header/CommonHeader';
import { ChartBar, CircleCheckBig, Home, X } from 'lucide-react-native';
import { colors } from '../../../library/styles/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getScaledFontSize } from '../../../library/utils/globalFunctions';
import imagePath from '../../../library/constants/imagePath';
import IconTextInput from '../../../components/atoms/input/IconTextInput';
import { CheckBox } from 'react-native-elements';

const BorrowersInfo = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [formData, setFormData] = useState<any>({
    ContactNo: '',
    AadharNo: '',
    title: '',
    FullName: '',
    AltContactNo: '',
    Email: '',
    Gender: '',
    MaritalStatus: '',
    DOB: '',
    Age: '',
    PANNo: '',
    VoterId: '',
    PinCode: '',
    City: '',
    District: '',
    State: '',
    Address: '',
    Landmark: '',
    OwnershipType: '',
    YearOfResidence: '',
    HouseType: '',
    LoanType: '',
    LoanAccountRequest: '',
    LoanTenure: '',
    EmiComfort: '',
    LoanPurpose: '',
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const titles = ['Mr.', 'Mrs.', 'Smt.', 'Ms.'];
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
        <Text style={styles.userText}>Borrower's Info</Text>
        <ScrollView>
          {Object.keys(formData).map((key, index) => (
            <View key={index} style={{ marginVertical: 5 }}>
              <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').trim()} *</Text>
              {key === 'title' ? (
                <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
                  <Text style={{color:'black'}}>{formData[key] || 'Select Title'}</Text>
                </TouchableOpacity>
              ) : (
                <IconTextInput
                  isEditable={true}
                  value={formData[key]}
                  onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                />
              )}
            </View>
          ))}
          <CheckBox
            title="I/We declare that all information provided is true, correct, and complete."
            checked={formData.termsAccepted}
            onPress={() => setFormData({ ...formData, termsAccepted: !formData.termsAccepted })}
          />
          <View style={styles.applogoCard}>
            <Text style={styles.poweredText}>Powered By</Text>
            <Image source={imagePath.appLogo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.logoutCard}>
            <Text style={styles.logoutTEXT}>Submit</Text>
          </View>
        </ScrollView>
      </View>
      <Modal visible={dropdownVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.selectText}>Select Title</Text>
              <TouchableOpacity onPress={() => setDropdownVisible(false)}>
                <X size={24} color={colors.black} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={titles}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    setFormData({ ...formData, title: item });
                    setDropdownVisible(false);
                  }}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
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
  label: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dropdown: {
    padding: 12,
    borderRadius: 15,
    backgroundColor:colors.disableText,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  selectText: {
    fontWeight: 'bold',
    color:'black',
  },
  optionItem: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: colors.black,
  },
});

export default BorrowersInfo;