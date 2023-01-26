import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { QueryClient, dehydrate, useQuery, useMutation } from '@tanstack/react-query'
import { BsFillCalendarDateFill, AiFillDelete } from 'react-icons/bs'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import GridLoader from "react-spinners/GridLoader";
import { useContext, useState, useEffect } from 'react'
import Context from '../context/Context'
import { toast } from 'react-toastify'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function TableElements({ AllContests }) {
	const { invert, Contests, setContests, authtoken, AllCalenderContest, user } = useContext(Context)
	let { nexturl, setnexturl } = useContext(Context)
	const [contestid, setcontestid] = useState(null)
	const [CalendarIcon, setCalenderIcon] = useState(null)
	let [count, setcount] = useState(0)
	const TestResult = useQuery(['TestResult'], () => {
		return axios.get('https://pradeep.pythonanywhere.com/api/v1/AddToCalender/', {
			headers: {
				Authorization: 'Bearer ' + authtoken.access_token
			}
		}).then((response) => {
			return response.data
		})
	})
	const fetchData = async () => {
		await axios.get(nexturl).then((response) => {

			setnexturl(response.data.next)

			setContests(Contests.concat(response.data.results))
		}).catch((e) => {

		})
	}

	if ((AllContests.isLoading || AllContests.isFetching) && !AllContests.isError) {
		return (<div className={`mx-auto text-center h-screen bg-white flex items-center justify-center  ${invert ? "" : "invert"} invert`}><GridLoader /></div>
		)
	}
	if (Contests.length === 0) {
		return (<div className={`mx-auto text-center h-screen bg-white flex items-center justify-center font-bold text-3xl  ${invert ? "" : "invert"} invert`}>NO CONTEST AVAILABLE AT THIS CURRENT MOMENT</div>)
	}

	return (
		<div>
			<div className="py-16">
				<div
					id="table-container"
					className="mx-auto text-center   p-[0_10%] m-[40px_auto]"
				>
					{!AllContests.isLoading && !AllContests.isError && (

						<>
							<div className="w-full border-collapse ">

								<div className="bg-[#ee2828] hidden lg:block ">
									<div className="block lg:grid grid-cols-11 text-center ">
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											S.NO
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											WEBSITE NAME
										</div>
										<div className="text-[14px] font-[600]   text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											COMPETITION NAME
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											LINK
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											START TIME
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											DURATION
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
											DAYS TO START
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 border-[#dee2e685] w-full">
											DAYS TO REGISTER
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 border-[#dee2e685] w-full">
											ENTRY PRICE
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 border-[#dee2e685] w-full">
											PRICE POOL
										</div>
										<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 border-[#dee2e685] w-full">
											ADD TO CALENDAR
										</div>

									</div>
								</div>



								<InfiniteScroll
									dataLength={Contests.length} //This is important field to render the next data
									next={fetchData}

									hasMore={nexturl !== null}
									loader={<div className='mx-auto text-center my-20 flex items-center justify-center invert'><GridLoader /></div>}


								>
									{Contests.map((contest) => {
										count = count + 1
										return (

											<div key={contest.id}>
												<div className={`${contest.OnGoing ? "bg-" : ""}`}>


													<div className="block lg:grid grid-cols-11 mb-[15px] lg:mb-0 lg:text-center text-end relative ">
														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="S.NO"
														>
															{count}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="WEBSITE NAME"
														>
															{contest?.Name_Of_Website}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="COMPETITION NAME"
														>
															{contest?.Name_Of_Contest}
														</div>

														<div
															className="text-[14px]  font-bold border-2 bg-[#3c3f44] p-[8px] border-[#dee2e685] text-yellow-600 block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute before:left-0 break-all before:w-1/2  before:pl-[15px] before:font-[600] before:text-[14px] before:text-start"
															data-label="LINK"
														>
															{contest?.place === "Online" ? (
																<div>
																	Online
																</div>
															) : (
																<Link target={"_blank"} href={contest?.Place}>{contest?.Place}</Link>

															)}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="START TIME"
														>
															{contest?.Start_Time}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="DURATION"
														>
															{contest?.Contest_Duration}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="DAYS TO START"
														>
															{contest?.Days_Remaining_For_The_Contest_To_Start}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="DAYS TO REGISTER"
														>
															{contest?.Days_Remaining_To_Register}

														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="ENTRY PRICE"
														>
															{contest?.Entry_Price}
														</div>

														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="PRICE POOL"
														>
															{contest?.Price_Pool}
														</div>
														<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute break-all  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
															data-label="ADD_TO_CALENDER"

														>
															<div id={contest.id} className='flex justify-end md:justify-center h-full items-center align-middle  my-auto'>
																{!(user && authtoken) ? (
<Tippy content="Login To Add To Your Calender"><button><BsFillCalendarDateFill className='cursor-pointer my-auto w-6 h-6' /></button></Tippy>

																) : (
																	<BsFillCalendarDateFill className='cursor-pointer my-auto w-6 h-6' onClick={async () => {

																		await axios.post(`https://pradeep.pythonanywhere.com/api/v1/AddToCalender/`, {
																			contest: contest.id
																		}, {
																			headers: {
																				Authorization: 'Bearer ' + authtoken.access_token
																			}
																		}).then((response) => {
																			// document.getElementById(contest.id).style.display = "none"
																			toast.success('Added To Calender')
																		}).catch((er) => {
																			if (er?.response?.data?.contest[0]) {
																				toast.error("calender with this contest already exists.")
																			}
																			else {

																				toast.error('Couldnt Add To Calender Retry After SomeTime')
																			}

																		})
																	}} />
																)}

															</div>



														</div>

													</div>


												</div>
											</div>


										)
									})}

								</InfiniteScroll>

							</div>

						</>
					)
					}
					{
						!AllContests.isLoading && AllContests.isError && (
							<div className={`${invert ? "invert" : ""} text-white font-bold  bg-black `}>{AllContests?.error?.message}</div>
						)
					}
				</div >
			</div >
		</div >


	)
}

