import React, {useState} from 'react';
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
       <div className={`${theme1?"theme1":""} ${theme2?"theme2":""} ${theme3?"theme3":""} ${theme4?'theme4':''} h-screen flex items-center justify-center`}>
            <Nav theme={`${theme1?"theme1":""}${theme2?"theme2":""}${theme3?"theme3":""}${theme4?"theme4":""}`}/>
            <div className='absolute flex top-5 right-5'>
                <div onClick={handleTheme1} className='theme1-btn h-6 w-6 rounded-full border border-zinc-800 theme1 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme2} className='theme2-btn h-6 w-6 rounded-full border border-zinc-800 theme3 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme3} className='theme3-btn h-6 w-6 rounded-full border border-zinc-800 theme4 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme4} className='theme4-btn h-6 w-6 rounded-full border border-zinc-800 theme2 m-1 hover:cursor-pointer'></div>
            </div>
            <div class="flex flex-col max-w-3xl ">
                <h1 className={`${theme1?'text-zinc-800':''} ${theme2?'text-red-500':''} ${theme3?'text-white':''} ${theme4?'text-yellow-300':''} text-8xl mb-4`}>Kathryn Pawl</h1>
                <p className={`${theme1?'text-slate-800':''} ${theme2?'text-red-500':''} ${theme3?'text-white':''} ${theme4?'text-yellow-300':''} text-lg`}>
                    I’m a graphic illustrator and user interface designer with experience using industry-standard tools to create visual assets and unique digital experiences. I’m passionate about bringing ideas to life and engaging users through interactivity. Want to learn more about my services from logo packages to website prototypes? 
                    <a href="mailto:kathrynpawl@gmail.com">Reach Out</a> 
                </p>
            </div>
            <div class='absolute bottom-0 w-screen h-24'>

            </div>
        </div>
    )
}