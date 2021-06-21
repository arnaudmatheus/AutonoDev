
/**
 * Action types
 * @ADD_FAV_BOOKS add fav books
 * @REMOVE_FAV_BOOKS remove fav books 
 */

 export enum FavTypes {
    ADD_BOOKS = '@favs/ADD_FAV_BOOKS ',
    REMOVE_BOOKS = '@favs/REMOVE_FAV_BOOKS',
}




export interface BookFavData {
   
      title: string;
      categories?: string[];
      publisher?: string;
      authors: string[];
      description: string;
      infoLink: string;
      imageLinks?: {
        thumbnail: string;
      }
      publishedDate: string;
    
}


export interface FavState {
    books: BookFavData[]
}