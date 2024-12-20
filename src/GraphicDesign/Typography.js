import React from "react";
import ToTop from "../ToTop";
import Header from "../Header";
import { useEffect } from "react";
import text1 from '../assets/text/text-1.png'
import text2 from '../assets/text/text-2.png'
import text3 from '../assets/text/text-3.gif'
import text4 from '../assets/text/text-4.gif'
import text5 from '../assets/text/text-5.png'
import text6 from '../assets/text/text-6.png'
import text7 from '../assets/text/text-7.png'
import text8 from '../assets/text/text-8.png'
import snake from '../assets/text/snake.png'

export default function Typography(){
    useEffect(() => {
            window.scrollTo(0, 0)
            }, [])
    return(
        <div class='bg-zinc-50 overscroll-none h-fit w-screen flex flex-col items-center justify-center py-20 md:pt-28 md:pb-10 overflow-hidden'>
            <Header/>
            <h2 class='pb-6 md:pb-12 text-base md:text-2xl font-bold uppercase tracking-widest text-zinc-900'>Typography</h2>
            <div className="md:mb-2 max-w-8xl flex grid grid-cols-1 md:grid-cols-2 md:gap-2 md:gap-6">
                <div class='h-80 md:h-[450px] w-[375px] md:w-[685px] bg-center bg-cover' style={{ backgroundImage:`url(${text3})` }}></div>
                <div class='h-80 md:h-[450px] w-[375px] md:w-[685px] bg-center bg-cover' style={{ backgroundImage:`url(${text4})` }}></div>
            </div>
            <img class='mb-2 w-full max-w-[1375px]' src={snake}></img>
            <div className="flex grid grid-cols-2 md:grid-cols-3 md:gap-2">
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text6})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text7})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-[450px] md:w-[450px] bg-center bg-cover' style={{ backgroundImage:`url(${text8})` }}></div>
            </div>
            <ToTop bgColor='#29abe2'/>
        </div>
    )
}