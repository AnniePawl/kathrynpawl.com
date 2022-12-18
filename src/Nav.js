import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { Component, useState } from 'react'

export default function Nav(){

    const [active,setActive] = useState(false);

    const hamburger = () => {
        setActive(!active)
    }

    return(
        <div>
            {/* Hamburger Menu */}
            <div onClick={hamburger} className='z-10 absolute top-5 left-5 hover:cursor-pointer'>
                <div className={`${active?'rotate-45':''} h-1 w-7 bg-blue-600 mb-1 transition-all`}></div>
                <div className={`${active?'hidden':''} h-1 w-7 bg-blue-600 mb-1`}></div>
                <div className={`${active?'-rotate-45':''} h-1 w-7 bg-blue-600 transition-all`}></div>
            </div>
            {/* Nav Slideout */}
            <div className={`${active?'left-0':'-left-64'} h-screen w-64 bg-green-200 absolute top-0 transition-all`}>
                <ul className='pt-24 px-10'>
                    <li className='text-lg font-bold'>Graphic Design</li>
                </ul>
            </div>
        </div>
    )
}