import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Home from './src/components/Home';
import RoutinePage from './src/components/RoutinePage';
import routines from './src/globals/routines';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="routine/:name"
            render={props => {
              const { name } = props.match.params;
              const nextRoutine = routines[name];
              console.log(nextRoutine);
              return <RoutinePage routine={nextRoutine} {...props} />;
            }}
          />
        </Switch>
      </NativeRouter>
    );
  }
}
