import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  const playlistsArray = props.data.playlists
  const songsArray = props.data.songs
  // debugger
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>

      <div className="grid-x">
        <PlaylistCollection
          playlistsArray={playlistsArray}
        />
        <SongCollection
          songsArray={songsArray}
        />
      </div>
    </div>
  );
}

export default App
