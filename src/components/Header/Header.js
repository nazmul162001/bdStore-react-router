import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2>Wellcome to my bd store</h2>
      <nav>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/orderreview'>Review</CustomLink>
        <CustomLink to='/cart'>Cart</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
