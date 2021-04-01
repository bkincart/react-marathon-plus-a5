import React from 'react'

const Song = props => {
  //  This should render the artist alongside the song name separated by a -.

  // i set up a classname that's empty
  let myClassName = ""
  // if props.selected is true, I want to add the "selected" class to my header
  if(props.selected) {
    myClassName = "selected"
  }

  return(
    <h3 className={myClassName} onClick={props.handleClick}>
      {props.songData.artist} - {props.songData.name}
    </h3>
  )
}

export default Song