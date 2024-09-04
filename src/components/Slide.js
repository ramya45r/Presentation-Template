import React from 'react';
// import './Slide.css';

const Slide = ({ children, className }) => (
  <div className={`slide ${className}`}>
    {children}
  </div>
);

export default Slide;
