import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';

const loadBrython = (callback) => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/brython@3.11.0/brython.min.js';
  script.onload = () => {
    if (window.brython) {
      callback();
    } else {
      console.error('Brython failed to load.');
    }
  };
  document.body.appendChild(script);
};

const runPython = (code, outputRef) => {
  if (!window.brython) {
    console.error('Brython is not loaded.');
    return;
  }

  try {
    // Create a new script element for the Python code
    const script = document.createElement('script');
    script.type = 'text/python';
    script.text = code;

    // Append the script to the body to be executed
    document.body.appendChild(script);

    // Optionally, you can remove the script after execution if needed
    document.body.removeChild(script);
  } catch (err) {
    console.error('Error running Python code:', err);
    outputRef.current.innerText = `Error: ${err.message}`;
  }
};

const PythonCompilerSlide = () => {
  const outputRef = useRef();
  const [brythonLoaded, setBrythonLoaded] = useState(false);

  useEffect(() => {
    loadBrython(() => {
      console.log('Brython loaded');
      setBrythonLoaded(true);
      window.brython(); // Initialize Brython
    });
  }, []);

  const handleRunClick = () => {
    if (!brythonLoaded) {
      console.error('Brython is not loaded yet.');
      return;
    }

    const code = document.getElementById("python-code").value;
    console.log(code, 'code');

    outputRef.current.innerText = ''; 
    runPython(code, outputRef);
  };

  return (
    <Slide className="python-compiler-slide">
      <textarea id="python-code" defaultValue="print('Hello, World!')" />
      <button onClick={handleRunClick} >Run Python Code</button>
      <pre ref={outputRef}></pre>
      <canvas id="mycanvas"></canvas>

    </Slide>
  );
};

export default PythonCompilerSlide;
