import { all } from 'redux-saga/effects';
import books from './books';

export default function* rootSaga() {
  yield all([books]);
}
