import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';

const Guest = () => (
  <div>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Redirect to="/login" />
    </Switch>
  </div>
);

export default Guest;
