import React from "react";
import Header from '../Header'
import v1 from '../assets/product/thumbs/v1.png'
import v2 from '../assets/product/thumbs/v2.png'
import v3 from '../assets/product/thumbs/v3.png'
import v4 from '../assets/product/thumbs/v4.png'
import v5 from '../assets/product/thumbs/v5.png'
import v6 from '../assets/product/thumbs/v6.png'
import v7 from '../assets/product/thumbs/v7.png'
import bw1 from '../assets/product/thumbs/bw-1.png'
import bw2 from '../assets/product/thumbs/bw-2.png'
import bw3 from '../assets/product/thumbs/bw-3.png'
import bw4 from '../assets/product/thumbs/bw-4.png'
import blue1 from '../assets/product/thumbs/blue1.png'
import blue2 from '../assets/product/thumbs/blue2.png'
import blue3 from '../assets/product/thumbs/blue3.png'
import blue4 from '../assets/product/thumbs/blue4.png'
import red1 from '../assets/product/thumbs/red1.png'
import red2 from '../assets/product/thumbs/red2.png'
import red4 from '../assets/product/thumbs/red4.png'
import wire1 from '../assets/product/thumbs/wire1.png'
import wire2 from '../assets/product/thumbs/wire2.png'
import wire3 from '../assets/product/thumbs/wire3.png'
import wire4 from '../assets/product/thumbs/wire4.png'
import bwprototype from '../assets/product/thumbs/bw-prototype.png'
import prototype1 from '../assets/product/thumbs/prototype1.png'
import prototype2 from '../assets/product/thumbs/prototype2.png'
import btns from '../assets/product/thumbs/btns.png'
import blueprototype from '../assets/product/thumbs/blue-prototype.png'
import redprototype from '../assets/product/thumbs/red-prototype.png'

import { useEffect } from "react";


export default function Thumbs(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='px-4 md:px-0 overflow-hidden bg-white h-fit w-screen flex flex-col items-center justify-center py-28'>
           <Header/>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='mb-2 flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Thumbs</h2>
                <span class='text-center pb-10  text-sm md:text-base tracking-wide text-zinc-600'>Thumbs was designed to empower website owners to better understand user engagement and preferences. The web extension seamlessly integrates a like/dislike feature into any website to gather valuable insights about audience sentiment. My role in this project was to prototype a user-friendly widget interface and to help shape an idea into a tangible, innovative product. </span>
                {/* Version 1 - b+w  */}
                <div class='flex flex-col items-center justify-center'>
                    <img class='w-screen max-w-3xl mb-8' src={bw1}></img>
                    <h2 class='mt-6 mb-2 flex text-base font-bold uppercase tracking-wide text-zinc-900 '>Version One</h2>
                    <span class='text-center text-sm md:text-base tracking-wide text-zinc-600'>For prototype one, I opted for a black and white color scheme to maintain a classic and versatile aesthetic. The decision to stick with this monochromatic palette was driven by the desire to create a design that would seamlessly integrate with various company websites while also projecting a clean and modern look. </span>
                    <img class='max-w-4xl w-screen mt-4 md:mt-0' src={bw2}></img>
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl'>
                        <img class='w-screen md:w-full' src={bw3}></img>
                        <img class='w-screen md:w-full' src={bw4}></img>
                    </div>
                    <img class='max-w-5xl w-screen md:pt-10 mt-4 md:mt-0 md:pb-6' src={bwprototype}></img>
                </div>
                {/* Version 2 - Blue  */}
                <div class='w-full flex flex-col items-center justify-center'>
                    <h2 class='mt-6 mb-2 flex text-base font-bold uppercase tracking-wide text-zinc-900 '>Version Two</h2>
                    <span class='text-center text-sm md:text-base tracking-wide text-zinc-600 mb-4'>In version two I started experimenting with new colors, fonts and styles. According to color psychology, blue is a ‘trustworthy’ color and I wanted to conduct additional research and user testing to refine a color palette. I also began playing with various user interface elements including buttons, toggles, and sliders. This iterative process helped me identity the most effective visual cues for users to interact with the widget intuitively. </span>
                    <div class='grid grid-cols-2 md:grid-cols-2 gap-4'>
                        <img class='w-screen md:w-full max-h-[400px]' src={blue1}></img>
                        <img class='w-screen md:w-full max-h-[400px]' src={blue2}></img>
                    </div>
                    <div class='flex flex-col items-center justify-center grid grid-cols-1 md:grid-cols-2 md:gap-4 pt-4 md:pt-6'>
                        <img class='w-screen  ' src={blue4}></img>
                        <img class='w-screen ' src={blue3}></img>
                    </div>
                    <img class='w-screen md:max-w-3xl ' src={blueprototype}></img>
               
                </div>
                {/* Version 3 - Green/Red  */}
                <div class='flex flex-col items-center justify-center'>
                    <h2 class='mt-12 mb-2 flex text-base font-bold uppercase tracking-wide text-zinc-900 '>Version Three</h2>
                    <span class='mb-4 text-center text-sm md:text-base tracking-wide text-zinc-600'> After several rounds of user testing, I settled on using green and red to clearly indicate likes and dislikes respectively. This color scheme not only provided clear visual feedback to users but also ensured that the widget remained prominent without overpowering the overall design of the website or product.</span>
                    <div class='flex justify-center grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                        <img class='max-w-xs md:w-screen md:w-full md:h-[475px]' src={red1}></img>
                        <img class='max-w-xs md:w-screen md:w-full md:h-[475px]' src={red2}></img>
                    </div>
                    <img class='w-screen md:max-w-2xl ' src={v4}></img>
                    <img class='w-screen md:max-w-xl ' src={red4}></img>
                    <img class='w-screen md:max-w-xl ' src={v5}></img>
                    <img class='max-w-xs ' src={btns}></img>
                    <div class='flex items-center grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl'>
                        <img class='w-screen ' src={v1}></img>
                        <img class='w-screen md:max-w-sm' src={v2}></img>
                    </div>
                    {/* <img class='w-screen md:max-w-3xl py-4 ' src={redprototype}></img> */}
                   
                </div>
                {/* Initial Wireframes */}
                <div class='hidden flex flex-col items-center justify-center'>
                    <h2 class='mt-12 mb-8  flex text-base font-bold uppercase tracking-wide text-zinc-900 '>Initial Wireframes</h2>
                    {/* <span class='text-center text-sm md:text-base tracking-wide text-zinc-600'>In version two I started experimenting with new colors, fonts and styles. According to color psychology, blue is a ‘trustworthy’ color and I wanted to conduct additional research and user testing to refine a color palette. I also began playing with various user interface elements including buttons, toggles, and sliders. This iterative process helped me identity the most effective visual cues for users to interact with the widget intuitively. </span> */}
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <img class='w-screen ' src={wire1}></img>
                        <img class='w-screen ' src={wire2}></img>
                    </div>
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <img class='w-screen ' src={wire4}></img>
                        <img class='w-screen ' src={wire3}></img>
                    </div>
                 
                </div>
                {/* Widget in Action */}
                <div class='flex flex-col items-center justify-center'>
                    <h2 class='mt-16 mb-8 flex text-base font-bold uppercase tracking-wide text-zinc-900 '>Widget in Action</h2>
                    {/* <span class='text-center text-sm md:text-base tracking-wide text-zinc-600'>In version two I started experimenting with new colors, fonts and styles. According to color psychology, blue is a ‘trustworthy’ color and I wanted to conduct additional research and user testing to refine a color palette. I also began playing with various user interface elements including buttons, toggles, and sliders. This iterative process helped me identity the most effective visual cues for users to interact with the widget intuitively. </span> */}
                    <div class='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                        <img class='w-screen max-w-md  ' src={v6}></img>
                        <img class='w-screen max-w-md  ' src={prototype2}></img>
                        
                    </div>
                    <img class='w-screen md:max-w-4xl' src={prototype1}></img>
                  
                  
                </div>
            </div>        
        </div>
    )
}