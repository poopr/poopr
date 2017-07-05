/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const Platform = require('Platform');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class severity extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: {
        latitude: 55.676098,
        longitude: 12.568337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>
          How much do you need to go?
        </Text>

        <Button
          style = {styles.button}
          title="Not that much 😣"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style = {styles.button}
          title="I need to go 😫"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style = {styles.button}
          title="A lot!! 😳"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style = {styles.button}
          title="Now!!!!!!!! 😱"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    backgroundColor: 'transparent',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  button:{
    // color: Blue,
    textAlign: 'center',
    padding: 40,
    fontSize: 68,
    width: 50,
    height: 50,
  },
});

AppRegistry.registerComponent('severity', () => severity);
