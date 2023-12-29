import React from 'react';
import './landing.scss';

export default function Landing(){
    return(
        <div class='landing-bg h-screen w-screen relative flex items-center justify-center flex-col z-[10] flex'>
            <div class='flex flex-col relative items-center justify-center  h-screen'>
                <p class='text-white font-[serif] text-center mt-5 px-8 text-2xl md:text-4xl max-w-6xl sticky top-16 '>Hello! I'm a UX Designer based in Seattle, Washington</p>
                <div class='flex flex-col items-center absolute bottom-14'>
                    <p class='text-sm text-center text-zinc-200 justify-self-end pb-2 '>scroll down to see more</p>
                    <span class='text-zinc-200 animate-bounce'>↓</span>
                </div>
            </div>
        </div>
    )
}

