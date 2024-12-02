import React, {useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import '../footer.scss'
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
            <div className='header w-full bg-transparent md:bg-white fixed z-[8] md:z-[200] px-2 md:px-20 h-fit w-screen py-0 md:py-5 top-0 left-0' >
                <div class='w-full flex justify-between items-center '>
                    <div class='flex flex-col w-fit'>
                    </div>
					<div class=' mt-6 md:mt-1 flex w-full lg:w-fit  justify-end'>
						<div class='flex flex-col md:flex-row gap-y-2'>
							<HashLink smooth to="/#caseStudies"><p class='header uppercase text-end md:text-left font-[400]  transition-all duration-300  hover:text-rose-700 text-zinc-900 text-xs   md:text-xs mx-4 m   tracking-wider  md:mb-0'>Case Studies</p></HashLink>
							<HashLink smooth to="/#graphicDesign"><p class='header uppercase text-end md:text-left font-[400]  transition-all duration-300  hover:text-sky-600 text-zinc-900 text-xs   md:text-xs mx-4 m   tracking-wider  md:mb-0'>Graphic Design</p></HashLink>
							<HashLink smooth to="/#productDesign"><p class='header uppercase text-end md:text-left font-[400]  transition-all duration-300  hover:text-emerald-600 text-zinc-900 text-xs   md:text-xs mx-4 m   tracking-wider  md:mb-0'>Product Design</p></HashLink>
							<a href="mailto:kathrynpawl@gmail.com"><p class='header uppercase text-end md:text-left font-[400]  transition-all duration-300  hover:text-orange-500  text-zinc-900 text-xs    md:text-xs mx-4  md:py-0 tracking-wider  md:mb-0'>Contact</p></a>
						</div>
					</div>
				</div>
            </div>
      </div>
    )
}