import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feed from '../Screens/Feed';



export default class App extends React.Component() {
  render(){
  return (
    <View style={styles.container}>

      <Feed/>
  
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
