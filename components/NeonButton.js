import React from 'react'
import Link from 'next/Link'
export default function NeonButton({children}) {
  return (
    <div className='flex justify-center  '>
      <button>
        <div className=' z-[100000]'>
            <Link href="/JOINUS" className='relative inline-block px-[30px] py-[15px] text-white uppercase overflow-hidden transition-all  hover:text-[#ff022c] hover:bg-white hover:shadow-[1px_1px_15px_5px] hover:shadow-white hover:transition-all fade-in-out hover:fade-in-out group delay-500 drop-shadow-xl font-bold text-2xl'>
            {/* <a className='relative inline-block px-[30px] py-[15px] text-white uppercase font-size-[24px] overflow-hidden transition-all group'> */}
                <span className='absolute block top-0 left-[-100%] w-full h-[3px] md:h-[4px] bg-gradient-to-br from-transparent to-white group-hover:left-[100%] group-hover:transition-all group-hover:fade-in-out  group-hover:duration-500'></span>
                <span className='absolute block top-[-100%] right-0 w-[3px]  md:w-[4px] h-full  bg-gradient-to-r from-transparent to-white group-hover:top-[100%] group-hover:transition-all group-hover:fade-in-out   group-hover:duration-500 '></span>
                <span className='absolute block bottom-0 right-[-100%] w-full h-[3px] md:h-[4px] bg-gradient-to-bl from-transparent to-white group-hover:right-[100%] group-hover:transition-all group-hover:fade-in-out  group-hover:duration-500 group-hover:delay-100'></span>
                <span className='absolute block bottom-[-100%] left-0 w-[3px]  md:w-[4px] h-full  bg-gradient-to-r from-transparent to-white group-hover:bottom-[100%] group-hover:transition-all group-hover:fade-in-out   group-hover:duration-500 group-hover:delay-150'></span>
                {children}
            </Link>
        </div>
      </button>
    </div>
  )
}
