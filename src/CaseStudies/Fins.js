import React from "react";
import { useEffect } from "react";
import finshero from '../assets/studies/fins/fins-hero.png'


export default function Fins(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-32 md:py-24'>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='flex pb-6 md:pb-8 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Fin's Fish Market Case Study</h2>
                <div class='w-[380px] md:w-full h-[200px] md:h-[550px] bg-cover bg-top' style={{ backgroundImage:`url(${finshero})` }}></div>
            </div>
            <div className="flex grid grid-cols-3 gap-2 md:gap-4">
                {/* <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic3})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic4})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover'  style={{ backgroundImage:`url(${pic5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover'  style={{ backgroundImage:`url(${pic6})` }}></div> */}
            </div>
        </div>
    )
}