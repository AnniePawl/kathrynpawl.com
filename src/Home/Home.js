import React from 'react';
import Landing from './Landing'
import Projects from './Projects';
import Contact from './Contact';
import Background from './Background';

export default function Home(){
    return(
        <div class='h-fit'>
            <Landing/>
            <Projects/>
            {/* <Contact/> */}
            <Background/>
        </div>
    )

}