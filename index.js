import { Navigation } from 'react-native-navigation';

import Home from './src/screens/Home';
import Routines from './src/screens/Routines';
import SCREENS from './src/globals/screens'

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Routines', () => Routines);

Navigation.startSingleScreenApp({
  screen: SCREENS.HOME
})
