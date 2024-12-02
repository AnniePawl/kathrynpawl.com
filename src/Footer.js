import React from 'react';
import './footer.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer(){
	return(
		<div class='z-[100] absolute overflow-hidden bg-white flex flex-col items-center justify-center'>
			<div class='bg-white w-full max-w-7xl flex flex-col md:flex-row justify-between w-screen pb-4 md:pb-12 px-8 md:px-8 xl:px-2'>
				<div class=''>
					<div class='max-w-sm mb-8'>
						<h3 class='text-sm md:text-base mb-1 md:mb-2 font-[700] text-yellow-500 tracking-wide'>Interested in Working with Me?</h3>
						<p class='mb-1 md:mb-2 text-sm md:text-base text-zinc-500 leading-5 md:leading-6'>I'm open to new projects and collaborations. Reach out to <a href="mailto: kathrynpawl@gmail.com" class='underline hover:text-zinc-400'>kathrynpawl@gmail.com</a> so we can connect!</p>
					</div>
				</div>
				{/* Case Studies */}
				<div class='mb-6 md:mb-0'>
					<p class='font-[700] text-sm md:text-base text-rose-700 w-full md:pb-1'>Case Studies</p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to='/barko'>Barko</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400 '><Link to='/medsmart'>Med Smart</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to='/flowerbar'>The Flower Bar</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to='/fins'>Fin's Fish Market</Link></p>
				</div>
				{/* Graphic Design */}
				<div class='mb-6 md:mb-0'>
					<p class='font-[700] text-sm md:text-base text-sky-600 w-full md:pb-1'>Graphic Design</p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/shapes">Shapes</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/patterns">Patterns</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400 '><Link to="/illustrations">Illustrations</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/typography">Typography</Link></p>
				</div>
				{/* Product Design */}
				<div class='mb-6 md:mb-0'>
					<p class='text-sm md:text-base font-[700] text-emerald-600 w-full md:pb-1'>Product Design</p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/maisfrida">Mais Frida</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400 '><Link to="/thumbs">Thumbs</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/calcumon">Calcumon</Link></p>
					<p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/widgets">Widgets</Link></p>
					{/* <p class='text-sm text-zinc-500 hover:text-zinc-400'><Link to="/packagedesign">Package Design</Link></p> */}
				</div>
			</div>
			<div class='w-screen py-2 bg-rose-100 flex items-center justify-center'> 
				<p class='text-center text-rose-700 text-xs tracking-wider'>© Kathryn Pawl. 2024 All Rights Reserved</p>
			</div>
	</div>
	)
}