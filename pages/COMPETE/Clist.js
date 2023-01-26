import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { QueryClient, dehydrate, useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import GridLoader from "react-spinners/GridLoader";
import { useContext, useState } from 'react'
import TableElements from '../../components/TableElements'
import Context from '../../context/Context'
export default function Clist() {
    let {nexturl,setnexturl,invert} = useContext(Context)
    const test1 = useFetchClistContest()
	const ClistContests = useQuery(['AllClistContests'], () => {
		return fetchAllClistContests(nexturl)
	}, {
		onSuccess: (data) => {
            setnexturl("https://pradeep.pythonanywhere.com/api/v1/ListAllClistAllContest/")
            nexturl = "https://pradeep.pythonanywhere.com/api/v1/ListAllClistAllContest/"
			test1.mutate(nexturl)
		},
		refetchOnWindowFocus: false,
	})
  return (
    <div className={`${invert?"invert":""}  bg-black `}>
      <TableElements AllContests={ClistContests}/>
    </div>
  )
}

const fetchAllClistContests = async (nexturl) => {
	return axios.get('https://pradeep.pythonanywhere.com/api/v1/ListClistAllContest/').then((response) => {
		return response.data
	})
}

const fetchClistContests = async (nexturl) => {
	return axios.get(nexturl)
}

const useFetchClistContest = () => {
	const { Contests, setContests, setnexturl } = useContext(Context)
	return useMutation(fetchClistContests, {
		onSuccess: (response) => {

			setContests(response.data.results)
			setnexturl(response.data.next)

		}
	})
}