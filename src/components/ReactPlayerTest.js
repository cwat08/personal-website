import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Player extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CvzMqIQLiXE&feature=youtu.be"
        playing
      />
    )
  }
}

export default Player
