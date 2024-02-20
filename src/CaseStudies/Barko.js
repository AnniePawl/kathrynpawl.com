import React from "react";
import ToTop from "../ToTop";
import barkoHero2 from '../assets/studies/barko/barko-cover2.jpeg'
import barkoHero3 from '../assets/studies/cs-2.jpeg'
import barkoColors from '../assets/studies/barko/barko-colors.png'
import barkoFonts from '../assets/studies/barko/barko-fonts.png'
import barkoWireframe from '../assets/studies/barko/barko-wireframe.png'
import barkoFlow from '../assets/studies/barko/barko-flow.png'
import barkoTimeline from '../assets/studies/barko/barko-timeline.png'
import barkoAvatar from '../assets/studies/barko/barko-avatar.png'
import barkoLogo from '../assets/studies/barko/barko-logo.png'
import { useEffect } from "react";


export default function Barko(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, []);


    return(
        <div class='bg-white h-fit w-screen flex flex-col items-center justify-center py-24'>
            <div class='w-full max-w-3xl flex flex-col items-center'>
                <h2 class='flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Barko Case Study</h2>
                <span class='pb-8 font-bold tracking-widest uppercase text-sm text-[#569b3e]'>Mobile Dog Walking App</span>
                <div class='md:hidden w-full md:w-full h-[375px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoHero3})` }}></div>
                <div class='hidden md:flex w-full md:w-full h-[375px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoHero2})` }}></div>
            </div>
            <div class='px-5 w-full max-w-5xl flex flex-col items-center pt-10'>
                <div class='pb-8'>
                    <h2 class='self-center flex text-[#569b3e] text-base md:text-lg font-bold uppercase tracking-widest'>Project Overview</h2>
                    <p class='text-sm text-center text-zinc-600 tracking-widest'>08.2021 - 10.2021</p>
                </div>
                {/* My Role */}
                <div class='pb-8'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>My Role:</h3>
                    <p class='text-sm md:text-base text-zinc-600 leading-5'>My role on the project was to conduct market and user research, and based on those findings, deliver a design concept that would form the whole movie service altogether. In this case study, you will see how I went from the discovery phase to ideation, iteration, and solution delivery using user research, prototyping, and design solution. </p>
                </div>
                {/* The Product */}
                <div class='pb-8'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>The Product:</h3>
                    <p class='text-sm md:text-base text-zinc-600 leading-5'>BARKO is a mobile application designed as one-stop application for your pets’ needs. BARKO’s primary goal is to have an application where pet owners can easily find a schedule dog walkers located near him. This app also provides is a section to request additional service in addition to dog walking. The problem that BARKO had to solve was simple- offer an alternative to dog owners, who don’t have enough time to care for their pets.  </p>
                </div>
                {/* Project Timeline */}
                   <div class='pb-8 w-full flex flex-col'>
                    <h3 class='pb-8 text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest'>Project Timeline</h3>
                    <div class='opacity-70 self-center w-full md:w-3/4 h-[160px] md:h-[300px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoTimeline})` }}></div>
                </div>
                {/* Discovery + Ideation */}
                <div class='pb-8'>
                    <h3 class='text-[#569b3e] text-sm md:text-base  font-bold uppercase tracking-widest mb-1'>Discovery & Ideation</h3>
                    <p class='mb-3 text-sm md:text-base text-zinc-600 leading-5'>The first step I took was defining the problem our potential users were facing, identifying their pain points, and conducting market research in order to validate BARKO's goals. </p>
                    <p class='mb-3 text-sm md:text-base text-zinc-600 leading-5'>Through my research, I discovered that there was a substantial increase in pet ownership and pet spending in the past 20 years. Despite this increase in pet ownership, there was a clearly identified problem affecting the care of these pets- most owners have long working hours and not enough time to tend to their beloved critters.  This in turn, generates a growing search for pet caring services. </p>
                    <p class='text-sm md:text-base text-zinc-600 leading-5'>With the problem identified and defined, I conducted interviews with potential users in order to establish their pain points. Based on that information, I had a brainstorming session  to identify a few common threads when it comes to users' pain points and solutions to how those pain points should be addressed. </p>
                </div>
                {/* User Pain Points */}
                <div class='pb-4'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>User Pain Points</h3>
                    <p class='text-sm md:text-base text-zinc-600 leading-5'>I browsed current apps and services and considered the question, "what are they missing?" After researching ratings, conducting interview, and analyzing polls, here are the most common frustrations with similar platforms: </p>
                </div>
                <div class='flex grid gird-cols-1 md:grid-cols-3 gap-3 pb-8'>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-md p-3 md:p-5 '>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Proximity! It was difficult to find a petsitter close by.</p>
                    </div>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Not many options for additional services, such as pet sitting or boarding. </p>
                    </div>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Booking multiple pets was challenging.</p>
                    </div>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-mdp-3 md: p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Petsitters profiles are not vetted or depict any ratings and reviews.</p>
                    </div>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>No direct payment  to walker. A steep portion is deducted by company from inital service fee.</p>
                    </div>
                    <div class='flex items-center justify-center shadow-sm w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Premature payment before established trust makes the user uncomfortable.</p>
                    </div>
                </div>
                {/* Solution Brainstorm */}
                <div class='pb-2 self-start'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>Solution Brainstorming</h3>
                    <p class='text-sm md:text-base text-zinc-600 leading-5'> I brainstormed the following solutions to address the user pain points above.</p>
                </div>
                <div class='flex grid grid-cols-1 md:grid-cols-3 gap-3 pb-8'>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5 '>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Verified Identity for added protection.</p>
                    </div>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>A rewards system for dog walkers.</p>
                    </div>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Option to tip petgivers directly.</p>
                    </div>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Petsitters profiles are not vetted or depict any ratings and reviews.</p>
                    </div>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5'>Photo gallery option on profile to ease and encourage dog owners in their hire.</p>
                    </div>
                    <div class='shadow-sm flex items-center justify-center w-full bg-zinc-200 rounded-md p-3 md:p-5'>
                        <p class='text-center text-sm text-zinc-600 leading-5 mb-3'>Quick but detailed booking service with extra service options.</p>
                    </div>
                </div>
                {/* User Personas */}
                <div class='pb-8 flex flex-col'>
                    <h3 class=' text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>User Personas</h3>
                    <p class='text-sm md:text-base text-zinc-600 leading-5 mb-3'>The next step was to gather all of information and define and understand the user needs. I created user personas that best represented my findings, reflected the main users of this app, and ultimately aided in delivering a functional design down the road. </p>
                    <div class='w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-zinc-200 rounded-md px-8 py-10'>
                        <div class='flex flex-col justify-center items-center '>
                            <div class='flex items-center'>
                                <div class='border-2 border-zinc-400 mr-6 h-28 w-28 md:h-36 md:w-36 rounded-full bg-cover bg-center' style={{ backgroundImage:`url(${barkoAvatar})` }}></div>
                                <div>
                                    <div class='-mb-1'><span class='font-bold text-zinc-700 text-xs uppercase mr-1'>Age:</span><span class='text-xs'>33</span></div>
                                    <div class='-mb-1'><span class='font-bold text-zinc-700 text-xs uppercase mr-1'>Education:</span><span class='text-xs'>MBA</span></div>
                                    <div class='-mb-1'><span class='font-bold text-zinc-700 text-xs uppercase mr-1'>Location:</span><span class='text-xs'>Greenwich, CT</span></div>
                                    <div class='-mb-1'><span class='font-bold text-zinc-700 text-xs uppercase mr-1'>Occupation:</span><span class='text-xs'>Finance</span></div>
                                    <div class='-mb-1'><span class='font-bold text-zinc-700 text-xs uppercase mr-1'>Family:</span><span class='text-xs'>Single</span></div>
                                </div>
                            </div>
                            <span class='md:mr-10 pt-5 italic text-center text-zinc-600 text-xs md:text-sm py-3 md:py-0 leading-4'>"I am often preoccupied during the day - having someone I can rely on to take care of my dog would be extremely helpful"</span>
                        </div>
                        <div>
                            <h3 class='mr-2 text-zinc-700 text-xs md:text-sm font-bold uppercase tracking-widest'>Description:</h3>
                            <p class='mb-4 text-sm text-zinc-600 leading-5'>A busy finance executive who loves his dog, Ollie. He finds it hard to accommodate all of Ollie's needs because of his time-consuming work schedule. He would love to find a relaible alternative to asking family members and friends for help. </p>
                            <h3 class='mr-2 text-zinc-700 text-xs md:text-sm font-bold uppercase tracking-widest'>Frustrations:</h3>
                            <p class='mb-4 text-sm text-zinc-600 leading-5'>Has to rearrange schedule to accommodate pet, it's difficult to find someone trustworthy. </p>
                            <h3 class='mr-2 text-zinc-700 text-xs md:text-sm font-bold uppercase tracking-widest'>Goals:</h3>
                            <p class='mb-4 text-sm text-zinc-600 leading-5'>Have more free time, have an alternative to asking a family member to care for a pet, find a trustworthy dog walker.    </p>
                        </div>
                    </div>
                    {/* <p class='font-serif text-lg'>A semi-structured remote interview was conducted with 5 participants that were recruited.  Although participants had differing ways of remembering to take their medication, all were enthusiastic about using a mobile application to get reminders and learn more about drug interactions and side effects. </p> */}
                </div>
                <div class='pb-8 self-start w-full'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest'>User Flow</h3>
                    <div class='w-full h-[200px] md:h-[500px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoFlow})` }}></div>
                </div>
                {/* <div class='pb-8 self-start'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest'>Wireframe</h3>
                    <p class='pb-4 text-sm md:text-base text-zinc-600 leading-5'>Based on the user flow, I created wireframes that helped test and validate the ideas I had for possible design solutions. </p>
                    <div class='self-center w-full md:w-full h-[900px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoWireframe})` }}></div>
                </div> */}
                <div class='pb-8 self-start'>
                    <h3 class='text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest'>Prototypes</h3>
                </div>
                {/* UI Details (colors+fonts) */}
                <div class='pb-4 self-start w-full flex flex-col items-center'>
                    <h3 class='self-start text-[#569b3e] text-sm md:text-base font-bold uppercase tracking-widest mb-1'>UI Details</h3>
                    <p class='mb-3 text-sm md:text-base text-zinc-600 leading-5'> Here are some additional details about my design, including colorways, fonts, and branding elements. When designing the logo, I wanted to make sure it could translate well into an app icon and clearly depict that the mobile application is related to dogs. </p>
                    <div class='w-full h-[200px] md:h-[375px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoColors})` }}></div>
                    <div class='w-full h-[300px] md:h-[600px] bg-cover bg-top' style={{ backgroundImage:`url(${barkoFonts})` }}></div>
                </div>
                <div class='self-center mt-20 w-[200px] md:w-[300px] h-[150px] md:h-[225px] bg-cover bg-top' style={{backgroundImage:`url(${barkoLogo})`}}></div>
            </div>
            <ToTop bgColor='#569b3e'/>
        </div>
    )
}