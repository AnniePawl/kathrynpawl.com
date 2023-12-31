import React, {useState, useEffect} from 'react';
import mailIcon from './assets/gmail.png'
import { Link } from 'react-router-dom';


export default function Header(){
     // Handle Slideout Menu 
    const [isOpen, setIsOpen] = useState(false);
    const[scroll, setscroll] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setscroll(window.scrollY > 850)
          );
        }
      }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if(isOpen){}
    }

    


    return(

        <div>
            {/* Header */}
            <div className={`z-[101] bg-white px-4 md:px-10 h-14 md:h-16 w-screen fixed top-0 left-0 flex items-center justify-between ${!scroll?"":"bg-white"}`}>
                <p className={`text-base md:text-base font-medium uppercase tracking-wider md:tracking- text-zinc-800  hover:cursor-default transition-colors duration-[.2s] hover:text-zinc-600 ${!scroll?"":"text-zinc-800"}`}><Link to="/">Kathryn Pawl</Link></p>
                <div onClick={toggleMenu}  class='flex flex-col'>
                    <div className={`h-[2px] w-6 bg-zinc-800 rounded-full mb-[4px] ${!isOpen ? "" : " bg-zinc-800"} ${!scroll ? "" : " bg-zinc-800"}`}></div>
                    <div className={`h-[2px] w-6 bg-zinc-800 rounded-full mb-[4px] ${!isOpen ? "" : " bg-zinc-800"} ${!scroll ? "" : " bg-zinc-800"}` }></div>
                    <div className={`h-[2px] w-6 bg-zinc-800 rounded-full mb-[4px] ${!isOpen ? "" : " bg-zinc-800"} ${!scroll ? "" : " bg-zinc-800"}`}></div>
                </div>
            </div>
      
            {/* Slideout Menu  */}
            <div  className={` menu transition-all z-[100] h-screen w-full md:w-[250px] bg-white fixed right-0 top-0 ${isOpen ? "" : " hidden"}`} >
                <ul class='px-10 md:px-8 py-16'>
                    <div class='pb-8'>
                        <span class='font-bold tracking-tight'>Graphic Design</span>
                        <li class='tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-sm'><Link to="/shapes">Shapes</Link></li>
                        <li class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-sm'><Link to="/patterns">Patterns</Link></li>
                        <li class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-sm'><Link to="/typography">Typography</Link></li>
                        <li class='tracking-tight hover:text-green-500 hover:cursor-default transition-colors text-sm '><Link to="/illustrations">Illustrations</Link></li>
                    </div>
                    <div class='pb-8'>
                        <span class='font-bold '>Case Studies</span>
                        <li class='hover:text-red-500 hover:cursor-default transition-colors text-sm '><Link to='/fins'>Fin's Fish Market</Link></li>
                        <li class='hover:text-green-500 hover:cursor-default transition-colors text-sm '><Link to='/barko'>Barko</Link></li>
                        <li class='hover:text-blue-500 hover:cursor-default transition-colors text-sm '><Link to='/flowerbar'>The Flower Bar</Link></li>
                        <li class='hover:text-yellow-500 hover:cursor-default transition-colors text-sm '><Link to='/medsmart'>Med Smart</Link></li>
                        
                    </div>

                    <div class='pb-8'>
                        <span class='font-bold tracking-tight'>Product Design</span>
                        <li class='tracking-tight hover:text-red-500 hover:cursor-default transition-colors text-sm '><Link to="/calculator">Calculator</Link></li>
                        <li class='tracking-tight hover:text-blue-500 hover:cursor-default transition-colors text-sm '><Link to="/weatherapp">Weather App</Link></li>
                        <li class='tracking-tight hover:text-yellow-500 hover:cursor-default transition-colors text-sm '><Link to="/packagedesign">Package Design</Link></li>
                        <li class='hover:text-purple-500 hover:cursor-default transition-colors text-sm'><Link to="/maisfrida">Mais Frida</Link></li>
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