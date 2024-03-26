import React, {useState, useEffect} from 'react';
import mailIcon from './assets/gmail.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function HomeHeader(){
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
            <div className={` ${pathLocation=="/"?"transparent":"bg-white"} z-[101] px-4 md:px-20 h-14 w-screen fixed top-0 left-0 `} >
                <div class='w-full flex justify-between items-center pt-12'>
					<div  onClick={closeMenu} className={`${pathLocation==='/'?"text-zinc-50":"text-zinc-800"} text-base md:text-2xl font-bold uppercase tracking-wider  hover:cursor-default `} ><Link to="/"></Link></div>
					<div class='flex items-center'>
						{/* <div class='mr-6 flex'>
							<div class='border-zinc-50 border-2 h-6 w-6 rounded-full bg-yellow-500 mr-6'></div>
							<div class='border-zinc-50 border-2 h-6 w-6 rounded-full bg-teal-500 mr-6'></div>
							<div class='border-zinc-50 border-2 h-6 w-6 rounded-full bg-red-500 mr-6'></div>
						</div> */}
						<div class='flex'>
							<p class='transition-colors hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-lg font-medium mr-8 font-roboto tracking-widest '>Case Studies</p>
							<p class='transition-colors hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-lg font-medium mr-8 font-roboto tracking-widest '>Graphic Design</p>
							<p class='transition-colors hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-lg font-medium mr-8 font-roboto tracking-widest '>Product Design</p>
							<a href="mailto:kathrynpawl@gmail.com"><p class='transition-colors hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-lg font-medium mr-8 font-roboto tracking-widest '>Contact</p></a>

						</div>
						{/* <div onClick={openMenu}  class='flex flex-col'>
							<div className={`h-[3px] w-6 rounded-full mb-[5px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `}     ></div>
							<div className={`h-[3px] w-6 rounded-full mb-[5px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `} ></div>
							<div className={`h-[3px] w-6 rounded-full mb-[0px] ${pathLocation==='/'?"bg-white":"bg-zinc-800"}  `} ></div>
						</div> */}

					</div>
				</div>
               
            </div>
            {/* Slideout Menu  */}
            <div  className={` menu transition-all z-[100] h-screen w-full md:w-[250px] bg-white fixed right-0 top-0 ${isOpen ? "" : " hidden"}`} >
               {/* <div onClick={closeMenu} class='z-[1000] text-zinc-400 font-light text-4xl absolute hover:text-rose-600 top-1 right-5'>x</div> */}
                <ul class='px-7 md:px-8 py-20'>
                    <div class='pb-8'>
                    <li class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Graphic Design</li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-base md:text-sm'><Link to="/shapes">Shapes</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-sm'><Link to="/patterns">Patterns</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-sm'><Link to="/typography">Typography</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-green-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to="/illustrations">Illustrations</Link></li>
                    </div>
                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Case Studies</li>
                        <li onClick={openMenu} class='mt-1 hover:text-red-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to='/fins'>Fin's Fish Market</Link></li>
                        <li onClick={openMenu} class='hover:text-green-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to='/barko'>Barko</Link></li>
                        <li onClick={openMenu} class='hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to='/flowerbar'>The Flower Bar</Link></li>
                        <li onClick={openMenu} class='hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to='/medsmart'>Med Smart</Link></li>
                        
                    </div>

                    <div class='pb-8'>
                        <li onClick={openMenu} class='mr-10 font-bold text-zinc-700 w-full pb-1 border-b border-zinc-500 '>Product Design</li>
                        <li onClick={openMenu} class='mt-1 tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to="/calculator">Calculator</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to="/weatherapp">Weather App</Link></li>
                        <li onClick={openMenu} class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-base md:text-sm '><Link to="/packagedesign">Package Design</Link></li>
                        <li onClick={openMenu} class='hover:text-purple-500 hover:cursor-default transition-colors text-base md:text-sm'><Link to="/maisfrida">Mais Frida</Link></li>
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