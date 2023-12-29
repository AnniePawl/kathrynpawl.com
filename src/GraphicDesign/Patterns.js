import React from "react";
import { useEffect } from "react";
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


export default function Patterns(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, [])
    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28 '>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Patterns</h2>
            <div className="flex grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern3})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern6})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern4})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern7})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern8})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern9})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern10})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern12})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-72 md:w-72 bg-center bg-cover '  style={{ backgroundImage:`url(${pattern11})` }}></div>
            </div>
        </div>
    )
}