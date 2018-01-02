/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
	Button,
	Alert,
  View
} from 'react-native';


export default class App extends Component<{}> {
	_onPressButton() {
	Alert.alert('You tapped the button!')
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Wecome to I Declare!
        </Text>
				<View style={styles.buttonContainer}>
           <Button
             onPress={this._onPressButton}
             title="Click for a Southern-Style-Colloquialism" />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'purple',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
});
