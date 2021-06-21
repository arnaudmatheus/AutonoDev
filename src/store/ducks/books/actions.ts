
import { Action} from 'redux';
import {
  FavTypes, FavState,
} from './types';
import { BookFavData,RemoveBookData } from './types';

export interface ADD_BOOKS extends Action{
  type:FavTypes.ADD_BOOKS,
  payload: BookFavData,
}

export interface REMOVE_BOOKS extends Action{
  type:FavTypes.REMOVE_BOOKS,
  payload: RemoveBookData,
}

export const ADD_BOOKS = (payload:BookFavData):ADD_BOOKS => ({
  type: FavTypes.ADD_BOOKS,
  payload,
});

export const REMOVE_BOOKS = (payload:RemoveBookData) => ({
  type: FavTypes.REMOVE_BOOKS,
  payload
});
