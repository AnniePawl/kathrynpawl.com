import React from 'react';
import HomeHeader from '../HomeHeader'
import cow from '../assets/icons/cow.png'
import './landing.scss';
import { HashLink } from 'react-router-hash-link';
import Home from './Home';

export default function Landing(){
 
    return(
        <div class='landing-bg h-screen w-screen overlow-hidden z-[10] flex items-center relative '>
          <HomeHeader/>
            <div class='flex flex-col px-20 h-fit absolute bottom-14'>
                <p class='text-zinc-50 font-[700] uppercase tracking-wider text-2xl md:text-9xl max-w-8xl mb-4 '>Kathryn Pawl </p>
                <p class='mt-1 ml-1 font-roboto text-zinc-50  uppercase font-light text-2xl md:text-5xl max-w-9xl mb-5 '>UX Design | UX Research  </p>
                <p class='ml-2 font-roboto font-medium text-zinc-50 tracking-wider text-lg md:text-3xl max-w-9xl mb-4 '>Seattle, WA </p>
               
            </div>
         
            <div class='px-4 md:px-20 w-full flex justify-between items-center absolute bottom-20'>
                <p class='text-2xl text-zinc-800 uppercase font-bold tracking-wide '></p>
                <HashLink smooth to="/#projects">
                    <div class='flex flex-col items-center'>
                        {/* <img  class='hover:scale-[.7] transition-all scale-[.6]' src={cow}></img> */}
                         <p class='hover:scale-[.9] transition-all w-fit rounded-sm text-sm text-zinc-50 py-2 px-5 border-2 tracking-wider border-zinc-50 uppercase'>Recent Work</p>
                        {/* <p class='text-xl animate-bounce text-white'>↓</p> */}
                    </div>
                </HashLink>
                
                
                {/* <p class='text-2xl text-zinc-8000 uppercase font-bold tracking-wide '>UX Design | Graphic Design</p> */}
                {/* <p class=' text-sm text-center text-zinc-100 justify-self-end pb-2'>scroll down to see more</p> */}
                {/* <span class='text-zinc-100 animate-bounce'>↓</span> */}
            </div>
        </div>
    )
}

