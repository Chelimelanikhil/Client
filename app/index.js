import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import ApplyLeave from '../components/ApplyLeave';
import Payslip from '../components/Payslip';
import MyApprovals from '../components/MyApprovals';
import CheckInOut from '../components/CheckInOut';
// Import other screens similarly



const index = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
        <Stack.Screen name="Payslip" component={Payslip} />
        <Stack.Screen name="MyApprovals" component={MyApprovals} />
        <Stack.Screen name="CheckInOut" component={CheckInOut} />
        {/* Add other screens similarly */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
