import React, {useState, useEffect} from 'react';
import mailIcon from './assets/gmail.png'
import kplogo from './assets/icons/kp-logo.jpeg'
import { HashLink } from 'react-router-hash-link';
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
        <div class='relative'>
            {/* Header */}
            <div className=' w-full bg-transparent lg:bg-white fixed z-[200] px-2 md:px-20 h-fit w-screen py-0 md:py-6 top-0 left-0' >
                
                <div class='w-full flex justify-between items-center '>
                    <div class='flex flex-col w-fit'>
                    {/* <HashLink smooth to="/#landing"><span class=' uppercase tracking-wider uppercase'>Kathryn Pawl</span></HashLink> */}
                        
                        {/* <p class='text-zinc-800 font-bold uppercase tracking-wide '>Kathryn Pawl </p>
                        <p class='text-zinc-800 font-[300] tracking-wide '>UX Designer / UX Researcher  </p>
                        <p class='text-zinc-800 font-[300] tracking-wide '>Seattle Washington</p>  */}
                    </div>
                {/* <p class='uppercase text-zinc-50 tracking-wider'>Kathryn Pawl</p> */}
					<div class='  mt-5 md:mt-0 flex w-full lg:w-fit  justify-end'>
						<div class='flex flex-col md:flex-row gap-y-2'>
							<HashLink smooth to="/#caseStudies"><p class='uppercase text-end md:text-left font-[400]  transition-all duration-300 hover:cursor-pointer hover:text-rose-700 text-zinc-900 text-xs   mx-4 m   tracking-wider -mb-1 md:mb-0'>Case Studies</p></HashLink>
							<HashLink smooth to="/#graphicDesign"><p class='uppercase text-end md:text-left font-[400]  transition-all duration-300 hover:cursor-pointer hover:text-sky-600 text-zinc-900 text-xs   mx-4 m   tracking-wider -mb-1 md:mb-0'>Graphic Design</p></HashLink>
							<HashLink smooth to="/#productDesign"><p class='uppercase text-end md:text-left font-[400]  transition-all duration-300 hover:cursor-pointer hover:text-emerald-600 text-zinc-900 text-xs   mx-4 m   tracking-wider -mb-1 md:mb-0'>Product Design</p></HashLink>
							<a href="mailto:kathrynpawl@gmail.com"><p class='uppercase text-end md:text-left font-[400]  transition-all duration-300 hover:cursor-pointer hover:text-orange-500  text-zinc-900 text-xs    mx-4  md:py-0 tracking-wider -mb-1 md:mb-0'>Contact</p></a>
						</div>
					</div>
                  
				</div>
               
            </div>
      </div>
    )
}