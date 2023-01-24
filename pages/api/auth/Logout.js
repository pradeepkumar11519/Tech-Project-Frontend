export default async function(req,res){
    res.setHeader('Set-Cookie', [
        'access=delete;Max-Age=0;path=/',
        'refresh=delete;Max-Age=0;path=/'
    ])
    return res.status(200).json({
        success: 'Succesfully Logged Out'
    })
}