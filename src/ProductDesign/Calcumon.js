import React from "react";
import Header from '../Header'
import calcumonHero from '../assets/product/calcumon/calcumon-cover.png'
import { useEffect } from "react";


export default function Calcumon(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
            <Header/>
            <h2 class='text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Calcumon</h2>
            <img class='h-auto w-[400px]' src={calcumonHero}/>
           
        </div>
    )
}