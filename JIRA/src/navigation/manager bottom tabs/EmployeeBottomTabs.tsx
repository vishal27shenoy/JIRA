import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Project from '../../screens/Manager/Project';
import Profile from '../../screens/Manager/Profile';
import Issues from '../../screens/Manager/Issues';
import Notifications from '../../screens/Manager/Notifications';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Myicon from '../../helper/Myicon';
import {color} from '../../constants/color';
import {font} from '../../constants/font';
const Tab = createBottomTabNavigator();
const routes = [
  {
    name: 'Project',
    Component: Project,
    iconName: 'folder',
    iconType: 'Feather',
  },
  {
    name: 'Issues',
    Component: Issues,
    iconName: 'stack',
    iconType: 'Octicons',
  },
  {
    name: 'Notification',
    Component: Notifications,
    iconName: 'notifications-none',
    iconType: 'MaterialIcons',
  },
  {
    name: 'Profile',
    Component: Profile,
    iconName: 'user',
    iconType: 'AntDesign',
  },
];
const EmployeeBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: responsiveHeight(7),
          paddingBottom: responsiveHeight(1),
        },
        tabBarLabelStyle: {
          marginTop: -responsiveHeight(1),
        },
        headerTitleStyle: {
          fontFamily: font.BOLD,
          color: color.SECONDARY,
        },
      }}>
      {routes.map(item => {
        return (
          <Tab.Screen
            name={item.name}
            component={Project}
            options={{
              tabBarLabel: item.name,
              tabBarIcon: ({focused}) => (
                <Myicon
                  type={item.iconType}
                  name={item.iconName}
                  size={responsiveHeight(2)}
                  color={focused ? color.ACTIVE_ICON : color.SECONDARY}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default EmployeeBottomTabs;
const styles = StyleSheet.create({});
