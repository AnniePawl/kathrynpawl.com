import React from "react";
import ToTop from "../ToTop";
import barkoHero from '../assets/studies/barko/barko-cover.png'
import barkoHero2 from '../assets/studies/barko/barko-cover2.jpeg'
import { useEffect } from "react";


export default function Barko(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, []);


    return(
        <div class='bg-white h-fit w-screen flex flex-col items-center justify-center py-24'>
            <div class='w-full max-w-4xl flex flex-col items-center'>
                <h2 class='flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Barko Case Study</h2>
                <span class='pb-4 font-bold uppercase text-sm tracking-wide text-green-600'>Mobile Dog Walking App</span>
                <div class='w-full md:w-full h-[425px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoHero2})` }}></div>
            </div>
            <div class='px-5 w-full max-w-5xl flex flex-col pt-12'>
                <h2 class='self-center flex pb-8 text-green-600 text-base md:text-lg font-bold uppercase tracking-widest'>Project Overview</h2>
                <div class='pb-5'>
                    <h3 class='text-green-600 text-sm md:text-base  font-bold uppercase tracking-widest'>The Product:</h3>
                    <p class='font-serif text-lg'>BARKO is a mobile application designed as a one-stop application for your pet's needs. BARKO's primary goal is to have an application where pet owners can easily find and schedule dog walkers located near them. This app also provides a section to request additional services in addition to dog walking. </p>
                </div>
                <div class='pb-5 flex items-center'>
                    <h3 class='mr-2 text-green-600 text-sm md:text-base font-bold uppercase tracking-widest'>Product Duration:</h3>
                    <p class='font-serif text-lg'>August 2021 - October 2021</p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-green-600 text-sm md:text-base  font-bold uppercase tracking-widest'>My Role:</h3>
                    <p class='font-serif text-lg'>To conduct market and user research, and based on those findings, deliver a design concept that would form the whole mobile service altogether. In this case study, you will see how I went from the discovery phase to ideation, iteration, and solution delivery using user research, wireframing, prototyping, and design solution. </p>
                </div>
                <div class='pb-5'>
                    <h3 class='text-green-600 text-sm md:text-base  font-bold uppercase tracking-widest'>Discovery & Ideation</h3>
                    <p class='font-serif text-lg mb-2'>The first step I took was defining the problem our potential users were facing, identifying their pain points, and conducting market research in order to validate BARKO's goals. </p>
                    <p class='font-serif text-lg mb-2'>Through my research, I discovered that there was a substantial increase in pet ownership and pet spending in the past 20 years. Despite this increase in pet ownership, there was a clearly identified problem affecting the care of these pets- most owners have long working hours and not enough time to tend to their beloved critters.  This in turn, generates a growing search for pet caring services. </p>
                    <p class='font-serif text-lg mb-2'>With the problem identified and defined, I conducted interviews with potential users in order to establish their pain points. Based on that information, I had a brainstorming session  to identify a few common threads when it comes to users' pain points and solutions to how those pain points should be addressed. </p>
                </div>
                <div class='flex flex-col md:flex-row w-full pb-5'>
                    <div class='md:mr-2 w-full bg-green-100 rounded-md p-5 '>
                        <h3 class='mr-2 text-green-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class=' text-sm md:text-base leading-5 font-serif'>
                            Available online seafood websites have cluttered designs, inefficient browsing, and confusing checkout processes.
                        </p>
                    </div>
                    <div class='md:ml-2 w-full bg-green-100 rounded-md p-5'>
                        <h3 class='mr-2 text-green-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Goals</h3>
                        <p class='text-sm md:text-base leading-5 font-serif'>Design a user-friendly website by providing clear navigation and a fast, straight-forward checkout process.</p>
                    </div>
                </div>
            </div>
            <ToTop bgColor='#22c55e'/>
        </div>
    )
}