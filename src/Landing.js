import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import './landing.scss';

export default function Landing(){
    const [theme1, setTheme1] = useState(true);
    const [theme2, setTheme2] = useState(false);
    const [theme3, setTheme3] = useState(false);
    const [theme4, setTheme4] = useState(false);

  
    const handleTheme1 = () =>{
        setTheme1(true);
        setTheme2(false);
        setTheme3(false);
        setTheme4(false);
    }

    const handleTheme2 = () =>{
        setTheme1(false);
        setTheme2(true);
        setTheme3(false);
        setTheme4(false);
    }

    const handleTheme3 = () =>{
        setTheme1(false);
        setTheme2(false);
        setTheme3(true);
        setTheme4(false);
    }

    const handleTheme4 = () =>{
        setTheme1(false);
        setTheme2(false);
        setTheme3(false);
        setTheme4(true);

    }

    return(
       <div className={`overflow-hidden${theme1?"theme1":""} ${theme2?"theme2":""} ${theme3?"theme3":""} ${theme4?'theme4':''} h-screen flex items-center justify-center`}>
            <Nav theme={`${theme1?"theme1":""}${theme2?"theme2":""}${theme3?"theme3":""}${theme4?"theme4":""}`}/>
            <div className='absolute flex top-5 right-5'>
                <div onClick={handleTheme1} className='theme1-btn h-5 w-5 md:h-6 md:w-6 rounded-full border border-zinc-800 theme1 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme2} className='theme2-btn h-5 w-5 md:h-6 md:w-6 rounded-full border border-zinc-800 theme3 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme3} className='theme3-btn h-5 w-5 md:h-6 md:w-6 rounded-full border border-zinc-800 theme4 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme4} className='theme4-btn h-5 w-5 md:h-6 md:w-6 rounded-full border border-zinc-800 theme2 m-1 hover:cursor-pointer'></div>
            </div>
            <div class="relative flex md:justify-center w-screen px-8">
                <div className='flex flex-col'>
                    <h1 className={`text-5xl md:text-7xl md:text-left mb-6 tracking-wider max-w-2xl ${theme1?'text-zinc-800':''} ${theme2?'text-red-500':''} ${theme3?'text-white':''} ${theme4?'text-yellow-300':''} text-8xl font-bold`}>Kathryn Pawl</h1>
                    <p className={`text-base md:text-xl max-w-2xl ${theme1?'text-slate-800':''} ${theme2?'text-red-500':''} ${theme3?'text-white':''} ${theme4?'text-yellow-300':''} text-lg `}>
                        I’m a graphic illustrator and user interface designer with experience using industry-standard tools to create visual assets and unique digital experiences. I’m passionate about bringing ideas to life and engaging users through interactivity. Want to learn more about my services from logo packages to website prototypes? 
                        <a href="mailto:kathrynpawl@gmail.com"><span className='text-blue-500'> Reach Out</span></a> 
                    </p>
                </div>
            </div>
        </div>
    )
}