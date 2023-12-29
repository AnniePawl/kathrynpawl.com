import React from 'react';
import { useState } from 'react';
import './landing.scss';
import shapesCover from '../assets/projects/shapes-cover.png'
import patternCover from '../assets/projects/pattern-cover.png'
import illustrationsCover from '../assets/projects/illlustrations-cover.png'
import finsCover from '../assets/projects/fins-cover.png'
import textCover from '../assets/projects/text-cover.png'
import { Link } from 'react-router-dom';

export default function Projects(){
 
  const [style, setStyle] = useState('light');

  const changeStyle = () => {
    console.log(style)
    if (style !== 'light') setStyle("light")
    else setStyle('dark')
  }

return(
    <div className='bg-zinc-50 h-fit w-screen relative flex items-center justify-center flex-col z-[10] flex'>
    {/* Landing Content */}
    <div className='grid grid-cols-1 gap-0 py-24'>
        {/* GRAPHIC DESIGN */}
        <h2 class='border-b-2 border-zinc-800 text-xl font-bold uppercase tracking-widest text-zinc-900 mb-2 mx-3 '>Graphic Design</h2>
        <div class='flex mb-12 max-w-5xl overflow-auto'>
            {/* Shapes */}
            <Link to="/shapes">
                <div class='flex flex-col m-3 hover:scale-[.985] transition-all duration-[.4s]'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${shapesCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Shapes</h2>
                        <p class=' text-xs'>An assortment of 2D and 3D 'impossible shapes' </p>
                    </div>
                </div>  
            </Link> 
            {/* Patterns */}
            <Link to="/patterns">
                <div class='hover:scale-[.985] transition-all duration-[.4s] flex flex-col  m-3'>
                    <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${patternCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Patterns</h2>
                        <p class=' text-xs'>Various Patterns</p>
                    </div>
                </div> 
            </Link>  

            {/* Typography */}
            <Link to="/typography">
                <div class='flex flex-col m-3  hover:scale-[.985] transition-all duration-[.4s]'>
                    <div className='opacity-[95%] transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${textCover})` }}></div>
                    <div class='py-3 w-fit md:w-72'>
                        <h2 class='font-bold text-sm uppercase mb-1'>Typography</h2>
                        <p class=' text-xs'>Making fonts from scratch</p>
                    </div>
                </div>
            </Link>
            {/* Illustrations*/}
            <Link to="/illustrations">
            <div class='flex flex-col m-3  hover:scale-[.985] transition-all duration-[.4s]'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all '  style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
                <div class='py-3 w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Illustrations</h2>
                    <p class=' text-xs'>Making fonts from scratch</p>
                </div>
            </div>
            </Link>
        </div>
      
        {/* CASE STUDIES */}
        <h2 class=' border-b-2 border-zinc-800 text-xl font-bold uppercase tracking-widest text-zinc-900 mb-2 mx-3  '>Case Studies</h2>
        <div class='flex mb-12 max-w-5xl overflow-auto'>
            {/* Fins */}
            <div class='flex flex-col  m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${patternCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Fin's Fish Market </h2>
                    <p class=' text-xs'></p>
                </div>
            </div>   
            {/* Barko */}
            <div class='flex flex-col m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${shapesCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Barko</h2>
                    <p class=' text-xs'> </p>
                </div>
            </div>   
            {/* Med Smart*/}
            <div class='flex flex-col m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${textCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Med Smart</h2>
                    <p class=' text-xs'></p>
                </div>
            </div>
            {/* Flower Bar*/}
            <div class='flex flex-col  m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
                <div class='py-3 w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>The Flower Bar</h2>
                    <p class=' text-xs'></p>
                </div>
            </div>
        </div>

        {/* Product Design */}
        <h2 class='  text-lg font-bold uppercase tracking-widest text-zinc-900 mb-2 px-3 '>Product Design</h2>
        <div class=' flex mb-12 max-w-5xl overflow-auto'>
        {/* Mais x Frieda */}
            <div class='flex flex-col  m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${patternCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Mais x Freida Redesign </h2>
                    <p class=' text-xs'></p>
                </div>
            </div>   
            {/* Mart's Milk Carton */}
            <div class='flex flex-col m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${shapesCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Mart's Milk Carton</h2>
                    <p class=' text-xs'> </p>
                </div>
            </div>   
            {/* Med Smart*/}
            <div class='flex flex-col m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${textCover})` }}></div>
                <div class='py-3 w-fit md:w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>Med Smart</h2>
                    <p class=' text-xs'></p>
                </div>
            </div>
            {/* Flower Bar*/}
            <div class='flex flex-col  m-3'>
                <div className='transition-all duration-[1s] flex items-center justify-center relative cover shapes-cover h-32 w-32 sm:h-48 sm:w-48  md:h-72 md:w-72 bg-center bg-cover transition-all bg-red-600 '  style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
                <div class='py-3 w-72'>
                    <h2 class='font-bold text-sm uppercase mb-1'>The Flower Bar</h2>
                    <p class=' text-xs'></p>
                </div>
            </div>
        </div>
      
        
        </div>
       
    </div>
  )
}

