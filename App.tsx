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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import MainTabScreen from './src/Screens/MainTabScreen'
import DrawerScreen1 from './src/Screens/DrawerScreen1';
import DrawerScreen2 from './src/Screens/DrawerScreen2';
import TabScreen1 from './src/Screens/TabScreen1';

const HomeStack = createStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

const DrawerStack = createDrawerNavigator();
const DrawerStackScreens = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Home" component={MainTabScreen} />
      <DrawerStack.Screen name="Drawer Screen 1" component={DrawerScreen1} />
      <DrawerStack.Screen name="Drawer Screen 2" component={DrawerScreen2} />
    </DrawerStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <DrawerStackScreens />
    </NavigationContainer>
  );
}

export default App;

