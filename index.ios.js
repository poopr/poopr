/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class pooper extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
           style={styles.map}
            initialRegion={{
             latitude: 55.676098,
             longitude: 12.568337,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
            }}
         />
        <Text style={styles.welcome}>
          Welcome to Pooper 💩😊!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
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
});

AppRegistry.registerComponent('pooper', () => pooper);
