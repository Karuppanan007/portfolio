import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri"
// import footer from './assets/footer.jpg'

function App() {
  return (
    <>

      <div className="bg-gray-100 text-black">

        <Header />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>

      <footer className="bg-orange-500 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Personal Details Section - Left */}
      <div className="mb-4 md:mb-0 text-center md:text-left order-1 md:order-none flex flex-col items-center md:items-start">
        <span className="text-sm flex gap-2 mt-1 items-center">
          <FaPhoneAlt size={16} /> +91 7339137389
        </span>
        <span className="text-sm flex gap-2 mt-1 items-center">
          <FaEnvelope size={16} /> karuppusurya007@gmail.com
        </span>
      </div>

      {/* Menu Section - Center */}
      <div className="text-center mb-4 md:mb-0 order-2 md:order-none">
        <div className="text-sm md:text-base space-x-4">
          <a
            href="#home"
            className="mx-2 hover:text-yellow-300 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="mx-2 hover:text-yellow-300 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#resume"
            className="mx-2 hover:text-yellow-300 transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="mx-2 hover:text-yellow-300 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mx-2 hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Social Media Section - Right */}
      <div className="flex space-x-4 order-3 md:order-none">
        <a
          href="https://www.linkedin.com/in/karuppanan-k-b82184268/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-all duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/Karuppanan007"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-all duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://x.com/Karuppusurya7?t=0dppDGVr3M9vNjma3w_75g&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition-all duration-300"
        >
          <RiTwitterXFill size={20} />
        </a>
        <a
          href="mailto:karuppusurya007@gmail.com"
          className="hover:text-yellow-300 transition-all duration-300"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </div>
  </div>
</footer>


 </>

  );
}

export default App;

