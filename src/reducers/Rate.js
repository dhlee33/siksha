import { RATE_REQUEST,RATE_SUCCESS,RATE_FAILURE} from "../actions";

const initialState ={
  error: false,
  isFetching: false,
}

export default (state=initialState,action) => {
  switch(action.type){
    case RATE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case RATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      }
    case RATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}