import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './styles';

import App from './App';
import Main from './components/Main';
import Routine from './components/Routine';
import routines from './globals/routines';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route
          path="/routine/:level"
          exact
          render={props => {
            const { level } = props.match.params;
            const routine = routines[level];

            return <Routine routine={routine} />;
          }}
        />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
