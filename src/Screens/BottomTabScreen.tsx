/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Details from './Details';
import TabScreen1 from './TabScreen1';

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

// const TabStack = createBottomTabNavigator();
const TabStack = createMaterialBottomTabNavigator();
const TabStackScreens = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      activeColor="blue" //"#f0edf6"
      inactiveColor="green" //"#3e2465"
      barStyle={{backgroundColor: 'white'}}>
      <TabStack.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <TabStack.Screen
        name="TabScreen1"
        component={TabScreen1}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabStackScreens;


