import React from 'react';
import Slide from './Slide';

const ImageSlide = ({ imageUrl }) => (
  <Slide className="image-slide">
    <img src={imageUrl} alt="Presentation Slide" />
  </Slide>
);

export default ImageSlide;
