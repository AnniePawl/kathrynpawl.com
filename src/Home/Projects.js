import './landing.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from './ProjectCard';
import shapesCover from '../assets/projects/shapes-cover.png'
import patternCover from '../assets/projects/pattern-cover.jpeg'
import illustrationsCover from '../assets/projects/illustrations-cover.jpeg'
import textCover from '../assets/projects/text-cover.jpeg'
import cs2 from '../assets/studies/cs-2.jpeg'
import cs3 from '../assets/studies/cs-3.jpeg'
import flowerbarcover from '../assets/studies/flowerbar/flowerbar-cover.jpeg'
import finsLaptop from '../assets/projects/fins-laptop.jpeg'
import calcumon from '../assets/projects/calcumon.jpeg'
import product1 from '../assets/product/product-1.jpeg'
import thumbsCover from '../assets/product/thumbs/thumbs-cover.png'
import carton1 from '../assets/product/milkcarton1.png'
import weather1 from '../assets/product/weather/weather-light.jpeg'

export default function Projects(){

return(

    <div id='projects' className='bg-zinc-50 h-fit w-screen relative flex  justify-center flex-col z-[10] flex'>
        <div class='w-full px-6 md:px-24 pt-16 pb-20 '>
            {/* CASE STUDIES */}
            <h2 class='mb-2 text-rose-700  text-base md:text-2xl font-medium uppercase tracking-widest '>Case Studies</h2>
            <div class=' mb-12 w-full h-[1.5px] bg-zinc-800'></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                <Link to="/barko"> <ProjectCard h1={'Barko'} h2={''} p={'A one-stop mobile app for pet owners to easily find and book trustworthy dog walkers located near them. My role for this project was to conduct market research, address user pain points and deliver a prototype. '} img={cs3}/></Link>
                <Link to="/fins"> <ProjectCard h1={'Fins'} h2={''} p={'An online Seafood market that offers same-day delivery of the highest quality seafood, sourced from small-boat fishermen. The goal was to make ordering seafood fast, simple, transparent and reliable. '} img={finsLaptop}/></Link>
                <Link to="/flowerbar"> <ProjectCard h1={'Flower Bar'} h2={''} p={'A redesign of an existing online flower shop. My aim was to create a more a more streamlined web app that allows customers to browse a visual flower menu, customize selections, pin favorite items, and seamlessly check out for pick-up or delivery.   '} img={flowerbarcover}/></Link>
                <Link to="/medsmart"> <ProjectCard h1={'MEDSMART'} h2={''} p={'A mobile app that I designed to help people stay on top of their medication schedules, while also providing the opportunity for users to learn about possible drug interactions, health benefits, and side effect of the medications they’re taking.'} img={cs2}/></Link>
            </div>
            {/* Graphic Design */}
            <h2 id='graphicDesign' class='mt-20 mb-2 text-rose-700  text-base md:text-2xl font-medium uppercase tracking-widest '>Graphic Design</h2>
            <div class=' mb-12 w-full h-[1.5px] bg-zinc-800'></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                <Link to="/shapes"> <ProjectCard h1={'Shapes'} h2={''} p={'An experiment in ‘impossible shapes,’ which are drawn to the rules of perspective but cannot actually be constructed. I practiced using colors and angles to create 2D figures that create the illusion of 3D objects. '} img={shapesCover}/></Link>
                <Link to="/patterns"> <ProjectCard h1={'Patterns'} h2={''} p={'Practice with the pattern editing mode in Adobe Illustrator. I experimented with  contrast, repetition, white space, hierarchy and proportion to create unique swatches for various applications. '} img={patternCover}/></Link>
                <Link to="/typography"> <ProjectCard h1={'Typography'} h2={''} p={'An exercise in manipulating text through various techniques. I played with effects like shadow, perspective, and texture. Learning to create fun text animations like the glitch effect. '} img={textCover}/></Link>
                <Link to="/illustrations"> <ProjectCard h1={'Illustrations'} h2={''} p={'A showcase of some freehand illustrations I made with Illustrator and Procreate to familiarize myself with each softwares object and effect tools. '} img={illustrationsCover}/></Link>
            </div>
            {/* Product Design */}
            <h2 id='productDesign' class='mt-20 mb-2 text-rose-700  text-base md:text-2xl font-medium uppercase tracking-widest '>Product  Design</h2>
            <div class=' mb-12 w-full h-[1.5px] bg-zinc-800'></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                {/* <Link to="/"> <ProjectCard h1={'Thumbs'} h2={''} p={'Iterations of a design for a web extension that can embed onto any webpage, allowing users to like or dislike any particular product or content. '} img={thumbsCover}/></Link> */}
                {/* <Link to="/calculator"> <ProjectCard h1={'Mais Frida'} h2={''} p={''} img={product1}/></Link>
                <Link to="/calcumon"> <ProjectCard h1={'Calcumon'} h2={'Web Application'} p={''} img={calcumon}/></Link> */}
                <Link to="/packagedesign"> <ProjectCard h1={'Package Design'} h2={''} p={'The beginning stages of exploring my interest in package design. I’ve been accompanying online courses with hands on practice applying 2D graphics from Photoshop onto 3D models in Dimension. '} img={carton1}/></Link>
                <Link to="/widgets"> <ProjectCard h1={'Mobile Widgets'} h2={''} p={'A selection of mini applications meant to carry out small, specific tasks. I have designed a steamlined weather app with light and dark mode, and a retro calculator. '} img={weather1}/></Link>
            </div>
        </div>
       
    </div>
  )
}

