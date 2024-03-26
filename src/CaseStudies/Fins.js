import React from "react";
import { useEffect } from "react";
import medsmartAvatar from '../assets/studies/medsmart/medsmart-avatar.png';
import barkoAvatar from '../assets/studies/barko/barko-avatar.png';
import sitemap from '../assets/studies/fins/fins-site-map.png';
import wireframe1 from '../assets/studies/fins/fins-wireframe1.png';
import wireframe2 from '../assets/studies/fins/fins-wireframe2.png';
import userflow from '../assets/studies/fins/fins-userflow.png';
import lofi from '../assets/studies/fins/fins-lofi.jpeg';
import hifi from '../assets/studies/fins/fins-hifi.jpeg';
import participant from '../assets/icons/participant.png';
import clipboard from '../assets/icons/clipboard-icon.png';
import location from '../assets/icons/location-icon.png';
import time from '../assets/icons/time-icon.png';
import usability1 from '../assets/studies/fins/usability1.jpeg';
import usability2 from '../assets/studies/fins/usability2.jpeg';
import mockup1 from '../assets/studies/fins/fins-mockup-1.jpeg';
import mockup2 from '../assets/studies/fins/fins-mockup-2.jpeg';
import mockup3 from '../assets/studies/fins/fins-mockup-3.jpeg';
import mockup4 from '../assets/studies/fins/fins-mockup-4.jpeg';
import mockup5 from '../assets/studies/fins/fins-mockup-5.jpeg';
import mockup6 from '../assets/studies/fins/fins-mockup-6.jpeg';
import mockup7 from '../assets/studies/fins/fins-mockup-7.jpeg';
import mockup8 from '../assets/studies/fins/fins-mockup-8.jpeg';
import mockup9 from '../assets/studies/fins/fins-mockup-9.jpeg';
import mockup10 from '../assets/studies/fins/fins-mockup-10.jpeg';
import designdeeets from '../assets/studies/fins/fins-design-details.jpeg';

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
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-1'>My Role:</h3>
                    <p class='font-serif text-base md:text-lg leading-6'>I was the UX Designer leading Fin's website design. My responsibilities included researching and conducting user interviews, creating digital wire-frames and high-fidelity prototypes, as well as carrying out usability testing which accounted for accessibility. </p>
                </div>
                <div class='pb-4'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest mb-1'>The Product:</h3>
                    <p class='font-serif text-base md:text-lg leading-6 '>Fins is an online Seafood market that offers same-day delivery of the highest quality seafood, sourced from small-boat fishermen, straight to your door. The typical client is a career professional between 25-65. The goal of this project is to make ordering seafood fast, easy, and reliable. </p>
                </div>
               {/* Problem/ Goals */}
                <div class='flex flex-col md:flex-row w-full pb-5'>
                    <div class='mb-3 md:mb-0 md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                        <h3 class='mb-1 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class=' text-sm md:text-base leading-5 font-serif'>
                            Available online seafood websites have cluttered designs, inefficient browsing, and confusing checkout processes.
                        </p>
                    </div>
                    <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                        <h3 class='mb-1 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>The Goals</h3>
                        <p class='text-sm md:text-base leading-5 font-serif'>Design a user-friendly website by providing clear navigation and a fast, straight-forward checkout process.</p>
                    </div>
                </div>
                {/* Understanding the User */}
                <div class='py-7 flex flex-col items-center justify-center '>
                    <h3 class='text-blue-900 text-center text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Understanding the User</h3>
                    <p class='text-center text-xs md:text-lg font-serif font-bold text-center text-blue-900 flex w-full max-w-xl justify-between'><span>ᐧ User Research</span> <span>ᐧ User Personas</span> <span>ᐧ Problem Statements</span><span>ᐧ Journey Maps</span></p>
                </div>
                {/* User Research Summary */}
                <div class='pt-6 pb-8'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest mb-4'>User Research Summary</h3>
                    <p class='font-serif text-lg'>I started first with conducting user interviews, which I then turned into empathy maps to better understand the target user and their needs. I discovered that many target users ordered seafood online as a convenient and quick way to plan dinner. However, many online seafood markets are overwhelming and confusing to navigate. This causes a normally simple process that is supposed to save time to become challenging and time-consuming, defeating the purpose of being a low involvement way to plan healthy dinner.</p>
                </div>
                <div class='pb-6'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest mb-1'>User Interviews</h3>
                    <p class='font-serif text-lg font-medium'>Interviews conducted with users included an even distribution of genders across the spectrum, users with different ages, job experiences and levels of digital literacy. I decided to go with a qualitative approach for the interviews. Interviews ended up providing valuable feedback and demonstrated individuals had a high level of enthusiasm for the seafood web application.</p>
                </div>
                <div class='pb-4'>
                    <h3 class='text-blue-900 text-sm md:text-base  font-bold uppercase tracking-widest mb-1'>Key Insights</h3>
                    <p class='font-serif text-lg'>After conducting interviews, I organized my data through affinity mapping, attributing a color and letter to each participant. Based on the trends after affinity mapping, it was safe to assume that my interviewees could understand and list the benefits that a seafood delivery app could provide. All key insights were incorporated into 2 distinct user personas profiles, with details, goals, and frustrations prominently reflected. </p>
                </div>
                {/* Key Insights */}
                <div class='pb-6 flex flex-col'>
                    <div class='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme One: Opportunity</h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>When inquiring about the possibility of using a web app to order seafood from a local market, all interviewees reacted in a positive way.</p>
                            <p class='text-sm md:text-base leading-5 font-serif'><span class='font-black'>4 out of 5</span> interviewees mentioned that they have never found a web application that would allow to order seafood not only for a future date, but with same day delivery.</p>
                            
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme Two: Requirements</h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>When inquiring about the requirements and or filters when it comes to searching for a seafood, users wanted the possibility to find similar options and have products be organized.</p>
                            <p class='text-sm md:text-base leading-5 font-serif'><span class='font-black'>5 out of 5</span> interviewees found cut and portions the most important requirements when searching for a product 2 out of 5 mentioned the price.</p>
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Theme Three: Time </h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>When asked if ordering seafood online would be less time consuming than doing it in a store, the answer was always the same yes. </p>
                            <p class='text-sm md:text-base leading-5 font-serif'><span class='font-black'>5 out of 5</span> interviewees shared that they believed it would be less time consuming to use a web application to order food rather then go in person.</p>
                        </div>
                    </div>
                </div>
                {/* User Research: Pain Points */}
                <div class='hidden pb-6'>
                    <h3 class='text-blue-900 text-center md:text-left text-sm md:text-base font-bold uppercase tracking-widest mb-2'>User Research: Pain Points</h3>
                    <div class='grid grid-cols-3 gap-2'>
                        <div class='mb-3 md:mb-0 md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Navigation</h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>Online seafood markets are often busy and overwhelming, which results in confusing navigation.</p>
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Interaction</h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>Small buttons on shopping websites make item selection difficult, which in sometimes leads the user to make mistakes.</p>
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Experience</h3>
                            <p class='text-sm md:text-base leading-5 font-serif mb-3'>Online seafood apps don't provide an engaging and simple browsing experience. </p>
                        </div>
                    </div>
                </div>
                {/* Pain Points */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>User Research: Pain Points </h3>
                    <div class='flex grid grid-cols-1 lg:grid-cols-3 w-full pb-5 gap-0 md:gap-4'>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>1</div>
                            <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Navigation</h3>
                            <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Online seafood markets are often busy and overwhelming, which results in confusing navigation</span>
                        </div>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                        <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>2</div>
                            <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Interaction</h3>
                            <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Small buttons on shopping websites make item selection difficult, which in sometimes leads the user to make mistakes</span>
                        </div>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                        <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>3</div>
                           <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Experience</h3>
                           <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Online seafood apps don't provide an engaging and simple browsing experience</span>
                        </div>
                    </div>
                </div>
                {/* User Personas */}
                <div class='pb-6 '>
                <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>User Personas</h3>
                <div class='w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-zinc-200 rounded-md px-8 py-10 mb-5'>
                        <div class='flex flex-col justify-center items-center '>
                            <div class='mb-5 flex items-center'>
                                <div class='border-2 border-zinc-400 mr-6 h-28 md:h-36 w-28 md:w-36 rounded-full bg-cover bg-center' style={{ backgroundImage:`url(${medsmartAvatar})` }}></div>
                                <div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Age:</span><span class='font-serif'>36</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Education:</span><span class='font-serif'>Bachelors</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Location:</span><span class='font-serif'>New York, NY</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Occupation:</span><span class='font-serif'>Registered Nurse</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Family:</span><span class='font-serif'>Single</span></div>
                                </div>
                            </div>
                            <span class='py-2 md:py-0 md:mr-10 pt-3 italic text-center text-sm font-serif leading-4 '>"Fish provide a great source of protein, vitamins and omega-3 fatty acids. I would love for my children to eat more of it, but I don't have the time or patience to source out and find quality seafood."</span>
                        </div>
                        <div>
                            <h3 class='mr-2 text-blue-900 textxs md:text-sm font-bold uppercase tracking-widest'>Description:</h3>
                            <p class='mb-4 leading-5 font-serif'>Marta is a hard working mother of three. She prioritizes family dinners and healthy eating but doesn't have the time to go to local fish markets to find quality seafood for her family. She would love to plan ahead and make sure her family has a nutritious dinner planed even if she is running late.</p>
                            <h3 class='mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Frustrations:</h3>
                            <p class='mb-4 leading-5 font-serif'>Not enough time or energy to visit fish markets, does't trust how "fresh" the fish is, can't find a reliable service for delivering an order same day.</p>
                            <h3 class='mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Goals:</h3>
                            <p class='mb-4 leading-5 font-serif'> To find a trustworthy, reliable seafood vendor. To have more time to prep elaborate meals without added pressure and time consuming act of shopping for ingredients. </p>
                        </div>
                    </div>
                    <div class='w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-zinc-200 rounded-md px-8 py-10'>
                        <div class='flex flex-col justify-center items-center '>
                            <div class='mb-5 flex items-center'>
                                <div class='border-2 border-zinc-400 mr-6 h-28 md:h-36 w-28 md:w-36 rounded-full bg-cover bg-center' style={{ backgroundImage:`url(${barkoAvatar})` }}></div>
                                <div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Age:</span><span class='font-serif'>39</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Education:</span><span class='font-serif'>Bachelors</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Location:</span><span class='font-serif'>Los Angeles, CA</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Occupation:</span><span class='font-serif'>Data Analyst</span></div>
                                    <div class='-mb-1'><span class='font-bold text-blue-900 text-xs uppercase mr-1'>Family:</span><span class='font-serif'>Single</span></div>
                                </div>
                            </div>
                            <span class='py-2 md:py-0 md:mr-10 pt-3 italic text-center text-sm font-serif leading-4 '>"After a long day at the office the last thing I want to do is go to the grocery store. Id love to be able to hit the gym and come home to healthy seafood options. Id feel way more inclined to cook if the food was already there and I didn't have to go out and get ingredients."</span>
                        </div>
                        <div>
                            <h3 class='mr-2 text-blue-900 textxs md:text-sm font-bold uppercase tracking-widest'>Description:</h3>
                            <p class='mb-4 leading-5 font-serif'>Andy is a busy young adult who lives in a shared studio with a college friend. Andy is trying to budget and would like to cook at home more often. However, in addition to budgeting, Andy wants to eat clean and worries that there won't be affordable options allowing him to do so. Andy does not like red meat and hopes to gain nutrition through incorporating seafood into their diet. </p>
                            <h3 class='mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Frustrations:</h3>
                            <p class='mb-4 leading-5 font-serif'>Concerned about what seafood products are best to purchase due to lack of experience eating it. Seafood Markets are overwhelming, busy, and often time consuming </p>
                            <h3 class='mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>Goals:</h3>
                            <p class='mb-4 leading-5 font-serif'>Minimize time spent grocery shopping during the week to dedicate more time for cooking, discover fresh, convenient, and new seafood options to try at a convenient price </p>
                        </div>
                    </div>
                </div>
                {/* Starting the Design Process */}
                <div class='py-7 flex flex-col items-center justify-center '>
                    <h3 class='text-blue-900 text-center text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Starting the Design Process</h3>
                    <p class='text-center text-sm md:text-lg font-serif font-bold text-center text-blue-900 flex w-full max-w-xl justify-between'><span>ᐧ Site Map</span> <span>ᐧ Wireframes</span> <span>ᐧ Prototypes</span><span>ᐧ Usability Tests</span></p>
                </div>
                {/* Site Map */}
                <div class='pb-6 flex flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-3 md:mb-1'>Site Map</h3>
                    <p class='font-serif text-lg'>Difficulty with website navigation was a primary pinpoint for users, so I Used that knowledge to create a site map. My goal was to make strategic information architecture designs that would improve overall website navigation. The structure I chose was design to make things simple and easy. </p>
                    <div class='flex self-center w-full md:w-3/4 h-[175px] md:h-[365px] bg-cover bg-top' style={{ backgroundImage:`url(${sitemap})` }}></div>
                </div>
                {/* Wireframes */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-1'>Wireframes</h3>
                    <p class='font-serif text-lg pb-3'>Next I sketched out low-fidelity wireframe for each screen in my app, keeping the user pain points about navigation, browsing, and checkout flow in mind. Because Fins customers access the site on a variety of different devices, I worked on designs for additional screen sizes to make sure the site would be fully responsive regardless of the platform being used.</p>
                    <p class='font-serif text-lg pb-5'>Moving from paper to digital wireframe made it easy to understand how the redesign could help me address user pain points and improve the user experience. Prioritizing useful button location and visual element placement on the homepage was key to my strategy.</p>
                    <div class='w-full md:w-full h-[270px] md:h-[800px] bg-cover bg-top mb-6' style={{ backgroundImage:`url(${wireframe1})` }}></div>
                    <div class='w-full md:w-full h-[156px] md:h-[465px] bg-cover bg-top' style={{ backgroundImage:`url(${wireframe2})` }}></div>
                </div>
                {/* User Flow */}
                <div class='pb-6'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>User Flow</h3>
                    <img class='w-full max-w-7xl' src={userflow}/>
                </div>
                {/* Lo-fi Prototype */}
                <div class='pb-6'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-1'>Low-Fidelity Prototype </h3>
                    <p class='font-serif text-lg mb-2'>To create a low-fidelity prototype, I connected all the screens involved in the primary user flow of adding an item to the cart and checking out. </p>
                    <img class='w-full max-w-7xl' src={lofi}/>
                </div>
                {/* Usability Study: Parameters */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Usability Study: Parameters</h3>
                    <div class='flex grid grid-cols-1 lg:grid-cols-2 w-full pb-5 gap-4'>
                        <div class='w-full bg-zinc-200 round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class='h-8 w-6 bg-cover bg-center mb-2' style={{ backgroundImage:`url(${clipboard})` }}></div>
                            <h3 class='text-blue-900 text-xs md:text-sm font-bold tracking-wider'>Study Type</h3>
                            <span class='text-blue-900 text-xs md:text-xs font-medium tracking-wide'>Unmoderated Usability Study</span>
                        </div>
                        <div class='w-full bg-zinc-200 round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class='h-[30px] w-[21px] bg-cover bg-center mb-2' style={{ backgroundImage:`url(${location})` }}></div>
                            <h3 class='text-blue-900 text-xs md:text-sm font-bold tracking-wider'>Location</h3>
                            <span class='text-blue-900 text-xs md:text-xs font-medium tracking-wide'>United States, Remote</span>
                        </div>
                        <div class='w-full bg-zinc-200 round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class=' h-6 md:h-8 w-6 md:w-8 bg-cover bg-center mb-2' style={{ backgroundImage:`url(${participant})` }}></div>
                           <h3 class='text-blue-900 text-xs md:text-sm font-bold tracking-wider'>Participants</h3>
                           <span class='text-blue-900 text-xs md:text-xs font-medium tracking-wide'>5 Participants</span>
                        </div>
                        <div class='w-full bg-zinc-200 round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class=' h-7 w-7  bg-cover bg-center mb-2' style={{ backgroundImage:`url(${time})` }}></div>
                           <h3 class='text-blue-900 text-xs md:text-sm font-bold tracking-wider'>Length</h3>
                           <span class='text-blue-900 text-xs md:text-xs font-medium tracking-wide'>20-30 minutes</span>
                        </div>
                    </div>
                </div>
                {/* Usability Study: Findings */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Usability Study: Findings </h3>
                    <div class='flex grid grid-cols-1 lg:grid-cols-3 w-full pb-5 gap-4'>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                            <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>1</div>
                            <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Cart</h3>
                            <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Once at checkout screen, users didn't have a way to edit the quantity of items in the cart</span>
                        </div>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                        <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>2</div>
                            <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Check Out</h3>
                            <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Users weren't able to easily copy shipping address info into billing info field</span>
                        </div>
                        <div class='w-full  round-sm flex flex-col items-center justify-center lg:rounded-md py-4 md:py-6 px-5'>
                        <div class='h-7 w-7 bg-blue-900 text-zinc-50 rounded-full flex items-center justify-center mb-2  md:text-lg'>3</div>
                           <h3 class='mb-1 text-blue-900 text-sm md:text-base font-bold tracking-wider'>Account</h3>
                           <span class=' font-serif text-center text-zinc-800 text-sm md:text-base tracking-wide'>Users wanted the option to log into their account at checkout in order to prefill shipping and billing info</span>
                        </div>
                    </div>
                </div>
                {/* Before Usability */}
                    <div class='pb-6 flex items-center justify-center flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Before </h3>
                    <img class='w-full max-w-7xl' src={usability1}/>
                    <p class='text-blue-900 text-2xl md:text-4xl'>↓</p>
                </div>
                {/* After Usability */}
                <div class='pb-6 flex items-center justify-center flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>After </h3>
                    <img class='w-full max-w-7xl' src={usability2}/>
                </div>
                {/* Refining the Design */}
                <div class='py-7 flex flex-col items-center justify-center '>
                    <h3 class='text-blue-900 text-center text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Refining the Design</h3>
                    <p class='text-center text-base md:text-lg font-serif font-bold text-center text-blue-900 flex w-full max-w-lg justify-between'><span>ᐧ Mockups</span> <span>ᐧ High Fidelity Protype</span><span>ᐧ Accessibility</span></p>
                </div>
                {/* Mockups */}
                <div class='pb-6 flex flex-col items-center'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-1'>Mockups</h3>
                    <p class='font-serif text-lg mb-4'>Based on insights from the usability study, I made changes to improve the sites checkout flow. One of the changes I made was adding the option to edit the quantity of items in a user’s cart by using a simple “=“ or “-“ option. This allowed users more freedom to edit their cart without going through a complicated process of adding and removing items. </p>
                    <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup1}/>
                    <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup2}/>
                    <div class='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4'>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup3}/>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup4}/>
                    </div>
                    <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup8}/>
                    <div class='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4'>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup9}/>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup10}/>
                    </div>
                    <div class='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4'>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup5}/>
                        <img class='w-full max-w-7xl mb-3 md:mb-6' src={mockup6}/>
                    </div>
                     <img class='w-full max-w-7xl mb-6' src={mockup7}/>
                </div>
                {/* High-Fidelity Prototype:  */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>High-Fidelity Prototype: </h3>
                    <img class='w-full max-w-7xl' src={hifi}/>
                </div>
                {/* Accessibility Considerations: */}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Accessibility Considerations:</h3>
                    <ol class='ml-12'>
                        <li class='text-lg font-serif list-disc'>I used headlines with differently sized text for clear visual hierarchy.</li>
                        <li class='text-lg font-serif list-disc'>I used landmarks to help users navigate the site, including users who rely on assistive technologies.</li>
                        <li class='text-lg font-serif list-disc'>I designed the side with alt texts available on page page for smooth screen reader access.</li>
                    </ol>
                </div>
                {/* Takeaways:*/}
                <div class='pb-6 '>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Takeaways:</h3>
                    <div class='flex flex-col md:flex-row w-full pb-5'>
                        <div class='mb-3 md:mb-0 md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>The Impact</h3>
                            <p class=' text-sm md:text-base leading-5 font-serif'>
                            Our target users shared that the design was intuitive and easy to navigate through, more engaging with images, and demonstrated visual hierarchy. 
                            </p>
                        </div>
                        <div class='md:mr-2 w-full bg-zinc-200 round-sm lg:rounded-md py-4 md:py-6 px-5'>
                            <h3 class='mb-2 mr-2 text-blue-900 text-xs md:text-sm font-bold uppercase tracking-widest'>What I Learned</h3>
                            <p class='text-sm md:text-base leading-5 font-serif'>I learned that even small design changes can make a huge impact on the user experience. The most important takeaway for me was to always focus on the real needs of the users when coming up with design ideas and solutions. .</p>
                        </div>
                    </div>
                </div>
                {/* Design Details */}
                <div class='pb-6 flex items-center justify-center flex-col'>
                    <h3 class='text-blue-900 text-sm md:text-base font-bold uppercase tracking-widest mb-2'>Thanks for Viewing! </h3>
                    <img class='w-full max-w-7xl' src={designdeeets}/>
                </div>

            </div>

            <ToTop bgColor="#e4e4e7" />

           
        </div>
    )
}