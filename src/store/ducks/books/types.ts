/**
 * Action types
 * @ADD_FAV_BOOKS add fav books
 * @REMOVE_FAV_BOOKS remove fav books
 */

export enum FavTypes {
  ADD_BOOKS = '@favs/ADD_FAV_BOOKS',

  ADD_BOOKS_TO_FAV_REQUEST = '@favs/ADD_BOOKS_TO_FAV_REQUEST',
  ADD_BOOKS_TO_FAV_SUCCESS = '@favs/ADD_BOOKS_TO_FAV_SUCCESS',
  ADD_BOOKS_TO_FAV_FAILURE = '@favs/ADD_BOOKS_TO_FAV_FAILURE',

  REMOVE_BOOKS = '@favs/REMOVE_FAV_BOOKS',

  REMOVE_BOOKS_FROM_FAV_REQUEST = '@favs/REMOVE_BOOKS_FROM_FAV_REQUEST',
  REMOVE_BOOKS_FROM_FAV_SUCCESS = '@favs/REMOVE_BOOKS_FROM_FAV_SUCCESS',
  REMOVE_BOOKS_FROM_FAV_FAILURE = '@favs/REMOVE_BOOKS_FROM_FAV_FAILURE',
}

export interface BookFavData {
  id: string;
  title: string;
  categories?: string[];
  publisher?: string;
  authors: string[];
  description: string;
  thumbnail?: string;
  publishedDate: string;
}

export interface FavState {
  books: BookFavData[];
  loading: boolean;
}

export interface RemoveBookData {
  id: string;
}
