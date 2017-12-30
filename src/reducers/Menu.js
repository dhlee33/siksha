import { GET_MENU_FAILURE, GET_MENU_SUCCESS, GET_MENU_REQUEST } from "../actions";

const initialState ={
  menu: null,
  error: false,
  isFetching: false,
}

export default (state=initialState,action) => {
  switch(action.type){
    case GET_MENU_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case GET_MENU_SUCCESS:
      return {
        ...state,
        menu: action.menu,
        isFetching: false,
        error: false,
      }
    case GET_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}