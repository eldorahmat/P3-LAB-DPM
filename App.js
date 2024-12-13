import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from './src/screens/OrderScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="OrderScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
