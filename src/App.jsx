import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={220}
        gravity={0.1}
        colors={['#ff0', '#ff6347', '#87cefa']} />}

      <div className="bg-gray-100 text-black">
        <Header />
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>

      <footer className="bg-orange-500 text-white py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
    
            <div className="mb-2 ms-2 md:mb-0 ">
              <h3 className='text-xl font-semibold mb-2'>CONTACT US </h3>
            <span className="text-sm flex gap-1 ml-[-5px]">
               <IoLocationSharp  size={20} />5/1031, Southstreet, Kullursandhai, Virudhunagar-626004.
              </span>
              <span className="text-sm flex gap-1 mt-1.5">
                <FaPhoneAlt size={15} />+91 7339137389
              </span>
              <span className="text-sm flex gap-1 mt-1.5">
                <FaEnvelope size={15} />karuppusurya007@gmail.com
              </span>
            </div>

            <div className="lg:text-center ms-2 mb-2">
            <h3 className='text-xl font-semibold mb-2'>QUICK LINKS</h3>
              <nav className="text-sm flex flex-col">
                <span className='flex gap-1'>
                <MdOutlineKeyboardDoubleArrowRight  size={22} /> <button onClick={() => scrollToSection("home")} className="hover:text-yellow-300">
                  Home
                </button>
                </span>
                <span className='flex gap-1'>
                <MdOutlineKeyboardDoubleArrowRight  size={22} /> <button onClick={() => scrollToSection("about")} className="hover:text-yellow-300">
                  About
                </button>
                </span>
                <span className='flex gap-1'>
                <MdOutlineKeyboardDoubleArrowRight  size={22} /> <button onClick={() => scrollToSection("resume")} className="hover:text-yellow-300">
                  Resume
                </button>
                </span>
                <span className='flex gap-1'>
                <MdOutlineKeyboardDoubleArrowRight  size={22} /> <button onClick={() => scrollToSection("projects")} className="hover:text-yellow-300">
                  Projects
                </button>
                </span>
                <span className='flex gap-1'>
                <MdOutlineKeyboardDoubleArrowRight  size={22} /> <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-300">
                  Contact
                </button>
                </span>
              </nav>
            </div>

            <div className=" ms-2">
              <h3 className='text-xl font-semibold'>GET IN TOUCH!</h3>
              <div className='flex space-x-5 mt-3'>
              <a
                href="https://www.linkedin.com/in/karuppanan-k-b82184268/"
                target="_blank"
                rel="social media"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Karuppanan007"
                target="_blank"
                rel="social media"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/Karuppusurya7?t=0dppDGVr3M9vNjma3w_75g&s=09"
                target="_blank"
                rel="social media"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                <RiTwitterXFill size={20} />
              </a>
              <a href="mailto:karuppusurya007@gmail.com" target='_blank' rel='social media' className="hover:text-yellow-300 transition-all duration-300">
                <FaEnvelope size={20} />
              </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

