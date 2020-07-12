import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = (props) => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ColorScreen;

ColorScreen.propTypes = {};

ColorScreen.defaultProps = {};
