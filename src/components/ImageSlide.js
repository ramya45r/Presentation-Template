import React, { useEffect } from 'react';
import Slide from './Slide';
import logo from '../images/1724751059275004_2007895434.png'

const ImageSlide = ({ imageUrls }) => {
  useEffect(() => {
    console.log('Image URLs:', imageUrls);
  }, [imageUrls]);

  return (
    <>

    <Slide className="image-slide">
      <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Slide ${index}`} className="slide-image" />
      ))}

      </div>
      <img src={logo} alt="Demo Logo" className="demo-logo" />
    <img src={logo} alt="Watermark" className="watermark" />
    </Slide>

    </>
  );
};

export default ImageSlide;
