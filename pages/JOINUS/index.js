import React, { useContext } from 'react'
import FormButtonMobile from '../../components/FormButtonMobile'
import FormButtonStructure from '../../components/FormButtonStructure'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'
import Context from '../../context/Context'

export default function JoinUs() {
	const {invert} = useContext(Context)

	const SignupFormMobile = () => {
		document.getElementById('login').style.left = "-450px"
		document.getElementById('signup').style.left = "50px"
		document.getElementById('btn').style.left = "80px"
		document.getElementById('login-btn').style.color = "black"
		document.getElementById('signup-btn').style.color = "white"
	}
	return (
		<div id="joinus" className={`${invert?"invert":""}   h-full bg-[url("/images/joinus1.jpg")] before:bg-black before:z-[10] before:bg-opacity-50 before:absolute before:w-full before:h-[800px]  bg-cover bg-center bg-no-repeat flex`}>

			<div id="form-box" className='w-full mx-20 sm:w-[380px] content-center top-[-50px] sm:h-[800px] h-[600px]  items-center justify-center relative  sm:m-auto z-[100]   bg-transparent p-2 overflow-hidden '>
				<div className=''>
					<div className='hidden sm:block'>
						<FormButtonStructure />
					</div>
					<div className='block sm:hidden'>
						<FormButtonMobile />
					</div>
					<LoginForm />
					<SignupForm />


				</div>
			</div>
		</div>
	)
}
