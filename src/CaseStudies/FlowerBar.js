import React from "react";
import designProcess from '../assets/studies/flowerbar/design-process.png'
import flowerbarHero from '../assets/studies/flowerbar/flowerbar-hero.png'
import { useEffect } from "react";
import ToTop from "../ToTop";


export default function FlowerBar(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, []);

 
    return(
        <div class='bg-white h-fit w-screen flex flex-col items-center justify-center py-28'>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>The Flower Bar</h2>
                <span class='font-bold uppercase text-sm tracking-wide text-lime-600'>Website Design</span>
                <div class=' w-full h-[95px] md:h-[200px] bg-cover bg-top' style={{ backgroundImage:`url(${flowerbarHero})` }}></div>
            </div>
            <div class='px-5 w-full max-w-5xl flex flex-col pt-5'>
                <h2 class='self-center flex text-lime-600 text-base md:text-lg font-bold uppercase tracking-widest'>Project Overview</h2>
                <p class='self-center font-serif text-lg pb-10'>August 2021 - October 2021</p>
                <div class='pb-5'>
                    <h3 class='text-lime-600 text-sm md:text-base  font-bold uppercase tracking-widest'>The Product:</h3>
                    {/* <p class='font-serif text-lg'>BARKO is a mobile application designed as a one-stop application for your pet's needs. BARKO's primary goal is to have an application where pet owners can easily find and schedule dog walkers located near them. This app also provides a section to request additional services in addition to dog walking. </p> */}
                </div>
                <div class='flex grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-8'>
                    <div class='w-full bg-lime-50 rounded-md p-5 '>
                        <h3 class='mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class=' text-sm md:text-base font-serif'>Customers want a web app that reduces the possibility of delivery errors and enables them to order and receive purchases faster, easier, and more conveniently. </p>
                    </div>
                    <div class='w-full bg-lime-50 rounded-md p-5'>
                        <h3 class='mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Goal</h3>
                        <p class='text-sm md:text-base font-serif'>Create a visually appealing, user-friendly, and accessible web app that allows customers to browse a visual menu, customize and favorite items, and seamlessly check out for pick-up or delivery.</p>
                    </div>
                    <div class='w-full bg-lime-50 rounded-md p-5'>
                        <h3 class='mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>My Role</h3>
                        <p class='text-sm md:text-base font-serif'>UX Researcher, UX Designer, Interaction Designer, Branding Designer</p>
                    </div>
                    <div class='w-full bg-lime-50 rounded-md p-5'>
                        <h3 class='mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>Responsibilities</h3>
                        <p class='text-sm md:text-base font-serif'>User Interviews, Digital wireframing, Low and High-fidelity Prototyping, Affinity Mapping, Competitive Analysis, Accounting for accessibility, Iterating on designs
                        </p>
                    </div>
                </div>
                {/* Design Process */}
                <div class='mb-10 w-full h-[200px] md:h-[450px] bg-cover bg-top' style={{ backgroundImage:`url(${designProcess})` }}></div>
                {/* User Research */}
                <div class='pb-8 w-full'>
                    <h3 class='mb-2 md:mb-4 text-lime-600 text-sm md:text-base font-bold uppercase tracking-widest'>User Research</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>I decided to perform a User Survey to collect quantitive data, asking users questions like “what do you feel about the existing web app?” or “did you experience any inconsistencies in your ordering process?” A user survey was conducted on 35 participants. This data gave confidence to my initial desk research findings. As a result, I discovered these insights:  </p>
                    <div class='w-full grid grid-cols-3'>
                        <div class='bg-zinc-200 rounded-full p-4 relative'>
                            <div class='bg-lime-600 text-white` -top-5 left-0 rounded-full h-fit w-fit p-2'> 79%</div>
                            <p class='font-serif '> of urban individuals want to have flowers in their homes, offices, and living spaces</p>
                        </div>

                    </div>
                </div>
            </div>
            <ToTop bgColor='#65a30d'/>
        </div>
    )
}