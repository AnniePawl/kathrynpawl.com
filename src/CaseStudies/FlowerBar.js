import React from "react";
import Header from "../Header";
import designProcess from '../assets/studies/flowerbar/design-process.png'
import flowerbarHero from '../assets/studies/flowerbar/flowerbar-hero.png'
import { useEffect } from "react";
import ToTop from "../ToTop";
import userSurvey from '../assets/studies/flowerbar/user-survey.png'
import qualitative from '../assets/studies/flowerbar/qualitative.png'
import personas from '../assets/studies/flowerbar/user-personas.png'
import journeyMap from '../assets/studies/flowerbar/journey-map.png'
import userFlow from '../assets/studies/flowerbar/user-flow.png'
import architecture from '../assets/studies/flowerbar/architecture.png'
import styleGuide from '../assets/studies/flowerbar/style-guide.png'
import wireframe1 from '../assets/studies/flowerbar/wireframe-1.png'
import wireframe2 from '../assets/studies/flowerbar/wireframe-2.png'
import wireframe3 from '../assets/studies/flowerbar/wireframe-3.png'
import prototype1 from '../assets/studies/flowerbar/prototype1.png'
import prototype2 from '../assets/studies/flowerbar/prototype2.png'
import prototype3 from '../assets/studies/flowerbar/prototype3.png'
import graph from '../assets/studies/flowerbar/competetive-analysis.png'


export default function FlowerBar(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, []);

    return(
        <div class='bg-white h-fit w-screen flex flex-col items-center justify-center py-28'>
            <Header/>
            <div class='w-full max-w-5xl flex flex-col items-center'>
                <h2 class='flex text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>The Flower Bar</h2>
                <span class='font-bold uppercase text-sm tracking-wide text-lime-600'>Website Design</span>
                <div class=' w-full h-[95px] md:h-[200px] bg-cover bg-top' style={{ backgroundImage:`url(${flowerbarHero})` }}></div>
            </div>
            <div class='px-5 w-full max-w-5xl flex flex-col pt-5'>
            <h3 class='pb-2 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Project Overview</h3>
                <p class='self-center font-serif text-lg pb-10'>January 2023 - March 2023</p>
               
                {/* The Product  */}
                <div class='pb-5'>
                    <h3 class='font-serif text-lime-600 text-base md:text-lg pb-2 font-bold uppercase tracking-widest '>The Product</h3>
                    <p class='font-serif text-sm md:text-lg pb-6'>The Flower Bar is a top source shop for floral arrangements and extraordinary plants, offering same-day delivery throughout Westchester, Fairfield Counties and NYC. The Flower Bar wants to research, design and develop a new and improved web app for their business. Their target audience consists primarily of local adults and business staff who require same-day flower delivery services, host large special occasion events, intimate dinners, or simply seeking sending a small gesture of love.  </p>
                </div>
                <div class='flex grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-10'>
                    <div class='w-full bg-rose-50 rounded-md p-5 '>
                        <h3 class='font-serif mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Problem</h3>
                        <p class=' text-sm md:text-base font-serif'>Customers want a web app that reduces the possibility of delivery errors and enables them to order and receive purchases faster, easier, and more conveniently. </p>
                    </div>
                    <div class='w-full bg-lime-50 rounded-md p-5'>
                        <h3 class='font-serif mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>The Goal</h3>
                        <p class='text-sm md:text-base font-serif'>Create a visually appealing, user-friendly, and accessible web app that allows customers to browse a visual menu, customize and favorite items, and seamlessly check out for pick-up or delivery.</p>
                    </div>
                    <div class='w-full bg-zinc-100 rounded-md p-5'>
                        <h3 class='font-serif mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>My Role</h3>
                        <p class='text-sm md:text-base font-serif'>UX Researcher, UX Designer, Interaction Designer, Branding Designer</p>
                    </div>
                    <div class='w-full bg-zinc-100 rounded-md p-5'>
                        <h3 class='font-serif mr-2 text-lime-600 text-xs md:text-sm font-bold uppercase tracking-widest'>Responsibilities</h3>
                        <p class='text-sm md:text-base font-serif'>User Interviews, Digital wireframing, Low and High-fidelity Prototyping, Affinity Mapping, Competitive Analysis, Accounting for accessibility, Iterating on designs
                        </p>
                    </div>
                </div>
               
                {/* Design Process */}
                <h3 class='pt-8 pb-8 font-serif text-lime-600 text-base md:text-2xl  font-bold uppercase tracking-widest text-center'>The Design Process</h3>
                <div class='mb-10 w-full h-[200px] md:h-[450px] bg-cover bg-top' style={{ backgroundImage:`url(${designProcess})` }}></div>
               
                {/* User Research */}
                <div class='pt-6 pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>User Research</h3>
                    <h3 class='font-serif text-lime-600 text-base md:text-lg pb-2 font-bold uppercase tracking-widest '>User Survey</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>I decided to perform a User Survey to collect quantitive data, asking users questions like “what do you feel about the existing web app?” or “did you experience any inconsistencies in your ordering process?” A user survey was conducted on 35 participants. This data gave confidence to my initial desk research findings. As a result, I discovered these insights:  </p>
                    <img class='pt-16 pb-6' src={userSurvey}/>
                </div>

                {/* Market Research */}
                <div class='pt-6 pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Market Research</h3>
                    <h3 class='font-serif text-lime-600 text-base md:text-lg pb-2 font-bold tracking-widest '>What are florist selling and where are the flowers coming from?</h3>
                    <p class='pb-6 text-base md:text-lg text-zinc-600 font-serif leading-5'>Florists retail cut flowers, floral arrangements and potted plants. Florists purchase these goods from domestic and international flower farms and wholesalers and sell them to the general public. This industry includes florists that primarily function as electronic shopping websites and mail-order companies, however, many small family owned businesses also exist.   </p>
                    <h3 class='font-serif text-lime-600 text-base md:text-lg pb-2 font-bold tracking-widest'>When are people buying flowers?</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>Holiday purchases traditionally drive the florist industry. The holidays, along with birthdays and anniversaries, are ideal dates for men and women to select as part of a Frequent Flower Gift Program. Demand for floral merchandise is typically linked to trends in household disposable income, consumer spending levels, consumer sentiment, price and season.  </p>
                </div>

                {/* Competetive Analysis */}
                <div class='pt-6 pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Competetive Analysis</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>To understand how the needs of users are being met by existing solutions, I conducted a competitive analysis of various Flower Shop Web Apps. Notable features included the appearance, accessibility, user flow, navigation, brand identity, tone, and descriptions. I researched four similar services, each of which have different strengths and weaknesses.  </p>
                    <img class='py-6' src={graph}/>
                </div>

                {/* Qualatative Research  */}
                <div class='pt-6 pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Qualitative Research</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>To build understanding of and empathy for users, I built a questionnaire and conducted user interviews with friends, family, and locals who self identified as individuals who often buy flowers. I interviewed 10 people that covered different skill levels and demographics, such as age, gender, and income. Questions covered purchasing habits and preferences as well as what problems they have faced during previous ordering processes and how they dealt with those issues.   </p>
                    <img class='py-6' src={qualitative}/>
                    <h3 class='uppercase font-serif text-lime-600 text-base md:text-lg pb-1 font-bold tracking-widest'>Problem Statement</h3>
                    <p class='pb-6 text-base md:text-lg text-zinc-600 font-serif leading-5'>Annabelle is a busy working adult who needs an easy to navigate web app to order floral arrangements because she lacks the time to visit floral shops on her time off. </p>
                    <h3 class='uppercase font-serif text-lime-600 text-base md:text-lg pb-1 font-bold tracking-widest'>User Persona</h3>
                    <p class=' text-base md:text-lg text-zinc-600 font-serif leading-5'>After analyzing the feed back and competitive analysis, I created a user persona for The Flower Bar that represents the ideal user of web app. This persona helped me understand the users goals and frustrations and guide solutions and future design choices. </p>
                    <img class='scale-[.9] py-6' src={personas}/>
                </div>

                {/* Journey Map */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Journey Map</h3>
                    <p class='text-base md:text-lg text-zinc-600 font-serif leading-5'>To offer a seamless browsing experience for selecting flowers by occasion, color, or price, and arranging delivery at the preferred time.</p>
                    <img class='py-6' src={journeyMap}/>
                </div>
        
                {/* User Flow */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>User Flow</h3>
                    <img class='py-6' src={userFlow}/>
                </div>

                {/* Information Architecture */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Information Architecture</h3>
                    <img class='py-6' src={architecture}/>
                </div>

                {/* WireFrames */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Wireframes</h3>
                    <img class='py-6' src={wireframe1}/>
                    <img class='pb-6' src={wireframe2}/>
                    <img class='pb-6' src={wireframe3}/>
                </div>

                {/* Hi-Fi Prototypes  */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Hi-Fi Prototypes </h3>
                    <img class='pt-6 pb-10' src={prototype1}/>
                    <img class='pb-10' src={prototype2}/>
                    <img class='pb-10' src={prototype3}/>
                </div>

                {/* Style Guide */}
                <div class='pb-8 w-full'>
                    <h3 class='pb-6 font-serif text-lime-600 text-base md:text-2xl text-center font-bold uppercase tracking-widest'>Style Guide</h3>
                    <img class='py-6' src={styleGuide}/>
                </div>
            </div>
            <ToTop bgColor='#65a30d'/>
        </div>
    )
}