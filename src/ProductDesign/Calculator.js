import React from "react";
import { useEffect } from "react";
import calc from '../assets/product/product-1.jpeg'


export default function Calculator(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-white h-fit w-screen flex flex-col items-center justify-center py-28'>
            <h2 class='text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Calculator</h2>
            <img class='h-auto w-[400px]' src={calc}/>
           
        </div>
    )
}