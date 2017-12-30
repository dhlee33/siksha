export const MENU ='MENU'
export const RATING = 'RATING'
export const BOOKMARK ='BOOKMARK'
export const LOCALBOOKMARK = 'LOCALBOOKMARK'
export const GET_MENU_REQUEST = 'GET_MENU_REQUEST'
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS'
export const GET_MENU_FAILURE = 'GET_MENU_FAILURE'
export const RATE_REQUEST = 'RATE_REQUEST'
export const RATE_SUCCESS = 'RATE_SUCCESS'
export const RATE_FAILURE = 'RATE_FAILURE'

export function menu() {
    return{
        type: MENU,
    }
}

export function rating(rate,index,foodIndex) {
    return{
        type: RATING,
        rate,
        index,
        foodIndex
    }
}

export const bookmark = (index) => ({
  type: BOOKMARK,
  index
})


export const localBookmark = (data) => ({
  type: LOCALBOOKMARK,
  data
})

export const getMenuRequest = () => ({
  type: GET_MENU_REQUEST
})

export const getMenuSuccess = (menu) => ({
  type: GET_MENU_SUCCESS,
  menu
})

export const getMenuFailure = () => ({
  type: GET_MENU_FAILURE
})

export const rateRequest = (rating,meal) => ({
  type: RATE_REQUEST,
  rating,
  meal
})

export const rateSuccess = () => ({
  type: RATE_SUCCESS
})

export const rateFailure = () => ({
  type: RATE_FAILURE
})