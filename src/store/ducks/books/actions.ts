import { action } from 'typesafe-actions';
import {
  FavTypes, FavState,
} from './types';

export const ADD_BOOKS = (books: FavState) => {
  action(FavTypes.ADD_BOOKS, { books });
};

export const REMOVE_BOOKS = (books:FavState) => {
  action(FavTypes.REMOVE_BOOKS,{books});
};
