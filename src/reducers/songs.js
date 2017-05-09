import initialState from '../initialState'

export default function songsReducer(state = initialState.songs, action) {
  switch(action.type) {
    case 'ADD_SONG':
      return {
        ...state,
        [action.key]: {
          name: action.name,
          artist: action.artist,
          status: action.status
        }
      }
    default:
      return state
  }
}