import './landing.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import shapesCover from '../assets/projects/shapes-cover.png'
import patternCover from '../assets/projects/pattern-cover.jpeg'
import illustrationsCover from '../assets/projects/illustrations-cover.jpeg'
import textCover from '../assets/projects/text-cover.jpeg'
import cs1 from '../assets/studies/cs-1.jpeg'
import cs2 from '../assets/studies/cs-2.jpeg'
import cs3 from '../assets/studies/cs-3.jpeg'
import cs4 from '../assets/studies/cs-4.jpeg'
import cs5 from '../assets/studies/cs-5.jpeg'
import cs6 from '../assets/studies/cs-6.jpeg'
import product1 from '../assets/product/product-1.jpeg'
import product2 from '../assets/product/product-2.jpeg'
import product3 from '../assets/product/product-3.jpeg'
import medsmartHero from '../assets/studies/medsmart/medsmart-hero.jpeg'
export default function Projects(){

 



return(

  
    <div id='projects' className='bg-zinc-50 h-fit w-screen relative flex  justify-center flex-col z-[10] flex'>
    {/* CASE STUDIES */}
    <div class='w-full px-24 pt-20 '>
        <h2 class='mb-3 text-center text-zinc-800  text-base md:text-3xl font-bold uppercase tracking-widest '>Case Studies</h2>
        <div class=' mb-20 w-full h-[2px] bg-zinc-800'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <Link to="/barko">
            <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${cs3})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Barko Case Study</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Dog Walking App</span>
                        <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </Link>
         
            <Link to="/fins">
            <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${cs1})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] uppercase tracking-widest text-zinc-900 '>Fins Case Study</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Fish Market Website</span>
                        <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute. </p>
                    </div>
                </div>
            </Link>
    
            <Link to="/medsmart">
                <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${cs2})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>MEDSMART UX Case Study</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Medication Reminder App</span>
                        <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </Link>
            <Link to="/flowerbar">
                <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${cs4})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Flower Bar</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Flower Shop App</span>
                        <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </Link>
            
        </div>
        
        
     
       
        {/* GRAPHIC DESIGN */}
        <h2 class='pt-24 mb-3 text-center text-zinc-800  text-base md:text-3xl font-bold uppercase tracking-widest '>Graphic Design</h2>
        <div class=' mb-20 w-full h-[2px] bg-zinc-800'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
            {/* Shapes */}
            <Link to="/shapes">
                <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${shapesCover})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Shapes</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Flower Shop App</span>
                        {/* <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                </div>
            </Link> 
            {/* Patterns */}
            <Link to="/patterns">
                <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${patternCover})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Patterns</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Flower Shop App</span>
                        {/* <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                </div>
            </Link>  
            {/* Typography */}
            <Link to="/typography">
            <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${textCover})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Typography</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Flower Shop App</span>
                        {/* <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                </div>
            </Link>
            {/* Illustrations*/}
            <Link to="/illustrations">
            <div class='flex flex-col space-between'>
                    <div>
                        <div class='flex self-center rounded-sm w-full  h-[650px] w-full  bg-cover bg-center p-6' style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
                        <h2 class='pt-5 font-roboto flex text-base md:text-xl font-[700] tracking-widest text-zinc-900 '>Illustrations</h2>
                        <span class='text-lg tracking-wide text-zinc-800'>Flower Shop App</span>
                        {/* <p class='mt-4 mb-0 text-lg tracking-wide font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                    </div>
                </div>
            </Link>
        </div>
      
        {/* Product Design */}
        <h2 class='pt-24 mb-3 text-center text-zinc-800  text-base md:text-3xl font-bold uppercase tracking-widest'>Product Design</h2>
        <div class=' mb-20 w-full h-[2px] bg-zinc-800'></div>
        <div class='flex mb-12 max-w-7xl overflow-auto'>
            {/* Calculator */}
            <Link to='/calculator'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col  m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${product1})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Calculator</h2>
                        <p class=' text-xs'></p>
                    </div>
                </div>  
            </Link> 
            {/* Weather App*/}
            <Link to='/weatherapp'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col m-3'>
                    <div className='opacity-80 transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${product2})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Weather App</h2>
                        <p class=' text-xs'> </p>
                    </div>
                </div> 
            </Link> 
            {/* Mais Freida*/}
            <Link to='/maisfrida'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${cs5})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Mais Frida</h2>
                        <p class=' text-xs'></p>
                    </div>
                </div>
            </Link>
            {/* Package Design*/}
            <Link to='/packagedesign'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${product3})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Package Design</h2>
                        <p class=' text-xs'> </p>
                    </div>
                </div>  
            </Link>
        </div>
        </div>
       
    </div>
  )
}

