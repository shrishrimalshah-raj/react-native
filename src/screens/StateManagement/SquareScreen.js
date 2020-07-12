/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCRENEMT = 15;

const SquareScreen = (props) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red': {
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      }
      case 'blue': {
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        break;
      }
      case 'green': {
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        break;
      }
      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCRENEMT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCRENEMT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INCRENEMT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCRENEMT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INCRENEMT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCRENEMT)}
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
