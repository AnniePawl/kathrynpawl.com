import React from "react";
import shape1 from '../assets/shapes/shapes-1.png'
import shape2 from '../assets/shapes/shapes-2.png'
import shape3 from '../assets/shapes/shapes-3.png'
import shape4 from '../assets/shapes/shapes-4.png'
import shape5 from '../assets/shapes/shapes-5.png'
import shape6 from '../assets/shapes/shapes-6.png'
import shape7 from '../assets/shapes/shapes-7.png'
import shape8 from '../assets/shapes/shapes-8.png'
import shape9 from '../assets/shapes/shapes-9.png'
import shape10 from '../assets/shapes/shapes-10.png'
import shape11 from '../assets/shapes/shapes-11.png'
import shape12 from '../assets/shapes/shapes-12.png'
import shape13 from '../assets/shapes/shapes-13.jpeg'
import shape14 from '../assets/shapes/shapes-14.jpeg'
import shape15 from '../assets/shapes/shapes-15.jpeg'
import { useEffect } from "react";

export default function Shapes(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col justify-center items-center py-28'>
            <h2 class='pb-6 md:pb-12 text-base md:text-xl font-bold uppercase tracking-widest text-zinc-900 '>Shapes</h2>
            <div className="px-4 md:px-0 flex grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape3})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape4})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape9})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape6})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape8})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape7})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape12})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape10})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape11})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape13})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape14})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${shape15})` }}></div>
            </div>
        </div>
    )
}