import React, {useState, useEffect} from 'react';
import './footer.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header(){
    const location = useLocation();
    const pathLocation = location.pathname
    
    // Handle Slideout Menu 
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () =>{
        console.log('close')
        setIsOpen(false)
    }
    const openMenu = () => {
        setIsOpen(!isOpen);
        if(!isOpen){

         }
    }
    return(
        <div>
            {/* Header */}
            <div className='header bg-zinc-50  z-[105] px-4 md:px-10 h-14 w-screen fixed top-0 left-0 flex items-center justify-between ' >
                <div  onClick={closeMenu} className={`${pathLocation==='/'?"text-zinc-800":"text-zinc-800"} transition-colors   text-sm md:text-base font-medium uppercase tracking-wider   `} ><Link to="/">Kathryn Pawl</Link></div>
                <p className={`${isOpen?"text-zinc-800":"text-zinc-800"} transition-colors   text-sm md:text-base z-[1000] font-medium uppercase tracking-wider   `} onClick={openMenu}>MENU</p>
            </div>
            {/* Slideout Menu  */}
            <div  className={` menu transition-all z-[100] h-screen w-full md:w-[275px] bg-zinc-50 fixed right-0 top-0 ${isOpen ? "" : " hidden"}`} >
                <ul class='px-7 md:px-8 py-20'>
                    <div class='pb-8'>
                        <li class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Graphic Design</li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500  transition-colors text-base md:text-base'><Link to="/shapes">Shapes</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-blue-500  transition-colors text-base md:text-base'><Link to="/patterns">Patterns</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-yellow-500  transition-colors text-base md:text-base'><Link to="/typography">Typography</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-green-500  transition-colors text-base md:text-base '><Link to="/illustrations">Illustrations</Link></li>
                    </div>
                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Case Studies</li>
                        <li onClick={openMenu} class='mt-1 hover:text-red-500  transition-colors text-base md:text-base '><Link to='/fins'>Fin's Fish Market</Link></li>
                        <li onClick={openMenu} class='hover:text-green-500  transition-colors text-base md:text-base '><Link to='/barko'>Barko</Link></li>
                        <li onClick={openMenu} class='hover:text-blue-500  transition-colors text-base md:text-base '><Link to='/flowerbar'>The Flower Bar</Link></li>
                        <li onClick={openMenu} class='hover:text-yellow-500  transition-colors text-base md:text-base '><Link to='/medsmart'>Med Smart</Link></li>
                    </div>
                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Product Design</li>
                        <li onClick={openMenu} class='hover:text-purple-500  transition-colors text-base md:text-base'><Link to="/maisfrida">Mais Frida</Link></li>
                        <li onClick={openMenu} class='hover:text-blue-500  transition-colors text-base md:text-base'><Link to="/widgets">Widgets</Link></li>
                        <li onClick={openMenu} class='hover:text-green-500  transition-colors text-base md:text-base'><Link to="/thumbs">Thumbs</Link></li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500  transition-colors text-base md:text-base '><Link to="/calcumon">Calcumon</Link></li>
                    </div>
                    <a href="mailto:kathrynpawl@gmail.com" class='text-zinc-800 absolute bottom-10 left-10 md:left-8  text-sm underline '>Contact</a>
                </ul>
            </div>
      </div>
    )
}