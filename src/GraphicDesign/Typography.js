import React from "react";
import { useEffect } from "react";
import text1 from '../assets/text/text-1.png'
import text2 from '../assets/text/text-2.png'
import text3 from '../assets/text/text-3.gif'
import text4 from '../assets/text/text-4.gif'
import text5 from '../assets/text/text-5.png'
import text6 from '../assets/text/text-6.png'
import text7 from '../assets/text/text-7.png'
import text8 from '../assets/text/text-8.png'



export default function Typography(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, [])
    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28 '>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Typography</h2>
            <div className="mb-4  max-w-7xl flex grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                <div class='h-96 w-[580px] bg-center bg-cover '  style={{ backgroundImage:`url(${text3})` }}></div>
                <div class='h-96 w-[580px] bg-center bg-cover '  style={{ backgroundImage:`url(${text4})` }}></div>
            </div>
            <div className="flex grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text6})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text7})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${text8})` }}></div>
            </div>
        </div>
    )
}