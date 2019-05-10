import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import NavBar from './components/Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch((err) => console.log(err))
  }

  addSmurfs = (smurf) => {
    axios.post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: parseInt(smurf.age),
      height: smurf.height
    })
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err))
    console.log(smurf)
  }
  // updateSmurfs = (smurf) => {
  //   axios.put('http://localhost:3333/smurfs', smurf)
  //   .then(res => this.setState({ smurfs: res.data }))
  //   .catch(err => console.log(err))
  //   console.log(smurf)
  // }

  removeSmurfs = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
        <NavBar />
        <Route path="/form" render={props => <SmurfForm { ...props } addSmurfs={this.addSmurfs}/>}/>
        <Route exact path="/" render={props => <Smurfs { ...props } removeSmurfs={this.removeSmurfs} smurfs={this.state.smurfs} />} />
        <Route path='/:id' render={props => <Smurf {...props} smurfs={this.state.smurfs}/>}/>
      </div>
    );
  }
}

export default App;
