import React from 'react';
import Slide from './Slide';
import logo from '../images/1724751059275004_2007895434.png'
const OpeningSlide = () => (
  <Slide className="opening-slide">
    <h2>Welcome to Our Presentation</h2>
    <p>Enhancing knowledge and sharing ideas</p>
     <img src={logo} alt="Demo Logo" className="demo-logo" />
    <img src={logo} alt="Watermark" className="watermark" />
  </Slide>
);

export default OpeningSlide;
