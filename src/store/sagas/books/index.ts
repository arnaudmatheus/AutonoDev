import { BookActionsCreators } from '../../ducks/books';
import { all, put, takeLatest, select } from 'redux-saga/effects';

function* addBookToFav({
  payload,
}: ReturnType<typeof BookActionsCreators.addBookToFav.request>) {
  try {
    const { books } = yield select(state => state.books);
    yield put(BookActionsCreators.addBookToFav.success(payload));
  } catch (error) {
    console.log('error');
    yield put(BookActionsCreators.addBookToFav.failure('error'));
  }
}

function* removeBookFromFav({
  payload,
}: ReturnType<typeof BookActionsCreators.removeBookFromFav.request>) {
  try {
    yield put(BookActionsCreators.removeBookFromFav.success(payload));
  } catch (error) {
    yield put(BookActionsCreators.removeBookFromFav.failure('error'));
  }
}

export default all([
  takeLatest(BookActionsCreators.addBookToFav.request, addBookToFav),
  takeLatest(BookActionsCreators.removeBookFromFav.request, removeBookFromFav),
]);
