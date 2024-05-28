import React, {useState, useEffect} from 'react';
import mailIcon from './assets/gmail.png'
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
        <div>
            {/* Header */}
            <div className='bg-transparent z-[101] px-4 md:px-20 h-14 w-screen fixed top-0 left-0' >
                <div class='w-full flex justify-end items-center pt-8 md:pt-12'>
					<div class='mt-5 md:mt-0 flex items-center'>
						<div class='flex flex-col md:flex-row gap-y-2'>
							<a href="mailto:kathrynpawl@gmail.com"><p class='text-end md:text-left  transition-all duration-300 hover:cursor-pointer hover:text-zinc-800  text-zinc-50 text-xs sm:text-sm font-medium  mx-4 md:mr-8 md:py-0 font-roboto tracking-widest '>Contact</p></a>
							<HashLink smooth to="/#projects"><p class='text-end md:text-left  transition-all duration-300 hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-xs sm:text-sm font-medium mx-4 md:ml-0 md:mr-8 font-roboto tracking-widest '>Case Studies</p></HashLink>
							<HashLink smooth to="/#graphicDesign"><p class='text-end md:text-left  transition-all duration-300 hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-xs sm:text-sm font-medium mx-4 md:ml-0 md:mr-8 font-roboto tracking-widest '>Graphic Design</p></HashLink>
							<HashLink smooth to="/#productDesign"><p class='text-end md:text-left  transition-all duration-300 hover:cursor-pointer hover:text-zinc-800 text-zinc-50 text-xs sm:text-sm font-medium mx-4 md:ml-0 md:mr-8 font-roboto tracking-widest '>Product Design</p></HashLink>
						</div>
					</div>
				</div>
               
            </div>
      </div>
    )
}