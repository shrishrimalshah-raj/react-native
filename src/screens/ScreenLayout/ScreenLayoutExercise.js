import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const ScreenLayoutExercise = (props) => {
  return (
    <>
      <View style={styles.mainViewStyle}>
        <Text style={styles.textApp}> Child #1 </Text>
      </View>

      <View style={styles.subViewStyle}>
        <View style={{ ...styles.textStyle, ...styles.redBackground }} />
        <View style={{ ...styles.textStyle, ...styles.blueBackground }} />
      </View>

      <View style={styles.mainViewStyle}>
        <View style={{ ...styles.textStyle, ...styles.greyBackground }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center'
  },
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textApp: {
    borderColor: 'black',
    borderWidth: 3,
    padding: 10
  },
  textStyle: {
    width: 50,
    height: 50
  },
  redBackground: {
    backgroundColor: 'red'
  },
  blueBackground: {
    backgroundColor: 'lightblue'
  },
  greyBackground: {
    backgroundColor: 'lightgrey'
  }
});

export default ScreenLayoutExercise;

ScreenLayoutExercise.propTypes = {};

ScreenLayoutExercise.defaultProps = {};
