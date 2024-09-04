import React from 'react';
import Slide from './Slide';
// import './CodeBlockSlide.css';

const CodeBlockSlide = ({ code }) => (
  <Slide className="code-block-slide">
    <pre>
      <code>{code}</code>
    </pre>
  </Slide>
);

export default CodeBlockSlide;
