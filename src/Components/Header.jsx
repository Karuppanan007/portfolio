import React, { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-orange-500 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-center items-center p-4">
       

       
        <nav className="hidden md:flex space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
          
            <GiCrossMark size={23} />
          ) : (
     
            <CgMenuRightAlt size={23} />
          )}
        </button>
      </div>


      {isOpen && (
        <nav className="md:hidden bg-orange-500">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#resume" onClick={toggleMenu}>
                Resume
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

