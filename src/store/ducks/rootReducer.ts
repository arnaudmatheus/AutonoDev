import  storage  from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import user from './user';
import books from './books'
import persistReducer from 'redux-persist/lib/persistReducer';

const reducer = combineReducers({
  books
});

const Persistor = {
  key: "books",
  storage,
  transforms: [],
  blacklist: [],
}


export default persistReducer(Persistor,reducer);