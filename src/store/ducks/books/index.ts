import { Reducer } from 'redux';
import { ActionType, createAsyncAction } from 'typesafe-actions';
import { BookFavData, FavState, FavTypes, RemoveBookData } from './types';
import produce, { Draft } from 'immer';

const INITIAL_STATE: FavState = {
  books: [] as BookFavData[],
  loading: false,
};

export const BookActionsCreators = {
  addBookToFav: createAsyncAction(
    FavTypes.ADD_BOOKS_TO_FAV_REQUEST,
    FavTypes.ADD_BOOKS_TO_FAV_SUCCESS,
    FavTypes.ADD_BOOKS_TO_FAV_FAILURE,
  )<BookFavData, BookFavData, string>(),
  removeBookFromFav: createAsyncAction(
    FavTypes.REMOVE_BOOKS_FROM_FAV_REQUEST,
    FavTypes.REMOVE_BOOKS_FROM_FAV_SUCCESS,
    FavTypes.REMOVE_BOOKS_FROM_FAV_FAILURE,
  )<void, RemoveBookData, string>(),
};

type ActionTypes = ActionType<typeof BookActionsCreators>;

const reducer: Reducer<FavState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes,
) => {
  //   const updateFavoritesState = state;
  const { type, payload } = action;
  //   switch (action.type) {
  //     case FavTypes.ADD_BOOKS:
  //       return { books: [...state.books, action.payload] };

  //     case FavTypes.REMOVE_BOOKS:
  //       return {
  //         books: state.books.filter(book => book.id !== action.payload.id),
  //       };
  //     default:
  //       return state;
  //   }
  return produce(state, (draft: Draft<FavState>) => {
    switch (type) {
      case FavTypes.ADD_BOOKS_TO_FAV_REQUEST:
        draft.loading = true;
        console.log('ADD_BOOKS_TO_FAV_REQUEST');
        break;
      case FavTypes.ADD_BOOKS_TO_FAV_SUCCESS:
        draft.books.push(payload as BookFavData);
        draft.loading = false;
        break;
      case FavTypes.ADD_BOOKS_TO_FAV_FAILURE:
        draft.loading = false;
        console.log('error');
        break;
      case FavTypes.REMOVE_BOOKS_FROM_FAV_REQUEST:
        draft.loading = true;
        break;
      case FavTypes.REMOVE_BOOKS_FROM_FAV_SUCCESS:
        const teste = payload as RemoveBookData;
        draft.books = draft.books.filter(book => book.id !== teste.id);
        draft.loading = false;
        break;

      case FavTypes.REMOVE_BOOKS_FROM_FAV_FAILURE:
        draft.loading = false;
        break;
    }
  });
};

export default reducer;
