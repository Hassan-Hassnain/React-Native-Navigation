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

import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
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

const DrawerStack = createDrawerNavigator();
const DrawerStackScreens = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Home" component={TabStackScreens} />
      <DrawerStack.Screen name="Drawer Screen 1" component={DrawerScreen1} />
      <DrawerStack.Screen name="Drawer Screen 2" component={DrawerScreen2} />
    </DrawerStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      {/* <HomeStackScreens /> */}
      <DrawerStackScreens />
      {/* <TabStackScreens /> */}
    </NavigationContainer>
  );
}

export default App;

// export default Home;
// declare const global: {HermesInternal: null | {}};

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
