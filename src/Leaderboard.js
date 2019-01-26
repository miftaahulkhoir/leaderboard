import React, {Component} from 'react';
import Players from './Players'
import AddPlayer from './AddPlayer.js'

class Leaderboard extends Component {
  constructor(props) {
    super(props)

    const PLAYERS = [
      {id: 1, name: 'Brendan Eich', score: 25},
      {id: 2, name: 'Chris Lattner', score: 10},
      {id: 3, name: 'Jose Valim', score: 30}
    ]

    this.state = {
      members: PLAYERS
    }
  }

  onPlayerAdd = (event) => {
    let newMembers = this.state.members
    newMembers.push({id: newMembers.length + 1, name: event, score: 10})
    this.setState({members: newMembers})
  };

  render() {

    const styles = {
      container: {
        padding: 60
      }
    }

    return (
      <div style={styles.container}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd}/>
      </div>
    )
  }
}

export default Leaderboard