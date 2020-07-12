import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.subHeaderStyle}>Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <Text style={styles.subHeaderStyle}>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Text style={styles.subHeaderStyle}>My name is {name} </Text>
      {password.length < 4 ? (
        <Text style={styles.subHeaderStyle}>Password must be longer than 4 characters</Text>
      ) : (
        <Text style={styles.subHeaderStyle}>My password is {password} </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default TextScreen;
