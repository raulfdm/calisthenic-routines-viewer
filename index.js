import { Navigation } from 'react-native-navigation';

import Home from './src/screens/Home';
import Routines from './src/screens/Routines';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Routines', () => Routines);

Navigation.startSingleScreenApp({
  screen:{
    screen: 'Home',
    title: 'Home'
  }
})
