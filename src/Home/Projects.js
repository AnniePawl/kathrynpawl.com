// import './landing.scss';
// import { Link } from 'react-router-dom';
// import React, { useEffect, useRef, useState } from "react";
// import ProjectCard from './ProjectCard';
// import shapesCover from '../assets/projects/shapes-cover.png'
// // import patternCover from '../assets/projects/pattern-cover.jpeg'
// import illustrationsCover from '../assets/projects/illustrations-cover.jpeg'
// import textCover from '../assets/projects/text-cover.jpeg'
// import cs2 from '../assets/studies/cs-2.jpeg'
// import cs3 from '../assets/studies/cs-3.jpeg'
// import flowerbarcover from '../assets/studies/flowerbar/flowerbarcover.jpeg'
// import finsLaptop from '../assets/projects/fins-laptop.jpeg'
// import calcumon from '../assets/projects/calcumon.jpeg'
// // import product1 from '../assets/product/product-1.jpeg'
// import thumbsCover from '../assets/thumbs-cover.jpeg'
// import carton1 from '../assets/product/milkcarton1.png'
// import weather1 from '../assets/product/weather/weather-light.jpeg'
// import calcumonHero from '../assets/product/calcumon/calcumon-cover.jpeg'
// import maisHero from '../assets/mais-cover.jpeg'

// import barkoCover from '../assets/barko-cover.jpeg'
// import finsCover from '../assets/fins-cover.jpeg'
// import typeCover from '../assets/typography-cover.jpeg'
// // import shapesCover from '.../assets/shapes-cover.jpeg'
// import patternCover from '../assets/pattern-cover.jpeg'
// import widgetsCover from '../assets/widgets-cover.jpeg'
// import calcCover from '../assets/calc-cover.jpeg'
// import medsmartCover from '../assets/medsmart-hero.jpeg'
// import flowerCover from '../assets/flower-cover.jpeg'


// export default function Projects(){
// return(
//     <div id='projects' className='relative z-[100] w-screen h-fit gap-0 flex grid grid-cols-1'>
//         <h2 id='caseStudies' class='w-full h-fit py-8 bg-zinc-50 text-zinc-800 uppercase text-center  tracking-widest'>Case Studies</h2>
//        {/* Fins  */}
//        <Link to="/fins"> 
//         <div class='flex w-full grid grid-cols-2 transition-all '>
//             <div class=' w-full bg-[#334574] aspect-square xl:aspect-[2/1.5] flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-lg tracking-wide '>Seafood & Be Seen</p>
//                 <p class='text-zinc-50 text-xl md:text-5xl font-medium tracking-widest uppercase '>Fins.</p>
//                 <p class='text-zinc-50 text-xs md:text-lg tracking-wide '>Case Study | Web App</p>
//             </div>
//             <div class=' w-full bg-zinc-200 aspect-square xl:aspect-[2/1.5] '>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${finsCover})` }}></div>
//             </div>
//         </div>
//         </Link>
//         {/* Barko */}
//         <Link to="/barko"> 
//         <div class='flex w-full grid grid-cols-2'>
//             {/* <div class=' w-full bg-[#87B963] aspect-square xl:aspect-[2/1.5]   '></div> */}
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${barkoCover})` }}></div>
//             <div class=' w-full bg-[#FCED9D] aspect-square xl:aspect-[2/1.5]  flex items-end flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-800 text-xs md:text-lg tracking-wide '>Because your pet deserves the best.</p>
//                 <p class='text-zinc-800 text-xl md:text-6xl font-medium tracking-widest uppercase '>Barko</p>
//                 <p class='text-zinc-800 text-xs md:text-lg tracking-wide '>Case Study | Mobile App</p>
//             </div>
            
//         </div>
//         </Link>
//         {/* Flower Bar */}
//         <Link to="/flowerbar"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class=' w-full bg-rose-200 aspect-square xl:aspect-[2/1.5]  flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>Putting power in flower. </p>
//                 <p class='text-zinc-800 text-xl md:text-4xl font-medium tracking-widest uppercase '>The Flower Bar.</p>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>Case Study | Web App</p>
//             </div>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${flowerCover})` }}></div>
//         </div>
//         </Link>
//         <Link to="/medsmart"> 
//         {/* Medsmart */}
//         <div class='flex w-full grid grid-cols-2'>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${medsmartCover})` }}></div>
//             <div class=' w-full bg-cyan-700 aspect-square xl:aspect-[2/1.5]  flex flex-col items-end justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Manage medication the smart way.</p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>Med Smart.</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Case Study | Mobile App</p>
//             </div>
            
//         </div>
//         </Link>

//         {/* GRAPHIC DESIGN  */}
//         <h2 id='graphicDesign' class='w-full h-fit py-8 bg-zinc-50 text-zinc-800 uppercase text-center tracking-widest'>Graphic Design</h2>
//         {/* Shapes */}
//         <Link to="/shapes"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class=' w-full bg-[#516436] aspect-square xl:aspect-[2/1.5]  flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Creating the illusion of three-dimensional objects. </p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>Shapes.</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Experimenting with colors and angles.</p>
//             </div>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${shapesCover})` }}></div>
//         </div>
//         </Link>
//         {/* Patterns */}
//         <Link to="/patterns"> 
//         <div class='flex w-full grid grid-cols-2'>
//         <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${patternCover})` }}></div>
//             <div class=' w-full bg-[#FCED9D] aspect-square xl:aspect-[2/1.5]  flex items-end flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-800 text-xs md:text-lg tracking-wide text-right'>Experimenting with contrast, repetition, white space, hierarchy and proportion. </p>
//                 <p class='text-zinc-800 text-xl md:text-6xl font-medium tracking-widest uppercase '>Patterns</p>
//                 <p class='text-zinc-800 text-xs md:text-lg tracking-wide text-right'>Unique, custom swatches for various applications</p>
//             </div>
//         </div>
//         </Link>
//         {/* Typography */}
//         <Link to="/typography"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class=' w-full bg-[#C5313C] aspect-square xl:aspect-[2/1.5]  flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Shadow, perspective, and texture.</p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>Typography.</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>An exploration of text manipulation using diverse techniques.</p>
//             </div>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${typeCover})` }}></div>
//         </div>
//         </Link>
//         {/* Illustrations */}
//         <Link to="/illustrations"> 
//         <div class='flex w-full grid grid-cols-2'>
//         <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${illustrationsCover})` }}></div>
//             <div class=' w-full bg-[#A39D8D] aspect-square xl:aspect-[2/1.5] flex flex-col items-end justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide text-right'>Seafood & Be Seen</p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>Illustrations.</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide text-right'>Working with Illustraor and Procreate.</p>
//             </div>
//             {/* <div class=' w-full bg-[#1E463F] aspect-square xl:aspect-[2/1.5]   '></div> */}
//         </div>
//         </Link>

//          {/* PRODUCT DESIGN  */}
//          <h2 id='productDesign' class='w-full h-fit py-8 bg-zinc-50 text-zinc-800 uppercase text-center tracking-widest'>Product Design</h2>
//         {/* Thumbs */}
//         <Link to="/thumbs"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class=' w-full bg-[#D6FBDD] aspect-square xl:aspect-[2/1.5]  flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>To like or not to like. </p>
//                 <p class='text-zinc-800 text-xl md:text-4xl font-medium tracking-widest uppercase '>Thumbs.</p>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>Product Design | Web App </p>
//             </div>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${thumbsCover})` }}></div>
//         </div>
//         </Link>
//         {/* MAIS X FRIDA. */}
//         <Link to="/MaisFrida"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${maisHero})` }}></div>
//             <div class=' w-full bg-[#AF8FC2] aspect-square xl:aspect-[2/1.5]  flex flex-col items-end justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide text-right '>Timeless handcrafted jewelry. </p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>MAIS X FRIDA.</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide text-right'> Product Design | Site Refresh</p>
//             </div>
//         </div>
//         </Link>
//         {/* Calcumon. */}
//         <Link to="/calcumon"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class=' w-full bg-[#a3dadc] aspect-square xl:aspect-[2/1.5]  flex flex-col justify-between p-4 md:p-12'>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>Math made fun.</p>
//                 <p class='text-zinc-800 text-xl md:text-4xl font-medium tracking-widest uppercase '>Calcumon.</p>
//                 <p class='text-zinc-800 text-xs md:text-base tracking-wide '>Product Design | Web App </p>
//             </div>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] bg-cover bg-center' style={{ backgroundImage:`url(${calcCover})` }}></div>
//         </div>
//         </Link>
//         {/* Mobile Widgets */}
//         <Link to="/widgets"> 
//         <div class='flex w-full grid grid-cols-2'>
//             <div class='w-full aspect-square xl:aspect-[2/1.5] items-left bg-cover bg-center' style={{ backgroundImage:`url(${widgetsCover})` }}></div>
//             <div class=' w-full bg-[#B64154] aspect-square xl:aspect-[2/1.5]  flex flex-col items-end justify-between p-4 md:p-12'>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Small seamless applications.</p>
//                 <p class='text-zinc-50 text-xl md:text-4xl font-medium tracking-widest uppercase '>Mobile Widgets</p>
//                 <p class='text-zinc-50 text-xs md:text-base tracking-wide '>Product Design | Mini Apps</p>
//             </div>
//         </div>
//         </Link>
//     </div>
//   )
// }

