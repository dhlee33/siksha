import {RATING} from "../actions";

const initialState ={
    isOpen:false
}

export default function rate(state=initialState,action){
    switch(action.type){
        case RATING:
            return{
                ...state,
                isOpen:!state.isOpen
            }
        default:
            return state
    }
}