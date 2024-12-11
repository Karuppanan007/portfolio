import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/image.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import boot from "../assets/bootstrap.png";
import react from "../assets/react.png";
import sql from "../assets/mysql.png";
import figma from "../assets/figma.png";
import tailwind from "../assets/tailwind.webp";

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "Bootstrap", image: boot },
  { name: "React", image: react },
  { name: "MySQL", image: sql },
  { name: "Figma", image: figma },
  { name: "Tailwind", image: tailwind },
];

const About = () => {
  return (
    <>
      <div id="about" className="pt-24">
        <h2 className="text-4xl font-bold text-center"><span className="underline"></span>About Me</h2>
        
        <section

          className="mt-3 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12"
        >

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl sm:text-3xl font-semibold mb-4">Summary</p>
            <p className="text-md sm:text-xl">
              A highly motivated web developer in frontend technologies, basic
              Python programming, and database management using SQL and MySQL.
              Skilled in creating responsive, user-friendly websites, with a
              foundational understanding of UI/UX design principles using Figma.
              Dedicated to continuously enhancing technical skills to deliver
              intuitive and efficient digital solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.img
              src={profile}
              alt="Karuppanan"
              className="w-64 sm:w-72 md:w-80 rounded-full shadow-lg border-4 border-orange-300"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </section>


        <section
          id="myskills"
          className="pb-10 mt-5  px-6 sm:px-12 flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold mb-10">My Skills</h1>
          <div className="flex flex-wrap justify-center gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >

                <motion.img
                  src={skill.image}
                  alt={skill.name}
                  className="h-20 w-20 rounded-lg p-2 shadow-lg transition-transform transform group-hover:scale-110"
                  whileHover={{ rotate: 360 }}
                />

                <motion.div
                  className="absolute top-14 bg-black bg-opacity-80 text-white text-sm font-semibold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {skill.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

