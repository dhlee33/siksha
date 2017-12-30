import {BOOKMARK,LOCALBOOKMARK} from "../actions";

const initialState ={
    bookmark:[
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
        {marked :false},
    ]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case BOOKMARK:
            return{
                ...state,
                bookmark:state.bookmark.map((mark,i)=>{
                    return(
                        i===action.index ? !mark : mark
                    )
                })
            }
        case LOCALBOOKMARK:
            return {
                ...state,
                bookmark:action.data
            }
        default:
            return state
    }
}