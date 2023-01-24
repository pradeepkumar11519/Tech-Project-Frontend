import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { QueryClient, dehydrate, useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import GridLoader from "react-spinners/GridLoader";
import { useContext, useState } from 'react'
import Context from '../../context/Context'
import TableElements from '../../components/TableElements'
import TableStructure from '../../components/TableStructure'
import { useEffect } from 'react'



export default function Compete() {

	let { nexturl, setnexturl,invert,Contests,setContests,count,setcount,AllCalenderContest } = useContext(Context)
	const [filterdata,setfilterdata] = useState({mode:"ALL",type:"ALL"})
	const [CalendarIcon,setCalenderIcon] = useState(null)
	const AllContests = useQuery(['AllContests'], () => {
		return fetchAllContests(nexturl)
	}, {
		onSuccess: (data) => {
			setContests(data.results)
			setnexturl(data.next)
		},
		refetchOnWindowFocus: false,
	})

	
	
	

	return (
		<div className={`${invert?"invert":""}  bg-black py-32`}>
			<h1>ALL COMPETITIONS</h1>
			<div className='flex justify-center text-center'>
				<div id="filter1" className='flex flex-col justify-center mx-20'>
					<label for="Competition_Mode" className='text-white font-bold text-2xl' >APPLY FILTER</label>
					<select name="Competition_Mode" id="Competition_Mode" className='px-2 py-1 my-5 outline-none font-bold rounded-md'  onChange={(e)=>{
						
						if(e.target.value!=="ALL"){
							
								
								setnexturl(`https://techprojectbackend.pythonanywhere.com/api/v1/ListAllContest/?search=` + e.target.value)
								nexturl = `https://techprojectbackend.pythonanywhere.com/api/v1/ListAllContest/?search=` + e.target.value
							
							
						}
						else{
							
							setnexturl(`https://techprojectbackend.pythonanywhere.com/api/v1/ListAllContest/`)
							nexturl = `https://techprojectbackend.pythonanywhere.com/api/v1/ListAllContest/`
							
						}
						
						AllContests.refetch()
					}}>
						<option className='font-bold'>ALL</option>
						<option className='font-bold'>ONLINE</option>
						<option className='font-bold'>OFFLINE</option>
						<option className='font-bold'>CONTEST</option>
						<option className='font-bold'>HACKATHONS</option>
					</select>
				</div>
		</div>
			<TableElements AllContests={AllContests}/>
			
		</div>
	)
}



const fetchAllContests = async (nexturl) => {
	return axios.get(nexturl).then((response) => {
		return response.data
	})
}


