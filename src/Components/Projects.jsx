import React from 'react'
import food from '../assets/food.png'
import port from '../assets/web.png'
import tic from '../assets/tic.png'

const Projects = () => {
  return (
    <>
      <div id='projects' className='pt-20'>

        <h1 className='text-4xl font-bold text-center'>Projects</h1>

        <div className='flex gap-14 justify-center mt-16 flex-wrap'>
         
          <div className="w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
            <img src={port} width={190} alt="port" className='ml-5' />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">Portfolio</h5>
            <p className="mb-3 font-normal text-black">A passionate frontend developer crafting responsive, user-friendly websites and applications with a modern, aesthetic touch.</p>
            <a href="https://github.com/Karuppanan007/portfolio.git" className="inline-flex text-lg items-center p-2 px-7 rounded-lg bg-orange-500 text-white">
              View
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>

        
          <div className="w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
            <img src={food} alt="food" height={50} className='' />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black mt-4">Food Recipe App</h5>
            <p className="mb-3 font-normal text-black">A food recipe app built with ReactJS and Tailwind CSS. It uses APIs to offer a variety of recipes and cooking instructions.</p>
            <a href="https://github.com/Karuppanan007/Food-recipes.git" className="inline-flex text-lg font-normal items-center p-2 rounded-lg bg-orange-500 text-white px-7">
              View
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>

   
          <div className="w-72 p-3 border border-slate-300 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
            <img src={tic} alt="game" width={190} className='ml-6' />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">Game</h5>
            <p className="mb-3 font-normal text-black">A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript, allowing two players to complete this game.</p>
            <a href="https://github.com/Karuppanan007/tic-tac-toe-game.git" className="inline-flex text-lg font-normal items-center p-2 px-7 rounded-lg bg-orange-500 text-white">
              View
              <svg className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects;
