import { database } from '../firebase'

const songsRef = database.ref('songs')

export const addSong = (key, { name, artist, status }) => {
  return {
    type: 'ADD_SONG',
    key,
    name,
    artist,
    status
  }
}

export const startListeningForSongs = () => {
  return (dispatch) => {
    songsRef.on('child_added', (snapshot) => {
      dispatch(addSong(snapshot.key, snapshot.val()))
    })
  }
}