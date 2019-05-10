import React from 'react';
import './smurf.css';
import SmurfForm from './SmurfForm'

class Smurf extends React.Component {
  state = {
    smurf: null
  }

  componentDidMount() {
    this.setState({
      smurf: this.props.smurfs.find(smurf =>
        smurf.id == this.props.match.params.id) //comparing a string number to and int number
    })
  }

  render() {
    if (!this.state.smurf) return "Loading...";
    return (
      <SmurfForm
        add={false}
        name={this.state.smurf.name}
        age={this.state.smurf.age}
        height={this.state.smurf.height}
        smurf={this.state.smurf}
        id={this.state.smurf.id}
        update={this.props.update}
      />
    );
  }

};



export default Smurf;

