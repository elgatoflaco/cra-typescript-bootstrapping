import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home';

const Main = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Redirect to="/" />
  </Switch>
);

export default Main;
