import React from 'react';
import Slide from './Slide';
import logo from '../images/1724751059275004_2007895434.png'

const CodeBlockSlide = ({ code }) => (
  <Slide className="code-block-slide">

    <pre>
      <code>{code}</code>
    </pre>
           <img src={logo} alt="Demo Logo" className="demo-logo" />
    <img src={logo} alt="Watermark" className="watermark" />

  </Slide>
);

export default CodeBlockSlide;
