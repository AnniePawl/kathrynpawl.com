import React from 'react';
import Landing from './Landing'
import Projects from './Projects';
import Footer from '../Footer'
import Contact from './Contact';
import Background from './Background';

export default function Home(){
    return(
        <div class='h-fit'>
            <Landing/>
            <Projects/>
            {/* <Footer/> */}
            {/* <Contact/> */}
            <Background/>
        </div>
    )

}