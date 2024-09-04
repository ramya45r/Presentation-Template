import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OpeningSlide from './components/OpeningSlide';
import ImageSlide from './components/ImageSlide';
import ChartSlide from './components/ChartSlide';
import CodeBlockSlide from './components/CodeBlockSlide';
import PythonCompilerSlide from './components/PythonCompilerSlide';
import ClosingSlide from './components/ClosingSlide';
import './App.css';
const slides = [
  <OpeningSlide />,
  <ImageSlide />,
  <ChartSlide />,
  <CodeBlockSlide code={`const greeting = "Hello, World!";\nconsole.log(greeting);`} />,
  <PythonCompilerSlide />,
  <ClosingSlide />,
];
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header toggleTheme={toggleTheme} />
      <div className="slide-container">{slides[currentSlide]}</div>
      <button onClick={prevSlide} disabled={currentSlide === 0}>
        Previous
      </button>
      <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
        Next
      </button>
      <Footer />
    </div>
  );
}

export default App;
