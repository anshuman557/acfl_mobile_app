import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonHeader from '../../../components/atoms/header/CommonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { colors } from '../../../library/styles/colors';
import { Home } from 'lucide-react-native';
import commonStyles from '../../../library/styles/commonStyles';

const completeApplication = () => {
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
        </View>

  )
}

export default completeApplication;

const styles = StyleSheet.create({
    mainContainer: {
        ...commonStyles.wrapperContainer,
      },
})