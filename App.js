import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './ContactList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'stretch'
  },
});
