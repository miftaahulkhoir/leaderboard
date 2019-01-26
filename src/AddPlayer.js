import React, {Component} from 'react';

class AddPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  onPlayerChange = event => {
    this.setState({name: event.target.value})
  }

  addPlayer = () => {
    this.props.onAdd(this.state.name)
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.onPlayerChange} type="text" placeholder="Put your favorite developer name here ..." />
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    );
  }
}

export default AddPlayer