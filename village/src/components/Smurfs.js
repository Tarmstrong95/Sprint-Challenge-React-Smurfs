import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {

  submit = (id) => {
    this.props.removeSmurfs(id);
  }

  

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf, i) => {
            return (
              <div key={i} className="smurf">
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
                <div><Link to={`/smurfs/${smurf.id}`} >Update</Link></div>
                <div><Link to="/smurfs" onClick={() => this.submit(smurf.id)} >Delete</Link></div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
