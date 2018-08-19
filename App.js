import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    );
  }
}
