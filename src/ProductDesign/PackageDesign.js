import React from "react";
import Header from '../Header'
import carton1 from '../assets/product/milkcarton1.png'
import carton2 from '../assets/product/milkcarton2.png'
import carton3 from '../assets/product/milkcarton2.png'
import carton4 from '../assets/product/milkcarton3.png'
import { useEffect } from "react";

export default function PackageDesign(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
           <Header/>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Package Design</h2>
            <div className=" flex grid grid-cols-2 gap-1 md:gap-4">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[350px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${carton1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[350px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${carton2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[350px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${carton3})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[350px] md:w-[550px] bg-center bg-cover '  style={{ backgroundImage:`url(${carton4})` }}></div>
            </div>
            <div class='h-[1.5px] w-full max-w-7xl bg-zinc-300 my-6 md:my-12 px-4'></div>
            <div className=" flex grid grid-cols-2 gap-2 md:gap-4"></div>
        </div>
    )
}