import React from "react";
import { useEffect } from "react";
import Header from "../Header";
import calc1 from '../assets/product/calc/calc-1.jpeg'
import calc2 from '../assets/product/calc/calc-2.jpeg'
import calc3 from '../assets/product/calc/calc-3.jpeg'
import weather1 from '../assets/product/weather/weather-light.jpeg'
import weather2 from '../assets/product/weather/weather-dark.jpeg'


export default function Widgets(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(

        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center pt-28 '>
            <Header/>
            <h2 class='pb-4 md:pb-2 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Widgets</h2>
           {/* Weather App  */}
            <div className="max-w-7xl flex grid grid-cols-2 gap-1 md:gap-4 mb-16">
                <img class='max-h-[500px]' src={weather1}></img>
                <img class='max-h-[500px]' src={weather2}></img>
            </div>
            {/* Calculator App  */}
            <div className="max-w-7xl flex grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 mb-16">
                <img class='max-h-[500px]' src={calc1}></img>
                <img class='max-h-[500px]' src={calc2}></img>
                <img class='max-h-[500px]' src={calc3}></img>
            </div>
            {/* <div class='mb-12 h-48 w-48 sm:h-48 sm:w-48 md:h-[600px] md:w-[700px] bg-center bg-cover '  style={{ backgroundImage:`url(${ calc})` }}></div> */}
        </div>
    )
}