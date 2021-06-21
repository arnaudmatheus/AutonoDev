
import { Reducer } from 'redux';
import { FavState, FavTypes} from './types';



const INITIAL_STATE: FavState = {
    books:[]
}


const reducer: Reducer<FavState> = (
    state = INITIAL_STATE,
    action,
) =>{
    const updateFavoritesState = state;
    switch(action.type){
        case FavTypes.ADD_BOOKS:
            updateFavoritesState.books = action.payload.books
            
            return { ...state, ...updateFavoritesState };
        
        case FavTypes.REMOVE_BOOKS:
            updateFavoritesState.books = action.payload.books
            return { ...state, ...updateFavoritesState };
        default:
            return state;
        
    }
};


export default reducer;