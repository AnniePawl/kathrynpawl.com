import React from "react";
import { useEffect } from "react";
import Header from '../Header'
import colors from '../assets/product/calcumon/color-palette.png';
import characters from '../assets/product/calcumon/characters.png';
import right from '../assets/product/calcumon/right.png';
import cover2 from '../assets/product/calcumon/cover-2.png';
import wrong from '../assets/product/calcumon/wrong.png';
import levels from '../assets/product/calcumon/levels.png';
import play from '../assets/product/calcumon/play.png';
import animation from '../assets/product/calcumon/animation.png';
import animation2 from '../assets/product/calcumon/animation2.png';
import calcumonHero from '../assets/product/calcumon/calcumon-cover.png'
import ToTop from "../ToTop";

export default function Calcumon(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])
    return(
        <div class='overflow-hidden bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
            <Header/>
            <div class='w-full max-w-5xl flex flex-col items-center justify-center'>
                <h2 class='text-sm md:text-xl font-black uppercase tracking-widest md:tracking-[6px] text-zinc-800 '>Calcumon</h2>
                <p class='px-4 md:px-0 text-sm md:text-base text-center pt-4 pt-6 pb-10 text-zinc-700'>Calcumon is an interactive learning platform designed specifically for elementary school students. The goal was to  combine gameplay and fundamental math concepts to cultivate excitement and essential skills in young learners. From basic arithmetic to problem-solving challenges, every level was designed to inspire curiosity and confidence in math. My role was to create a fun, vibrant aesthetic and develop character concepts for future development. Below are some of the sketches from my ideation phase. </p>
                    <img class='w' src={calcumonHero}/>
                    <img src={characters}/>
                    <img src={colors}/>
                    <img class='hidden md:flex' src={animation}/>
                    <img class='md:hidden' src={animation2}/>
                    <div class='flex w-fit grid grid-cols-1 md:grid-cols-2'>
                        <img class='md:h-96' src={right}/>
                        <img class='md:h-96' src={wrong}/>
                    </div>
                    <img src={cover2}/>
                    <div class='flex w-fit flex justify-between grid grid-cols-1 md:grid-cols-2'>
                        <img class='md:h-[670px]' src={levels}/>
                        <img class='md:h-[670px]' src={play}/>
                    </div>
                </div>
            <ToTop bgColor='#6de2ed'/>
        </div>
    )
}