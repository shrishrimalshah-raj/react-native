import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const BoxModelScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> Box Model Screen </Text>
    </View>
  );
};

// set margin on top and bottom
// marginVertical: 20,
// paddingVertical: 20,

// set margin on left and right
// marginHorizontal: 20
// paddingHorizontal: 20

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textStyle: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20
  }
});

export default BoxModelScreen;

BoxModelScreen.propTypes = {};

BoxModelScreen.defaultProps = {};
