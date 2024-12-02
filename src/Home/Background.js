import React, { Component } from 'react';
import katsBg from '../assets/Videos/kats-bg.mp4';
import katsBgMobile from '../assets/Videos/mobile-gif.gif';
import './landing.scss';

export default function Background(){
    return(
    <div>
        <div className='overflow-hidden fixed left-0 top-0 bg-white px-24 z-[0] w-screen h-[87vh] lg:h-screen flex items-center justify-end'>
            {/* mobile background */}
            <img class='flex md:hidden pt-0 scale-[1.85] height-screen w-screen' src={katsBgMobile}></img>
            {/* desktop background */}
            <video className='videoTag -mb-4 hidden scale-[1.06] md:flex w-screen xl:self-end xl:pb-8' autoPlay muted>
                <source src={katsBg} type='video/mp4'/>
            </video>
            {/* copy */}
            <div class=' absolute bottom-0 md:bottom-8 left-0 w-full px-6 md:px-20'>
                <div class='flex flex-col w-full justify-between '>
                    <p class='text-zinc-800 text-xs md:text-[13px] tracking-wider uppercase mb-2 '>Kathryn Pawl  </p>
                    <p class='text-zinc-800 text-xs md:text-[13px] tracking-wider uppercase mb-2 '>UX Designer | UX Researcher  </p>
                    <p class='text-zinc-800 text-xs md:text-[13px] tracking-wider uppercase '>Seattle, Washington  </p>
                </div>
            </div>
         </div>
    </div>
    )
}