import React from 'react';
import './landing.scss'

export default function ProjectCard({h1,h2,p,img}){
	return(
		<div class='dot flex flex-col hover:cursor-default'>
			<h2 class='dot pt-0 font-roboto uppercase flex text-base md:text-lg font-[400] tracking-widest text-zinc-800'>{h1}</h2>
			<span class='dot font-roboto text-sm md:text-base tracking-widest text-zinc-800'>{h2}</span>
			<div class='dot my-1 md:my-2 w-full h-[1px] bg-zinc-300'></div>
			<p class='md:min-h-[72px] dot mb-0 text-xs text-zinc-800 md:text-sm leading-5 md:leading-6 tracking-wider font-poppins'>{p}</p>
			<div class='dot card  transition-all hover:scale-[.98] mt-4 md:mt-5 flex self-center rounded-sm w-full h-[300px] md:h-[500px] bg-cover bg-center p-6' style={{ backgroundImage:`url(${img})` }}></div>
		</div>
	)	
}