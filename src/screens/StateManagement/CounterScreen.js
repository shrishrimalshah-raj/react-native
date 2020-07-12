import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CounterScreen = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.text}> Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;

CounterScreen.propTypes = {};

CounterScreen.defaultProps = {};
