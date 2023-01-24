import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function VerifyOTP() {
    const router = useRouter()
    const [data,setdata] = useState({"email":localStorage.getItem('email'),"otp":null})
    const onSubmit = async () =>{
        await axios.post("http://127.0.0.1:8000/api/v1/VerifyOTP/",data).then((response)=>{
            router.push("/JOINUS")
            toast.success('HEY!!! You Have Sigged In Succesfully')
        }).catch((e)=>{
            toast.error('Wrong OTP Plase Retry')
        })
    }
  return (
    <div className='my-32'>
        <div className='text-center font-bold text-3xl'>OTP HAS BEEN SENT TO YOUR EMAIL</div>
      <input onChange={(e)=>{
        setdata({...data,otp:e.target.value})
      }} className='border-2 border-black outline-none  text-center flex justify-center my-10 p-1 px-3 min-w-[600px] mx-auto'/>
      <button onClick={onSubmit}  className='mx-auto w-fit border-2 border-black flex justify-center p-2 bg-black text-white rounded-md font-medium tracking-widest hover:scale-105 focus:ring-4 focus:ring-opacity-50 focus:ring-black transition-all fade-in-out '>VERIFY</button>
    </div>
  )
}
