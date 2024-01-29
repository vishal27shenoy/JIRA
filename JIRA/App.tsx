import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import EmployeeBottomTabs from './src/navigation/manager bottom tabs/EmployeeBottomTabs';
import {color} from './src/constants/color';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();
const App = () => {
  StatusBar.setBackgroundColor(color.PRIMARY);
  StatusBar.setBarStyle('dark-content');
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{animationEnabled: false, headerShown: false}}>
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
        <Stack.Screen
          component={EmployeeBottomTabs}
          name="employeebottomtabs"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
