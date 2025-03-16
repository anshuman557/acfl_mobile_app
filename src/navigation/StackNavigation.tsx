import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';
import Splash from '../Screens/splashScreen';
import { navigationStrings } from './navigationStrings';
import UserDetails from '../Screens/UserDetails';
import Onboarding from '../Screens/Onboarding';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationStrings?.Splash ?? 'Splash'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings?.Home ?? 'Home'} component={Home} />
      <Stack.Screen name={navigationStrings?.Splash ?? 'Splash'} component={Splash} />
      <Stack.Screen name={navigationStrings?.UserDetails ?? 'UserDetails'} component={UserDetails} />
      <Stack.Screen name={navigationStrings?.Onboarding ?? 'Onboarding'} component={Onboarding} />
    </Stack.Navigator>
  );
};


export default MyStack;