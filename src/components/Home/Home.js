import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);

  // add product into cart
  const handleAddToCart = (selectedItem) => {
    // handle duplicate product selected
    const exists = cart.find(pd => pd._id === selectedItem._id);
    if(!exists){
      setCart([...cart, selectedItem]);
    }
    else{
      alert('Product already added');
    }
  }
  //remove product into cart
  const handleRemoveCart = (selectedItem) => {
    const rest = cart.filter(pd => pd._id !== selectedItem._id);
    setCart(rest);
  }

  return (
    <div className='home-container'>
      <div className="tshirt-container">
        {
          tshirts.map(tshirt => <Tshirt
          key = {tshirt._id}
          tshirt ={tshirt}
          handleAddToCart = {handleAddToCart}
          handleRemoveCart = {handleRemoveCart}
          ></Tshirt>)
        }
      </div>
      <div className="cart-container">
        <Cart
          cart = {cart}
          handleRemoveCart ={handleRemoveCart}
          setCart = {setCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;