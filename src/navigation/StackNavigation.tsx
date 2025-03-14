import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';
import Splash from '../Screens/splashScreen';
import UserDetails from '../Screens/UserDetails';
import { navigationStrings } from './navigationStrings';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationStrings?.Splash ?? 'Splash'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings?.Home ?? 'Home'} component={Home} />
      <Stack.Screen name={navigationStrings?.Splash ?? 'Splash'} component={Splash} />
      <Stack.Screen name={navigationStrings?.UserDetails ?? 'UserDetails'} component={UserDetails} />
    </Stack.Navigator>
  );
};


export default MyStack;