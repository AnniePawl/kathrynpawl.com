import React from "react";
import { useEffect } from "react";
import pic1 from '../assets/illustrations/pic-1.png'
import pic2 from '../assets/illustrations/pic-2.png'



export default function Illustrations(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, [])
    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28 '>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Illustrations</h2>
            <div className="flex grid grid-cols-2 gap-2 md:gap-4">
                <div class='md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic1})` }}></div>
                <div class='md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic2})` }}></div>
            </div>
        </div>
    )
}