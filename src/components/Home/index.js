import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainPhotoButton from '../MainPhotoButton';

export default () => {
  const options = [
    {
      id: 4,
      text: 'Warm Up',
      photo: require('../../images/background/warmup.png')
    },
    {
      id: 1,
      text: 'Beginner',
      photo: require('../../images/background/beginner.png')
    },
    {
      id: 2,
      text: 'Intermediate',
      photo: require('../../images/background/intermediate.png')
    },
    {
      id: 3,
      text: 'Advanced',
      photo: require('../../images/background/advanced.png')
    }
  ];
  return (
    <View style={styles.container}>
      {options.map(option => (
        <MainPhotoButton key={option.id} {...option} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
