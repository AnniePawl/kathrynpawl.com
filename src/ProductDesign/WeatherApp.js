import React from "react";
import Header from '../Header'
import { useEffect } from "react";
import weather1 from '../assets/product/weather/weather-1.jpeg';
import weather2 from '../assets/product/weather/weather-2.jpeg'


export default function WeatherApp(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
           <Header/>
            <h2 class='pb-4 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Weather App</h2>
            <div className="flex grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class='h-[640px] w-[300px] bg-center bg-cover'  style={{ backgroundImage:`url(${weather1})` }}></div>
                <div class='h-[640px] w-[300px] bg-center bg-cover'  style={{ backgroundImage:`url(${weather2})` }}></div>
            </div>
        </div>
    )
}