import React, { useContext } from 'react'
import Context from '../context/Context'
import NeonButton from './NeonButton'

export default function SmokeTextAnimation() {
    const {user,authtoken} = useContext(Context)
    return (
        <div id='smoke_animation' className=' text-orange-400  relative translate-y-10'>



            <h1>
                <span>W</span>ELCOME <span>TO</span> COMPIL<span>E</span>
                <div id="btn" className='bg-black an h-fit  py-5'>{(user && authtoken?<h2>THANKS FOR JOINING HANDS WITH US</h2>:<NeonButton>JOIN US</NeonButton>)}</div>
            </h1>
            
            <style jsx>
                {`
                
                
                h1{
                    position:relative;
                    margin:0;
                    color:#fff;
                    z-index:1;
                    overflow:hidden;

                }
                h1 span{
                    color:#ff022c;
                }
                h2:before{
                    content:"",
                    position:absolute;
                    left:110%;
                    width:120%;
                    height:100%;
                    background:linear-gradient(90deg,transparent 0%,#000 5%,#000 100%);
                    animations:animate 3s forwards;

                }
                @keyframes animate{
                    0%{left:-20%;}
                    100%{left:110%;}
                }
               
        `}
            </style>
        </div>
    )
}
