import React, { createContext } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('diamond');
const ring = 'Diamond come from ContexApi'

const Grandpa = () => {
  const house = 7;
  return (
    <RingContext.Provider value={ring}>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <div style={{ display: 'flex' }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
