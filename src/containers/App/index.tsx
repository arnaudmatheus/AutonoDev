import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from '../../routes/__Routes';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import store from '../../store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../../global';
import 'react-toastify/dist/ReactToastify.css';

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Routes />
          </Switch>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
