/* eslint-disable no-unused-expressions */
import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCRENEMT = 15;

const INITIAL_STATE = {
  red: 0,
  green: 0,
  blue: 0
};

const reducer = (state, action) => {
  // state === {...state, red: state.red + action.amount}
  // action === {type: 'red' , payload: '15' }

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCRENEMT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCRENEMT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCRENEMT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCRENEMT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCRENEMT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCRENEMT })}
      />
      <View
        style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SquareScreen;

SquareScreen.propTypes = {};

SquareScreen.defaultProps = {};
