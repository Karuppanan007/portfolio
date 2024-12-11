import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); 
    }
  };


  return (
    <header className="bg-orange-500 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between  items-center p-3">
        
          <h1 className="text-3xl font-bold">Portfolio </h1>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-yellow-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="hover:text-yellow-300"
          >
            Resume
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-yellow-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-300"
          >
            Contact
          </button>

        </nav>

       
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <GiCrossMark size={23} /> : <CgMenuRightAlt size={23} />}
        </button>
      </div>

     
      {isOpen && (
        <nav className="md:hidden bg-orange-500">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-yellow-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-yellow-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:text-yellow-300"
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-yellow-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-yellow-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

