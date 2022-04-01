import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = ({house}) => {
  const ring = useContext(RingContext)
  return (
    <div>
      <h3>meee</h3>
      <p><small>House: {ring} </small></p>
    </div>
  );
};

export default MySelf;