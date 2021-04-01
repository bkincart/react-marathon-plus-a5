import React, { useState } from 'react'
import Playlist from './Playlist.js'

const PlaylistCollection = props => {
const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  const playListComponents = props.playlistsArray.map(list =>{
    // set default to unselected
    let selected = false
    // if current list === selected list
    //      set selected to true
    if (list.id === selectedPlaylistId) {
      selected = true
    }

    const updateSelectedPlaylistId = () => {
      setSelectedPlaylistId(list.id)
      console.log("selectedPlaylistId inside function");
      console.log(selectedPlaylistId);
    }

    return <Playlist
      playlistData ={list}
      key={list.id}
      selected={selected}
      update={updateSelectedPlaylistId}
    />
  })

  console.log("selectedPlaylistId when rendering");
  console.log(selectedPlaylistId);

  return(
    <div className="cell small-6">
      <h1>Playlists</h1>
      {playListComponents}
    </div>
  )
}

export default PlaylistCollection