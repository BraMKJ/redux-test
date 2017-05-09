import React from 'react'
import map from 'lodash/map'
import Song from './Song'
import styled from 'styled-components'

const Songs = ({ songs }) => (
  <Component>
    {songs && map(songs, (song, key) =>
      <Song
        key={key}
        name={song.name}
        artist={song.artist}
        status={song.status}
      />
    )}
  </Component>
)

const Component = styled.div``

export default Songs