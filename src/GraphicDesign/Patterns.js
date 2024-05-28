import React from "react";
import Header from "../Header";
import { useEffect } from "react";
import ToTop from "../ToTop";
import pattern1 from '../assets/patterns/patterns-1.png'
import pattern2 from '../assets/patterns/patterns-2.png'
import pattern3 from '../assets/patterns/patterns-3.png'
import pattern4 from '../assets/patterns/patterns-4.png'
import pattern5 from '../assets/patterns/patterns-5.png'
import pattern6 from '../assets/patterns/patterns-6.png'
import pattern7 from '../assets/patterns/patterns-7.png'
import pattern8 from '../assets/patterns/patterns-8.png'
import pattern9 from '../assets/patterns/patterns-9.png'
import pattern10 from '../assets/patterns/patterns-10.png'
import pattern11 from '../assets/patterns/patterns-11.png'
import pattern12 from '../assets/patterns/patterns-12.png'
import pattern13 from '../assets/patterns/patterns-13.png'


export default function Patterns(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, [])
    return(
        <div class='overflow-hidden relative bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center pt-20 pb-10 md:py-28 '>
            <Header/>
            {/* <p class='absolute top-10 left-10'>Kathyn Pawl</p> */}
            <h2 class='pb-6 md:pb-12 text-base md:text-2xl font-bold uppercase tracking-widest text-zinc-900 '>Patterns</h2>
            <div className="flex grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
            <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern11})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern12})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern1})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern5})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern13})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern2})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern3})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern4})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern8})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern10})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern7})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern9})` }}></div>
                <div class='h-44 w-44 sm:h-44 sm:w-44 md:h-[550px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${pattern6})` }}></div>
               
            </div>
            <ToTop bgColor='#0891b2'/>
        </div>
    )
}