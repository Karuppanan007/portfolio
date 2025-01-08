import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import img from "../assets/My photo.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import ScrollReveal from "scrollreveal";

const Home = () => {
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


 useEffect(() => {
    const sr = ScrollReveal({
      distance: '150px',
      duration: 1500,
      easing: 'ease-in-out',
      reset: true, 
    });
  
    sr.reveal('.name', { origin: 'bottom' });
    sr.reveal('.sum', { origin: 'bottom', delay: 200 });
    sr.reveal('.img', { origin: 'bottom', delay: 300 });
    sr.reveal('.more', { origin: 'bottom', delay: 400 });
    sr.reveal('.social', { origin: 'bottom', delay: 500 });
    return () => sr.destroy();
  }, []);
  
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-700 text-white h-screen flex flex-col justify-center items-center text-center px-4 "
      >
        <div
          className="max-w-3xl"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-16 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              bounce: 0.5,
            }}
          >
           <p className="name"> Hi, I'm <span className="text-yellow-400">Karuppanan</span></p>
          </h1>
          <p className="sum text-xl sm:text-2xl text-gray-300 mt-5 mb-4" >
            <b className="text-yellow-300">Web Developer</b> "Crafting seamless, responsive, and visually captivating web experiences that bring ideas to life."
          </p>
          </div>

     
      <img
        src={img}
        alt="Karuppanan"
        className="img rounded-full w-48 sm:w-56 md:w-64 mb-8 shadow-lg border-4 border-orange-300"
        animate={{
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />


          <div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeInOut" }}
          >
            <a
              onClick={() => scrollToSection("about")}
              className="more inline-flex items-center  px-3 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition:scroll duration-300 transform hover:scale-105"
            >
              Explore More <FaArrowDown className="ml-2" />
            </a>
          </div>

        <div className="social">
          <div
            className="flex justify-center space-x-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
          >
            <a
              href="https://github.com/Karuppanan007"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300" >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/karuppanan-k-b82184268/"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"

            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Karuppusurya7?t=0dppDGVr3M9vNjma3w_75g&s=09"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"

            >
              <RiTwitterXFill />
            </a>

            <a
              href="mailto:karuppusurya007@gmail.com"
              target="_blank"
              className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"

            >
              <MdOutlineEmail />
            </a>
          </div>
          </div>
      </section>
    </>
  );
};

export default Home;



