export const MENU ='MENU'
export const RATING = 'RATING'
export const BOOKMARK ='BOOKMARK'
export const LOCALBOOKMARK = 'LOCALBOOKMARK'

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

export function bookmark(index){
    return{
        type: BOOKMARK,
        index
    }
}

export function localBookmark(data) {
    return{
        type: LOCALBOOKMARK,
        data
    }
}