import React from "react";
import Header from "../Header";
import { useEffect } from "react";
import ToTop from "../ToTop";
import mais7 from '../assets/product/mais/mais-6.jpeg'
import mais8 from '../assets/product/mais/mais-7.jpeg'
import mais9 from '../assets/product/mais/mais-8.jpeg'
import mais10 from '../assets/product/mais/mais-9.jpeg'
import mais11 from '../assets/product/mais/mais-10.png'
import maisLanding from '../assets/product/mais/mais-landing.jpeg'


export default function MaisFrida(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='overflow-hidden bg-white h-fit w-screen flex flex-col items-center justify-center pt-20 md:py-24'>
            <Header/>
            <div class='w-full max-w-5xl flex flex-col items-center justify-center'>
                <img class='w-[400px] md:w-full max-w-5xl ' src={maisLanding}></img>
                <img class='scale-[.9]' src={mais10}></img>
                <img class='scale-[.9]' src={mais7}></img>
                <img class='scale-[.9]' src={mais9}></img>
                <img class='scale-[.9]' src={mais11}></img>
                <img class='scale-[.9]' src={mais8}></img>
            </div>
            <div className="flex grid grid-cols-3 gap-2 md:gap-4">
                {/* <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic1})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic2})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic3})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover '  style={{ backgroundImage:`url(${pic4})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover'  style={{ backgroundImage:`url(${pic5})` }}></div>
                <div class='h-48 w-48 sm:h-48 sm:w-48 md:h-96 md:w-96 bg-center bg-cover'  style={{ backgroundImage:`url(${pic6})` }}></div> */}
            </div>
            <ToTop bgColor='#9c7246'/>
        </div>
    )
}