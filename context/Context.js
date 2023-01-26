import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import axios from "axios"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const Context = createContext()

export default Context

export const ContextProvider = ({ children }) => {
    const router = useRouter()
    const [user, setuser] = useState(Cookies.get('user_details') ? JSON.parse(Cookies.get('user_details')) : null)
    const [authtoken, setauthtoken] = useState(typeof window !== 'undefined' && localStorage.getItem('access_token') || typeof window !== 'undefined' && localStorage.getItem('refresh_token') ? { 'access_token': typeof window !== 'undefined' && localStorage.getItem('access_token'), 'refresh_token': typeof window !== 'undefined' && localStorage.getItem('refresh_token') } : null)
    const [count,setcount] = useState(0)
    const [invert, setinvert] = useState(false)
    const [Contests, setContests] = useState([])
    const [CalenderContest,setCalenderContest] = useState(null)
    const [AllCalenderContest,setAllCalenderContest] = useState([])
    let [nexturl, setnexturl] = useState('http://pradeep.pythonanywhere.com/api/v1/ListAllContest/')
    const openoffcanvas = () => {

        document.getElementById('offcanvas').classList.toggle('smenu1')
    }
    
    const Logout = () => {
        setuser(null)
        Cookies.remove('user_details')
        Cookies.remove('access')
        Cookies.remove('refreh')
        localStorage.clear()

        axios.get('/api/auth/Logout').then((response) => {
            router.push('/JOINUS')
            toast('Logged Out Succesfully', { position: toast.POSITION.TOP_LEFT })
        })
    }
    useEffect(()=>{
        if(router.pathname!=="/COMPETE"){
            setnexturl('http://pradeep.pythonanywhere.com/api/v1/ListAllContest/')
        }
        
    },[router.pathname])
    const ContextData = {
        openoffcanvas: openoffcanvas,
        authtoken: authtoken,
        setauthtoken: setauthtoken,
        user: user,
        setuser: setuser,
        invert: invert,
        setinvert: setinvert,
        Contests: Contests,
        setContests: setContests,
        nexturl: nexturl,
        setnexturl: setnexturl,
        Logout:Logout,
        count:count,
        setcount:setcount,
        CalenderContest:CalenderContest,
        setCalenderContest:setCalenderContest,
        AllCalenderContest:AllCalenderContest,
        setAllCalenderContest:setAllCalenderContest
    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )

}