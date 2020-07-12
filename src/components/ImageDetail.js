/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail = (props) => {
  const { title, imageSource, imageScore } = props;
  return (
    <View>
      <Image source={imageSource} />
      <Text> {title} </Text>
      <Text> Image Score - {imageScore} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetail;

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.number.isRequired,
  imageScore: PropTypes.number.isRequired
};
