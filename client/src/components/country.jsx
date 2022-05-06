import React from "react";
import { Link } from "react-router-dom";


export default function Countries (info) {
    const {name, flag, continent,id} = info;
    return(
        <div>
            <img src={flag} />
            <Link to={`/home/${id}`}>
            <h3>{name}</h3>
            </Link>
            <h3>{continent}</h3>
        </div>
    )
}