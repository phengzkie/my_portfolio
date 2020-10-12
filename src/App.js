import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
