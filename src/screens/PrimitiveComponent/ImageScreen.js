/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ImageDetail from '../../components/ImageDetail';

const ImageScreen = (props) => {
  const {
    navigation: { navigate }
  } = props;

  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../../assets/forest.jpg')}
        imageScore={7}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../../assets/beach.jpg')}
        imageScore={8}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../../assets/mountain.jpg')}
        imageScore={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;

ImageScreen.propTypes = {
  navigate: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

ImageScreen.defaultProps = {
  navigate: () => {}
};
