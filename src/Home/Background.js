import React, { Component } from 'react'
// import bg3 from '../assets/bg3.jpeg'
// import bg7 from '../assets/bg7.jpeg'
import newBg from '../assets/new-bg.jpeg'
import bg12 from '../assets/bg-12.png'
import bg16 from '../assets/bg-16.png'
import bg21 from '../assets/bg-21.png'
import bg28 from '../assets/bg-28.png'
import bg32 from '../assets/bg-32.png'
import bg1 from '../assets/1.jpeg'
import bg3 from '../assets/3.jpeg'
import bg4 from '../assets/4.jpeg'
import bg6 from '../assets/6.jpeg'
// import bg7 from '../assets/7.jpeg'
// import bg8 from '../assets/8.jpeg'
import bg7 from '../assets/7.jpeg'
import bg8 from '../assets/8.jpeg'
import bg9 from '../assets/9.jpeg'
import bg10 from '../assets/10.jpeg'
// import bg9 from '../assets/9.jpeg'




import './landing.scss'

export default function Background(){
    return(
        <div>
            <div className='hidden md:flex bg-gradient-to-t from-blue-600 to-transparent background opacity-80 h-screen fixed top-0 left-0 w-screen bg-cover bg-center' style={{ backgroundImage:`url(${bg10})` }} ></div>
            <div className='md:hidden bg-gradient-to-t from-blue-600 to-transparent background opacity-80 h-screen fixed top-0 left-0 w-screen bg-cover bg-center' style={{ backgroundImage:`url(${bg8})` }} ></div>
        </div>
        )
}