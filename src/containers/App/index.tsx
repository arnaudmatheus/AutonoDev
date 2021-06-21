import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from '../../routes/__Routes';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import store from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

const App = () => (
  <Provider store = {store}>
    <PersistGate persistor = {persistor}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </BrowserRouter>

    </PersistGate>

  </Provider>
);

export default App;
