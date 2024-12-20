import React from "react";
import { useEffect, useRef } from "react";
import ToTop from "../ToTop";
import Header from "../Header";
import { HashLink } from "react-router-hash-link";
import pic1 from '../assets/illustrations/pic-1.png'
import pic2 from '../assets/illustrations/pic-2.png'
import pic3 from '../assets/illustrations/pic-3.png'
import pic4 from '../assets/illustrations/pic-4.png'
import pic5 from '../assets/illustrations/pic-5.png'
import pic12 from '../assets/illustrations/pic-12.png'
import pic15 from '../assets/illustrations/pic-15.png'
import pic16 from '../assets/illustrations/pic-16.png'
import pic17 from '../assets/illustrations/pic-17.jpeg'
import pic18 from '../assets/illustrations/pic-18.jpeg'
import pic19 from '../assets/illustrations/pic-19.jpeg'
import pic20 from '../assets/illustrations/pic-20.jpeg'
import pic21 from '../assets/illustrations/pic-21.jpeg'
import pic22 from '../assets/illustrations/pic-22.jpeg'
import pic24 from '../assets/illustrations/pic-24.jpeg'
import hands from '../assets/illustrations/hands.png'

export default function Illustrations(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, []);

    return(
        <div class='relative overflow-hidden bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-20'>
           <Header/>
            <h2 class='pb-3 text-base md:text-2xl font-bold uppercase tracking-widest text-zinc-900 '>Illustrations</h2>
            {/* Menu */}
            <div class=' mb-6 w-full h-fit max-w-6xl flex items-center justify-center'>
                <HashLink  smooth to="#misc">
                    <span  class='hover:cursor-pointer text-xs font-medium py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-[.5s] rounded-md px-4 uppercase tracking-widest text-zinc-900 mx-2'>misc.</span>
                </HashLink>
                <HashLink  smooth to="#bugs">
                    <span  class='hover:cursor-pointer text-xs font-medium py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-[.5s] rounded-md px-4 uppercase tracking-widest text-zinc-900 mx-2'>Bugs</span>
                </HashLink>
                <HashLink  smooth to="#medical">
                    <span   class='hover:cursor-pointer text-xs font-medium py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-[.5s] rounded-md px-4 uppercase tracking-widest text-zinc-900 mx-2'>Medical</span>
                </HashLink>
                <HashLink smooth to="#3d">
                    <span class='hover:cursor-pointer text-xs font-medium py-1 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-[.5s] rounded-md px-4 uppercase tracking-widest text-zinc-900 mx-2'>3D</span>
                </HashLink>
            </div>
            {/* MISCELLANEOUS */}
            <div id='misc'  class='w-full max-w-6xl pb-4 flex items-center justify-center px-4 '>
                <span class='hover:cursor-pointer text-center md:text-left text-sm w-full pb-1 border-b-[1.5px] border-zinc-500 font-medium transition-colors duration-[.5s]  uppercase tracking-widest text-zinc-700 '>miscellaneous</span>
            </div>
            <div class='w-full max-w-6xl pb-10 flex flex-col items-center justify-center px-4'>
                <img class='pb-2' src={pic22}></img>
                <div class='w-full max-w-7xl pb-2 flex items-center justify-center'>
                    <div class='mr-1 flex items-center justify-center h-fit w-full bg-white'>
                        <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover '  style={{ backgroundImage:`url(${pic1})` }}></div>
                    </div>
                    <div class='ml-1 flex items-center justify-center  h-fit w-full bg-white'>
                        <div class=' h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover '  style={{ backgroundImage:`url(${pic2})` }}></div>
                    </div>
                </div>
                <div class='w-full max-w-7xl pb-2 flex items-center justify-center'>
                    {/* <div class='mr-1 flex items-center justify-center h-fit w-full bg-white'>
                        <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover '  style={{ backgroundImage:`url(${pic7})` }}></div>
                    </div> */}
                    <div class='mr-1 flex items-center justify-center h-fit w-full bg-white'>
                        {/* <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover '  style={{ backgroundImage:`url(${bird})` }}></div> */}
                    </div>
                    <div class='ml-1 flex items-center justify-center  h-fit w-full bg-white'>
                        {/* <div class=' h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover '  style={{ backgroundImage:`url(${pic8})` }}></div> */}
                    </div>
                </div>
           
                <img class='pb-2' src={hands}></img>
                <div class='flex grid grid-cols-2 gap-2 w-full pb-2 '>
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${donut})` }}></div> */}
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover'  style={{ backgroundImage:`url(${donut2})` }}></div> */}
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover'  style={{ backgroundImage:`url(${pic12})` }}></div>
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic10})` }}></div> */}
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic14})` }}></div> */}
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover'  style={{ backgroundImage:`url(${pic15})` }}></div>
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${stairs})` }}></div> */}
                    {/* <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover'  style={{ backgroundImage:`url(${turtle})` }}></div> */}
                </div>
            </div>
             {/* BUGS */}
             <div id='bugs' class='w-full max-w-6xl pb-4 flex items-center justify-center px-4 '>
                <span class='hover:cursor-pointer text-center md:text-left text-sm w-full pb-1 border-b-[1.5px] border-zinc-500 font-medium transition-colors duration-[.5s]  uppercase tracking-widest text-zinc-700 '>Bugs</span>
            </div>
            <div class='w-full max-w-6xl pb-10 flex items-center justify-center px-4 '>
                <div class='flex grid grid-cols-2 gap-2 md:grid-cols-2 w-full pb-2 '>
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic3})` }}></div>
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic5})` }}></div>
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover'  style={{ backgroundImage:`url(${pic4})` }}></div>
                    <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic24})` }}></div>
                </div>
            </div>
            {/* MEDICAL */}
            <div id="medical" class='w-full max-w-6xl pb-4 flex items-center justify-center px-4 '>
                <span class='hover:cursor-pointer text-center md:text-left text-sm w-full pb-1 border-b-[1.5px] border-zinc-500 font-medium transition-colors duration-[.5s]  uppercase tracking-widest text-zinc-700 '>Medical Illustrations</span>
            </div>
            <div class='w-full max-w-6xl pb-10 flex flex-col items-center justify-center px-4 '>
                    <div class='flex grid grid-cols-2 gap-2 md:grid-cols-2 w-full pb-2 '>
                        <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic17})` }}></div>
                        <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic18})` }}></div>
                        <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic19})` }}></div>
                        <div class='flex h-56 md:h-[450px] w-full bg-center bg-cover '  style={{ backgroundImage:`url(${pic20})` }}></div>
                    </div>
                    <div class='flex'>
                        <img class='w-full' src={pic21}/>
                    </div>
            </div>

            {/* 3D */}
            <div id='3d' class='w-full max-w-6xl pb-4 flex items-center justify-center px-4 '>
                <span class='hover:cursor-pointer text-center md:text-left text-sm w-full pb-1 border-b-[1.5px] border-zinc-500 font-medium transition-colors duration-[.5s]  uppercase tracking-widest text-zinc-700 '>3D Designs</span>
            </div>
            <div class='w-full max-w-6xl pb-10 flex flex-col items-center justify-center px-4 '>
                {/* <img class='pb-2' src={rainbow}></img> */}
                <img class='pb-2' src={pic16}></img>
            </div>

            <ToTop bgColor='#10b981'/>

        </div>
    )
}