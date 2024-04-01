import React from "react";
import { useEffect } from "react";
import Header from "../Header";
import calc from '../assets/product/product-1.jpeg'
import weather1 from '../assets/product/weather/weather-light.jpeg'
import weather2 from '../assets/product/weather/weather-dark.jpeg'


export default function Widgets(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(

        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center pt-28 '>
            <Header/>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Widgets</h2>
            <div className=" flex grid grid-cols-2 gap-1 md:gap-4 mb-16">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[500px] md:w-[700px] bg-center bg-cover '  style={{ backgroundImage:`url(${weather1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[500px] md:w-[700px] bg-center bg-cover '  style={{ backgroundImage:`url(${weather2})` }}></div>
            </div>
            <div class='mb-12 h-48 w-48 sm:h-48 sm:w-48 md:h-[600px] md:w-[700px] bg-center bg-cover '  style={{ backgroundImage:`url(${ calc})` }}></div>
        </div>
    )
}