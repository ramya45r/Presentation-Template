import React from 'react';
import Slide from './Slide';
import logo from '../images/1724751059275004_2007895434.png'

const ClosingSlide = () => (
  <Slide className="closing-slide">

    <h2>Thank You for Your Attention!</h2>
    <p>Questions? Feel free to ask!</p>
           <img src={logo} alt="Demo Logo" className="demo-logo" />
    <img src={logo} alt="Watermark" className="watermark" />

  </Slide>
);

export default ClosingSlide;
