import React, { useEffect } from 'react';
import Slide from './Slide';

const ImageSlide = ({ imageUrls }) => {
  useEffect(() => {
    console.log('Image URLs:', imageUrls);
  }, [imageUrls]);

  return (
    <Slide className="image-slide">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Slide ${index}`} className="slide-image" />
      ))}
    </Slide>
  );
};

export default ImageSlide;
