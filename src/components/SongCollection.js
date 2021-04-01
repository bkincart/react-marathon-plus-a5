import React, { useState } from "react"
import Song from './Song'

const SongCollection = props => {
  const [selectedSongId, setSelectedSongId] = useState(null)

  const songComponents = props.songsArray.map(song => {
    const updateSelectedSongId = () => {
      setSelectedSongId(song.id)
    }

    // I need to set up a "selected" boolean that defaults to false
    let selected = false
    // If the individual song's id matches the `selectedSongId`
    if(song.id === selectedSongId) {
      // "selected" should be true
      selected = true
    }

    // I then hand that down as a prop
    return(
      <Song
        songData={song}
        handleClick={updateSelectedSongId}
        selected={selected}
        // artist={song.artist}
        // name={song.name}
        key={song.id}
      />
    )
  })
  console.log("selectedSongId")
  console.log(selectedSongId)

  return(
    <div className="cell small-6">
      <h1>Songs</h1>
      {songComponents}
    </div>
  )
}

export default SongCollection