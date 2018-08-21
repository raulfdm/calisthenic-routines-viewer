import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Link } from 'react-router-native';

export default ({ text, photo, path }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.warn('hehe')}>
        <Link to={`/routine/${path}`}>
          <ImageBackground source={photo} style={styles.photo}>
            <Text style={styles.text}>{text}</Text>
          </ImageBackground>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 2
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 28
  },
  photo: {
    width: Dimensions.get('screen').width / 2,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
