import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Context from '../../context/Context'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link';
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify';
export default function Calender() {
	const { authtoken, CalenderContest, setCalenderContest } = useContext(Context)
	const [value, onChange] = useState(new Date());
	const [DateValue, setDateValue] = useState({ Day: null, Month: null, Year: null })

	const [loading, setloading] = useState(false)

	const CalenderContests = useQuery(['CalenderContests'], () => {
		return fetchCalenderContests()
	}, {
		onSuccess: (data) => {
			setCalenderContest(JSON.parse(data))
		}
	}

	)

	const test1 = DeleteCalender()
	const onsubmit = (id) =>{
		test1.mutate(id)
	
		
		
	}
	
	
	
	return (
		<div className='my-32 text-center border-0 h-fit mx-auto justify-center p-20 lg:flex  w-fit '>
			<div className=' flex justify-center border-0  bg-white   h-fit'>
				<Calendar onChange={onChange} className="w-full h-full" value={value} onClickDay={async (value) => {
					setloading(true)
					
					await axios.post
						('http://techprojectbackend.pythonanywhere.com/api/v1/ListCalenderContests/', {
							day: value.toString().slice(8, 10),
							month: value.toString().slice(4, 7),
							year: value.toString().slice(11, 15)

						}, {
							headers: {
								Authorization: 'Bearer ' + authtoken.access_token
							}
						}).then((response) => {
							setCalenderContest(JSON.parse(response.data))
							
							setloading(false)
						})
				}} />
			</div>
			<div className='  bg-white mx-10 my-10 lg:my-auto '>
				<div className='border-2 shadow-2xl p-5'>
					<h1 className='font-bold text-center text-xl my-5'>YOUR CALENDER EVENTS</h1>
					{(CalenderContests.isLoading && loading && !CalenderContests.isError) ? (
						<h1 className='text-center font-medium text-lg'>Loading...</h1>
					) : (
						(!CalenderContests?.isLoading && !loading && !CalenderContests?.isError && CalenderContest?.length !== 0 && CalenderContests?.data?.length !== 0) ? (
							CalenderContest?.map((contest) => {
								return (
									<>

										<div className=' border-2 border-black rounded-md p-2  h-full m-5'>
											<h1 className='font-bold text-lg'>Name Of Contest :</h1><p className='font-bold text-red-600'>{contest.contest_name}</p>
											<h1 className='font-bold text-lg font-'>Link Of Contest :</h1><p className='text-blue-600 font-bold'><Link href={contest.contest_link} target={"_blank"}>{contest.contest_link}</Link></p>
											<button className='py-4 my-4 border-t-2 border-black w-full mx-auto flex justify-center' onClick={() => {
												
												onsubmit(contest.id)
												
												
											}}><AiFillDelete /></button>
										</div>
									</>
								)
							})

						) : (
							<>
								<h1 className='text-center font-medium text-lg'>YOU HAVE CURRENTLY NOY ADDED ANYTHING</h1>
							</>
						)
					)}



				</div>
			</div>
		</div>
	)
}


const fetchCalenderContests = async () => {
	return axios.get('http://techprojectbackend.pythonanywhere.com/api/v1/ListTodaysCalender/', {
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('access_token')
		}
	}).then((response) => {
		return response.data
	})
}

const useDeleteCalender = async (id) => {
	return axios.delete(`http://techprojectbackend.pythonanywhere.com/api/v1/Delete_Calender/${id}`, {
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('access_token')
		}
	}).then((response)=>{
		return id
	})
}

const DeleteCalender = () =>{
	const {CalenderContest,setCalenderContest} = useContext(Context)
	const queryClient = useQueryClient()
	return useMutation(useDeleteCalender,{
		onSuccess:(data)=>{
			for(var i=CalenderContest.length-1;i>=0;i--){
				if(CalenderContest[i].id==data){
					CalenderContest.splice(i,1)
					
				}
			}
			toast.success('Calender Deleted Succesfully')
			
			

		},
		onError:(context)=>{
			queryClient.setQueryData(['CalenderContests'], context.previousData)
            toast.error('Calender Couldnt Be Deleted Due To An Error')
		}
	})
}