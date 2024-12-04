import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">

      <Header />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

