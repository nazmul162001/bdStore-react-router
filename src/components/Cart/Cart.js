import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveCart, setCart}) => {

  // conditional rendering 
  let command;
  if(cart.length === 0){
    command = <p>Please add atleast one item!!!</p>
  }
  else if(cart.length === 1){
    command = <p>Please add more item</p>
  }
  else{
    command = <p>Thanks for adding item</p>
  }


  return (
    <div>
      <h2>Selected Item: {cart.length} </h2>
      
      {
        cart.map(tshirt => <p>Name: {tshirt.name}
        <button onClick={() => handleRemoveCart(tshirt)}>X</button>
        </p>)
      }
      { command }
      {cart.length !== 4 ? <h5>Keep Adding</h5> : <button onClick={() => setCart([])}>Remove All</button>}
    </div>
  );
};

export default Cart;