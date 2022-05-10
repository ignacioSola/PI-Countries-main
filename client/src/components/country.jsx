import React from "react";
import { Link } from "react-router-dom";
import './countryCard.css'


export default function Countries (info) {
    const {name, flag, continent,id} = info;
    return(
        <div className="card" >
            <img src={flag} className='flag' />
            <Link to={`/home/${id}`} className='nameCard'>
            <h3>{name}</h3>
            </Link>
            <h3>{continent}</h3>
        </div>
    )
}