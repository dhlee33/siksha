import {combineReducers} from 'redux'
import rate from './Rate'
import restaurant from './Restaurant'
import menuList from './Menu'
import mark from './Bookmark'

const reducers = combineReducers({
  rate,
  menuList,
  mark
})

export default reducers