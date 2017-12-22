import {combineReducers} from 'redux'
import rate from './Rate'
import menu from './Restaurant'
import mark from './Bookmark'

const reducers = combineReducers({
    rate,
    menu,
    mark
})

export default reducers