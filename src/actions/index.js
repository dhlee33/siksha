export const MENU ='MENU'
export const RATING = 'RATING'

export function menu() {
    return{
        type: MENU
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
