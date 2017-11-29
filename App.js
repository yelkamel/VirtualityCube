/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ARKit } from 'react-native-arkit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCD04A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    margin: 15,
  },

  button: {
    margin: 10,
    backgroundColor: '#EF832B',
    borderRadius: 10,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      pos: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  handleButton = () => {
    this.setState(state => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    });
  };

  render() {
    if (!this.state.isOpen)
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>La YouVr</Text>
          <Text style={styles.welcome}>
            Veux tu laisser quelque chose ici ?
          </Text>

          <TouchableOpacity style={styles.button} onPress={this.handleButton}>
            <Text style={styles.instructions}>Oui</Text>
          </TouchableOpacity>
        </View>
      );

    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug // debug mode will show feature points detected and 3D axis
          planeDetection // turn on plane detection
          lightEstimation // turn on light estimation
        >
          <ARKit.Box
            pos={this.state.pos}
            shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
          />
        </ARKit>
        <View
          style={{
            height: 50,
            backgroundColor: '#FCD04A',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={styles.button} onPress={this.handleButton}>
            <Text style={styles.instructions}> Fermer </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
