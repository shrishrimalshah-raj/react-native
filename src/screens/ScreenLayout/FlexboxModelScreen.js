import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const FlexboxModelScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={(styles.textStyle, styles.redBackground)}> Child #1 </Text>
      <Text style={(styles.textStyle, styles.blueBackground)}> Child #2 </Text>
      <Text style={(styles.textStyle, styles.greyBackground)}> Child #3 </Text>
    </View>
  );
};

// display: 'flex',
// default value of alignItems is 'stretch
// alignItems: 'stretch', ||
// alignItems: 'flex-start',
// alignItems: 'center',
// alignItems: 'flex-end',

// default value of flexDirection is 'column
// flexDirection: 'column',
// flexDirection: 'row',

// default value of flexDirection is 'column
// justifyContent: 'flex-start',
// justifyContent: 'flex-end',
// justifyContent: 'center',
// justifyContent: 'space-between',
// justifyContent: 'space-around',

// Parent Properties
// alignItems
// justifyContent
// flexDirection

// Child Properties
// flex
// flex: 1
// alignSelf
//  alignSelf: 'flex-start'
//  alignSelf: 'flex-end'
//  alignSelf: 'center'
//  alignSelf: 'stretch'

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
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  blueBackground: {
    backgroundColor: 'lightblue',
    alignSelf: 'flex-start'
  },
  greyBackground: {
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-end'
  }
});

export default FlexboxModelScreen;

FlexboxModelScreen.propTypes = {};

FlexboxModelScreen.defaultProps = {};
