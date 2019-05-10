import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.add ?
      this.props.addSmurfs(this.state) :
      this.props.update(this.props.id, this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    document.getElementById('done')
      .style
      .display = 'block';
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]:
        e.target.value
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add/Update</button>
        </form>
        <h1 id="done" style={{ display: 'none' }}>DONE</h1>
      </div>
    );
  }
}

export default SmurfForm;
