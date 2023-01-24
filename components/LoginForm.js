import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Cookies from 'js-cookie'
import Input from "./Input";
import { QueryClient, useMutation } from '@tanstack/react-query'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import Context from "../context/Context";
export default function LoginForm() {
    const initialValues = {
        email: "",
        password: "",
        username: ""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),

        password: Yup.string().required('Required'),

        username: Yup.string().required('Required'),


    });
    const less = useLoginUser()
    const onSubmit = (values) => {
        less.mutate(values)
    }
    return (
        <div className=" h-full w-full absolute flex top-[-150px] items-center text-white">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                {
                    formik => {
                        
                        return (
                            <div className="z-[100]">
                                <Form id="login" className=" absolute sm:w-[280px]   transition-all fade-in-out left-[20px] sm:left-[50px] overflow-x-hidden">
                                    <Input className='sm:w-full w-[200px] my-[5px] border-b-2  bg-transparent  outline-none py-[10px] ' type="text" id="username" name="username" placeholder='Username' />
                                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="email" id="email" name="email" placeholder='Email' />
                                    <Input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="password" name="password" placeholder='Password' />
                                    <button className='sm:w-[85%] py-[10px] px-[30px] block sm:mx-auto bg-gradient-to-r from-orange-600 rounded-full text-white to-yellow-500 my-10 ' id="submit-btn" type="submit">LOGIN</button>

                                </Form>
                            </div>
                        )
                    }
                }

            </Formik>
        </div>
    )
}

const LoginUser = (user) => {
    return axios.post('api/auth/Login/', user, {
        withCredentials: true,
    })
}

const useLoginUser = () => {
    const router = useRouter()
    let { setauthtoken, setuser } = useContext(Context)
    return useMutation(LoginUser, {
        onSuccess: (response) => {
            
            setuser(response.data.user_details)
            setauthtoken({ 'access_token': response.data.access_token, 'refresh_token': response.data.refresh_token })
            
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('user_details',JSON.stringify(response.data.user_details))
            router.push('/')
            toast.success('You Have Logged In Successfully!!!', { position: toast.POSITION.TOP_LEFT })
            
        },
        onError: (error) => {
            const newerror = error.response.data
            toast.error('Invalid Credentials Please Recheck', { position: toast.POSITION.TOP_LEFT })
        }
    })
}