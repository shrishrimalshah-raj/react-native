import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const username = 'Raj!';
  const hello = <Text>Hello to you!</Text>;

  return (
    <View>
      <Text style={styles.textStyle}> Getting started with React Native! </Text>
      <Text style={styles.subHeaderStyle}>My name is {username}</Text>
      {hello}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
