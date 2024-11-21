import React, {useState, useEffect} from 'react';
import mailIcon from './assets/gmail.png'
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
            <div className=' bg-transparent  z-[105] px-4 md:px-10 h-14 w-screen fixed top-0 left-0 flex items-center justify-between ' >
                {/* <div  onClick={closeMenu} className={`${pathLocation==='/'?"text-zinc-50":"text-zinc-800"} transition-colors hover:text-zinc-500 text-base md:text-base font-medium uppercase tracking-wider  hover:cursor-default `} ><Link to="/">Kathryn Pawl</Link></div> */}
                <div  onClick={closeMenu} className={`${pathLocation==='/'?"text-zinc-800":"text-zinc-800"} transition-colors   text-sm md:text-base font-medium uppercase tracking-wider  hover:cursor-default `} ><Link to="/">Kathryn Pawl</Link></div>
          
                <p className={`${isOpen?"text-zinc-800":"text-zinc-800"} transition-colors   text-sm md:text-base z-[1000] font-medium uppercase tracking-wider  hover:cursor-default `} onClick={openMenu}>MENU</p>
                
                {/* <p className={`${isOpen?"text-zinc-800":"opacity-0"} absolute top-4 right-10 text-base md:text-base font-light uppercase tracking-wider  hover:cursor-default `} onClick={openMenu}>X</p> */}
                {/* <div onClick={openMenu}  class='flex flex-col'>
                    <div className={`h-[2.1px] w-6 rounded-full mb-[4px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `}     ></div>
                    <div className={`h-[2.1px] w-6 rounded-full mb-[4px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `} ></div>
                    <div className={`h-[2.1px] w-6 rounded-full mb-[4px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `} ></div>
                </div> */}
            </div>
            {/* Slideout Menu  */}
            <div  className={` menu transition-all z-[100] h-screen w-full md:w-[275px] bg-zinc-50 fixed right-0 top-0 ${isOpen ? "" : " hidden"}`} >
               {/* <div onClick={closeMenu} class='z-[1000] text-zinc-400 font-light text-4xl absolute hover:text-rose-600 top-1 right-5'>x</div> */}
                {/* <p onClick={openMenu} class='absolute top-5 right-10 z-[10] '>X</p> */}
                <ul class='px-7 md:px-8 py-20'>
                    <div class='pb-8'>
                        <li class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Graphic Design</li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/shapes">Shapes</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/patterns">Patterns</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/typography">Typography</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-green-500 hover:cursor-default transition-colors text-base md:text-base '><Link to="/illustrations">Illustrations</Link></li>
                    </div>
                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Case Studies</li>
                        <li onClick={openMenu} class='mt-1 hover:text-red-500 hover:cursor-default transition-colors text-base md:text-base '><Link to='/fins'>Fin's Fish Market</Link></li>
                        <li onClick={openMenu} class='hover:text-green-500 hover:cursor-default transition-colors text-base md:text-base '><Link to='/barko'>Barko</Link></li>
                        <li onClick={openMenu} class='hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-base '><Link to='/flowerbar'>The Flower Bar</Link></li>
                        <li onClick={openMenu} class='hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-base '><Link to='/medsmart'>Med Smart</Link></li>
                        
                    </div>

                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Product Design</li>
                        <li onClick={openMenu} class='hover:text-purple-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/maisfrida">Mais Frida</Link></li>
                        <li onClick={openMenu} class='hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/widgets">Widgets</Link></li>
                        <li onClick={openMenu} class='hover:text-green-500 hover:cursor-default transition-colors text-base md:text-base'><Link to="/thumbs">Thumbs</Link></li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-base md:text-base '><Link to="/calcumon">Calcumon</Link></li>
                        {/* <li onClick={openMenu} class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-base '><Link to="/weatherapp">Weather App</Link></li> */}
                        {/* <li onClick={openMenu} class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-base '><Link to="/packagedesign">Package Design</Link></li> */}
                        {/* <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-base md:text-base '><Link to="/calculator">Calculator</Link></li> */}
                    </div>
                    {/* <div class='pb-20'>
                        <span class='font-bold '>Product Design</span>
                        <li class='hover:text-emerald-600 hover:cursor-default transition-colors text-sm '>Shapes</li>
                        <li class='hover:text-emerald-600 hover:cursor-default transition-colors text-sm '>Patterns</li>
                        <li class='hover:text-emerald-600 hover:cursor-default transition-colors text-sm '>Typography</li>
                    </div> */}

                    <a href="mailto:kathrynpawl@gmail.com" class='hidden text-zinc-800 px-4 py-1 border border-zinc-800 no-underline rounded-full absolute bottom-10 left-10 md:left-20 text-sm underline hover:bg-zinc-800 hover:text-white duration-[.7s] transition-colors'>
                        Contact
                        {/* <img src={mailIcon} class='h-6 w-6'></img> */}
                    </a>
                    <a href="mailto:kathrynpawl@gmail.com" class='text-zinc-800 absolute bottom-10 left-10 md:left-8  text-sm underline '>Contact</a>
                </ul>
            </div>
      </div>
    )
}