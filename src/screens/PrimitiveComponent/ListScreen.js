import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {
      name: 'Friend 1',
      age: 20
    },
    {
      name: 'Friend 2',
      age: 21
    },
    {
      name: 'Friend 3',
      age: 22
    },
    {
      name: 'Friend 4',
      age: 24
    },
    {
      name: 'Friend 5',
      age: 25
    },
    {
      name: 'Friend 6',
      age: 26
    },
    {
      name: 'Friend 7',
      age: 27
    },
    {
      name: 'Friend 8',
      age: 28
    },
    {
      name: 'Friend 9',
      age: 29
    },
    {
      name: 'Friend 10',
      age: 30
    }
  ];

  return (
    <View>
      <Text style={styles.textStyle}> List Screen! </Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={friends}
        renderItem={({ item: { name, age } }) => {
          return (
            <Text>
              {name} - Age {age}
            </Text>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginBottom: 10
  },
  subHeaderStyle: {
    marginVertical: 50
  }
});
export default ListScreen;
