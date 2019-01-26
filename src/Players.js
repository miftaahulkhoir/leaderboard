import React, {Component} from 'react';
import Player from './Player.js'

class Players extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(player => {
          return (
           <Player name={player.name} score={player.score} key={player.id}/>
          )
        })}
      </div>
    )
  }
}

export default Players;