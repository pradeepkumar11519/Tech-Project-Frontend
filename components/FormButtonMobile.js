import React from 'react'

export default function FormButtonMobile() {
    const LoginFormMobile = () =>{
		document.getElementById('login').style.left = "20px"
		document.getElementById('signup').style.left = "450px"
		document.getElementById('btnmobile').style.left = "0"
		document.getElementById('login-btn-mobile').style.color="white"
		document.getElementById('signup-btn-mobile').style.color = "black"
	}
	const SignupFormMobile = () =>{
		document.getElementById('login').style.left = "-450px"
		document.getElementById('signup').style.left = "20px"
		document.getElementById('btnmobile').style.left = "80px"
		document.getElementById('login-btn-mobile').style.color="black"
		document.getElementById('signup-btn-mobile').style.color = "white"
	}
  return (
    <div>
      <div id="button-box" className='w-[160px] z-[1000] my-[35px] mx-auto relative shadow-[0_0_20px_9px] shadow-orange-500 rounded-full flex'>
                <div id="btnmobile" className='top-0 transition-all fade-in-out left-0 absolute w-[80px]  h-full rounded-full bg-gradient-to-r  from-orange-600 to-yellow-500'>

                </div>
                <button type="button" id="login-btn-mobile" className='py-[10px] px-[20px] sm:px-[30px] bg-transparent relative text-xs  text-white' onClick={LoginFormMobile}>LOGIN</button>
                <button type="button" id="signup-btn-mobile" className='py-[10px]  px-[25px] sm:px-[30px] bg-transparent relative  text-xs ' onClick={SignupFormMobile}>SIGNUP</button>

            </div>
    </div>
  )
}