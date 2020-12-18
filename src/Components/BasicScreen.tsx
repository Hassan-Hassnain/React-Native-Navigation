import React from 'react';
import {StatusBar, View, Text, Button, StyleSheet} from 'react-native';

export default (props: any) => {
  return (
    <View {...props.style} style={stl.screen}>
      <StatusBar barStyle="light-content" />
      <Text style={stl.name}>{props.screenName}</Text>
      {props.children}
    </View>
  );
};

const stl = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#252525',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    marginTop: 36,
    color: 'lightgreen',
  },
});
