

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
            
            
            return { books:[...state.books,action.payload] };
        
        case FavTypes.REMOVE_BOOKS:
            
            return { ...state, ...updateFavoritesState };
        default:
            return state;
        
    }
};


export default reducer;