import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <div style={{display:'flex'}}>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </div>
    </div>
  );
};

export default Grandpa;
