import { combineReducers } from 'redux'
import songReducer from './songs'

const reducer = combineReducers({
  songs: songReducer
})

export default reducer