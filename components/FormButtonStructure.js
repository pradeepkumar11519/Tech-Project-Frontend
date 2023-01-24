import React from 'react'

export default function FormButtonStructure() {
    const LoginForm = () =>{
		document.getElementById('login').style.left = "50px"
		document.getElementById('signup').style.left = "450px"
		document.getElementById('btn').style.left = "0"
		document.getElementById('login-btn').style.color="white"
		document.getElementById('signup-btn').style.color = "white"
	}
	const SignupForm = () =>{
		document.getElementById('login').style.left = "-450px"
		document.getElementById('signup').style.left = "-400px"
		document.getElementById('btn').style.left = "110px"
		document.getElementById('login-btn').style.color="white"
		document.getElementById('signup-btn').style.color = "white"
	}
    return (
        <div>
            <div id="button-box" className='w-[160px] translate-y-[140px] z-[1000] mt-[35px] sm:w-[220px] mx-auto relative shadow-[0_0_20px_9px] shadow-orange-500 rounded-full flex'>
                <div id="btn" className='top-0 transition-all fade-in-out left-0 absolute w-[80px] sm:w-[110px] h-full rounded-full bg-gradient-to-r  from-orange-600 to-yellow-500'>

                </div>
                <button type="button" id="login-btn" className='py-[10px] px-[20px] sm:px-[30px] bg-transparent relative text-xs sm:text-[16px] text-white' onClick={LoginForm}>LOGIN</button>
                <button type="button" id="signup-btn" className='py-[10px]  px-[25px] sm:px-[30px] bg-transparent relative  text-xs sm:text-[16px] text-white' onClick={SignupForm}>SIGNUP</button>

            </div>
        </div>
    )
}