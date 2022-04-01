import React from 'react';
import './Tshirt.css';

const Tshirt = (props) => {
  const {name, picture, price} = props.tshirt
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>Name: {name}</h4>
      <p>Price $ {price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Tshirt;