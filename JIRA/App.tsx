import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          key="Login"
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          key="Register"
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
