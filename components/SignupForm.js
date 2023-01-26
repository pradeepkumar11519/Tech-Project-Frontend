import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from "./Input";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
export default function SignupForm() {
	const initialValues = {
		email: '',
		password: '',
		username: '',
		confirm_password: '',
	}
	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid Email Format!').required('Required!').min(5, 'Atleast 5 characters required!'),

		password: Yup.string().required('Required!').matches(/^(?=.{6,})/, "Must Contain 6 Characters!")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])/,
				"Must Contain One Uppercase, One Lowercase!"
			)
			.matches(
				/^(?=.*[!@#\$%\^&\*])/,
				"Must Contain One Special Case Character!"
			)
			.matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number!"),

		username: Yup.string().required('Required!').min(5, 'Atleast 5 characters required!'),

		confirm_password: Yup.string().required('Required!')
			.test('passwords-match', 'Passwords must match!', function (value) {
				return this.parent.password === value
			})
	})
	const less = useCreateUser()
	const onSubmit = (values) => {

		less.mutate(values)

	}
	return (
		<div className=" h-full left-[450px] w-full absolute flex top-[-150px] items-center !text-white">
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{
					formik => {
						return (
							<div className="z-[100]">
                                <Form id="signup" className=" absolute sm:w-[280px]   transition-all fade-in-out left-[20px] sm:left-[50px] overflow-x-hidden">
                                    <Input className='sm:w-full w-[200px] my-[5px] border-b-2  bg-transparent  outline-none py-[10px] ' type="text" id="username" name="username" placeholder='Username' />
                                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="email" id="email" name="email" placeholder='Email' />
                                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="password" name="password" placeholder='Password' />
                                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="confirm_password" name="confirm_password" placeholder='Confirm Password' />
                                    <button className='sm:w-[85%] py-[10px] px-[30px] block sm:mx-auto bg-gradient-to-r from-orange-600 rounded-full text-white to-yellow-500 my-10 ' id="submit-btn" type="submit">{(less.isLoading && !less.isError)?"Loading...":"SIGNUP"}</button>

                                </Form>
                            </div>
						)
					}
				}
			</Formik>

		</div>
	)
}


const CreateUser = (user) => {

	return axios.post('http://pradeep.pythonanywhere.com/api/v1/Signup/', user).then((response)=>{
		return response.data
	})
}


const useCreateUser = () => {
	const router = useRouter()
	return useMutation(CreateUser, {
		onSuccess: (response) => {
			router.push('/VerifyOTP')
			localStorage.setItem("email",response.email)
			toast.success('OTP has been sent to your mail')
		},
		onError: (error) => {
			const newerror = error.response.data

			if (error.message == "Network Error") {
				toast.error('Network Error Please Try After Some Time', { position: toast.POSITION.TOP_LEFT })
			}
			else if (newerror.username || newerror.error) {
				toast.error(newerror.username ? newerror.username[0] : newerror.error[0], { position: toast.POSITION.TOP_LEFT })

			}
			else {
				toast.error('Signup Unsuccesful Retry Again Later', { position: toast.POSITION.TOP_LEFT })
			}


		}
	})
}