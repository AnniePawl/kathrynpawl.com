import React from "react";
import Header from '../Header'
import carton1 from '../assets/product/milkcarton1.png'
import carton2 from '../assets/product/milkcarton2.png'
import carton3 from '../assets/product/milkcarton2.png'
import carton4 from '../assets/product/milkcarton3.png'
import { useEffect } from "react";


export default function Thumbs(){
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])

    return(
        <div class='bg-zinc-50 h-fit w-screen flex flex-col items-center justify-center py-28'>
           <Header/>
            <h2 class='pb-6 md:pb-12 text-base md:text-lg font-bold uppercase tracking-widest text-zinc-900 '>Thumbs</h2>
        
        </div>
    )
}