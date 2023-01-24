import React from "react";
import Link from "next/link";
export default function TableStructure() {
	return (
		<div className="h-full">
			<div
				id="table-container"
				className="mx-auto text-center  border-2 border-red-500 py-32 p-[0_10%] m-[40px_auto]"
			>


				<div className="w-full border-collapse ">

					<div className="bg-[#ee2828] hidden lg:block ">
						<div className="block lg:grid grid-cols-10 text-center ">
							<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
								S.NO
							</div>
							<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
								WEBSITE NAME
							</div>
							<div className="text-[14px] font-[600]  text-white p-[12px] align-top border-2 w-full border-[#dee2e685] ">
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
						</div>
					</div>
					<div className="  ">


						<div className="block lg:flex mb-[15px] lg:text-center text-end relative ">
							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="S.NO"
							>
								1
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="WEBSITE NAME"
							>
								CodeForces
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="COMPETITION NAME"
							>
								Codeforces Round #845 (Div. 2)
							</div>

							<div
								className="text-[14px]  font-normal border-2 bg-[#3c3f44] p-[8px] border-[#dee2e685] text-[#FF1046] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] before:text-start"
								data-label="LINK"
							>
								<Link href="" target={"_blank"}>
									{"[Online]"}
								</Link>
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="START TIME"
							>
								Jan/21/2023 17:35
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="DURATION"
							>
								02:00
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="DAYS TO START"
							>
								4 days
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="DAYS TO REGISTER"
							>
								07:02:26
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="ENTRY PRICE"
							>
								2000
							</div>

							<div className="text-[14px]  font-normal text-[#f1f1f1] bg-[rgb(60,63,68)] p-[8px] border-[#dee2e685] block w-full lg:before:content-none before:content-[attr(data-label)] before:absolute  before:left-0 before:w-1/2 before:pl-[15px] before:font-[600] before:text-[14px] border-2 before:text-start"
								data-label="PRICE POOL"
							>
								50000
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
			
)}
