import React from "react";
import hand from '../assets/landing/hand.jpeg'

export default function Contact(){
    return(
        <div class='h-[200px]  w-screen relative  items-center justify-center flex bg-zinc-50 z-10'>
            <div class='absolute bottom-0 right-0 bg-cover bg-center h-96 w-96' style={{ backgroundImage:`url(${hand})` }}></div>
            <a class='font-medium uppercase tracking-widest text-zinc-50  hover:cursor-default transition-colors duration-[.3s] px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full'>Reach Out</a>
        </div>
    )
}