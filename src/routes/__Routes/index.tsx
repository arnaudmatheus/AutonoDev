import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ExampleExample from '../../containers/ExampleExample';
import LandingPage from '../../containers/LandingPage';
import UserPage from '../../containers/UserPage';
import SearchPage from '../../containers/SearchPage';
import GraphicPage from '../../containers/GraphicPage';
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/graphic" component={GraphicPage} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
