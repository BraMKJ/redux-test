import { TOGGLE_MENU } from '../actions/ui'
import initialState from '../initialState'

export default function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      if (state.menu.isActive) {
        return {
          menu: {
            isActive: false
          }
        }
      } else {
        return {
          menu: {
            isActive: true
          }
        }
      }
    default:
      return {
        menu: {
          isActive: false
        }
      }
  }
}