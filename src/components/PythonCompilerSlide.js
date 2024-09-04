import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import logo from '../images/1724751059275004_2007895434.png'

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
    const script = document.createElement('script');
    script.type = 'text/python';
    script.text = code;

    const oldConsoleLog = console.log;
    console.log = (message) => {
      if (outputRef.current) {
        outputRef.current.innerText += `${message}\n`;
      }
    };

    document.body.appendChild(script);

    setTimeout(() => {
      document.body.removeChild(script);
      console.log = oldConsoleLog; 
    }, 1000);
  } catch (err) {
    console.error('Error running Python code:', err);
    if (outputRef.current) {
      outputRef.current.innerText = `Error: ${err.message}`;
    }
  }
};

const PythonCompilerSlide = () => {
  const outputRef = useRef(null);
  const [brythonLoaded, setBrythonLoaded] = useState(false);

  useEffect(() => {
    loadBrython(() => {
      console.log('Brython loaded');
      setBrythonLoaded(true);
      window.brython(); 
    });
  }, []);

  const handleRunClick = () => {
    if (!brythonLoaded) {
      console.error('Brython is not loaded yet.');
      return;
    }

    const code = document.getElementById('python-code').value;
    console.log(code, 'code',outputRef.current);

    if (outputRef.current) {
      outputRef.current.innerText = ''; 
    }
    runPython(code, outputRef);
  };

  return (
    <Slide className="python-compiler-slide">

      <textarea id="python-code" defaultValue="print(1 + 1)" />
      <button onClick={handleRunClick}>Run Python Code</button>
      <pre id="python-output" ref={outputRef}></pre>
      <canvas id="mycanvas"></canvas>
             <img src={logo} alt="Demo Logo" className="demo-logo" />
      <img src={logo} alt="Watermark" className="watermark" />

    </Slide>
  );
};

export default PythonCompilerSlide;
