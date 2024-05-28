import React from 'react';

export default function ProjectCard({h1,h2,p,img}){
	return(
		<div class='flex flex-col'>
			<h2 class='pt-0 font-roboto uppercase flex text-base md:text-xl font-[700] tracking-widest text-zinc-800'>{h1}</h2>
			<span class='font-roboto text-sm md:text-base tracking-widest text-zinc-800'>{h2}</span>
			<div class='my-2 w-full h-[1px] bg-zinc-300'></div>
			<p class='mb-0 text-xs text-zinc-500 md:text-sm leading-5 md:leading-6 tracking-wide font-roboto'>{p}</p>
			<div class='shadow-sm transition-all hover:scale-[.98] mt-4 md:mt-5 flex self-center rounded-sm w-full h-[300px] md:h-[500px] bg-cover bg-center p-6' style={{ backgroundImage:`url(${img})` }}></div>
		</div>
	)	
}