import axios from 'axios'
import cookie from 'cookie'
export default async function Login(req, res) {
    axios.post('http://pradeep.pythonanywhere.com/api/v1/Login/', req.body, {
        withCredentials: true,
    }).then((response) => {
        
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', response.data.access, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                path: "/",
            }
            ),
            cookie.serialize(
                'refresh', response.data.refresh, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                path: "/"
            }
            ),
            cookie.serialize(
                'user_details', JSON.stringify({
                    "username": response.data.username,
                    "email": response.data.email,
                    "last_login_time": response.data.last_login_time,
                    "last_login_date": response.data.last_login_date
                }), {
                httpOnly: false,
                secure: true,
                sameSite: 'none',
                path: "/",
            }
            ),

        ])
        res.status(200).json({
            'access_token': response.data.access,
            'refresh_token': response.data.refresh,
            'user_details': {
                "username": response.data.username,
                "email": response.data.email,
                "last_login_time": response.data.last_login_time,
                "last_login_date": response.data.last_login_date
            }
        })
    }).catch((e) => {
        console.log('error in api', e)
        res.status(401).json({ 'error': e })
    })
}