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
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Details from './Details';
import TabScreen1 from './TabScreen1';

const HomeStack = createStackNavigator();
const HomeStackScreens = (props: any) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerLeft: () => (
        //       <Icon.Button
        //         name="ios-menu"
        //         size={25}
        //         backgroundColor="#009387"
        //         onPress={() => props.navigation.openDrawer()}></Icon.Button>
        //     ),
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => props.navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

// const TabStack = createBottomTabNavigator();
const TabStack = createMaterialBottomTabNavigator();
const TabStackScreens = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      style={{backgroundColor: 'black', height: '9%'}}
      
      >
      <TabStack.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          tabBarBadge: true,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <TabStack.Screen
        name="Notifications"
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
