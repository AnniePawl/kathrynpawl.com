import React from 'react';
import Landing from './Landing'
import Projects2 from './Projects2';
// import Projects2 from './Projects2';
import Footer from '../Footer'
import Contact from './Contact';
import Background from './Background';

export default function Home(){
    return(
        <div class='h-fit'>
            <Landing/>
            <Projects2/>
            {/* <Footer/> */}
            {/* <Contact/> */}
            <Footer/>
            <Background/>
        </div>
    )

}