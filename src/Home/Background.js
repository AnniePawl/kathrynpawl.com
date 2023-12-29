import React, { Component } from 'react'
import bg2 from '../assets/bg2.jpeg'
import bg3 from '../assets/bg3.jpeg'
import bg4 from '../assets/bg4.jpeg'
import bg5 from '../assets/bg5.jpeg'
import bg6 from '../assets/bg6.jpeg'
import bg7 from '../assets/bg7.jpeg'
import bg8 from '../assets/bg8.jpeg'
import bg9 from '../assets/bg9.jpeg' 
import bg10 from '../assets/bg10.jpeg' 


import './landing.scss'

export default function Background(){
    return(
        <div className='bg-gradient-to-t from-blue-600 to-transparent background opacity-80 h-screen fixed top-0 left-0 w-screen bg-cover bg-center' style={{ backgroundImage:`url(${bg9})` }} ></div>
    )
}