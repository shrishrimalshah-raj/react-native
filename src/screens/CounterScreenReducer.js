import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  count: 0
};

const reducer = (state, action) => {
  // state === {...state, red: state.red + action.amount}
  // action === {type: 'red' , payload: '15' }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreenReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text style={styles.text}> Current Count: {count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreenReducer;

CounterScreenReducer.propTypes = {};

CounterScreenReducer.defaultProps = {};
