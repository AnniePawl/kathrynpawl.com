import React from 'react';
import HomeHeader from './HomeHeader';
import './landing.scss';
import { useState } from 'react'

export default function Landing(){
    const [enabled, setEnabled] = useState(false)
 
    return(
        <div id='landing' class='landing h-[87vh] md:h-[100vh] w-screen overflow-hidden z-[11] justify-center flex items-end relative'>
            <HomeHeader/>
            {/* <p class='text-zinc-800 font-[300] text-sm md:text-base tracking-wide  '>UX Designer / UX Researcher  </p> */}
            {/* <div class=' w-full px-4 md:px-20'>
                <p class='text-zinc-800 text-lg font-bold uppercase tracking-wide '>Kathryn Pawl </p>
                <p class='text-zinc-800 font-[300] text-sm md:text-base tracking-wide  '>UX Designer / UX Researcher  </p>
                <p class='text-zinc-800 font-[300] text-sm md:text-base tracking-wide '>Seattle Washington</p> 
            </div> */}
        </div>
    )
}

