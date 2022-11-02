import React, {useState, useEffect} from 'react';
import './landing.scss';


export default function Landing(){

    const[theme1, setTheme1] = useState(false);
    const[theme2, setTheme2] = useState(false);
    const[theme3, setTheme3] = useState(false); 
    const[theme4, setTheme4] = useState(false);

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
        setTheme4(false)
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
        <div className={`landing ${theme1?'theme-1':""} ${theme2?'theme-2':""} ${theme3?'theme-3':""} ${theme4?'theme-4':""}`}>
         
            <div class='themes'>
                <div className='theme-btn theme1' onClick={handleTheme1}></div>
                <div className='theme-btn theme2'  onClick={handleTheme2}></div>
                <div className='theme-btn theme3' onClick={handleTheme3}></div>
                <div className='theme-btn theme4' onClick={handleTheme4}></div>
            </div>

            <div className='content'>
                <h1>Kathryn Pawl</h1>
                <p>I’m a graphic illustrator and user interface designer with experience using industry-standard tools to create visual assets and unique digital experiences. I’m passionate about bringing ideas to life and engaging users through interactivity. Want to learn more about my services from logo packages to website prototypes? <a href="mailto:kathrynpawl@gmail.com">Reach Out</a> </p>
            </div>
           
        </div>
    )
}