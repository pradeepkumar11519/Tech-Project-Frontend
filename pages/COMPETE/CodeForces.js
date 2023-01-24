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
export default function CodeForces() {
    let {
        nexturl,setnexturl,invert} = useContext(Context)
    const test1 = useFetchCodeForcesContest()
	const CodeForcesContests = useQuery(['AllCodeForcesContests'], () => {
		return fetchAllCodeForcesContests(nexturl)
	}, {
		onSuccess: (data) => {
            setnexturl("https://techprojectbackend.pythonanywhere.com/api/v1/ListAllCodeForcesContest/")
            nexturl = "https://techprojectbackend.pythonanywhere.com/api/v1/ListAllCodeForcesContest/"
			test1.mutate(nexturl)
		},
		refetchOnWindowFocus: false,
	})
  return (
    <div className={`${invert?"invert":""}  bg-black `}>
      <TableElements AllContests={CodeForcesContests}/>
    </div>
  )
}

const fetchAllCodeForcesContests = async (nexturl) => {
	return axios.get('https://techprojectbackend.pythonanywhere.com/api/v1/ListCodeForcesContest/').then((response) => {
		return response.data
	})
}

const fetchCodeForcesContests = async (nexturl) => {
	return axios.get(nexturl)
}

const useFetchCodeForcesContest = () => {
	const { Contests, setContests, setnexturl } = useContext(Context)
	return useMutation(fetchCodeForcesContests, {
		onSuccess: (response) => {

			setContests(response.data.results)
			setnexturl(response.data.next)

		}
	})
}