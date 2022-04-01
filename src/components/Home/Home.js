import React from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  return (
    <div className='home-container'>
      <div className="tshirt-container">
        {
          tshirts.map(tshirt => <Tshirt
          key = {tshirt._id}
          tshirt ={tshirt}
          ></Tshirt>)
        }
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;