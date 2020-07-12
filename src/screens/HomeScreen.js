import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = (props) => {
  const {
    navigation: { navigate }
  } = props;

  // TouchableOpacity Component Example
  // <TouchableOpacity onPress={() => navigate('List')}>
  //   <Text> GO TO LIST DEMO </Text>
  // </TouchableOpacity>;
  return (
    <View>
      <Button title="Go to components screen" onPress={() => navigate('Components')} />
      <Button title="Go to list screen" onPress={() => navigate('List')} />
      <Button title="Go to image screen" onPress={() => navigate('Image')} />
      <Button title="Go to counter screen" onPress={() => navigate('Counter')} />
      <Button title="Go to color screen" onPress={() => navigate('Color')} />
      <Button title="Go to square screen" onPress={() => navigate('Square')} />
      <Button title="Go to square reducer screen" onPress={() => navigate('SquareReducer')} />
      <Button title="Go to count reducer screen" onPress={() => navigate('CountReducer')} />
      <Button title="Go to text screen" onPress={() => navigate('Text')} />
      <Button title="Go to box model screen" onPress={() => navigate('BoxModel')} />
      <Button title="Go to flexbox model screen" onPress={() => navigate('FlexboxModel')} />
      <Button title="Go to position model screen" onPress={() => navigate('PositionModel')} />
      <Button
        title="Go to screen model exercise screen"
        onPress={() => navigate('ScreenModelExercise')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

HomeScreen.propTypes = {
  navigate: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

HomeScreen.defaultProps = {
  navigate: () => {}
};
