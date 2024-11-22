import React, { Component } from 'react'
import gradientBG from '../assets/GradientBG.png'
import cloudBG from '../assets/cloud-bg.jpeg'
import katsBg from '../assets/Videos/kats-bg.mp4'
// import katsBg2 from '../assets/Videos/kats-bg.mp4'
import katsBgMobile from '../assets/Videos/bg-gif.gif'




import './landing.scss'

export default function Background(){
    return(
       
   <div>
        <div className='overflow-hidden fixed md:-bottom-2 left-0 bg-white px-24 z-[0] top-0 left-0 w-screen h-[90vh] lg:h-screen flex items-center justify-end '>

			<video className='VideoTag hidden scale-[1.05] -mb-4 md:flex w-screen' autoPlay muted>
			    <source src={katsBg} type='video/mp4'/>
		    </video>
            <img class='flex md:hidden scale-[1.8] height-screen w-screen' src={katsBgMobile}></img>
            
            {/* <video className='VideoTag md:hidden scale-[1.8]' autoPlay muted>
			    <source src={katsBgMobile} type='video/mp4'/>
		    </video> */}
            
            <div class=' absolute bottom-6 md:bottom-10 left-0 w-full px-6 md:px-20'>
                    {/* <p class='text-zinc-800 text-lg font-bold uppercase tracking-wide '>Kathryn Pawl </p> */}
                    <div class='flex flex-col w-full justify-between '>
                    <p class='text-zinc-800 text-xs md:text-xs tracking-wider uppercase  mb-2 '>Kathryn Pawl  </p>
                        <p class='text-zinc-800 text-xs md:text-xs tracking-wider uppercase mb-2 '>UX Designer | UX Researcher  </p>
                        <p class='text-zinc-800 text-xs md:text-xs tracking-wider uppercase '>Seattle, Washington  </p>
                    </div>
                </div>
            {/* <div className='background fixed top-0 left-0 h-screen w-screen bg-cover bg-center' style={{ backgroundImage:`url(${cloudBG})` }} ></div> */}
            {/* <div className='md:hidden bg-gradient-to-t from-blue-600 to-transparent background opacity-80 h-screen fixed top-0 left-0 w-screen bg-cover bg-center' style={{ backgroundImage:`url(${bg8})` }} ></div> */}
        </div>
        </div>
        )
}