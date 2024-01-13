import React from "react";
import ToTop from "../ToTop";
import medsmartHero from '../assets/studies/medsmart/medsmart-hero.jpeg'
import medsmartAvatar from '../assets/studies/medsmart/medsmart-avatar.png'
import { useEffect } from "react";


export default function MedSmart(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, []); 

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Medsmart UX Case Study</h2>
                <span class='pb-4 font-bold uppercase text-sm tracking-wide text-cyan-600'>Medication Reminder App</span>
                <div class='rounded-md w-full h-[200px] md:h-[350px] bg-cover bg-center' style={{ backgroundImage:`url(${medsmartHero})` }}></div>
            </div>
            <div class='px-6 w-full max-w-5xl flex flex-col pt-12'>
                <h2 class='self-center flex text-cyan-600 text-base md:text-lg font-bold uppercase tracking-widest'>Project Overview</h2>
                <p class='font-serif text-lg text-center pb-5'>September 2022 - October 2022</p>
                <div class='pb-5'>
                    <p class='text-center font-serif text-base md:text-lg mb-2'>Med Smart is a mobile app that allows users to log their medications and set reminders for how often and how much they should be taking their prescriptions.  Med Smart also provides users with the option of connecting to your local pharmacy to refill prescriptions or speak to a pharmacist. </p>
                    <p class='text-center font-serif text-base md:text-lg mb-2'>The purpose of this mobile app is to help individuals take their prescriptions accurately and on time, while also providing the opportunity for users to learn about possible drug interactions, health benefits, side effects, and or precautions of the medication they are taking. </p>
                </div>
                <div class='flex flex-col md:flex-row w-full pb-8'>
                    <div class='md:mr-2 w-full bg-cyan-600 rounded-md p-5 mb-3 md:mb-0 '>
                        <h3 class='mr-2 text-white text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class='text-white  text-sm md:text-base leading-5 font-serif'>
                        After conducting a competitive audit I discovered many existing  medication reminder apps  do not allow you to input specific information such as the dosage of you prescription and do not inform the user of important information like drug interactions and risk factors.
                        </p>
                    </div>
                    <div class='md:ml-2 w-full bg-cyan-600 rounded-md p-5'>
                        <h3 class='mr-2 text-white text-xs md:text-sm font-bold uppercase tracking-widest'>The Solution</h3>
                        <p class='text-white text-sm md:text-base leading-5 font-serif'>
                            Provide a mobile app that reminds individuals to take their medication on time, while also providing users with helpful information about specific drug use and its effects on your health.
                        </p>
                    </div>
                </div>
                {/* Design Process */}
                <div class='pb-5 flex flex-col items-center justify-center px-4'>
                    <h3 class='text-cyan-600 text-center text-sm md:text-base  font-bold uppercase tracking-widest'>Design Process</h3>
                    <p class='text-base text-center font-serif pb-5'>Five Stage User-Centered Design Approach </p>
                    <div class='flex max-w-xl pb-8'>
                        <span class='mx-1 md:mx-2 rounded-full w-fit px-3 md:px-6 py-2 text-white tracking-wide bg-cyan-600 flex items-center justify-center text-xs md:text-sm'>Understand</span>
                        <span class='mx-1 md:mx-2 rounded-full w-fit px-3 md:px-6 py-2 text-white tracking-wide bg-cyan-600 flex items-center justify-center text-xs md:text-sm'>Ideate</span>
                        <span class='mx-1 md:mx-2 rounded-full w-fit px-3 md:px-6 py-2 text-white tracking-wide bg-cyan-600 flex items-center justify-center text-xs md:text-sm'>Design</span>
                        <span class='mx-1 md:mx-2 rounded-full w-fit px-3 md:px-6 py-2 text-white tracking-wide bg-cyan-600 flex items-center justify-center text-xs md:text-sm'>Prototype</span>
                        <span class='mx-1 md:mx-2 rounded-full w-fit px-3 md:px-6 py-2 text-white tracking-wide bg-cyan-600 flex items-center justify-center text-xs md:text-sm'>Test</span>
                    </div>
                </div>
                <div class='pb-8 flex flex-col'>
                    <h3 class='mr-2 text-cyan-600 text-sm md:text-base font-bold uppercase tracking-widest'>Qualitative Research:</h3>
                    <p class='font-serif text-base md:text-lg'>A semi-structured remote interview was conducted with 5 participants that were recruited.  Although participants had differing ways of remembering to take their medication, all were enthusiastic about using a mobile application to get reminders and learn more about drug interactions and side effects. </p>
                </div>
                <div class='pb-8 flex flex-col'>
                    <h3 class='mr-2 text-cyan-600 text-sm md:text-base font-bold uppercase tracking-widest'>Key Findings</h3>
                    <div>
                        <p class='font-serif'>• Users prefer to get notifications via banners, but with the option to set alarms if necessary </p>
                        <p class='font-serif'>• Users want that dash board to feature all the medications they have logged/take, with the ability to learn more if wanted </p>
                        <p class='font-serif'>• Users would like medications with risky drug interactions to be prominently shown or flagged </p>
                    </div>
                </div>
                {/* Quantitative Research */}
                <div class='pb-12 flex flex-col'>
                    <h3 class='mr-2 text-cyan-600 text-sm md:text-base font-bold uppercase tracking-widest'>Quantitative Research:</h3>
                    <p class='pb-2 font-serif text-lg'>Here are the results of a survey I conducted to gather insights about users' needs. </p>
                    <div class='w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        <div class='px-6 text-sm tracking-wide bg-cyan-600 p-3 items-center justify-center rounded-sm flex'>
                            <span class='font-bold mr-2 text-cyan-600 text-white text-base md:text-xl '>68% </span><p class='tracking-wider text-zinc-50'> take medication on an ongoing basis </p>
                        </div>
                        <div class='px-6 text-sm tracking-wide bg-cyan-600 p-3 items-center justify-center rounded-sm flex'>
                            <span class='font-bold mr-2 text-cyan-600 text-white text-base md:text-xl '>89% </span><p class='tracking-wider text-zinc-50'> want reminders to take their meds</p>
                        </div>
                        <div class='px-6 text-sm tracking-wide bg-cyan-600 p-3 items-center justify-center rounded-sm flex'>
                            <span class='font-bold mr-2 text-cyan-600 text-white text-base md:text-xl '>57% </span><p class='tracking-wider text-zinc-50'> are unaware of side effects </p>
                        </div>
                        <div class='px-6 text-sm tracking-wide bg-cyan-600 p-3 items-center justify-center rounded-sm flex'>
                            <span class='font-bold mr-2 text-cyan-600 text-white text-base md:text-xl '>80% </span><p class='tracking-wider text-zinc-50'> often miss a dose</p>
                        </div>
                    </div>
                </div>
                {/* User Personas */}
                <div class='pb-8 flex flex-col'>
                    <h3 class='mb-4 text-cyan-600 text-sm md:text-base font-bold uppercase tracking-widest'>User Personas</h3>
                    <div class='w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-lime-100 rounded-md px-8 py-10'>
                        <div class='flex flex-col justify-center items-center '>
                            <div class='flex items-center'>
                                <div class='mr-6 h-28 md:h-36 w-28 md:w-36 rounded-full bg-cover bg-center' style={{ backgroundImage:`url(${medsmartAvatar})` }}></div>
                                <div>
                                    <div class='-mb-1'><span class='font-bold text-cyan-600 text-xs uppercase mr-1'>Age:</span><span class='font-serif'>32</span></div>
                                    <div class='-mb-1'><span class='font-bold text-cyan-600 text-xs uppercase mr-1'>Education:</span><span class='font-serif'>Bachelors</span></div>
                                    <div class='-mb-1'><span class='font-bold text-cyan-600 text-xs uppercase mr-1'>Location:</span><span class='font-serif'>New York, NY</span></div>
                                    <div class='-mb-1'><span class='font-bold text-cyan-600 text-xs uppercase mr-1'>Occupation:</span><span class='font-serif'>Marketing</span></div>
                                    <div class='-mb-1'><span class='font-bold text-cyan-600 text-xs uppercase mr-1'>Family:</span><span class='font-serif'>Single</span></div>
                                </div>
                            </div>
                            <span class='py-3 md:py-0 md:mr-10 pt-3 italic text-center text-sm font-serif leading-4 '>"I often forget to take my medication and find myself feeling side effects. I would love to be able to log my intake, get reminders, and be able to read about how the drug I'm taking will effect me all in one place."</span>
                        </div>
                        <div>
                            <h3 class='mr-2 text-cyan-600 textxs md:text-sm font-bold uppercase tracking-widest'>Description:</h3>
                            <p class='mb-4 leading-5 font-serif'>Maggie is a 32 year-old working adult who often forgets to take her medication and is not that educated on how the drugs she is prescribed affect her health. </p>
                            <h3 class='mr-2 text-cyan-600 text-xs md:text-sm font-bold uppercase tracking-widest'>Frustrations:</h3>
                            <p class='mb-4 leading-5 font-serif'>Often forgets to take her medication. Is unaware how alcohol, marijuana, and other substances interact with her prescription. </p>
                            <h3 class='mr-2 text-cyan-600 text-xs md:text-sm font-bold uppercase tracking-widest'>Goals:</h3>
                            <p class='mb-4 leading-5 font-serif'>Get daily reminders to take her medication and educate herself on how the drugs she's taking affect her health </p>
                        </div>
                    </div>
                    {/* <p class='font-serif text-lg'>A semi-structured remote interview was conducted with 5 participants that were recruited.  Although participants had differing ways of remembering to take their medication, all were enthusiastic about using a mobile application to get reminders and learn more about drug interactions and side effects. </p> */}
                </div>
                {/* Empathy Map */}
                    <div class='pb-8 flex flex-col'>
                    <h3 class='mr-2 text-cyan-600 text-sm md:text-base font-bold uppercase tracking-widest'>Empathy Map</h3>
                    {/* <p class='font-serif text-lg'>A semi-structured remote interview was conducted with 5 participants that were recruited.  Although participants had differing ways of remembering to take their medication, all were enthusiastic about using a mobile application to get reminders and learn more about drug interactions and side effects. </p> */}
                </div>
            </div>
      
            <ToTop bgColor='#93c5fd'/>
        </div>
    )
}