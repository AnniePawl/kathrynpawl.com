import React, {useState} from 'react';
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
        <div className={`${theme1?"bg-slate-50":""} ${theme2?"bg-emerald-800":""} ${theme3?"bg-blue-200":""} ${theme4?'bg-yellow-300':''} h-screen flex items-center justify-center`}>
            <div className='absolute flex top-5 right-5'>
                <div onClick={handleTheme1} className='theme1 h-6 w-6 rounded-full border border-black theme1 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme2} className='theme2 h-6 w-6 rounded-full border border-black theme2 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme3} className='theme3 h-6 w-6 rounded-full border border-black theme3 m-1 hover:cursor-pointer'></div>
                <div onClick={handleTheme4} className='theme4 h-6 w-6 rounded-full border border-black theme4 m-1 hover:cursor-pointer'></div>
            </div>
            <div class="flex flex-col max-w-3xl ">
                <h1 className={`${theme1?'text-slate-800':''} ${theme2?'text-yellow-300':''} ${theme3?'text-red-500':''} ${theme4?'text-violet-800':''} text-7xl font-extrabold mb-4`}>Kathryn Pawl</h1>
                <p className={`${theme1?'text-slate-800':''} ${theme2?'text-yellow-300':''} ${theme3?'text-red-500':''} ${theme4?'text-violet-800':''} text-lg`}>
                    I’m a graphic illustrator and user interface designer with experience using industry-standard tools to create visual assets and unique digital experiences. I’m passionate about bringing ideas to life and engaging users through interactivity. Want to learn more about my services from logo packages to website prototypes? 
                    <a href="mailto:kathrynpawl@gmail.com">Reach Out</a> 
                </p>
            </div>
        </div>
    )
}