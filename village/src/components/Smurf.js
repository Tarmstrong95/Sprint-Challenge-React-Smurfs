import React from 'react';
import './smurf.css';

const Smurf = props => {
const smurf = props.smurfs.find(smurf => {
  return (smurf.id === props.match.params.id)
})
if (!smurf) return "Loading...."

  
  return (
    <div>
      <input value={smurf.name}/>
      <input value={smurf.age}/>
      <input value={smurf.height}/>
    </div>
  );
};



export default Smurf;

