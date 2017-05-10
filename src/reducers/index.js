import { combineReducers } from 'redux'
import songReducer from './songs'
import uiReducer from './ui'

const reducer = combineReducers({
  songs: songReducer,
  ui: uiReducer
})

export default reducer