import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainPhotoButton from 'components/MainPhotoButton';
import SCREENS from 'globals/screens';

export default props => {
  const navigateToRoutines = title => () => {
    const NEW_ROUTINE = Object.assign({}, SCREENS.ROUTINES, { title });
    props.navigator.push(NEW_ROUTINE);
  };
  const options = [
    {
      id: 4,
      title: 'Warm Up',
      photo: require('img/background/warmup.png'),
      path: 'warmup'
    },
    {
      id: 1,
      title: 'Beginner',
      photo: require('img/background/beginner.png'),
      path: 'beginner'
    },
    {
      id: 2,
      title: 'Intermediate',
      photo: require('img/background/intermediate.png'),
      path: 'intermediate'
    },
    {
      id: 3,
      title: 'Advanced',
      photo: require('img/background/advanced.png'),
      path: 'advanced'
    }
  ];
  return (
    <View style={styles.container}>
      {options.map(option => (
        <MainPhotoButton
          key={option.id}
          {...option}
          onPress={navigateToRoutines(option.title)}
        />
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
