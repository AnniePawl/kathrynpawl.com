import React from 'react';
import Landing from './Landing'
import About from './About';
import Projects from './Projects';
import Background from './Background';

export default function Home(){
    return(
        <div class='h-fit'>
            <Landing/>
            <Projects/>
            {/* <About/> */}
            <Background/>
        </div>
    )

}