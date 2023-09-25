import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate('/explore');
  };
  const goCreate = () => {
    navigate('/create');
  };

  return (
    <div id="hero">
      <img
        id="hero-background"
        src="https://shop.futugoapp.com/cdn/shop/files/header1.png?v=1664462853"
      />
      {/**/}
      <Header />

      {/* <h1 id="header-text-first"> Luxury </h1>
      <h1 id="header-text-second"> Fashion Marketplace</h1> */}

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
        {/* <button id="create" onClick={goCreate}>
          Create
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
