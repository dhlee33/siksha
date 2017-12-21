import {combineReducers} from 'redux'
import rate from './Rate'
import menu from './Restaurant'

const reducers = combineReducers({
    rate,
    menu
})

export default reducers