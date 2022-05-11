import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

export default function LandingPage(){
    return(
        <div className="text">
           <h1>Welcome!</h1>
                <Link to={'/home'} className='btn'>
                    <button>Start</button>
                </Link>
        </div>
    )
}