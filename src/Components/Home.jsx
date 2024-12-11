import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import img from "../assets/profile.svg";
import { MdOutlineEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
    <section
      id="home"
      className="bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-700 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8"
    >
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", type: "spring", stiffness: 100 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-16 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            bounce: 0.5,
          }}
        >
          Hi, I'm <span className="text-yellow-400">Karuppanan</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mt-5 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <b className="text-yellow-300">Web Developer</b> "Crafting seamless, responsive, and visually captivating web experiences that bring ideas to life."
        </motion.p>
      </motion.div>

     
      <motion.img
        src={img}
        alt="Karuppanan"
        className="rounded-full w-48 sm:w-56 md:w-64 mb-8 shadow-lg border-4 border-orange-400"
        animate={{
          x:[5,-10,5],
          y: [10, -10, 10], 
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

   
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.2, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="inline-flex items-center px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Explore More <FaArrowDown className="ml-2" />
        </a>
      </motion.div>

     
      <motion.div
        className="flex justify-center space-x-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <motion.a
          href="https://github.com/Karuppanan007"
          target="_blank"
          className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/karuppanan-k-b82184268/"
          target="_blank"
          className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://x.com/Karuppusurya7?t=0dppDGVr3M9vNjma3w_75g&s=09"
          target="_blank"
          className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <RiTwitterXFill />
        </motion.a>

        <motion.a
          href="mailto:karuppusurya007@gmail.com"
          target="_blank"
          className="text-3xl text-gray-300 hover:text-orange-400 transition duration-300"
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <MdOutlineEmail />
        </motion.a>
      </motion.div>
    </section>
    </>
  );
};

export default Home;



