import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
  return (
    <div>
      <h2>Father</h2>
      <p>House: {house}</p>
      <div style={{display: 'flex'}}>
        <MySelf house={house}></MySelf>
        <Sister house={house}></Sister>
        <Brother house={house}></Brother>
      </div>
    </div>
  );
};

export default Father;
