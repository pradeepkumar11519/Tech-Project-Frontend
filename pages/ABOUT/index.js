import React, { useContext } from 'react'
import Context from '../../context/Context'

export default function About() {
	const {invert} = useContext(Context)
	return (
		<div className={`${invert?"invert":""}  bg-black text-white`}>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-[70%] mx-auto flex flex-wrap">
						<img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-contain object-center rounded " src="/images/About1.jpeg"/>
							<div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
								<h1 className="text-gray-100 text-3xl title-font font-medium mb-1">About Us</h1>
								<div className="flex mb-4">
									<span className="flex items-center">
										<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" ststrokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"/>
									</span>
								</div>
								<p className="leading-relaxed text-lg text-white">This is a website based on the concept of web-scrapping, it scrapes useful  data from popular websites on competetive pogramming and the collection of all those data is shown on our webiste. Anyone can access these competetions from our website. Our main objective is to make it easier for user to access different competetions.
								</p>
							</div>
					</div>
				</div>
			</section>




			<section className="text-gray-600 body-font">
				<div className="container px-5 py-12 mx-auto">

					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Our Team</h1>
					</div>

					<div>
						<div>
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Web scrappring team</h1>
						</div>
						<div className="flex flex-wrap -m-2">
							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/akhilesh.jpeg"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Akhilesh panchangam</h2>
											<p className="text-gray-500">Team Lead</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Darshil Patel</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Manas</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>
							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Shivam Sundaram</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Ayush</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="text-gray-600 body-font">
				<div className="container px-5 py-12 mx-auto">
					<div>
						<div>
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Debugging team</h1>
						</div>
						<div className="flex flex-wrap -m-2">
							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Garima Upadhyay</h2>
											<p className="text-gray-500">Team Lead</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/suhana.jpeg"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Suhana Shaik</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88/"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium"></h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >


			<section className="text-gray-600 body-font">
				<div className="container px-5 py-12 mx-auto">
					<div>
						<div>
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Web developing team</h1>
						</div>
						<div className="flex flex-wrap -m-2">
							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/pradeep.jpeg"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Pradeep Kumar Rebbavarapu</h2>
											<p className="text-gray-500">Team Lead</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/trishant.jpeg"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Trishant Kumar Talluri</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">P C Uma Mahesh</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Vashishta Narayan</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Chiranjivi Keshav</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Aditya Kshitiz</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Rithvik</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Samyak</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Niketh</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Aviral Sharma</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>

							<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
										<div className="flex-grow">
											<h2 className="text-gray-100 title-font font-medium">Srujan</h2>
											<p className="text-gray-500">Member</p>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</div>
	)
}
