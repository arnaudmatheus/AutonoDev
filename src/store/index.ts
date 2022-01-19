import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { UserState } from './ducks/user/types';
import { FavState } from './ducks/books/types';
import rootReducer from './ducks/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export interface ApplicationState {
  books: FavState;
}
const sagaMiddleware = createSagaMiddleware();

let middleware: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);
export default store;
