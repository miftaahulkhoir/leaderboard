import React, {Component} from 'react';

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: props.score
    }
  }

  incrementScore = event => {
    this.setState({score: this.state.score + 10})
  }

  decrementScore = () => {
    this.setState({score: this.state.score - 10})
  }

  render() {
    const styles = {
      player: {
        display: "flex",
        padding: 10
      },
      name: {
        flex: '1'
      },
      playerScore: {
        width: 200
      },
      score: {
        padding: 20
      },
      button: {
        padding: 10
      }
    }

    return (
        <div style={styles.player}>
          <div style={styles.name}>{this.props.name}</div>
          <div>
            <button onClick={this.decrementScore} style={styles.button}>-</button>
            <span style={styles.score}>{this.state.score}</span>
            <button onClick={this.incrementScore} style={styles.button}>+</button>
          </div>
        </div>
    )
  }
}

export default Player;