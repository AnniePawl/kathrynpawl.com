import React from 'react';
import './landing.scss';

export default function Landing(){
    return(
        <div className='h-screen w-screen relative flex items-center justify-center flex-col z-[10] flex'>
            <div class='flex flex-col relative items-center justify-center  h-screen'>
                <p class='text-center mt-5 text-4xl max-w-6xl font-[montserrat]'>I'm a UX designer based in Seattle, WA.</p>
                <div class='flex flex-col items-center absolute bottom-14'>
                    <p class='text-sm text-center text-zin-800 justify-self-end pb-2 '>scroll down to see more</p>
                    <span class='text-zinc-100 animate-bounce'>↓</span>
                </div>
            </div>
        </div>
    )
}

