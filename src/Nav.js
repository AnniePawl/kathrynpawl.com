import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { Component, useState } from 'react'

export default function Nav(props){
    const { theme } = props;
    const [active, setActive] = useState(false);

    const hamburger = () => {
        setActive(!active)
    }

    return(
        <div>
            {/* Hamburger Menu */}
            <div onClick={hamburger} className='z-10 fixed top-5 left-5 hover:cursor-pointer'>
                <div className={`${active?'rotate-45 translate-y-2 !bg-zinc-800':''} ${theme=='theme1'?'bg-zinc-800':''} ${theme=='theme2'?'theme2-nav':''} ${theme=='theme3'?'theme3-nav':''} ${theme=='theme4'?'theme4-nav':''} h-1 w-6 mb-1 transition-all`}></div>
                <div className={`${active?'hidden':''}  ${theme=='theme1'?'bg-zinc-800':''} ${theme=='theme2'?'theme2-nav':''} ${theme=='theme3'?'theme3-nav':''} ${theme=='theme4'?'theme4-nav':''} h-1 w-6 mb-1 transition-all`}></div>
                <div className={`${active?'-rotate-45 !bg-zinc-800':''}  ${theme=='theme1'?'bg-zinc-800':''} ${theme=='theme1'?'bg-zinc-800':''} ${theme=='theme2'?'theme2-nav':''} ${theme=='theme3'?'theme3-nav':''} ${theme=='theme4'?'theme4-nav':''} h-1 w-6 mb-1 transition-all`}></div>
            </div>
            {/* Nav Slideout */}
            <div className={`${active?'left-0':'-left-64'} ${theme=='theme1'?'theme1-nav':''} ${theme=='theme2'?'theme2-nav':''} ${theme=='theme3'?'theme3-nav':''} ${theme=='theme4'?'theme4-nav':''} h-screen w-64 bg-yellow-300 absolute top-0 transition-all`}>
                <ul className='pt-32 px-10'>
                    <li className={`text-lg text-zinc-800 font-bold mb-2`}>About</li>
                    <li className='text-lg text-zinc-800 font-bold mb-2'>Illustrations</li>
                    <li className='text-lg text-zinc-800 font-bold mb-2'>Graphic Design</li>
                </ul>
            </div>
        </div>
    )
}