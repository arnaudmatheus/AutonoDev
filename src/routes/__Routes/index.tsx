import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../../containers/LandingPage';
import UserPage from '../../containers/UserPage';
import SearchPage from '../../containers/SearchPage';
import GraphicPage from '../../containers/GraphicPage';
import Favorite from '../../containers/FavoritesPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/graphic" component={GraphicPage} />
      <Route exact path="/fav" component={Favorite} />

      <Redirect from="*" to="/" />
    </Switch>
  );
}
