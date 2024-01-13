import React from "react";
import { useEffect } from "react";
import ToTop from "../ToTop";
import finshero from '../assets/studies/fins/fins-hero.png'


export default function Fins(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

 

    return(
        <div class='relative bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-24'>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='flex pb-6 md:pb-8 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Fin's Fish Market Case Study</h2>
                <div class='w-full md:w-full h-[200px] md:h-[500px] bg-cover bg-top' style={{ backgroundImage:`url(${finshero})` }}></div>
            </div>
            <div class='px-5 w-full max-w-5xl flex flex-col pt-12'>
                <div class='w-full flex flex-col md:items-center pb-4'>
                    <h2 class='flex text-blue-900 text-base md:text-lg font-bold uppercase tracking-widest'>Project Overview</h2>
                    <p class='font-serif text-base md:text-lg'>November 2022 - December 2022</p>
                </div>
                <div class='pb-6 flex flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>My Role:</h3>
                    <p class='font-serif text-base md:text-lg leading-6'>I was the UX Designer leading Fin's website design. I Conducted interviews, created paper and digital wireframes, low and high-fidelity prototyping, and conducted usability testing.</p>
                </div>
                <div class='pb-6'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest'>The Product:</h3>
                    <p class='font-serif text-base md:text-lg leading-6 '>Fins is an online Seafood market that offers same-day delivery of the highest quality seafood, sourced from small-boat fishermen, straight to your door. Our typical client is a career professional between 25-65. The goal of this project is to make ordering seafood fast, easy, and reliable. </p>
                </div>
               
                <div class='flex flex-col md:flex-row w-full pb-5'>
                    <div class='mb-3 md:mb-0 md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                        <h3 class='mb-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class=' text-sm md:text-base leading-5 font-serif'>
                            Available online seafood websites have cluttered designs, inefficient browsing, and confusing checkout processes.
                        </p>
                    </div>
                    <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                        <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>The Goals</h3>
                        <p class='text-sm md:text-base leading-5 font-serif'>Design a user-friendly website by providing clear navigation and a fast, straight-forward checkout process.</p>
                    </div>
                </div>
            
                <div class='pb-5'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest'>User Research Summary</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest'>User Interviews</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest'>Insights</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5 flex flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Key Insights</h3>
                    <div class='grid grid-cols-3 gap-2'>
                        <div class='mb-3 md:mb-0 md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme One: Opportunity</h3>
                            {/* <p class=' text-sm md:text-base leading-5 font-serif'>
                                Available online seafood websites have cluttered designs, inefficient browsing, and confusing checkout processes.
                            </p> */}
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme Two: Requirements</h3>
                            {/* <p class='text-sm md:text-base leading-5 font-serif'>Design a user-friendly website by providing clear navigation and a fast, straight-forward checkout process.</p> */}
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme Three: Time </h3>
                            {/* <p class='text-sm md:text-base leading-5 font-serif'>Design a user-friendly website by providing clear navigation and a fast, straight-forward checkout process.</p> */}
                        </div>
                    </div>
                </div>
                <div class='pb-5 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>User Research: Pain Points</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>User Personas</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>Starting to Design</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>Site Map</h3>
                    <p class='font-serif text-lg'></p>
                </div>
                <div class='pb-5 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest'>Wireframes</h3>
                    <p class='font-serif text-lg'></p>
                </div>

            </div>

            <ToTop bgColor="#e4e4e7" />

           
        </div>
    )
}