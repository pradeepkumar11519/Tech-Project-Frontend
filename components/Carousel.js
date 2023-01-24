import React from 'react'
import { useEffect } from 'react'

export default function Carousel() {
    useEffect(() => {
        document.querySelectorAll('#carousel').forEach(carousel => {
            const items = carousel.querySelectorAll('#carousel__item')


            const buttons = carousel.querySelectorAll("#carousel__button")

            buttons.forEach((button, i) => {
                button.addEventListener('click', () => {
                    items.forEach(item => item.style.display = "none")
                    buttons.forEach(button => button.style.backgroundColor = "#D3D3D3")

                    items[i].style.display = "block"
                    button.style.backgroundColor = "white"


                })
            })
            items[0].style.display = "block"
            buttons[0].style.backgroundColor = "white"
        })

    }, [])

    return (
        <div id="carousel" className='relative border-2 border-black '>
            <div>
                <div id="carousel__item" className='h-[300px] bg-gray-600/70 p-[1em] text-[2em] text-white hidden'>
                    Content #1
                </div>


                <div id="carousel__item" className='h-[300px] bg-gray-600/70 p-[1em] text-[2em] text-white hidden'>
                    Content #2
                </div>


                <div id="carousel__item" className='h-[300px] bg-gray-600/70 p-[1em] text-[2em] text-white hidden'>
                    Content #3
                </div>
            </div>

            <div id="carousel__nav" className="w-full py-[20px] px-0 absolute bottom-0 left-0  text-center ">
                <span id="carousel__button" className='w-[10px] h-[10px] inline-block bg-gray-100/50 rounded-full mx-[5px]  transition-all fade-in-out'></span>
                <span id="carousel__button" className='w-[10px] h-[10px] inline-block bg-gray-100/50 rounded-full mx-[5px]  transition-all fade-in-out'></span>
                <span id="carousel__button" className='w-[10px] h-[10px] inline-block bg-gray-100/50 rounded-full mx-[5px] transition-all fade-in-out'></span>
            </div>
        </div>
    )
}
