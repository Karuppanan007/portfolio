import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import food from '../assets/food.png';
import port from '../assets/web.png';
import tic from '../assets/tic.png';
import wiki from '../assets/wiki.png';
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '150px',
      duration: 1500,
      easing: 'ease-in-out',
      reset: true,
    });

    sr.reveal('.project-title');
    sr.reveal('.project-card');
    // sr.reveal('.project-card');
    // sr.reveal('.project-card');

    // Cleanup function
    return () => sr.destroy();
  }, []);


  return (
    <section id="projects" className="pb-10">
      <h1 className="text-4xl font-bold text-center project-title pt-16">Projects</h1>

      <div className="flex justify-center mt-16 flex-wrap gap-10">
        {/* Project 1 */}
        <div className="project-card w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
          <img src={port} width={200} alt="Portfolio" className="ml-8" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">Portfolio</h5>
          <p className="mb-5 text-[15px] text-black">
            A passionate frontend developer crafting responsive, user-friendly websites and applications with a modern, aesthetic touch.
          </p>
          <div className="flex gap-5 justify-center">
            <a href="https://github.com/Karuppanan007/portfolio.git" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Code
              <FaCode className='ms-2 mt-0.5' size={22} />
            </a>

            <a href="https://karuppusurya.netlify.app/" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Demo
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
          <img src={food} alt="Food Recipe App" height={20} width={280} className="ml-1.5" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black mt-4">Food Recipe App</h5>
          <p className="mb-5 text-[15px] text-black">
            A food recipe app built with ReactJS and Tailwind CSS. It uses APIs to offer a variety of recipes and cooking instructions.
          </p>
          <div className="flex gap-5 justify-center">
            <a href="https://github.com/Karuppanan007/Food-recipes.git" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Code
              <FaCode className='ms-2 mt-0.5' size={22} />
            </a>

            <a href="https://food-recipes-five-omega.vercel.app/" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Demo
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
          <img src={tic} alt="Game" width={195} className="ml-6" />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">Game</h5>
          <p className="mb-5 text-[15px] text-black">
            A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript, allowing two players to complete this game.
          </p>
          <div className="flex gap-5 justify-center">
            <a href="https://github.com/Karuppanan007/tic-tac-toe-game.git" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Code
              <FaCode className='ms-2 mt-0.5' size={22} />
            </a>

            <a href="https://mygame-tictactoe.netlify.app/" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Demo
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
          <img src={wiki} alt="wikipedia" width={180} height={100} className="ml-9" />
          <h5 className="mt-2 mb-2 text-2xl font-semibold tracking-tight text-black">Wikipedia Clone</h5>
          <p className="mb-7 text-[15px] text-black">
            Developed a Wikipedia Clone Website replicating core features and ensuring a responsive, user-friendly design.
          </p>
          <div className="flex gap-5 justify-center">
            <a href="https://github.com/Karuppanan007/wikipedia-clone" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Code
              <FaCode className='ms-2 mt-0.5' size={22} />
            </a>

            <a href="https://wikipedia-clone-jade.vercel.app/" target="_blank" className="inline-flex text-md items-center p-1.5 px-5 rounded-md bg-orange-500 text-white">
              Demo
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
