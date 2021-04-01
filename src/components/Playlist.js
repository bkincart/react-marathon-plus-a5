import React from "react"

const Playlist = props => {

  let classes = ""
  if (props.selected) {
    classes += " selected"
  }

  return (
    <h3 className={classes} onClick={props.update}>{props.playlistData.name}</h3>
  )
}


export default Playlist
