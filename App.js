import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Router from "./Router";


export default class App extends React.Component {
 
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}