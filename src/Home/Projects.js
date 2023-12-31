import React from 'react';
import { useState } from 'react';
import './landing.scss';
import { Link } from 'react-router-dom';
import shapesCover from '../assets/projects/shapes-cover.png'
import patternCover from '../assets/projects/pattern-cover.png'
import illustrationsCover from '../assets/projects/illlustrations-cover.png'
import textCover from '../assets/projects/text-cover.png'
import cs1 from '../assets/studies/cs-1.jpeg'
import cs2 from '../assets/studies/cs-2.jpeg'
import cs3 from '../assets/studies/cs-3.png'
import cs4 from '../assets/studies/cs-4.jpeg'
import cs5 from '../assets/studies/cs-5.jpeg'
import cs6 from '../assets/studies/cs-6.jpeg'
import product1 from '../assets/product/product-1.jpeg'
import product2 from '../assets/product/product-2.jpeg'
import product3 from '../assets/product/product-3.jpeg'

export default function Projects(){
 

return(
    <div className='bg-zinc-50 h-fit w-screen relative flex items-center justify-center flex-col z-[10] flex'>
    {/* Landing Content */}
    <div className='grid grid-cols-1 gap-0 py-16 px-4 lg:px-0 md:py-24'>
        {/* GRAPHIC DESIGN */}
        <h2 class='border-b-2 border-zinc-800 text-lg md:text-xl font-bold uppercase tracking-widest text-zinc-700 mb-2 mx-3 '>Graphic Design</h2>
        <div class='flex mb-6 md:mb-12 max-w-7xl overflow-auto'>
            {/* Shapes */}
            <Link to="/shapes">
                <div class='flex flex-col m-3 hover:scale-[.985] transition-all duration-[.4s]'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${shapesCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Shapes</h2>
                        <p class=' text-xs'>An assortment of 2D and 3D 'impossible shapes' </p>
                    </div>
                </div>  
            </Link> 
            {/* Patterns */}
            <Link to="/patterns">
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col  m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${patternCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Patterns</h2>
                        <p class=' text-xs'>Various Patterns</p>
                    </div>
                </div> 
            </Link>  
            {/* Typography */}
            <Link to="/typography">
                <div class='flex flex-col m-3 hover:scale-[.985] transition-all duration-[.4s]'>
                    <div className='opacity-[95%] transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${textCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Typography</h2>
                        <p class=' text-xs'>Making fonts from scratch</p>
                    </div>
                </div>
            </Link>
            {/* Illustrations*/}
            <Link to="/illustrations">
            <div class='flex flex-col m-3  hover:scale-[.985] transition-all duration-[.4s]'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all '  style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
                <div class='py-3 w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Illustrations</h2>
                    <p class=' text-xs'>Making fonts from scratch</p>
                </div>
            </div>
            </Link>
        </div>
      
        {/* CASE STUDIES */}
        <h2 class=' border-b-2 border-zinc-800 text-lg md:text-xl font-bold uppercase tracking-widest text-zinc-700 mb-2 mx-3  '>Case Studies</h2>
        <div class='flex mb-6 md:mb-12 max-w-7xl overflow-auto'>
            {/* Fins */}
            <Link to="/fins">
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col  m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-right bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${cs1})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Fin's Fish Market </h2>
                        <p class=' text-xs'></p>
                    </div>
                </div>  
            </Link> 
            {/* Barko */}
            <Link to="/barko">
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${cs2})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Barko</h2>
                        <p class=' text-xs'> </p>
                    </div>
                </div> 
            </Link> 
            {/* Flower Bar*/}
            <Link to='/flowerbar'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col  m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${cs4})` }}></div>
                    <div class='py-3 w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>The Flower Bar</h2>
                        <p class=' text-xs'></p>
                    </div>
                </div>
            </Link>
            {/* Med Smart*/}
            <Link to='medsmart'>
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-44 w-44 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-top bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${cs6})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Med Smart</h2>
                        <p class=' text-xs'></p>
                    </div>
                </div>
            </Link>
        </div>

        {/* Product Design */}
        <h2 class='border-b-2 border-zinc-800 text-lg md:text-xl font-bold uppercase tracking-widest text-zinc-700 mb-2 mx-3  '>Product Design</h2>
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

