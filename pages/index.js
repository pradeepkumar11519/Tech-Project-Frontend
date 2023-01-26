import React, { useContext } from 'react'
import Carousel from '../components/Carousel'
import NeonButton from '../components/NeonButton'
import SmokeTextAnimation from '../components/SmokeTextAnimation'
import StyledText from '../components/StyledText'
import Context from '../context/Context'
import Home1 from '../public/images/home.webp'
import Image from 'next/image'
import home1 from '../public/images/home.webp'
 
export default function Home() {
	const { invert } = useContext(Context)
	return (
		<div className={`${invert ? "invert" : ""} bg-black h-full`}>
			<div className='bg-black h-[200px] pt-28 text-white'>
				<h1 className='text-5xl font-[900] text-center'><SmokeTextAnimation/></h1>
			</div>
			
			<div className='w-full  translate-y-[100px] bg-black z-[-10]  flex justify-center mx-auto'>
				<div className="pt-32 translate-y-[] invert z-[-10] bg-transparent w-[80%]"><Image   src={home1} placeholder="blur"/></div></div>

		</div>
	)
}