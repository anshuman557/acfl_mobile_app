import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/mainScreens/home';
import Splash from '../Screens/authScreens/splashScreen';
import UserDetails from '../Screens/mainScreens/UserDetails';
import Onboarding from '../Screens/authScreens/Onboarding';
import { navigationStrings } from './navigationStrings';
import MobileLogIn from '../Screens/authScreens/MobileLogIn';
import BorrowersInfo from '../Screens/mainScreens/Borrower\'sInfo';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationStrings?.Splash ?? 'Splash'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings?.Home ?? 'Home'} component={Home} />
      <Stack.Screen name={navigationStrings?.Splash ?? 'Splash'} component={Splash} />
      <Stack.Screen name={navigationStrings?.UserDetails ?? 'UserDetails'} component={UserDetails} />
      <Stack.Screen name={navigationStrings?.Onboarding ?? 'Onboarding'} component={Onboarding} />
      <Stack.Screen name={navigationStrings?.MobileLogIN ?? 'MobileLogIn'} component={MobileLogIn} />
      <Stack.Screen name={navigationStrings?.BorrowersInfo ?? 'BorrowersInfo'} component={BorrowersInfo} />
    </Stack.Navigator>
  );
};


export default MyStack;