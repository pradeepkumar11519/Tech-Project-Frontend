import '../styles/globals.css'
import React from 'react'
import { ContextProvider } from '../context/Context'
import { QueryClientProvider, Hydrate, QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import LoadingBar from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar'
export default function App({ Component, pageProps }) {
	const queryClient = React.useRef(new QueryClient())
	const router = useRouter()
	const [Progress, setProgress] = React.useState(0)

	React.useEffect(() => {

		router.events.on('routeChangeStart', () => {
			setProgress(40)
			
		})
		router.events.on('routeChangeComplete', () => {
			setProgress(100)

		})

	}, [])
	return (
		<>

			<QueryClientProvider client={queryClient.current}>
				<Hydrate state={pageProps.dehydratedState}>
					<ContextProvider>
						<Navbar/>
						<div className=' z-[1000]'>
						<ToastContainer/>
						</div>
						<div className='pt-12 h-full '>
						
						<Component {...pageProps} />
						</div>
					</ContextProvider>
				</Hydrate>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider >
		</>
	)
}
