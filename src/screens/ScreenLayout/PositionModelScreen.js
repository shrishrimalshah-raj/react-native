import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const PositionModelScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={(styles.textStyle, styles.redBackground)}> Child #1 </Text>
      <Text style={(styles.textStyle, styles.blueBackground)}> Child #2 </Text>
      <Text style={(styles.textStyle, styles.greyBackground)}> Child #3 </Text>
    </View>
  );
};

// position: 'relative' is default value,
// position: 'absolute',
// top: 10,
// bottom: 10,
// right: 10,
// left: 10,

// position: 'absolute',
// top: 0,
// bottom: 0,
// right: 0,
// left: 0,
// is similar to ...StyleSheet.absoluteFillObject
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red'
  },
  redBackground: {
    backgroundColor: 'red'
  },
  blueBackground: {
    backgroundColor: 'lightblue',
    fontSize: 16,
    ...StyleSheet.absoluteFillObject
  },
  greyBackground: {
    backgroundColor: 'lightgrey'
  }
});

export default PositionModelScreen;

PositionModelScreen.propTypes = {};

PositionModelScreen.defaultProps = {};
