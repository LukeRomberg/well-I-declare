/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

export default class App extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'test',
      description: 'test'
    };
  }
  async _onPressButton() {
    var response = await fetch('https://calm-everglades-65247.herokuapp.com/random')
    var phrase = await response.json()
    this.setState({phrase: phrase[0].saying, description: phrase[0].description});
  };

  render() {
    return (<View style={styles.container}>
      <Text style={styles.welcome}>
        Wecome to I Declare!
      </Text>
      <Text>
        {this.state.phrase}
      </Text>
      <Text>
        {this.state.description}
      </Text>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton.bind(this)} title="Click for a Southern-Style-Colloquialism"/>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'purple'
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});
